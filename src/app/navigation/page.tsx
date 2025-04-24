'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function NavigationPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('map');
  const [showDirections, setShowDirections] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
  const mapRef = useRef(null);
  const pulseDotRef = useRef(null);
  
  useEffect(() => {
    // 模拟加载地图数据
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // 模拟导航路线
  const directions = [
    { 
      instruction: "Exit Xi'an North Station and head east", 
      distance: "200m", 
      time: "3 min",
      icon: "turn-right"
    },
    { 
      instruction: "Cross the pedestrian bridge", 
      distance: "150m", 
      time: "2 min",
      icon: "straight"
    },
    { 
      instruction: "Turn left at Huancheng North Road", 
      distance: "400m", 
      time: "5 min",
      icon: "turn-left"
    },
    { 
      instruction: "Continue straight past Lianhu Park", 
      distance: "1.2km", 
      time: "15 min",
      icon: "straight"
    },
    { 
      instruction: "Turn right at Bell Tower", 
      distance: "300m", 
      time: "4 min",
      icon: "turn-right"
    },
    { 
      instruction: "Destination: Muslim Quarter", 
      distance: "0m", 
      time: "0 min",
      icon: "destination"
    }
  ];
  
  // 模拟搜索位置的候选项
  const searchResults = [
    "Terracotta Army Museum, Xi'an",
    "Xi'an City Wall",
    "Muslim Quarter, Xi'an",
    "Giant Wild Goose Pagoda",
    "Bell Tower, Xi'an"
  ];
  
  const startNavigation = () => {
    setShowDirections(true);
    setCurrentStep(0);
  };
  
  const nextStep = () => {
    if (currentStep < directions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const renderDirectionIcon = (icon: string) => {
    switch(icon) {
      case 'turn-right':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18L14 13L9 8"></path>
          </svg>
        );
      case 'turn-left':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18L10 13L15 8"></path>
          </svg>
        );
      case 'straight':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5"></path>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        );
      case 'destination':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 8L12 16"></path>
            <path d="M8 12L16 12"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <main>
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Image 
              src="/lantern.svg" 
              alt="Chinese Lantern Icon" 
              width={48} 
              height={48} 
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Navigation & Maps</h1>
          </div>
          
          <div className="relative min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900">
            {/* 顶部搜索栏 */}
            <div className="absolute top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-10 transition-transform duration-300 ease-in-out">
              <div className="container mx-auto px-4 py-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search destinations, attractions, addresses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  
                  {searchQuery && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-20 border border-gray-200 dark:border-gray-700 animate-fadeIn">
                      <ul className="py-2">
                        {searchResults.map((result, index) => (
                          <li 
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                            onClick={() => {
                              setSearchQuery(result);
                              setTimeout(startNavigation, 500);
                            }}
                          >
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* 标签切换 */}
            <div className="absolute top-20 left-0 right-0 bg-white dark:bg-gray-800 z-10 border-b border-gray-200 dark:border-gray-700">
              <div className="container mx-auto px-4">
                <div className="flex">
                  <button 
                    className={`py-3 px-6 transition-colors ${activeTab === 'map' ? 'text-primary border-b-2 border-primary' : 'text-gray-600 dark:text-gray-300'}`}
                    onClick={() => setActiveTab('map')}
                  >
                    Map
                  </button>
                  <button 
                    className={`py-3 px-6 transition-colors ${activeTab === 'transit' ? 'text-primary border-b-2 border-primary' : 'text-gray-600 dark:text-gray-300'}`}
                    onClick={() => setActiveTab('transit')}
                  >
                    Transit
                  </button>
                  <button 
                    className={`py-3 px-6 transition-colors ${activeTab === 'saved' ? 'text-primary border-b-2 border-primary' : 'text-gray-600 dark:text-gray-300'}`}
                    onClick={() => setActiveTab('saved')}
                  >
                    Saved
                  </button>
                </div>
              </div>
            </div>
            
            {/* 地图区域 */}
            <div className="pt-36 pb-20 md:pt-40 md:pb-0">
              <div 
                ref={mapRef}
                className={`relative overflow-hidden transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} md:h-[calc(100vh-180px)] h-[50vh] bg-blue-50 dark:bg-gray-800`}
              >
                {isLoading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  <div className="relative h-full w-full">
                    {/* 这里放地图背景图 */}
                    <div className="absolute inset-0 bg-blue-50 flex items-center justify-center">
                      <div className="w-full h-full relative">
                        <Image
                          src="/images/xian-map.jpg"
                          alt="Xi'an Map"
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                    
                    {/* 脉冲点动画 */}
                    {!showDirections && (
                      <div 
                        ref={pulseDotRef}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      >
                        <div className="w-6 h-6 bg-primary rounded-full animate-ping opacity-75"></div>
                        <div className="w-6 h-6 bg-primary rounded-full absolute inset-0"></div>
                      </div>
                    )}
                    
                    {/* 导航路线 */}
                    {showDirections && (
                      <div className="absolute inset-0">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <path 
                            d="M30,80 Q40,75 45,60 T60,40 T75,20" 
                            stroke="#3b82f6" 
                            strokeWidth="0.5" 
                            fill="none" 
                            strokeDasharray="1,1"
                            className="animate-drawPath"
                          />
                        </svg>
                        <div className="absolute top-[20%] left-[75%] w-6 h-6 bg-red-500 rounded-full animate-bounce shadow-lg"></div>
                        <div className="absolute top-[80%] left-[30%] w-6 h-6 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                      </div>
                    )}
                    
                    {/* 指南针 */}
                    <div className="absolute top-5 right-5 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg animate-fadeIn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                      </svg>
                    </div>
                    
                    {/* 缩放控制 */}
                    <div className="absolute bottom-5 right-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col animate-fadeIn">
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-t border-gray-200 dark:border-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* 底部导航指示卡片 */}
            {showDirections && (
              <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-t-xl z-30 transition-transform duration-500 animate-slideUp">
                <div className="container mx-auto p-4">
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                  </div>
                  
                  <div className="mb-4 flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Navigation</h3>
                    <button 
                      onClick={() => setShowDirections(false)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4 transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-3">
                        {renderDirectionIcon(directions[currentStep].icon)}
                      </div>
                      <div>
                        <p className="font-semibold text-lg">{directions[currentStep].instruction}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{directions[currentStep].distance} - {directions[currentStep].time}</p>
                      </div>
                    </div>
                    
                    {/* 进度条 */}
                    <div className="relative h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden mt-4">
                      <div 
                        className="absolute top-0 left-0 h-full bg-primary transition-all duration-500 ease-out"
                        style={{ width: `${(currentStep / (directions.length - 1)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between mb-6">
                    <button 
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      className={`p-3 rounded-lg transition-colors ${currentStep === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    
                    <span className="px-4 py-2">
                      Step {currentStep + 1} of {directions.length}
                    </span>
                    
                    <button 
                      onClick={nextStep}
                      disabled={currentStep === directions.length - 1}
                      className={`p-3 rounded-lg transition-colors ${currentStep === directions.length - 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 mb-2">
                    <button className="p-3 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 12h8"></path>
                        <path d="M12 8v8"></path>
                      </svg>
                      <span className="text-xs mt-1">Add Stop</span>
                    </button>
                    
                    <button className="p-3 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span className="text-xs mt-1">Arrived</span>
                    </button>
                    
                    <button className="p-3 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="M14 9l-2 2-2-2"></path>
                        <path d="M12 11v5"></path>
                      </svg>
                      <span className="text-xs mt-1">Share</span>
                    </button>
                    
                    <button className="p-3 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="2"></circle>
                        <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
                      </svg>
                      <span className="text-xs mt-1">Live View</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* 底部操作按钮 */}
            {!showDirections && !isLoading && searchQuery === '' && (
              <div className="fixed bottom-5 left-0 right-0 flex justify-center z-20 animate-fadeIn">
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-full px-6 py-3">
                  <button 
                    onClick={() => setSearchQuery("Current Location")}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Start Navigation
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
      
      <style jsx>{`
        @keyframes drawPath {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        .animate-drawPath {
          animation: drawPath 3s ease-in-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-in-out forwards;
        }
      `}</style>
    </main>
  );
} 