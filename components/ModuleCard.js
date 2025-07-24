import Link from 'next/link';

export default function ModuleCard({ module }) {
  return (
    <Link href={`/${module.id}`}>
      <div className="module-card bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
        <div className="text-teal-600 mb-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-12 w-12" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="1.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={module.icon} />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-stone-800 mb-2">{module.title}</h3>
        <p className="text-stone-600">{module.description}</p>
      </div>
    </Link>
  );
} 