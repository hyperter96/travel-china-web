import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function VisaPage() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Visa & Entry Information</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl mb-8">
              Everything you need to know about obtaining a visa to visit China, including application procedures,
              required documents, and entry requirements.
            </p>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">Types of Visas</h2>
            <p>
              China offers various types of visas depending on the purpose of your visit. The most common visa types for tourists include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="card p-6">
                <h3 className="text-xl font-medium mb-2 text-primary">L Visa (Tourist Visa)</h3>
                <p>For those who travel to China for tourism, family visits, or other personal affairs.</p>
                <ul className="list-disc pl-5 mt-3 text-foreground/80">
                  <li>Valid for 30, 60, or 90 days</li>
                  <li>Single, double, or multiple entries</li>
                  <li>Requires invitation letter or tour booking</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-medium mb-2 text-primary">M Visa (Business Visa)</h3>
                <p>For those who travel to China for commercial and trade activities.</p>
                <ul className="list-disc pl-5 mt-3 text-foreground/80">
                  <li>Valid for 30, 60, or 90 days</li>
                  <li>Single, double, or multiple entries</li>
                  <li>Requires invitation from Chinese company</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">Application Process</h2>
            <p>
              The application process for a Chinese visa typically involves the following steps:
            </p>
            
            <ol className="list-decimal pl-5 my-4 space-y-2">
              <li>Complete the visa application form online or download it from the Chinese embassy website.</li>
              <li>Prepare the required documents, including your passport, photos, and supporting materials.</li>
              <li>Submit your application to the Chinese embassy or consulate in your country, or through an authorized visa center.</li>
              <li>Pay the visa application fee.</li>
              <li>Wait for processing, which typically takes 4-5 business days.</li>
              <li>Collect your visa or receive it by mail if you used a postal service.</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">Required Documents</h2>
            <p>
              The basic documents required for a Chinese visa application include:
            </p>
            
            <ul className="list-disc pl-5 my-4 space-y-2">
              <li>Passport valid for at least six months with blank visa pages</li>
              <li>Completed visa application form</li>
              <li>Recent passport-sized photo</li>
              <li>Proof of travel arrangements (flight bookings, hotel reservations)</li>
              <li>Itinerary of your planned travel in China</li>
              <li>For tourist visas: invitation letter from a Chinese citizen or travel agency</li>
              <li>For business visas: invitation letter from a Chinese company</li>
            </ul>
            
            <div className="bg-muted p-6 rounded-lg my-8">
              <h3 className="text-xl font-medium mb-3">Visa-Free Transit Policy</h3>
              <p>
                China offers a visa-free transit policy for citizens of certain countries. 
                Travelers from these countries can stay in specific cities or regions for 72 or 144 hours 
                without obtaining a visa if they are transiting through China to a third country.
              </p>
              <p className="mt-3">
                Check with the Chinese embassy or consulate in your country for the most up-to-date information.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">Entry Procedures</h2>
            <p>
              Upon arrival in China, you will go through the following procedures:
            </p>
            
            <ol className="list-decimal pl-5 my-4 space-y-2">
              <li>Complete an arrival card (usually distributed on the plane)</li>
              <li>Go through immigration control (have your passport and visa ready)</li>
              <li>Claim your baggage</li>
              <li>Go through customs inspection</li>
              <li>For certain travelers, health screening may be required</li>
            </ol>
            
            <div className="bg-primary/10 p-6 rounded-lg my-8">
              <h3 className="text-xl font-medium mb-3 text-primary">Need Assistance?</h3>
              <p>
                Our team is available to help you with the visa application process. 
                For personalized assistance or if you have any questions, please contact our visa support team.
              </p>
              <div className="mt-4">
                <a href="/contact" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Contact Visa Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 