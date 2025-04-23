import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function FoodScannerPage() {
  return (
    <main>
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Visual Food Ordering</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl mb-8">
              Never struggle with Chinese menus again. Our visual food ordering tool helps you 
              identify dishes, get translations, and order with confidence.
            </p>
            
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden my-8">
              <Image
                src="/assets/images/chinese-food.jpg"
                alt="Chinese Food Scanner"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm">Discover authentic Chinese cuisine with confidence</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Scan</h3>
                <p className="text-foreground/80">Open the app and scan the menu with your camera</p>
              </div>
              
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="23"></line>
                    <line x1="15" y1="20" x2="15" y2="23"></line>
                    <line x1="20" y1="9" x2="23" y2="9"></line>
                    <line x1="20" y1="14" x2="23" y2="14"></line>
                    <line x1="1" y1="9" x2="4" y2="9"></line>
                    <line x1="1" y1="14" x2="4" y2="14"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Identify</h3>
                <p className="text-foreground/80">Our AI identifies dishes and provides translations</p>
              </div>
              
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="10" cy="20.5" r="1"></circle>
                    <circle cx="18" cy="20.5" r="1"></circle>
                    <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Order</h3>
                <p className="text-foreground/80">View images of dishes and place your order with confidence</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">Key Features</h2>
            <ul className="list-disc pl-5 my-4 space-y-2">
              <li>Instant menu translation from Chinese to English</li>
              <li>Image recognition for visual identification of dishes</li>
              <li>Detailed descriptions of ingredients and preparation methods</li>
              <li>Dietary restriction filters (vegetarian, gluten-free, etc.)</li>
              <li>Popular recommendations based on other travelers' choices</li>
              <li>Offline functionality for use without internet connection</li>
              <li>Phrase guide for communicating with restaurant staff</li>
            </ul>
            
            <div className="bg-muted p-6 rounded-lg my-8">
              <h3 className="text-xl font-medium mb-3">Pro Tip</h3>
              <p>
                Even when using our app, it's helpful to learn a few basic food-related phrases in Chinese. 
                Check our "Essential Chinese Phrases" guide for common dining expressions.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">Popular Chinese Dishes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="card overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src="/assets/images/dish-dimsum.jpg" 
                    alt="Dim Sum" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-medium mb-1">Dim Sum (点心)</h3>
                  <p className="text-sm text-foreground/80">
                    Various small dishes served in steamer baskets, typically enjoyed with tea.
                  </p>
                </div>
              </div>
              
              <div className="card overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src="/assets/images/dish-hotpot.jpg" 
                    alt="Hot Pot" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-medium mb-1">Hot Pot (火锅)</h3>
                  <p className="text-sm text-foreground/80">
                    Interactive dining experience where ingredients are cooked in a simmering pot of broth at the table.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/10 p-6 rounded-lg my-8">
              <h3 className="text-xl font-medium mb-3 text-primary">Try Our Visual Food Scanner</h3>
              <p>
                Ready to explore the delicious world of Chinese cuisine? Download our app or use the web version 
                to start scanning menus and discovering new flavors.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/download" 
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Download App
                </Link>
                <Link 
                  href="/web-scanner" 
                  className="inline-flex items-center justify-center bg-transparent border border-border hover:border-primary text-foreground hover:text-primary px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Use Web Version
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 