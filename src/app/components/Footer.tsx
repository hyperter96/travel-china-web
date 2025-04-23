import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-muted py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Travel China</h3>
            <p className="text-sm text-foreground/80">
              Your complete guide for planning a perfect trip to China.
              All the resources you need for visa applications, customs information,
              tour planning, and navigation.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/visa" className="text-sm text-foreground/80 hover:text-primary">Visa Information</Link></li>
              <li><Link href="/customs" className="text-sm text-foreground/80 hover:text-primary">Customs Guide</Link></li>
              <li><Link href="/tours" className="text-sm text-foreground/80 hover:text-primary">Popular Tours</Link></li>
              <li><Link href="/navigation" className="text-sm text-foreground/80 hover:text-primary">Navigation Tools</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-sm text-foreground/80 hover:text-primary">FAQ</Link></li>
              <li><Link href="/blog" className="text-sm text-foreground/80 hover:text-primary">Travel Blog</Link></li>
              <li><Link href="/translator" className="text-sm text-foreground/80 hover:text-primary">Translator Tool</Link></li>
              <li><Link href="/currency" className="text-sm text-foreground/80 hover:text-primary">Currency Converter</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-foreground/80">Email: info@travelchina.com</li>
              <li className="text-sm text-foreground/80">Phone: +1 (123) 456-7890</li>
              <li className="text-sm text-foreground/80">WeChat: TravelChinaOfficial</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-foreground/70">
          <p>© {new Date().getFullYear()} Travel China. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 