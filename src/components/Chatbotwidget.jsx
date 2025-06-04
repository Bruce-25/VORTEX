import { useState, useRef, useEffect } from "react";
import "./styling/Chatbotwidget.css";

// Fashion-related responses
const fashionResponses = {
  "hello": "Hey there! Ready to explore the freshest styles and vibes today?",
  "hi": "Hi! What’s on your style radar? Let’s make it unforgettable.",
  "welcome": "Welcome! Step into a world where fashion meets flair. How can I assist?",
  "good morning": "Good morning! Time to dress sharp and feel unstoppable.",
  "good afternoon": "Afternoon vibes activated. What’s the look you’re chasing?",
  "good evening": "Evening elegance starts here. Ready to shine?",
  "how are you": "Feeling great, thanks! How about you? Let’s talk fashion and fit.",
  "what can you do": "I’m your style guide, shopping buddy, and trend scout—all in one. What do you need?",
  "help": "Need a hand? I’ve got the latest drops, fits, and tips just for you.",
  "thanks": "Anytime! Your style journey is my favorite mission.",
  "bye": "Catch you later! Stay fresh and keep that drip alive.",
  "see you": "See you soon! Don’t forget to flex your best looks.",
  "sorry": "No worries! Let’s get you back on track with killer style.",
  "thank you": "You’re welcome! Here whenever you want to elevate your wardrobe.",
  "what’s new": "Fresh drops and exclusive styles just landed. Want me to show you?",
  "recommend": "Looking for something fresh? I’ve got curated picks ready to impress.",
  "where are you from": "Born from the streets of style, here to bring you the best in fashion.",
  "tell me more": "I’m all about the details—fabric, fit, and vibe. Just ask!",
  "fashion tips": "Ready for some style hacks? From casual cool to runway-ready, I’ve got you.",
  "payment options": "Multiple ways to pay, all smooth and secure. Let me walk you through.",
  "shipping info": "Fast and free delivery options that bring the drip right to your door.",
  "return policy": "Easy returns, no fuss. Because we want you happy with every fit.",
  "contact support": "Need support? Our team is ready to help you flex with confidence.",
  "order status": "Let me check that for you—your drip is on the way!",
  "new arrivals": "Hot off the press: new arrivals that’ll upgrade your wardrobe instantly.",
  "sale": "Deals you can’t miss. Style without the splurge—interested?",
  "size guide": "Find your perfect fit with our easy size guide. Let’s make it seamless.",
  "feedback": "Love to hear from you! Your style, your voice, your vibe.",
  "about us": "Passion for fashion meets unbeatable quality. Here’s our story.",
  "denim jeans": "Denim jeans never go out of style. They’re durable, comfy, and perfect for both streetwear and casual elegance.",
  "leather jacket": "Our leather jackets are made for bold souls—luxurious, edgy, and timeless. A must-have for making statements.",
  "sneakers": "Step up your game with our sneakers—where comfort meets undeniable drip. Designed for movement and moments.",
  "heels": "Heels that turn sidewalks into runways. Elevate your look with poise and power.",
  "hoodie": "Cozy up in our hoodies—where comfort hugs you and style never lets go.",
  "watches": "Watches that do more than tell time—they tell your story. Explore elegance that lasts forever.",
  "sunglasses": "Sunglasses with attitude. Protect your eyes, boost your confidence, and flex your vibe.",
  "crop top": "Crop tops designed for bold expression and breezy days. Pair it with confidence.",
  "cargo pants": "Function meets flair in our cargo pants. Street style redefined.",
  "beanie": "Keep warm and cool—literally—with our minimal beanies crafted for any fit." ,
  "zig zag hat": "Make waves with the Zig Zag Hat—an edgy statement piece with a rhythmic flair. Free delivery at KES 5,000.",
  "panama hat": "Channel timeless elegance with the Panama Hat. Lightweight, classy, and made for sun-drenched strolls. Free delivery at KES 8,000.",
  "straw hat": "Breezy and bold, our Straw Hat is your go-to for sunlit days and relaxed flair. Yours for KES 8,000 with free delivery.",
  "afwerkin": "The Afwerkin Hat blends heritage with high fashion. A unique crown for KES 6,000. Order now and own your roots.",
  "bucket hat": "Street style meets comfort in our Bucket Hat—a classic look for every outfit. Just KES 4,000.",
  "barts hat": "The Barts Hoed Hat is minimal and modern—a subtle touch of European finesse. Yours at KES 2,500.",
  "paris beige": "Refined, romantic, and ready for runways—the Paris Beige Hat is elegance in every thread. KES 9,900.",
  "casual cap": "Everyday ease meets timeless charm with the Casual Cap—yours for just KES 1,000.",
  "snap-back": "Turn heads with our Snap-Backs. Whether it's the classic cut or the F1 edition, KES 3,800 delivers sharp confidence.",
  "snap-back f1": "For those with a need for speed and style—our Snap-Back F1 hat brings that racing edge at KES 3,800.",
  "sporty touch": "Designed for movement and muscle, the Sporty Touch hat fuses comfort and hustle. Grab it for KES 2,500.",
  "paris cap": "The Paris Cap is haute couture for your head—luxuriously crafted at KES 9,900.",
  "pie hat": "Unapologetically bold. The Pie Hat is a fashion-forward crown for trendsetters. KES 10,000 of pure drip.",
  "hamdouni": "Command the scene with the Hamdouni Cap—regal design meets rebellious soul. KES 8,500.",
  "essentials": "Not just a hat—a wardrobe essential. Simplicity, balance, and elite quality for KES 10,400.",
  "klassieke": "The Klassieke Cap is for the elite minimalist. A fashion sculpture for KES 14,000.",
  "shelby": "Channel your inner Peaky Blinder with the Shelby hat. Old-school class, modern rebellion—KES 15,000.",
  "fedora": "Classic meets killer charm. The Fedora Hat never goes out of style—grab yours for KES 8,000." ,
    "ott polo": "Keep it clean and cool with the Ott Polo—everyday comfort meets effortless class. Just KES 1,000.",
  "office polo": "Sleek, sharp, and boardroom-ready. The Office Polo redefines business casual. KES 4,000.",
  "floral polo": "Bloom with confidence in our Floral Polo. Fresh, vibrant, and full of charm for KES 5,500.",
  "vintage polo": "Throw it back in style with the Vintage Polo—retro vibes, premium feel. Yours at KES 9,900.",
  "casual polo": "Relax in style with the Casual Polo—a laid-back staple at just KES 2,000.",
  "african polo": "Heritage meets high fashion in our African Frame Polo. Stand out for KES 3,800.",
  "fashion polo": "A modern must-have. The Fashion Polo delivers sleek minimalism at KES 2,500.",
  "mar polo": "Simple. Stylish. The Mar Polo is your wardrobe’s quiet flex. Only KES 1,900.",
  
  "black-turtle-neck": "The classic Black Turtle Neck—timeless sophistication for KES 5,000. Dress it up or layer it down.",
  "korean turtle neck": "K-style elegance. The Korean Turtle Neck brings a refined edge to your fit for just KES 4,000.",
  "m-5xl half turtle-neck": "All sizes. All style. The Half Turtle-Neck (M-5XL) is a sleek, versatile icon at KES 5,500.",
  
  "fashion t-shirt": "Bold cuts and clean lines—the Fashion T-shirt is where attitude meets comfort. KES 3,900.",
  "chinese t-shirt": "Collar it up with the Chinese T-shirt—a refined twist on a classic look. Yours at KES 8,000.",
  
  "fashion shirt": "Dress to impress in our Fashion Shirt. Crisp fabric, fierce vibe—just KES 7,000.",
  "graffiti shirt": "Artwear for the brave. The Graffiti Shirt is a walking masterpiece at KES 7,500.",
  "hawaiin shirt": "Sun, breeze, and boldness. The Hawaiin Shirt brings the beach to your vibe for KES 9,900.",
  "cotton shirt": "Breathe easy in the Cotton Shirt. Soft feel, sharp style—KES 4,000 only.",
  "beach shirt": "Let loose in the Beach Shirt—effortless holiday energy for just KES 3,500.",
  "floral print": "The Floral Print Shirt makes statements without trying. Fresh and fearless for KES 9,900.",
  "hoody shirt": "A shirt with street DNA. The Hoody Shirt fuses comfort and edge—grab it for KES 6,000.",
  
  "alpine stars": "The Alpine Stars Polo is subtle flex for smart dressers. Clean lines, bold brand—KES 5,200.",
  "shelby coat": "Elevate your outerwear with the Shelby Coat—refined warmth for fashion leaders. KES 5,500.",
  "dx-4 jacket": "The DX-4 Jacket is where utility meets streetwear. Layer up for just KES 1,900." ,
    "joker cargo pants": "Unleash street swagger with the Joker Cargo Pants—military cuts meet modern edge. KES 3,900–5,000, depending on the vibe.",
  "harajuku cargo pants": "Straight from Tokyo’s streets—the Harajuku Cargo Pants scream rebellion and fashion. KES 4,000.",
  "vintage camouflage cargo pants": "Classic camo. Unapologetic drip. The Vintage Camouflage Cargos hit hard at KES 7,500.",
  
  "baggy sweat pants": "Baggy and bold—perfect for chill days or urban fits. Get comfy for just KES 1,000.",
  "casual slim sweat pant": "Sleek meets soft. These slim sweatpants keep you comfy without slacking style. KES 1,800.",
  "michael jordan sweat pants": "Jumpman inspired, legacy approved. Michael Jordan Sweat Pants = KES 8,800 of iconic comfort.",
  
  "track pants": "Speed. Flow. Flex. Track Pants from Vortex keep you in motion and on point for KES 2,900.",
  
  "denim jeans": "Built to last, styled to stun—our classic Denim Jeans are a must-have. KES 6,000.",
  "woovitpl jeans": "Switch it up with Woovitpl Jeans—slim, smart, and effortlessly cool. Only KES 3,300.",
  "fashionista jeansk": "Turn heads with Fashionista Jeans—runway energy meets street elegance. Yours for KES 5,500.",
  "skinny reaped jeans": "Rugged. Fitted. Unfiltered. Skinny Reaped Jeans break the rules at KES 4,700.",
  
  "gym shorts": "Lightweight. Powerful. Ready to move. Gym Shorts go for KES 1,000.",
  "fashion shirt": "A rare combo—light shirt, big drip. Grab this Fashion Shirt at just KES 500.",
  "denim shorts": "Cool off in Denim Shorts—rugged summer staples at KES 2,500.",
  "rash guard shorts": "Smooth, flexible, and water-friendly—Rash Guard Shorts are all about motion. KES 900." ,
   "adidas bugatti": "Power. Prestige. Performance. Adidas Bugatti is your luxury speed drip—KES 15,000 and worth every step.",
  "adidas f-50": "Speed legends lace up in the Adidas F-50. Built for control, made for icons. KES 8,000.",
  "ifikk boots": "Bold. Rugged. Unstoppable. IFIKK Boots bring wild energy to any terrain. KES 15,500.",
  "mercurial-vapour": "Blazing fast, featherlight. Mercurial Vapour drops ⚡ for KES 9,600.",
  
  "jordan-4 retro": "Classic flavor, timeless fire. Jordan 4 Retro serves clean drip for KES 5,000.",
  "air jordan": "Sky-high swagger. OG culture. The Air Jordan hits at KES 8,800.",
  "j4 gold": "Gold standard drip. J4 Gold flexes elite energy for KES 10,500.",
  "j4-nike": "Hype certified. The J4 Nike pairs legacy with heat. KES 8,900.",
  
  "j1 gray": "Understated killer. J1 Gray matches any fit—KES 4,000.",
  "j1": "Street staple. Hooper’s classic. J1 on deck for KES 5,000.",
  "jordan pink": "Soft look, hard flex. Jordan Pink brings the calm fire at KES 3,500.",
  
  "air-force elite": "Clean cuts, all-white respect. Air Force Elite stays undefeated. KES 3,900.",
  "air force 1": "Forever fresh. The icon: Air Force 1—KES 4,500.",
  
  "bbl wons": "Soft landings, loud fashion. BBL Wons balance cute and cool. KES 2,400.",
  "skechers sneakers": "Soft soles, heavy flex. Skechers Sneakers walk with cloud comfort—KES 3,000.",
  "retro sneakerst": "Old school. New flame. Retro Sneakers drop vintage energy for KES 7,900.",
  
  "unisex boots": "Universal steppers. Style + strength = Unisex Boots at KES 6,000.",
  "ankle boots": "Snug, sleek, and street-hardened. Ankle Boots ride out for KES 7,000.",
  "hike ankle boots": "Trek ready. City tested. Hike Ankle Boots go hard for KES 3,500.",
  "cold water bootst": "Stormproof. Heat loaded. Cold Water Boots drop at KES 9,900.",
  
  "loafer bestious": "Elite chill. Loafer Bestious = premium comfort at KES 6,000.",
  "faux leather loafers": "Sleek luxury with zero cruelty. Faux Leather Loafers are KES 7,700 of pure sauce.",
  "oxford's loafers": "Timeless class. Oxfords meet loafers for sharp charm. KES 6,500.",
  "heren loafers": "Low-key kings. HEREN Loafers bring value vibes at KES 1,900.",

  // 🔥 Bonus trendy footwear
  "crocs": "Foam legends. Drip mode: comfort. Crocs keep it funky-fresh. KES 2,000–4,500 (varies by style).",
  "yeezy slides": "Slipper game redefined. Yeezy Slides = minimalist heat. KES 5,500.",
  "nike dunk low": "Skate heritage. Street culture. Nike Dunk Low pops at KES 6,800.",
  "air max 270": "That heel bubble bounce. Air Max 270 delivers comfy heat—KES 7,900.",
  "balenciaga triple s": "Chunky flex. Heavyweight style. Balenciaga Triple S stomps in at KES 19,900.",
  "vans old skool": "Skate-core classic. Vans Old Skool fits all lanes. KES 4,200.",
  "converse chuck 70": "Old soul. New drip. Converse Chuck 70 brings rebel retro energy for KES 5,000.",
  "timberland boots": "Built tough. Styled tougher. Timbs drop cold at KES 10,000." , 
    "xiaomi pods": "Clean sound. Beast battery. Xiaomi Pods scream premium—KES 30,000.",
  "rich ripple led display pods": "Lit sound. Literal lights. Rich Ripple Pods flex at KES 14,000.",
  "huawei buds pro 4 earphone anc": "Silence the noise, feel the flow. Huawei Buds Pro 4 bring elite ANC for KES 17,100.",
  "huawei buds pro": "Sleek. Smart. Sonic. Huawei Buds Pro deliver KES 13,600 vibes.",
  "gamer headphones": "Immersive fire. Built for battles. Gamer Headphones lock in at KES 11,000.",
  "stereo headphones": "Deep bass. Crystal highs. Stereo Headphones go hard at KES 21,800.",
  "generic headphones": "Budget beast. Generic Headphones = surprising clarity at KES 20,900.",
  "blu spark headphones": "Spark your sound. Blu Spark Headphones light up the wave—KES 12,300.",
  
  // 🔥 WATCHES
  "iwc watch": "Luxury on your wrist. The IWC Watch speaks power—KES 100,000.",
  "olev's watch": "Clean time. Cold flex. Olev’s Watch rides in at KES 73,700.",
  "generic wrist watch": "Solid, subtle, stylish. Generic Wrist Watch tags KES 95,100.",
  "rolex golden": "Gold drips royalty. Rolex Golden reigns at KES 200,700.",

  // 🌟 BONUS ACCESSORIES
  "jbl headphones": "The sound of bass gods. JBL Headphones bring the boom—KES 18,000.",
  "jbl go speaker": "Pocket boom box. JBL Go blasts real vibes—KES 6,000.",
  "apple airpods pro": "Noise off. Clarity on. AirPods Pro dominate for KES 35,000.",
  "samsung galaxy buds live": "Bean-shaped brilliance. Galaxy Buds Live drop style and sound—KES 16,500.",
  
  "power bank 20000mah": "Stay charged. 20,000mAh Power Bank = full grind energy—KES 4,200.",
  "usb c charger": "Fast. Reliable. Universal. USB-C Chargers for KES 1,800.",
   "cold": "Cozy wool sweaters and puffer jackets keep you warm. Insulated boots start at KES 3,000. Gloves and beanies complete the look.",
  "hot": "Lightweight linen shirts and cotton shorts keep you cool. Sandals or loafers from KES 1,500. Hats and sunglasses protect you from the sun.",
  "rainy": "Waterproof jackets and hooded raincoats shield from rain. Rubber boots start at KES 2,200. Don’t forget a compact umbrella.",
  "windy": "Windbreakers with adjustable hoods block gusts. Layer with long-sleeve tees and denim jeans. Lightweight scarves add style.",
  "formal event": "Tailored suits and dress shirts start at KES 8,000. Polished leather shoes and matching belts elevate your look. Pocket squares add class.",
  "casual outing": "Graphic tees and slim-fit jeans keep it comfy. Sneakers from KES 2,500. Add a baseball cap or snapback for vibe.",
  "beach day": "Swim trunks and tank tops keep it easy. Flip-flops from KES 1,000. Sunglasses and wide-brimmed hats add sun protection.",
  "office wear": "Button-down shirts with chinos or pencil skirts. Loafers or low heels from KES 3,000+. A sleek watch completes the professional look.",
  "party night": "Bold printed shirts or sequined tops. Skinny jeans or leather pants pair well. Statement heels or boots from KES 4,000. Flashy rings or bracelets.",
  "sporty": "Moisture-wicking tees and shorts for movement. Running shoes with good grip from KES 3,500. Headbands or caps help with sweat.",
  "travel": "Lightweight layers for comfort. Cargo pants with pockets. Comfortable walking shoes and crossbody bags for essentials." ,
   "date night": "Smart casual with fitted shirts and dark jeans. Elegant dresses or skirts for her. Dress shoes or heels start at KES 4,000. Subtle jewelry to impress.",
  "wedding": "Classic suits and tuxedos for men, starting at KES 15,000. Elegant gowns and cocktail dresses for women. Dress shoes, clutches, and fine jewelry complete the look.",
  "funeral": "Conservative black suits or dresses. Minimal accessories. Closed shoes and somber tones to show respect.",
  "gym": "Breathable tank tops and leggings or shorts. Supportive trainers with good cushioning from KES 3,000. Sweatbands or caps to keep cool.",
  "hiking": "Durable cargo pants and moisture-wicking shirts. Hiking boots from KES 5,000. Backpacks and hats for sun and insect protection.",
  "cocktail party": "Stylish cocktail dresses or blazers with dress pants. Statement shoes and elegant clutches. Bold but tasteful accessories.",
  "music festival": "Comfortable graphic tees and denim shorts or skirts. Sneakers or boots for long walks. Funky sunglasses and hats for style and sun protection.",
  "business meeting": "Sharp suits or blazers with neat trousers. Dress shirts and polished leather shoes. Minimalist watches and ties for men.",
  "brunch": "Casual chic with flowy dresses or button-down shirts and chinos. Comfortable loafers or sandals. Sunglasses and light jewelry.",

  
  "diamond chain": "Ice around your neck. Diamond Chain brings cold heat—KES 50,000+.",
  "fashion rings": "Hands speak style. Fashion Rings start from KES 1,200.",
  "bracelets": "Add wrist detail. Bracelets range from KES 800–2,500.",
  
  "black sunglasses": "Mystery. Style. Shade. Black Sunnies go for KES 2,800.",
  "aviator sunglasses": "Pilot energy. Vintage vibes. Aviators at KES 3,500.",
  "fanny pack": "Utility = drip. Fanny Pack rides urban for KES 2,200.",
  "mini side bag": "Compact. Clean. Class. Mini Side Bags drop in at KES 3,000.",
  "leather backpack": "Boss build. Leather Backpack holds it down for KES 7,800."
};

  // ... Add more items as per your fashion inventory


