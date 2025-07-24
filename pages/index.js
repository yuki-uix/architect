import Head from 'next/head';
import Navigation from '../components/Navigation';
import ModuleCard from '../components/ModuleCard';
import { modules } from '../data/constructionData';

export default function Home() {
  return (
    <>
      <Head>
        <title>建筑构造交互式学习平台</title>
        <meta name="description" content="一个将复杂建筑构造转化为直观、可交互3D模型的学习工具" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="container mx-auto p-4 md:p-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            建筑构造交互式学习平台
          </h1>
          <p className="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
            一个将复杂建筑构造转化为直观、可交互3D模型的学习工具。选择一个模块开始您的探索之旅。
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </main>
    </>
  );
} 