'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function Wall3D({ data, onLayerSelect, selectedLayer }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const layerObjectsRef = useRef([]);
  const [isExploded, setIsExploded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mountRef.current || !data) return;

    const container = mountRef.current;
    
    // 创建场景
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF5F5F4);
    sceneRef.current = scene;

    // 创建相机
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(3, 2, 5);
    cameraRef.current = camera;

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 创建控制器
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.minDistance = 3;
    controls.maxDistance = 15;
    controlsRef.current = controls;

    // 添加光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // 创建墙体层次
    let currentZ = data.initialZ;
    const layerObjects = [];
    
    data.layers.forEach(layer => {
      const geometry = new THREE.BoxGeometry(4, 3, layer.thickness);
      const material = new THREE.MeshLambertMaterial({ color: layer.color });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.z = currentZ + layer.thickness / 2;
      mesh.userData = { 
        id: layer.id, 
        name: layer.name, 
        info: layer.info, 
        originalColor: new THREE.Color(layer.color) 
      };
      scene.add(mesh);
      layerObjects.push(mesh);
      currentZ += layer.thickness;
    });
    
    layerObjectsRef.current = layerObjects;

    // 添加点击事件
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleClick = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(layerObjects);

      if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;
        onLayerSelect(intersectedObject.userData.id);
      }
    };

    renderer.domElement.addEventListener('click', handleClick);

    // 动画循环
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    setIsLoading(false);

    // 清理函数
    return () => {
      renderer.domElement.removeEventListener('click', handleClick);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [data, onLayerSelect]);

  // 处理窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const container = mountRef.current;
      cameraRef.current.aspect = container.clientWidth / container.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 处理爆炸动画
  const toggleExplosion = (explode) => {
    setIsExploded(explode);
    let currentZ = data.initialZ;
    
    layerObjectsRef.current.forEach((mesh, index) => {
      const layer = data.layers[index];
      
      let accumulatedThickness = 0;
      for(let i = 0; i < index; i++) {
        accumulatedThickness += data.layers[i].thickness;
      }
      const resetZ = data.initialZ + accumulatedThickness + layer.thickness / 2;
      const finalZ = explode ? currentZ + layer.thickness / 2 + index * data.explodedZGap : resetZ;

      const startPos = { z: mesh.position.z };
      const endPos = { z: finalZ };
      let duration = 500;
      let startTime = null;

      const animateStep = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        mesh.position.z = startPos.z + (endPos.z - startPos.z) * progress;
        if (progress < 1) {
          requestAnimationFrame(animateStep);
        }
      };
      requestAnimationFrame(animateStep);

      currentZ += layer.thickness;
    });
  };

  // 处理选中高亮
  useEffect(() => {
    layerObjectsRef.current.forEach(mesh => {
      if (mesh.userData.id === selectedLayer) {
        mesh.material.color.set(0x14B8A6);
      } else {
        mesh.material.color.set(mesh.userData.originalColor);
      }
    });
  }, [selectedLayer]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="relative w-full h-[400px] md:h-[500px] bg-stone-200 rounded-lg">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-stone-200/50 rounded-lg">
            <p className="text-stone-600">3D模型加载中...</p>
          </div>
        )}
        <div ref={mountRef} className="w-full h-full" />
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <button 
          onClick={() => toggleExplosion(true)}
          className="bg-teal-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-teal-700 transition"
        >
          分解构造
        </button>
        <button 
          onClick={() => toggleExplosion(false)}
          className="bg-stone-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-stone-600 transition"
        >
          复位构造
        </button>
      </div>
    </div>
  );
} 