'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function WebScannerPage() {
  return (
    <main>
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Image 
              src="/lantern.svg" 
              alt="Chinese Lantern Icon" 
              width={48} 
              height={48} 
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Web Scanner</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl mb-8">
              Use your device&apos;s camera to scan Chinese menu items and get instant translations and dish information.
            </p>
            
            <div className="bg-muted p-8 rounded-lg my-8 text-center">
              <div className="relative w-full h-64 mb-6 border-2 border-dashed border-border rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-foreground/40">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  <p className="text-foreground/60">Camera preview will appear here</p>
                </div>
              </div>
              
              <div className="flex justify-center gap-4">
                <button className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Start Camera
                </button>
                <button className="inline-flex items-center justify-center bg-transparent border border-border hover:border-primary text-foreground hover:text-primary px-6 py-3 rounded-md font-medium transition-colors">
                  Upload Image
                </button>
              </div>
              
              <p className="text-sm text-foreground/60 mt-4">
                You&apos;ll need to grant camera permissions when prompted
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">How to Use the Web Scanner</h2>
            <ol className="list-decimal pl-5 my-4 space-y-3">
              <li>Click &quot;Start Camera&quot; to activate your device&apos;s camera</li>
              <li>Point the camera at a Chinese menu item or dish</li>
              <li>Hold steady for a moment while our AI analyzes the image</li>
              <li>View the translation, dish information, and ingredients</li>
              <li>Use the provided pronunciations to order confidently</li>
            </ol>
            
            <div className="bg-muted p-6 rounded-lg my-8">
              <h3 className="text-xl font-medium mb-3">Alternatively</h3>
              <p>
                If you prefer not to use your camera, you can upload an image of a menu or dish 
                by clicking the &quot;Upload Image&quot; button.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">Results Example</h2>
            <div className="card p-6 my-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <Image 
                      src="/assets/images/mapo-tofu.jpg" 
                      alt="Mapo Tofu" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-foreground/60 italic">Sample image of a menu item</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">麻婆豆腐 (Má pó dòu fu)</h3>
                  <p className="font-bold">Mapo Tofu</p>
                  <p className="mt-2 text-foreground/80">
                    A popular Sichuan dish consisting of tofu set in a spicy, oily sauce with minced pork or beef.
                  </p>
                  
                  <div className="mt-4">
                    <h4 className="font-medium">Common Ingredients:</h4>
                    <ul className="list-disc pl-5 mt-1 text-sm">
                      <li>Tofu</li>
                      <li>Minced pork/beef</li>
                      <li>Doubanjiang (fermented bean paste)</li>
                      <li>Sichuan peppercorns</li>
                      <li>Chili oil</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <span className="inline-block px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded mr-2">
                      Spicy
                    </span>
                    <span className="inline-block px-2 py-1 text-xs bg-red-100 text-red-800 rounded">
                      Contains meat
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/10 p-6 rounded-lg my-8">
              <h3 className="text-xl font-medium mb-3 text-primary">Get the Full Experience</h3>
              <p>
                For the best experience with offline capability and more features, 
                download our mobile app available for iOS and Android.
              </p>
              <div className="mt-4">
                <a 
                  href="/download" 
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Download App
                </a>
              </div>
            </div>
            
            <p className="text-sm text-foreground/60 italic mt-8">
              Note: The web scanner has limited functionality compared to our mobile app. 
              For the best experience, we recommend downloading the full app.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 