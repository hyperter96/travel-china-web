import Image from 'next/image';
import Link from 'next/link';

export default function DestinationSection() {
  const destinations = [
    {
      name: "Beijing",
      image: "/assets/images/beijing.jpg",
      description: "Explore the ancient Forbidden City, walk the Great Wall, and experience the vibrant culture of China's capital.",
      link: "/destinations/beijing"
    },
    {
      name: "Shanghai",
      image: "/assets/images/shanghai.jpg",
      description: "Marvel at the futuristic skyline, visit ancient gardens, and enjoy the blend of East and West in this metropolis.",
      link: "/destinations/shanghai"
    },
    {
      name: "Xi'an",
      image: "/assets/images/xian.jpg",
      description: "Discover the Terracotta Army, cycle the ancient city walls, and taste authentic cuisine in this historical city.",
      link: "/destinations/xian"
    },
    {
      name: "Guilin",
      image: "/assets/images/guilin.jpg",
      description: "Cruise along the Li River surrounded by karst mountains and experience China's most picturesque landscapes.",
      link: "/destinations/guilin"
    }
  ];

  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      {/* Chinese pattern background */}
      <div className="absolute inset-0 chinese-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover the most fascinating places to visit across China.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <Link href={destination.link} key={index} className="group">
              <div className="card overflow-hidden h-full transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">{destination.name}</h3>
                </div>
                <div className="p-4">
                  <p className="text-foreground/80 text-sm">{destination.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/destinations" 
            className="inline-flex items-center justify-center bg-transparent border border-border hover:border-primary text-foreground hover:text-primary px-6 py-3 rounded-md font-medium transition-colors"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
} 