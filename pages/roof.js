import { useState } from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Roof3D from '../components/Roof3D';
import InfoPanel from '../components/InfoPanel';
import { roofData } from '../data/constructionData';

export default function Roof() {
  const [selectedLayer, setSelectedLayer] = useState(null);

  const handleLayerSelect = (layerId) => {
    setSelectedLayer(layerId);
  };

  return (
    <>
      <Head>
        <title>屋顶构造 - 建筑构造交互式学习平台</title>
        <meta name="description" content="探索平屋面与坡屋面的防水、保温、隔热处理" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="container mx-auto p-4 md:p-8">
        <div className="text-left mb-8">
          <h2 className="text-3xl font-bold text-stone-800 mb-2">{roofData.title}</h2>
          <p className="mt-2 text-md text-stone-600 max-w-4xl">
            {roofData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Roof3D 
              data={roofData} 
              onLayerSelect={handleLayerSelect}
              selectedLayer={selectedLayer}
            />
          </div>

          <div>
            <InfoPanel
              title="构造层次"
              items={roofData.layers}
              selectedItem={selectedLayer}
              onItemSelect={handleLayerSelect}
            />
          </div>
        </div>
      </main>
    </>
  );
} 