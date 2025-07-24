import { useState } from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Wall3D from '../components/Wall3D';
import InfoPanel from '../components/InfoPanel';
import { wallData } from '../data/constructionData';

export default function Wall() {
  const [selectedLayer, setSelectedLayer] = useState(null);

  const handleLayerSelect = (layerId) => {
    setSelectedLayer(layerId);
  };

  return (
    <>
      <Head>
        <title>墙体构造 - 建筑构造交互式学习平台</title>
        <meta name="description" content="学习承重墙与非承重墙的类型、材料、防潮及节能构造" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="container mx-auto p-4 md:p-8">
        <div className="text-left mb-8">
          <h2 className="text-3xl font-bold text-stone-800 mb-2">{wallData.title}</h2>
          <p className="mt-2 text-md text-stone-600 max-w-4xl">
            {wallData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Wall3D 
              data={wallData} 
              onLayerSelect={handleLayerSelect}
              selectedLayer={selectedLayer}
            />
          </div>

          <div>
            <InfoPanel
              title="构造层次"
              items={wallData.layers}
              selectedItem={selectedLayer}
              onItemSelect={handleLayerSelect}
            />
          </div>
        </div>
      </main>
    </>
  );
} 