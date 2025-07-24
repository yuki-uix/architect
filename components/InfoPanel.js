'use client';

import { useState } from 'react';

export default function InfoPanel({ 
  title, 
  items, 
  selectedItem, 
  onItemSelect, 
  detailsContent 
}) {
  const [selectedDetails, setSelectedDetails] = useState(null);

  const handleItemClick = (itemId) => {
    onItemSelect(itemId);
    const item = items.find(item => item.id === itemId);
    setSelectedDetails(item);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-stone-800 mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li 
            key={item.id}
            className={`info-panel-item p-3 rounded-lg cursor-pointer transition flex items-center space-x-3 ${
              selectedItem === item.id ? 'bg-teal-50 border border-teal-200' : 'hover:bg-stone-50'
            }`}
            onClick={() => handleItemClick(item.id)}
          >
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: `#${item.color.toString(16).padStart(6, '0')}` }}
            />
            <span className="text-stone-700">{item.name}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 p-4 bg-stone-50 rounded-lg border border-stone-200 min-h-[150px]">
        {selectedDetails ? (
          <div>
            <h4 className="font-semibold text-teal-800 mb-2">{selectedDetails.name}</h4>
            <p className="text-stone-700 text-sm">{selectedDetails.info}</p>
          </div>
        ) : (
          <p className="text-stone-500">点击上方列表查看详细信息。</p>
        )}
      </div>
    </div>
  );
} 