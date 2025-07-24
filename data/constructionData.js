// 建筑构造数据
export const roofData = {
  title: "屋顶构造：保温与防水",
  description: "本节将深入探讨典型的平屋面构造层次。您可以通过下方的3D模型进行交互,直观地理解各构造层的功能与空间关系。点击\"分解构造\"按钮查看爆炸图，点击右侧列表中的图层可高亮显示并查看详细信息。",
  layers: [
    { 
      id: 'layer-5', 
      name: '混凝土保护层', 
      color: 0xCACACA, 
      height: 0.1, 
      info: '通常为细石混凝土，用于保护下方的防水层免受物理损伤和紫外线老化，并提供一定的配重。' 
    },
    { 
      id: 'layer-4', 
      name: '防水层', 
      color: 0x4A4A4A, 
      height: 0.05, 
      info: '屋顶防水的关键层次，通常采用改性沥青卷材或高分子防水卷材，通过热熔或自粘方式铺设，要求搭接严密，无渗漏。' 
    },
    { 
      id: 'layer-3', 
      name: '保温层', 
      color: 0xFFA500, 
      height: 0.4, 
      info: '用于阻断热量传递，是建筑节能的核心。常用材料有挤塑聚苯板(XPS)、岩棉板等，具有低导热系数的特点。' 
    },
    { 
      id: 'layer-2', 
      name: '隔汽层', 
      color: 0xADD8E6, 
      height: 0.05, 
      info: '设置在保温层下方，防止室内带有水蒸气的热空气进入保温层，遇冷凝结成水，从而破坏保温效果和结构。' 
    },
    { 
      id: 'layer-1', 
      name: '结构层', 
      color: 0x8B4513, 
      height: 0.5, 
      info: '屋顶的承重部分，通常为钢筋混凝土现浇板，为上部所有构造层次提供稳定支撑。' 
    }
  ],
  initialY: 0,
  explodedYGap: 0.3
};

export const wallData = {
  title: "墙体构造：保温与防潮",
  description: "本节将深入探讨典型的外墙构造层次,以保温墙体为例。您可以通过下方的3D模型进行交互,直观地理解各构造层的功能与空间关系。点击\"分解构造\"按钮查看爆炸图,点击右侧列表中的图层可高亮显示并查看详细信息。",
  layers: [
    { 
      id: 'wall-layer-5', 
      name: '内饰面层', 
      color: 0xF0F0F0, 
      thickness: 0.05, 
      info: '墙体最内侧的装饰层，如乳胶漆、壁纸或瓷砖，提供室内美观和保护。' 
    },
    { 
      id: 'wall-layer-4', 
      name: '抹灰层', 
      color: 0xD3D3D3, 
      thickness: 0.08, 
      info: '用于找平墙面，为内饰面层提供平整基层，并具有一定的保护作用。' 
    },
    { 
      id: 'wall-layer-3', 
      name: '结构墙体', 
      color: 0x8B4513, 
      thickness: 0.4, 
      info: '墙体的主要承重部分，通常为砖墙、混凝土墙或砌块墙，承受建筑物的荷载。' 
    },
    { 
      id: 'wall-layer-2', 
      name: '保温层', 
      color: 0xFFA500, 
      thickness: 0.2, 
      info: '设置在结构墙体外侧，用于阻断热量传递，提高墙体的保温性能，减少能耗。常用材料有外墙保温板。' 
    },
    { 
      id: 'wall-layer-1', 
      name: '外饰面层', 
      color: 0xADD8E6, 
      thickness: 0.05, 
      info: '墙体最外侧的保护和装饰层，如涂料、瓷砖或石材，抵抗风雨侵蚀，并提供建筑外观。' 
    }
  ],
  initialZ: 0,
  explodedZGap: 0.3
};

export const foundationData = {
  title: "基础构造：独立基础",
  description: "本节将深入探讨典型的独立柱下基础构造。您可以通过下方的3D模型进行交互,直观地理解各组成部分的功能与空间关系。点击\"分解构造\"按钮查看爆炸图,点击右侧列表中的构件可高亮显示并查看详细信息。",
  components: [
    { 
      id: 'foundation-comp-4', 
      name: '柱', 
      color: 0x808080, 
      width: 0.8, 
      depth: 0.8, 
      height: 2.0, 
      info: '上部结构荷载的汇集点，将荷载传递给基础。' 
    },
    { 
      id: 'foundation-comp-3', 
      name: '承台', 
      color: 0x696969, 
      width: 2.5, 
      depth: 2.5, 
      height: 0.8, 
      info: '独立基础的主要部分，将柱传来的集中荷载扩散并传递给垫层和地基。' 
    },
    { 
      id: 'foundation-comp-2', 
      name: '垫层', 
      color: 0xD2B48C, 
      width: 2.6, 
      depth: 2.6, 
      height: 0.1, 
      info: '位于承台下方，用于找平基础底面，防止混凝土与地基土直接接触，并作为施工操作面。' 
    },
    { 
      id: 'foundation-comp-1', 
      name: '地基土', 
      color: 0xA0522D, 
      width: 5.0, 
      depth: 5.0, 
      height: 0.5, 
      info: '直接承受基础荷载的土层，其承载力决定了基础的尺寸和形式。' 
    }
  ],
  initialY: 0,
  explodedYGap: 0.5
};

export const modules = [
  {
    id: 'roof',
    title: '屋顶构造',
    description: '探索平屋面与坡屋面的防水、保温、隔热处理。通过交互式分解，理解多层构造的奥秘。',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    id: 'wall',
    title: '墙体构造',
    description: '学习承重墙与非承重墙的类型、材料、防潮及节能构造。通过交互式分解，理解墙体层次。',
    icon: 'M4 6h16M4 12h16M4 18h16'
  },
  {
    id: 'foundation',
    title: '基础构造',
    description: '了解地基与基础的关系，探索条形基础、独立基础和桩基础的构造原理与施工。通过交互式分解，理解基础构成。',
    icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7'
  }
]; 