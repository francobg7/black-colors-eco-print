import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqItems: FAQItem[];
  className?: string;
}

const FAQSection = ({ 
  title = "Preguntas Frecuentes", 
  subtitle = "Encuentra respuestas a las consultas más comunes sobre nuestros productos y servicios",
  faqItems, 
  className = "" 
}: FAQSectionProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setOpenItems([]); // Cerrar todos los items cuando se expande la sección
    }
  };

  return (
    <section className={`py-12 bg-white ${className}`}>
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Collapsible Header */}
        <div className="text-center mb-8">
          <button
            onClick={toggleSection}
            className="group w-full max-w-2xl mx-auto focus:outline-none"
          >
            <div className="flex items-center justify-center space-x-4 p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all duration-300 border border-gray-200 hover:border-emerald-300">
              <div className="text-center flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                  {title}
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  {subtitle}
                </p>
              </div>
              <div className="flex-shrink-0">
                {isExpanded ? (
                  <ChevronUp className="h-6 w-6 text-emerald-600" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-400 group-hover:text-emerald-600" />
                )}
              </div>
            </div>
          </button>
        </div>

        {/* FAQ Content - Collapsible */}
        {isExpanded && (
          <div className="animate-in slide-in-from-top-4 duration-500">
            {/* FAQ Items */}
            <div className="space-y-4 mb-12">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`border-b border-gray-200 transition-all duration-300 ${
                    openItems.includes(index) ? 'border-emerald-200' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full py-6 text-left flex items-center justify-between focus:outline-none group"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4 leading-relaxed group-hover:text-emerald-700 transition-colors duration-300">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0 ml-4 transition-all duration-300">
                      {openItems.includes(index) ? (
                        <ChevronUp className="h-5 w-5 text-emerald-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-emerald-600" />
                      )}
                    </div>
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="pb-6 animate-in slide-in-from-top-2 duration-300">
                      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-lg text-gray-700 mb-6">¿No encontraste lo que buscabas?</p>
              <a
                href="https://wa.me/595982343128?text=Hola, tengo una consulta sobre sus servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Contacta a nuestros especialistas
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
