import React from 'react';

interface TextPanelProps {
  title: string;
  content: string;
  image?: string;
}

const TextPanel: React.FC<TextPanelProps> = ({ title, content, image }) => {
  // Simple heuristic to split paragraphs
  const paragraphs = content.split('\n\n');

  return (
    <div className="h-full overflow-y-auto custom-scrollbar bg-white p-6 md:p-8 shadow-inner">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 font-serif tracking-tight border-b pb-4">{title}</h2>
      
      {image && (
        <div className="mb-6 rounded-lg overflow-hidden shadow-md">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 sm:h-64 object-cover transition-transform duration-700 hover:scale-105" 
          />
        </div>
      )}

      <div className="prose prose-slate max-w-none">
        {paragraphs.map((para, idx) => (
          <p 
            key={idx} 
            className="mb-4 text-lg leading-relaxed text-slate-700 text-justify"
            dangerouslySetInnerHTML={{ __html: para }}
          />
        ))}
      </div>
    </div>
  );
};

export default TextPanel;