const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const inputRef = useRef(null);
  const chatEndRef = useRef(null);

  // Scroll to the bottom of the chat window
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Match input with fashion responses
  const getBotResponse = (userText) => {
    const lower = userText.toLowerCase();

    // Look for exact matches from the fashion responses
    for (const key in fashionResponses) {
      if (lower.includes(key)) {
        return fashionResponses[key];
      }
    }

    // Default responses for brand-related questions or general queries
    if (lower.includes("vortex")) {
      return `Vortex is a premium fashion brand offering exclusive collections that merge luxury with everyday wear. Visit our website for the latest drop!`;
    }

    if (lower.includes("fashion")) {
      return `Fashion is our language. Ask me about any trends, apparel, or accessories! I got the best styles waiting for you.`;
    }

    if (lower.includes("clothing")) {
      return `We curate only the finest clothing. From comfy hoodies to elegant watches, explore our collection for every season and occasion.`;
    }

    if (lower.includes("shop") || lower.includes("buy")) {
      return `Ready to shop? Check out our collection on Vortex.com or tap 'Shop Now' to see the hottest drops!`;
    }

    // Example fallback for common queries
    if (lower.includes("contact") || lower.includes("reach")) {
      return `You can reach us at 07979790889, 0787788896, or 077898878. Or email us via our contact form on the website!`;
    }

    if (lower.includes("blog") || lower.includes("trends")) {
      return `Our **Blog Page** has all the latest style guides, trends, and fashion tips. Stay updated with the latest looks at [YourBlogLinkHere]!`;
    }

    if (lower.includes("signup") || lower.includes("register")) {
      return `Sign up today and unlock exclusive deals! Simply click **'Sign Up'** and fill in your details. Welcome to the Vortex!`;
    }

    if (lower.includes("login") || lower.includes("signin")) {
      return `Sign in to your account and start shopping. Don’t have one? Click **'Sign Up'** to get started!`;
    }

    // Fallback response for unrecognized queries
    return "I'm still learning, but I’m here to help. Ask me about our fashion, store, or anything related to Vortex!";
  };

  const handleSend = async () => {
    if (!userInput.trim()) return;

    // User message
    const userMessage = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);

    // Get bot response
    let botReply = getBotResponse(userInput);

    // Fallback to DeepSeek API for complex responses (e.g., conversational topics or advanced inquiries)
    if (!botReply) {
      try {
        const response = await fetch("https://api.deepseek.com/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer YOUR_API_KEY`, // replace with actual API key
          },
          body: JSON.stringify({
            model: "deepseek-chat",
            messages: [{ role: "user", content: userInput }],
          }),
        });

        const data = await response.json();
        botReply = data?.choices?.[0]?.message?.content || "Sorry, I didn't get that.";
      } catch (error) {
        botReply = "Oops, something went wrong. Please try again later!";
        console.error("DeepSeek API error:", error);
      }
    }

    // Bot message
    const botMessage = { sender: "bot", text: botReply };
    setMessages((prev) => [...prev, botMessage]);
    setUserInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chatbot-widget-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">Vortex Fashion Assistant</div>
          <div className="chatbot-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbot-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="chatbot-input-area">
            <input
              type="text"
              className="chatbot-input"
              ref={inputRef}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me about fashion..."
            />
            <button className="chatbot-send-btn" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      )}
      <button 
        className="chatbot-toggle-btn" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "×" : "💬"}
      </button>
    </div>
  );
};

export default ChatbotWidget;