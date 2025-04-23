import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Chinese pattern background */}
      <div className="absolute inset-0 chinese-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Discover the Beauty of <span className="text-primary">China</span>
            </h1>
            <p className="text-lg text-foreground/80 mb-8 max-w-lg">
              Your complete guide to exploring China. From visa application to real-time navigation, 
              we provide everything you need for an unforgettable journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/visa" 
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Start Planning
              </Link>
              <Link 
                href="/tours" 
                className="inline-flex items-center justify-center bg-transparent border border-border hover:border-primary text-foreground hover:text-primary px-6 py-3 rounded-md font-medium transition-colors"
              >
                Explore Tours
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="relative border-8 border-white shadow-xl rounded-lg overflow-hidden aspect-video">
              <Image 
                src="/assets/images/great-wall.jpg" 
                alt="Great Wall of China" 
                width={800} 
                height={450}
                className="object-cover"
              />
            </div>
            
            {/* Chinese decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              中
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 