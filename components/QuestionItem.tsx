import React from 'react';
import { Question, QuestionType } from '../types';
import { Check, X, Info } from 'lucide-react';

interface QuestionItemProps {
  question: Question;
  value: string;
  onChange: (val: string) => void;
  isSubmitted: boolean;
  variant?: 'card' | 'plain';
  hideLabel?: boolean;
  hideContext?: boolean;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ 
  question, 
  value, 
  onChange, 
  isSubmitted,
  variant = 'card',
  hideLabel = false,
  hideContext = false
}) => {
  
  const isCorrect = React.useMemo(() => {
    if (!isSubmitted) return undefined;
    const normalizedValue = value.trim().toLowerCase();
    
    if (Array.isArray(question.correctAnswer)) {
      return question.correctAnswer.some(ans => ans.toLowerCase() === normalizedValue);
    }
    return question.correctAnswer.toLowerCase() === normalizedValue;
  }, [value, isSubmitted, question.correctAnswer]);

  const renderFeedbackIcon = () => {
    if (!isSubmitted) return null;
    if (isCorrect) {
      return <Check className="w-5 h-5 text-green-500 ml-1 flex-shrink-0 animate-in zoom-in duration-300" />;
    }
    return <X className="w-5 h-5 text-red-500 ml-1 flex-shrink-0 animate-in zoom-in duration-300" />;
  };

  const renderCorrectAnswerText = () => {
    if (!isSubmitted || isCorrect) return null;
    return (
      <div className="mt-1 text-red-600 font-medium text-sm bg-red-50 inline-block px-2 py-0.5 rounded border border-red-100 self-start">
        Correct: {Array.isArray(question.correctAnswer) ? question.correctAnswer[0] : question.correctAnswer}
      </div>
    );
  };

  const renderExplanation = () => {
    if (!isSubmitted || !question.explanation) return null;
    return (
      <div className="mt-3 pt-2 border-t border-slate-100 flex items-start gap-2 animate-in slide-in-from-top-1 duration-300">
        <div className="bg-indigo-50 p-0.5 rounded-full mt-0.5 flex-shrink-0">
          <Info className="w-3.5 h-3.5 text-indigo-600" />
        </div>
        <div className="text-sm text-slate-600 leading-relaxed">
          <span className="font-semibold text-indigo-700 block mb-0.5 text-[10px] uppercase tracking-wider">Explanation</span>
          {question.explanation}
        </div>
      </div>
    );
  };

  // Styles based on variant
  const containerClass = variant === 'plain'
    ? "flex flex-col min-w-[120px]"
    : "group flex flex-col mb-6 p-6 bg-white rounded-xl border border-slate-200 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-300";

  const inputBaseClass = variant === 'plain'
    ? "w-full min-w-[100px] px-2 py-1 text-base border-b-2 bg-transparent focus:bg-white/50"
    : "min-w-[180px] px-3 py-2 rounded-lg border-2 text-base font-medium";

  const labelClass = variant === 'plain'
    ? "font-bold text-slate-800 mr-2 text-base"
    : "font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md text-base min-w-[2rem] text-center shadow-sm";

  if (question.type === QuestionType.DROPDOWN) {
    return (
      <div className={containerClass}>
        <div className="flex flex-col gap-2">
          {!hideLabel && (
             <div className="flex items-center justify-between">
              <span className="font-bold text-slate-800 text-base">{question.label}</span>
              {renderFeedbackIcon()}
            </div>
          )}
          
          <div className="relative">
            <select
              value={value}
              onChange={(e) => onChange(e.target.value)}
              disabled={isSubmitted}
              className={`
                appearance-none block w-full rounded-lg border-2 py-2 px-3 text-base font-medium
                transition-all duration-200 cursor-pointer
                focus:outline-none focus:ring-4 focus:ring-indigo-500/10
                disabled:opacity-90 disabled:cursor-default
                ${
                  isSubmitted 
                    ? isCorrect 
                      ? "bg-green-50 border-green-200 text-green-900" 
                      : "bg-red-50 border-red-200 text-red-900" 
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700 focus:border-indigo-500 focus:bg-white"
                }
              `}
            >
              <option value="" disabled>Select match...</option>
              {question.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {/* ... arrow icon ... */}
             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
            </div>
          </div>
          
          {renderCorrectAnswerText()}
        </div>
        {renderExplanation()}
      </div>
    );
  }

  // TEXT_INPUT
  return (
    <div className={containerClass}>
      <div className="flex flex-col">
        <div className={`flex flex-wrap items-center gap-x-2 gap-y-2 text-base leading-relaxed text-slate-700 ${variant === 'plain' ? 'items-baseline' : ''}`}>
          
          {!hideLabel && question.label && (
            <span className={labelClass}>
              {question.label}
            </span>
          )}
          
          {!hideContext && question.context && <span className={variant === 'plain' ? 'mr-1' : ''}>{question.context}</span>}
          
          <div className="relative inline-flex flex-col flex-grow md:flex-grow-0">
             <div className="flex items-center w-full">
               <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={isSubmitted}
                placeholder={question.placeholder}
                className={`
                  ${inputBaseClass}
                  transition-all outline-none disabled:opacity-90
                  ${isSubmitted
                    ? isCorrect
                      ? "bg-green-50 border-green-200 text-green-800"
                      : "bg-red-50 border-red-200 text-red-800"
                    : variant === 'plain' 
                      ? "border-slate-400 focus:border-indigo-600 placeholder:text-slate-400"
                      : "bg-slate-50 border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 text-slate-800 placeholder:text-slate-400 hover:border-slate-300"
                  }
                `}
              />
              {renderFeedbackIcon()}
             </div>
          </div>
          
          {!hideContext && question.postContext && <span className={variant === 'plain' ? 'ml-1' : ''}>{question.postContext}</span>}
        </div>
        
        {renderCorrectAnswerText()}
      </div>
      {renderExplanation()}
    </div>
  );
};

export default QuestionItem;