import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function CurrencyPage() {
  const currencies = [
    { code: "USD", name: "US Dollar", flag: "/assets/images/flags/us.svg", rate: 1.00 },
    { code: "CNY", name: "Chinese Yuan", flag: "/assets/images/flags/cn.svg", rate: 7.24 },
    { code: "EUR", name: "Euro", flag: "/assets/images/flags/eu.svg", rate: 0.92 },
    { code: "GBP", name: "British Pound", flag: "/assets/images/flags/gb.svg", rate: 0.79 },
    { code: "JPY", name: "Japanese Yen", flag: "/assets/images/flags/jp.svg", rate: 151.53 },
    { code: "AUD", name: "Australian Dollar", flag: "/assets/images/flags/au.svg", rate: 1.53 },
    { code: "CAD", name: "Canadian Dollar", flag: "/assets/images/flags/ca.svg", rate: 1.38 },
    { code: "CHF", name: "Swiss Franc", flag: "/assets/images/flags/ch.svg", rate: 0.90 }
  ];

  const commonExpenses = [
    { item: "Metro/Subway Ticket", price: "3-10 CNY" },
    { item: "Taxi (per km)", price: "2.5-3.5 CNY" },
    { item: "Street Food Meal", price: "15-30 CNY" },
    { item: "Restaurant Meal (mid-range)", price: "60-120 CNY" },
    { item: "Bottle of Water (0.5L)", price: "2-5 CNY" },
    { item: "Cup of Coffee", price: "25-40 CNY" },
    { item: "Hostel Bed (per night)", price: "50-120 CNY" },
    { item: "Mid-range Hotel (per night)", price: "300-800 CNY" },
    { item: "Museum/Attraction Entrance", price: "40-120 CNY" }
  ];

  return (
    <main>
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Currency Converter</h1>
          
          <p className="text-lg text-foreground/80 mb-12">
            Plan your budget for China with our currency converter. The Chinese currency is the Renminbi (RMB), 
            and its basic unit is the Yuan (¥ or CNY). Current exchange rates are updated daily.
          </p>
          
          <div className="bg-muted p-8 rounded-lg my-8">
            <h2 className="text-2xl font-semibold mb-6">Currency Converter</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="amount" className="block mb-2 font-medium">Amount</label>
                <div className="flex">
                  <input 
                    type="number" 
                    id="amount" 
                    className="w-full p-3 border border-border rounded-l-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Enter amount"
                    defaultValue="100"
                  />
                  <select 
                    id="from-currency" 
                    className="p-3 border border-l-0 border-border rounded-r-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    defaultValue="USD"
                  >
                    {currencies.map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency.code}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="result" className="block mb-2 font-medium">Converted Amount</label>
                <div className="flex">
                  <input 
                    type="number" 
                    id="result" 
                    className="w-full p-3 border border-border rounded-l-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Result"
                    defaultValue="724"
                    readOnly
                  />
                  <select 
                    id="to-currency" 
                    className="p-3 border border-l-0 border-border rounded-r-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    defaultValue="CNY"
                  >
                    {currencies.map((currency) => (
                      <option key={`to-${currency.code}`} value={currency.code}>
                        {currency.code}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
              <button className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
                Convert
              </button>
            </div>
            
            <p className="text-sm text-foreground/60 text-center mt-4">
              Exchange rates last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          
          <h2 className="text-2xl font-semibold mt-12 mb-6">Exchange Rates</h2>
          <div className="overflow-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="p-3 text-left">Currency</th>
                  <th className="p-3 text-left">Code</th>
                  <th className="p-3 text-right">1 USD Equals</th>
                  <th className="p-3 text-right">1 Currency Equals USD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {currencies.map((currency) => (
                  <tr key={currency.code} className="hover:bg-muted/50">
                    <td className="p-3">
                      <div className="flex items-center">
                        <div className="w-6 h-6 mr-2 rounded overflow-hidden flex-shrink-0">
                          <Image 
                            src={currency.flag} 
                            alt={`${currency.name} flag`} 
                            width={24} 
                            height={24}
                          />
                        </div>
                        {currency.name}
                      </div>
                    </td>
                    <td className="p-3 font-mono">{currency.code}</td>
                    <td className="p-3 text-right font-mono">{currency.rate.toFixed(2)} {currency.code}</td>
                    <td className="p-3 text-right font-mono">{(1/currency.rate).toFixed(4)} USD</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <h2 className="text-2xl font-semibold mt-12 mb-6">Common Expenses in China</h2>
          <div className="card p-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-2 text-left">Item</th>
                  <th className="p-2 text-right">Typical Price (CNY)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {commonExpenses.map((expense, index) => (
                  <tr key={index} className="hover:bg-muted/20">
                    <td className="p-2">{expense.item}</td>
                    <td className="p-2 text-right font-mono">{expense.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-muted p-6 rounded-lg my-8">
            <h3 className="text-xl font-medium mb-3">Money Tips for China</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 mr-2 flex-shrink-0">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Always carry some cash, especially when traveling outside major cities</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 mr-2 flex-shrink-0">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Be aware of counterfeit currency - exchange money at official banks or ATMs</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 mr-2 flex-shrink-0">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Mobile payments (WeChat Pay and Alipay) are dominant, but require a Chinese bank account or special tourist versions</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 mr-2 flex-shrink-0">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Inform your bank about your travel plans to prevent your card from being blocked</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 