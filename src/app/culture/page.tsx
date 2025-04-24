'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function CulturePage() {
  const [activeCategory, setActiveCategory] = useState('dining');
  
  const categories = [
    { id: 'dining', label: 'Dining Etiquette' },
    { id: 'greeting', label: 'Greeting Customs' },
    { id: 'gift', label: 'Gift Giving' },
    { id: 'business', label: 'Business Etiquette' },
    { id: 'temples', label: 'Temple & Religious Sites' },
  ];
  
  const etiquetteTips = {
    dining: [
      {
        title: 'Chopstick Etiquette',
        description: 'Never stick chopsticks vertically into food, especially rice—this resembles incense sticks used in funeral ceremonies and is considered unlucky. Rest chopsticks on chopstick holders or on the edge of your plate when not in use.',
        icon: '🥢'
      },
      {
        title: 'Communal Dining',
        description: 'Chinese meals are typically shared, with dishes placed in the center of the table for everyone to enjoy. It\'s polite to serve elders or guests first before serving yourself.',
        icon: '🍽️'
      },
      {
        title: 'Table Manners',
        description: 'Wait for elders or the host to begin eating before you start. If you\'re a guest, it\'s best to leave a small amount of food on your plate, indicating that your host has provided more than enough food.',
        icon: '🍲'
      },
      {
        title: 'Drinking Customs',
        description: 'Toasting is a way to show respect in China. When someone toasts you, hold your glass with both hands. At formal occasions, you may be expected to reciprocate.',
        icon: '🍶'
      },
      {
        title: 'Tea Ceremony',
        description: 'When someone pours tea for you, you can tap your fingers lightly on the table to express gratitude. Accept the tea cup with both hands as a sign of respect.',
        icon: '🍵'
      }
    ],
    greeting: [
      {
        title: 'Greeting Methods',
        description: 'Traditional Chinese greetings include nodding, bowing, or handshakes. When meeting elderly people or those of higher status, greet them first as a sign of respect.',
        icon: '🤝'
      },
      {
        title: 'Forms of Address',
        description: 'Chinese people typically use surname + title as a formal address. For example, a professor named Zhang would be addressed as "Professor Zhang". When in doubt, using title or "Mr./Ms." is a safe choice.',
        icon: '👨‍💼'
      },
      {
        title: 'Business Card Exchange',
        description: 'When exchanging business cards, stand up and use both hands to give and receive cards. After receiving a card, take a moment to read it as a sign of respect, rather than immediately putting it away.',
        icon: '📇'
      },
      {
        title: 'Keep Smiling',
        description: 'A smile is a universal sign of friendliness, but in China, overly enthusiastic physical contact (like hugging or kissing on the cheek) may make people uncomfortable during initial meetings.',
        icon: '😊'
      },
      {
        title: 'Respect Personal Space',
        description: 'While public places in China may be crowded, respecting personal space remains important in social settings, especially when interacting with unfamiliar people.',
        icon: '↔️'
      }
    ],
    gift: [
      {
        title: 'Appropriate Gifts',
        description: 'Quality fruits, tea, chocolates, or small crafts make welcome gifts. Specialty items from your country are usually appreciated as well.',
        icon: '🎁'
      },
      {
        title: 'Gifts to Avoid',
        description: 'Avoid giving clocks (the phrase "giving a clock" sounds like "attending a funeral"), umbrellas (suggests separation), knives or sharp objects (symbolizes cutting off relationships), or white flowers (associated with funerals).',
        icon: '⛔'
      },
      {
        title: 'Gift Wrapping',
        description: 'Choose red or gold wrapping paper, as these colors symbolize good fortune. Avoid using white, black, or blue wrapping, as these colors are traditionally associated with mourning.',
        icon: '🎀'
      },
      {
        title: 'Giving Method',
        description: 'Gifts should be presented with both hands. Chinese recipients may modestly refuse a few times before accepting, which is a sign of humility. Similarly, if someone gives you a gift, politely declining before accepting is courteous.',
        icon: '🙌'
      },
      {
        title: 'Reciprocity',
        description: 'If you receive a gift, it\'s polite to give something of similar value in return at an appropriate time. Don\'t open gifts in front of the giver unless requested.',
        icon: '🔄'
      }
    ],
    business: [
      {
        title: 'Meeting Protocol',
        description: 'Be punctual for meetings and bring plenty of business cards. When a meeting begins, the most senior person should enter the room first. Wait to be directed where to sit, which is often arranged by rank.',
        icon: '💼'
      },
      {
        title: 'Relationship Building',
        description: 'In China, building relationships (guanxi) is essential for business success. Taking time to establish relationships and trust before formal business discussions is important.',
        icon: '🔗'
      },
      {
        title: 'Decision-Making Process',
        description: 'Decisions are typically a collective process and may take time. Patience and avoiding pressure are important. Respect the hierarchy structure—usually senior management makes the final decisions.',
        icon: '⚖️'
      },
      {
        title: 'Business Attire',
        description: 'Dress conservatively for business occasions. Men typically wear dark suits, and women wear conservative dresses, skirts, or pantsuits. Avoid excessive jewelry or accessories.',
        icon: '👔'
      },
      {
        title: 'Dining Engagements',
        description: 'Business banquets are an important part of relationship building. Banquets usually take place at round tables, with the guest of honor typically seated facing the door. Follow the host\'s lead, waiting for them to begin eating or indicate the start.',
        icon: '🍴'
      }
    ],
    temples: [
      {
        title: 'Appropriate Attire',
        description: 'Dress conservatively when visiting temples or religious sites. Avoid shorts, sleeveless tops, or revealing clothing. Some places may require you to remove your shoes before entering.',
        icon: '👕'
      },
      {
        title: 'Respecting Images',
        description: 'Don\'t touch Buddha statues or other religious images. Before taking photos, confirm if it\'s allowed—some places prohibit photography or charge extra fees for it.',
        icon: '📷'
      },
      {
        title: 'Quiet Behavior',
        description: 'Maintain a quiet and respectful demeanor in religious places. Avoid loud talking or behavior that might be considered disrespectful.',
        icon: '🤫'
      },
      {
        title: 'Incense Etiquette',
        description: 'If lighting incense, hold it with both hands raised slightly in front of your forehead and bow slightly to show respect. Typically, three sticks of incense are lit at each burner, representing Buddha, Dharma, and Sangha.',
        icon: '🕯️'
      },
      {
        title: 'Donation Customs',
        description: 'Many temples have donation boxes. Donations are voluntary, any amount is acceptable, and it\'s a way to show respect. Don\'t expect special treatment for making a donation.',
        icon: '💰'
      }
    ]
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Chinese Culture</h1>
          </div>
          
          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-lg">
              Understanding and respecting Chinese cultural customs can make your travel more enjoyable and help you build better connections with locals.
              China has a rich cultural tradition and unique social etiquette. Familiarizing yourself with these basic customs can help you avoid unintentional offense.
            </p>
          </div>
          
          {/* Category navigation */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {/* Etiquette tip cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {etiquetteTips[activeCategory as keyof typeof etiquetteTips].map((tip, index) => (
              <div key={index} className="card p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="text-4xl mr-4">{tip.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                    <p className="text-foreground/80">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Cultural images */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Chinese Cultural Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image 
                  src="/images/culture-dining.jpg" 
                  alt="Chinese Dining Etiquette" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white font-medium">Dining Culture</span>
                </div>
              </div>
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image 
                  src="/images/culture-greeting.jpg" 
                  alt="Chinese Greeting Customs" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white font-medium">Greeting Customs</span>
                </div>
              </div>
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image 
                  src="/images/culture-temple.jpg" 
                  alt="Chinese Temple Etiquette" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white font-medium">Temple Etiquette</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Taboos and cautions */}
          <div className="mt-16 bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-red-500 mr-2">⚠️</span> Important Cautions & Taboos
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Avoid discussing sensitive political topics, especially those related to Taiwan, Tibet, or human rights issues.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>The number &quot;4&quot; is considered unlucky in China because it sounds similar to the word for &quot;death.&quot; Avoid giving gifts containing four items.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Don&apos;t be loud or overly conspicuous in public places, as this may be considered lacking in good manners.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Avoid excessive displays of emotion or intimacy at the dining table or in public places—Chinese culture tends to be more reserved.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Don&apos;t photograph military facilities, government buildings, or security checkpoints, as this may cause problems.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 