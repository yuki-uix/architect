'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { href: '/', label: '构件中心', section: 'hub' },
    { href: '/roof', label: '屋顶构造', section: 'roof' },
    { href: '/wall', label: '墙体构造', section: 'wall' },
    { href: '/foundation', label: '基础构造', section: 'foundation' }
  ];

  const isActive = (href) => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname === href;
  };

  return (
    <header className="bg-stone-100/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold text-teal-700">
              建构<span className="text-stone-700">交互</span>
            </Link>
          </div>
          
          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-stone-600 font-medium border-b-2 border-transparent pb-1 transition-colors ${
                  isActive(item.href) 
                    ? 'text-teal-600 border-teal-600' 
                    : 'hover:text-teal-600 hover:border-teal-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 text-stone-600 transition-colors ${
                  isActive(item.href) ? 'text-teal-600' : 'hover:text-teal-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
} 