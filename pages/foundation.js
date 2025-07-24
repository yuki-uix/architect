import { useState } from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Foundation3D from '../components/Foundation3D';
import InfoPanel from '../components/InfoPanel';
import { foundationData } from '../data/constructionData';

export default function Foundation() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentSelect = (componentId) => {
    setSelectedComponent(componentId);
  };

  return (
    <>
      <Head>
        <title>基础构造 - 建筑构造交互式学习平台</title>
        <meta name="description" content="了解地基与基础的关系，探索条形基础、独立基础和桩基础的构造原理与施工" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="container mx-auto p-4 md:p-8">
        <div className="text-left mb-8">
          <h2 className="text-3xl font-bold text-stone-800 mb-2">{foundationData.title}</h2>
          <p className="mt-2 text-md text-stone-600 max-w-4xl">
            {foundationData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Foundation3D 
              data={foundationData} 
              onComponentSelect={handleComponentSelect}
              selectedComponent={selectedComponent}
            />
          </div>

          <div>
            <InfoPanel
              title="构件组成"
              items={foundationData.components}
              selectedItem={selectedComponent}
              onItemSelect={handleComponentSelect}
            />
          </div>
        </div>
      </main>
    </>
  );
} 