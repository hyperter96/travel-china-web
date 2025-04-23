'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function FAQPage() {
  const faqData = [
    {
      question: "Do I need a visa to visit China?",
      answer: "Most foreign nationals require a visa to enter China. Depending on your nationality and purpose of visit, you may need a tourist (L), business (M), or other type of visa. Some nationalities are eligible for visa-free transit for 72 or 144 hours under specific conditions."
    },
    {
      question: "How far in advance should I apply for a Chinese visa?",
      answer: "We recommend applying for your Chinese visa 1-2 months before your planned trip. Processing times typically range from 4-7 business days, but delays can occur during peak travel seasons or holidays."
    },
    {
      question: "What is the best time of year to visit China?",
      answer: "The best times to visit China are spring (April-May) and autumn (September-October) when the weather is pleasant across most regions. Summer (June-August) can be hot and humid, while winter (December-February) is cold but offers fewer crowds and unique experiences like Harbin Ice Festival."
    },
    {
      question: "Is it necessary to learn Chinese before visiting?",
      answer: "While not absolutely necessary, learning a few basic phrases in Mandarin can enhance your experience and make daily interactions easier. In major cities and tourist areas, English is often spoken at hotels, airports, and popular attractions. Our app provides translation tools to help bridge the language gap."
    },
    {
      question: "Can I use my credit card in China?",
      answer: "International credit cards (Visa, Mastercard) are accepted at high-end hotels, restaurants, and stores in major cities, but less so in smaller establishments or rural areas. Mobile payment systems like WeChat Pay and Alipay dominate in China. We recommend carrying some cash, especially when traveling outside major cities."
    },
    {
      question: "How can I access the internet in China?",
      answer: "Many websites and apps like Google, Facebook, Instagram, and WhatsApp are blocked in mainland China. To access these services, you'll need a VPN installed before arrival. For internet access, consider renting a portable WiFi device, purchasing a local SIM card, or using hotel WiFi."
    },
    {
      question: "Is tap water safe to drink in China?",
      answer: "Tap water in China is not safe to drink without boiling or filtering. Bottled water is widely available and inexpensive. Hotels typically provide complimentary bottled water in rooms."
    },
    {
      question: "How do I get around within Chinese cities?",
      answer: "Major Chinese cities have excellent public transportation systems, including extensive subway networks, buses, and taxis. Our navigation tools provide real-time guidance for public transport options. Ride-hailing apps like Didi (similar to Uber) are also popular and convenient."
    },
    {
      question: "What are the tipping customs in China?",
      answer: "Tipping is not traditionally expected or required in China. High-end international hotels and restaurants catering to tourists might add a service charge, but in most local establishments, tipping is uncommon and sometimes even refused."
    },
    {
      question: "How can I recognize authentic Chinese cuisine?",
      answer: "China has eight major culinary traditions with distinct characteristics. Look for restaurants with local customers, specific regional designations, or use our Food Scanner tool to identify authentic dishes. Restaurants in tourist areas often offer English menus but may serve modified versions of traditional dishes."
    }
  ];

  const [expandedItems, setExpandedItems] = useState<number[]>([0]); // 默认展开第一个
  const [heights, setHeights] = useState<{[key: number]: number}>({});
  const answerRefs = useRef<{[key: number]: HTMLDivElement | null}>({});

  useEffect(() => {
    // 初始化时测量所有答案的高度
    faqData.forEach((_, index) => {
      if (answerRefs.current[index]) {
        setHeights(prev => ({
          ...prev,
          [index]: answerRefs.current[index]?.scrollHeight || 0
        }));
      }
    });
  }, []);

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index) 
        : [...prev, index]
    );
  };

  const isExpanded = (index: number) => expandedItems.includes(index);

  const setAnswerRef = (index: number) => (el: HTMLDivElement | null) => {
    answerRefs.current[index] = el;
  };

  return (
    <main>
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Frequently Asked Questions</h1>
          
          <p className="text-lg text-foreground/80 mb-12">
            Find answers to the most common questions about traveling to China. 
            If you don't see your question answered here, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
          </p>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="card overflow-hidden transition-all duration-300 ease-in-out hover:shadow-md"
              >
                <div 
                  className="p-6 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <div className="text-primary transition-transform duration-300 ease-in-out">
                    {isExpanded(index) ? (
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="transform rotate-0"
                      >
                        <line x1="18" y1="12" x2="6" y2="12"></line>
                      </svg>
                    ) : (
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="transform rotate-0"
                      >
                        <line x1="12" y1="6" x2="12" y2="18"></line>
                        <line x1="18" y1="12" x2="6" y2="12"></line>
                      </svg>
                    )}
                  </div>
                </div>
                <div 
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isExpanded(index) ? `${heights[index] || 1000}px` : '0px',
                    opacity: isExpanded(index) ? 1 : 0
                  }}
                >
                  <div 
                    ref={setAnswerRef(index)}
                    className="px-6 pb-6 border-t border-border pt-4"
                  >
                    <p className="text-foreground/80">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-primary/10 p-6 rounded-lg mt-12">
            <h2 className="text-2xl font-semibold mb-4">Have More Questions?</h2>
            <p className="mb-6">
              We're here to help make your trip to China as smooth and enjoyable as possible. 
              If you have questions that aren't covered in our FAQ, please don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/live-chat" 
                className="inline-flex items-center justify-center bg-transparent border border-border hover:border-primary text-foreground hover:text-primary px-6 py-3 rounded-md font-medium transition-colors"
              >
                Live Chat
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 