'use client';

import { useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

interface Currency {
  code: string;
  name: string;
  flag: string;
}

interface ExchangeRates {
  [key: string]: number;
}

interface Expense {
  item: string;
  price: string;
}

export default function CurrencyPage() {
  const [amount, setAmount] = useState<number>(100);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('CNY');
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [error, setError] = useState<string | null>(null);

  const currencies: Currency[] = [
    { code: "USD", name: "US Dollar", flag: "/assets/images/flags/us.svg" },
    { code: "CNY", name: "Chinese Yuan", flag: "/assets/images/flags/cn.svg" },
    { code: "EUR", name: "Euro", flag: "/assets/images/flags/eu.svg" },
    { code: "GBP", name: "British Pound", flag: "/assets/images/flags/gb.svg" },
    { code: "JPY", name: "Japanese Yen", flag: "/assets/images/flags/jp.svg" },
    { code: "AUD", name: "Australian Dollar", flag: "/assets/images/flags/au.svg" },
    { code: "CAD", name: "Canadian Dollar", flag: "/assets/images/flags/ca.svg" },
    { code: "CHF", name: "Swiss Franc", flag: "/assets/images/flags/ch.svg" }
  ];

  const commonExpenses: Expense[] = [
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

  const fetchExchangeRates = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('https://open.er-api.com/v6/latest/USD');
      if (!response.ok) {
        throw new Error('Unable to fetch exchange rate data');
      }
      const data = await response.json();
      setExchangeRates(data.rates);
      setLastUpdated(new Date(data.time_last_update_utc));
      setIsLoading(false);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExchangeRates();
  }, [fetchExchangeRates]);

  useEffect(() => {
    if (Object.keys(exchangeRates).length > 0) {
      if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
        const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
        const result = amount * rate;
        setConvertedAmount(result);
      }
    }
  }, [fromCurrency, toCurrency, amount, exchangeRates]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleFromCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(e.target.value);
  };

  const handleConvert = () => {
    fetchExchangeRates();
  };

  const refreshRates = () => {
    fetchExchangeRates();
  };

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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Currency Converter</h1>
          </div>
          
          <p className="text-lg text-foreground/80 mb-12">
            Plan your budget for China with our currency converter. The Chinese currency is the Renminbi (RMB),
            and its basic unit is the Yuan (¥ or CNY). Exchange rates are updated daily.
          </p>
          
          <div className="bg-muted p-8 rounded-lg my-8">
            <h2 className="text-2xl font-semibold mb-6">Currency Converter</h2>
            
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                Error: {error}. Please <button className="underline" onClick={refreshRates}>try again</button>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="amount" className="block mb-2 font-medium">Amount</label>
                <div className="flex">
                  <input 
                    type="number" 
                    id="amount" 
                    className="w-full p-3 border border-border rounded-l-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={handleAmountChange}
                  />
                  <select 
                    id="from-currency" 
                    className="p-3 border border-l-0 border-border rounded-r-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    value={fromCurrency}
                    onChange={handleFromCurrencyChange}
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
                    value={convertedAmount.toFixed(2)}
                    readOnly
                  />
                  <select 
                    id="to-currency" 
                    className="p-3 border border-l-0 border-border rounded-r-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    value={toCurrency}
                    onChange={handleToCurrencyChange}
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
              <button 
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
                onClick={handleConvert}
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Convert'}
              </button>
              <button 
                className="inline-flex items-center justify-center bg-muted/70 hover:bg-muted text-foreground px-6 py-3 rounded-md font-medium transition-colors ml-2"
                onClick={refreshRates}
                disabled={isLoading}
              >
                Refresh Rates
              </button>
            </div>
            
            <p className="text-sm text-foreground/60 text-center mt-4">
              Exchange rates last updated: {lastUpdated.toLocaleString()}
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
                {isLoading ? (
                  <tr>
                    <td colSpan={4} className="p-3 text-center">Loading...</td>
                  </tr>
                ) : (
                  currencies.map((currency) => (
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
                      <td className="p-3 text-right font-mono">
                        {exchangeRates[currency.code] ? exchangeRates[currency.code].toFixed(2) : '...'} {currency.code}
                      </td>
                      <td className="p-3 text-right font-mono">
                        {exchangeRates[currency.code] ? (1/exchangeRates[currency.code]).toFixed(4) : '...'} USD
                      </td>
                    </tr>
                  ))
                )}
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