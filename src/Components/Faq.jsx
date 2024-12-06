import { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { 
      question: "What is a media planning and buying agency?", 
      answer: "A media planning and buying agency specializes in strategizing, selecting, and purchasing media space and time on behalf of clients. They ensure optimal ad placements to target the right audience while maximizing ROI." 
    },
    { 
      question: "What is an advertising agency?", 
      answer: "An advertising agency is a service-based company that creates, plans, and manages advertising campaigns for businesses. They handle everything from designing ad creatives to executing multi-platform campaigns." 
    },
    { 
      question: "Why should you advertise with BlinkBeats?", 
      answer: "BlinkBeats offers tailored advertising solutions designed to meet your brand’s unique needs. With a team of industry experts, innovative strategies, and data-driven insights, BlinkBeats ensures effective campaign execution." 
    },
    { 
      question: "Which is the best ad agency in India?", 
      answer: "The best ad agency in India depends on your specific needs and goals. BlinkBeats stands out due to its proven track record, innovative campaigns, and ability to cater to both large and small businesses." 
    },
    { 
      question: "How can I stay updated with the latest news and trends in advertising?", 
      answer: "You can stay updated by subscribing to industry newsletters, following advertising blogs, joining professional networks, attending webinars, and following leading agencies like BlinkBeats on social media." 
    },
    { 
      question: "Which types of advertising services does BlinkBeats offer?", 
      answer: "BlinkBeats offers a range of services including digital advertising, print media campaigns, social media marketing, influencer collaborations, outdoor advertising, and content creation." 
    },
    { 
      question: "Can BlinkBeats handle both online and offline advertising campaigns?", 
      answer: "Yes, BlinkBeats is equipped to manage both online and offline campaigns, ensuring a cohesive and effective strategy across all platforms to meet your brand’s goals." 
    },
    { 
      question: "What sets BlinkBeats apart from other advertising agencies?", 
      answer: "BlinkBeats stands out due to its customer-centric approach, cutting-edge tools, creative storytelling, and a deep understanding of both traditional and digital advertising landscapes." 
    },
    { 
      question: "Which is the Best Magazine Advertising Agency In India?", 
      answer: "BlinkBeats is a top choice for magazine advertising in India, offering access to leading publications and creating impactful ad designs tailored for print media." 
    },
    { 
      question: "Which is the Best Television Advertising Agency In India?", 
      answer: "BlinkBeats excels in creating compelling television campaigns that captivate audiences and drive brand awareness across popular TV channels." 
    },
    { 
      question: "Which is the Best Newspaper Advertising Agency In India?", 
      answer: "BlinkBeats is renowned for crafting effective newspaper ad campaigns, ensuring visibility in leading publications nationwide." 
    },
    { 
      question: "Best Cinema Advertising Agency In India", 
      answer: "BlinkBeats specializes in cinema advertising, delivering engaging ads that reach moviegoers in theaters across India." 
    },
    { 
      question: "Which is the best outdoor advertising agency in India?", 
      answer: "BlinkBeats is a leading outdoor advertising agency, providing impactful billboard, transit, and other outdoor media solutions." 
    },
    { 
      question: "Which Is The Best Radio Advertising Agency in India?", 
      answer: "BlinkBeats creates effective radio ad campaigns with powerful messaging that resonates with listeners across major stations." 
    },
    { 
      question: "Which is the best Airport Advertising Agency in India?", 
      answer: "BlinkBeats offers premium airport advertising solutions, targeting high-value audiences in India’s busiest airports." 
    },
    { 
      question: "Which is the best Influencer Advertising Agency in India?", 
      answer: "BlinkBeats connects brands with top influencers, creating authentic and impactful influencer marketing campaigns." 
    },
    { 
      question: "Which is the best mall branding and advertising agency In India?", 
      answer: "BlinkBeats delivers creative mall branding campaigns, capturing the attention of shoppers in premium retail spaces." 
    },
    { 
      question: "Best Sports Branding And Marketing Agency In India", 
      answer: "BlinkBeats is a leader in sports branding, helping brands create impactful partnerships and campaigns in the sports industry." 
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container max-w-4xl mx-auto p-6 sm:p-8 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white"
          >
            <button
              className="faq-question w-full text-left flex justify-between items-center p-4 font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              onClick={() => toggleFaq(index)}
            >
              <span>{faq.question}</span>
              <span className="text-lg">{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="faq-answer p-4 bg-gray-50 text-gray-600 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
