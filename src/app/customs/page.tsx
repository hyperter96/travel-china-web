import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function CustomsPage() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Customs & Immigration</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl mb-8">
              Important information about China's customs regulations, declaration procedures, 
              prohibited items, and duty-free allowances for international travelers.
            </p>
            
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden my-8">
              <Image
                src="/assets/images/china-custom.jpg"
                alt="China Customs"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm">Beijing Capital International Airport Customs</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">Customs Declaration</h2>
            <p>
              All travelers entering China must complete a customs declaration form. This form is usually provided 
              during your flight or can be obtained at the customs checkpoint upon arrival. You must declare:
            </p>
            
            <ul className="list-disc pl-5 my-4 space-y-2">
              <li>Currency exceeding USD 5,000 or CNY 20,000</li>
              <li>Valuable items such as jewelry, cameras, laptops (if value exceeds certain threshold)</li>
              <li>Goods intended for commercial purposes</li>
              <li>Restricted or regulated items</li>
            </ul>
            
            <div className="bg-muted p-6 rounded-lg my-8">
              <h3 className="text-xl font-medium mb-3">Tip for Smooth Customs Clearance</h3>
              <p>
                Keep receipts for valuable items you're bringing into China. Having proof of purchase 
                can help avoid any confusion about whether the items are for personal use or commercial purposes.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">Prohibited and Restricted Items</h2>
            <p>
              The following items are either prohibited or subject to restrictions when entering China:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="card p-6 bg-primary/5">
                <h3 className="text-xl font-medium mb-3 text-primary">Prohibited Items</h3>
                <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Narcotics and drugs</li>
                  <li>Firearms, ammunition, and explosives</li>
                  <li>Counterfeit currency and securities</li>
                  <li>Poisonous materials</li>
                  <li>Materials that are harmful to China's politics, economy, culture, and morals</li>
                  <li>Endangered animal and plant species</li>
                  <li>Certain foods, fruits, and plants</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-medium mb-3">Restricted Items</h3>
                <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Alcohol: 1.5 liters of alcoholic beverages</li>
                  <li>Tobacco: 200 cigarettes or 50 cigars or 250g of tobacco</li>
                  <li>Medication: reasonable quantities for personal use</li>
                  <li>Electronics: reasonable quantities for personal use</li>
                  <li>Food products: most sealed, processed foods are allowed</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">Duty-Free Allowances</h2>
            <p>
              Travelers entering China are entitled to certain duty-free allowances. Items within these 
              allowances do not require duty payment:
            </p>
            
            <ul className="list-disc pl-5 my-4 space-y-2">
              <li>Personal belongings for non-commercial use</li>
              <li>Gifts with a total value not exceeding CNY 5,000 (approximately USD 700)</li>
              <li>The alcohol and tobacco allowances mentioned above</li>
            </ul>
            
            <p>
              Items exceeding these allowances may be subject to import duties, which generally range from 10% to 50% 
              depending on the category of goods.
            </p>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">Special Regulations for Electronics</h2>
            <p>
              China has specific regulations regarding the import of electronic devices:
            </p>
            
            <ul className="list-disc pl-5 my-4 space-y-2">
              <li>One laptop, tablet, or similar device is typically allowed duty-free for personal use</li>
              <li>Mobile phones are generally allowed without restrictions for personal use</li>
              <li>Professional equipment may require special permission or temporary import documentation</li>
            </ul>
            
            <div className="bg-primary/10 p-6 rounded-lg my-8">
              <h3 className="text-xl font-medium mb-3 text-primary">Exiting China with Purchased Goods</h3>
              <p>
                When leaving China, you may need to declare valuable items purchased during your stay, 
                especially if they exceed CNY 5,000 in value. Certain cultural artifacts or antiques require 
                export certificates to leave the country legally.
              </p>
              <p className="mt-3">
                Tax refunds are available for certain purchases made at designated tax-free shops when 
                leaving the country. Keep your receipts and look for the "Tax Refund" sign in participating stores.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 