import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuItems = [
    { label: '首页', href: '#' },
    { label: '公司介绍', href: '#about' },
    { label: '产品中心', href: '#products' },
    { label: '公司历程', href: '#timeline' },
    { label: '公司实力', href: '#strength' },
    { label: '联系我们', href: '#contact' },
  ];
  
  return (
    <header className="sticky top-0 z-50 bg-blue-900 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/logo图_20260312154521.png" 
                alt="美蓓亚斯科技" 
                className="h-10"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                     className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                   >
                     {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-200 focus:outline-none"
            >
              <i className={`fa-solid text-xl ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
         className={cn(
           "md:hidden bg-blue-800 border-t border-blue-700 shadow-lg",
           isMenuOpen ? "block" : "hidden"
         )}
      >
        <div className="px-4 py-3 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
               className="block px-3 py-2 text-white hover:bg-blue-700 hover:text-white rounded-md transition-colors duration-200"
               onClick={() => setIsMenuOpen(false)}
             >
               {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;