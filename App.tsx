import React, { useState, useMemo, useRef } from 'react';
import { READING_MODULES } from './constants';
import TextPanel from './components/TextPanel';
import QuestionItem from './components/QuestionItem';
import Reading1Table from './components/Reading1Table';
import Button from './components/Button';
import { 
  BookOpen, 
  CheckCircle, 
  ChevronRight, 
  RotateCcw, 
  Award, 
  Search, 
  Table, 
  ArrowRightLeft, 
  FileText,
  Check,
  RotateCw
} from 'lucide-react';

const App: React.FC = () => {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  // Track submission state per section ID
  const [submittedSections, setSubmittedSections] = useState<Record<string, boolean>>({});
  // Track active tab per module ID
  const [activeTabPerModule, setActiveTabPerModule] = useState<Record<number, string>>({
    1: 'r1-vocab',
    2: 'r2-vocab'
  });
  const quizPanelRef = useRef<HTMLDivElement>(null);

  const activeModule = READING_MODULES[activeModuleIndex];

  // Active section for current module
  const activeSectionId = activeTabPerModule[activeModule.id] || activeModule.sections[0]?.id;
  const activeSectionIndex = Math.max(0, activeModule.sections.findIndex(s => s.id === activeSectionId));
  const activeSection = activeModule.sections[activeSectionIndex] || activeModule.sections[0];
  const isCurrentTabSubmitted = !!submittedSections[activeSection.id];

  // Helper to get score of any section
  const getSectionScore = (sectionId: string) => {
    const sec = activeModule.sections.find(s => s.id === sectionId);
    if (!sec) return { correct: 0, total: 0 };
    let correct = 0;
    const total = sec.questions.length;
    sec.questions.forEach(q => {
      const userAns = (answers[q.id] || "").trim().toLowerCase();
      let isCorrect = false;
      if (Array.isArray(q.correctAnswer)) {
        isCorrect = q.correctAnswer.some(a => a.toLowerCase() === userAns);
      } else {
        isCorrect = q.correctAnswer.toLowerCase() === userAns;
      }
      if (isCorrect) correct++;
    });
    return { correct, total };
  };

  const getSectionAnsweredCount = (sectionId: string) => {
    const sec = activeModule.sections.find(s => s.id === sectionId);
    if (!sec) return 0;
    return sec.questions.filter(q => (answers[q.id] || "").trim().length > 0).length;
  };

  // Current tab score
  const currentTabScore = useMemo(() => {
    return getSectionScore(activeSection.id);
  }, [activeSection, answers]);

  const currentTabAnsweredCount = useMemo(() => {
    return getSectionAnsweredCount(activeSection.id);
  }, [activeSection, answers]);

  // Overall module score
  const moduleScore = useMemo(() => {
    let correct = 0;
    let total = 0;
    activeModule.sections.forEach(section => {
      const sc = getSectionScore(section.id);
      correct += sc.correct;
      total += sc.total;
    });
    return { correct, total };
  }, [activeModule, answers]);

  const allModuleSectionsSubmitted = useMemo(() => {
    return activeModule.sections.every(s => !!submittedSections[s.id]);
  }, [activeModule, submittedSections]);

  const anyModuleSectionSubmitted = useMemo(() => {
    return activeModule.sections.some(s => !!submittedSections[s.id]);
  }, [activeModule, submittedSections]);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSwitchTab = (sectionId: string) => {
    setActiveTabPerModule(prev => ({ ...prev, [activeModule.id]: sectionId }));
    quizPanelRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitCurrentTab = () => {
    setSubmittedSections(prev => ({ ...prev, [activeSection.id]: true }));
    setTimeout(() => {
      quizPanelRef.current?.scrollTo({ top: quizPanelRef.current.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  const handleResetCurrentTab = () => {
    const newAnswers = { ...answers };
    activeSection.questions.forEach(q => {
      delete newAnswers[q.id];
    });
    setAnswers(newAnswers);
    setSubmittedSections(prev => ({ ...prev, [activeSection.id]: false }));
    quizPanelRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetEntireReading = () => {
    const newAnswers = { ...answers };
    const newSubmitted = { ...submittedSections };
    activeModule.sections.forEach(s => {
      s.questions.forEach(q => delete newAnswers[q.id]);
      delete newSubmitted[s.id];
    });
    setAnswers(newAnswers);
    setSubmittedSections(newSubmitted);
    quizPanelRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextSectionInModule = activeModule.sections[activeSectionIndex + 1];

  const renderTabIcon = (sectionId: string) => {
    switch (sectionId) {
      case 'r1-vocab':
        return <Search className="w-4 h-4 md:w-5 md:h-5 text-indigo-600 flex-shrink-0" />;
      case 'r1-table':
        return <Table className="w-4 h-4 md:w-5 md:h-5 text-indigo-600 flex-shrink-0" />;
      case 'r2-vocab':
        return <ArrowRightLeft className="w-4 h-4 md:w-5 md:h-5 text-indigo-600 flex-shrink-0" />;
      case 'r2-notes':
        return <FileText className="w-4 h-4 md:w-5 md:h-5 text-indigo-600 flex-shrink-0" />;
      default:
        return <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-indigo-600 flex-shrink-0" />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 md:px-8 flex-shrink-0 z-10 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="bg-indigo-600 p-2 rounded-lg shadow-sm">
             <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">Great Places to Be</h1>
            <p className="text-xs text-slate-500 font-medium hidden sm:block">IELTS Reading Practice • Unit 1</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 bg-slate-100 p-1.5 rounded-lg border border-slate-200">
           {READING_MODULES.map((mod, idx) => (
             <button
              key={mod.id}
              onClick={() => {
                setActiveModuleIndex(idx);
                quizPanelRef.current?.scrollTo({ top: 0 });
              }}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-md transition-all ${
                activeModuleIndex === idx 
                ? 'bg-white text-indigo-700 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
              }`}
             >
               {`Reading ${idx + 1}`}
             </button>
           ))}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden flex flex-col md:flex-row relative">
        
        {/* Left Panel: Reading Text */}
        <div className="md:w-1/2 h-1/2 md:h-full border-b md:border-b-0 md:border-r border-slate-200 bg-white relative z-0">
           <TextPanel 
             title={activeModule.title} 
             content={activeModule.content}
             image={activeModule.image}
           />
        </div>

        {/* Right Panel: Questions & Tabs */}
        <div className="md:w-1/2 h-1/2 md:h-full bg-slate-50 flex flex-col relative">
          
          {/* Tabs Navigation Header */}
          <div className="bg-white border-b border-slate-200 px-4 md:px-6 py-3 flex-shrink-0 z-10 shadow-xs">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div 
                className="flex items-center space-x-1.5 bg-slate-100/90 p-1 rounded-xl border border-slate-200/80 w-full sm:w-auto"
                role="tablist"
                aria-label={`Reading ${activeModule.id} Tabs`}
              >
                {activeModule.sections.map((section, idx) => {
                  const isActive = section.id === activeSection.id;
                  const isSubmitted = !!submittedSections[section.id];
                  const secScore = getSectionScore(section.id);
                  const answeredCount = getSectionAnsweredCount(section.id);

                  return (
                    <button
                      key={section.id}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => handleSwitchTab(section.id)}
                      className={`flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-sm md:text-base font-semibold transition-all ${
                        isActive
                          ? 'bg-white text-indigo-700 shadow-sm ring-1 ring-slate-200/80'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                      }`}
                    >
                      {renderTabIcon(section.id)}
                      <span className="truncate">{section.title}</span>
                      
                      {isSubmitted ? (
                        <span className={`ml-1.5 text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                          secScore.correct === secScore.total 
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                            : 'bg-amber-100 text-amber-800 border border-amber-200'
                        }`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                          {secScore.correct}/{secScore.total}
                        </span>
                      ) : (
                        <span className="ml-1.5 text-xs font-medium px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-600">
                          {answeredCount}/{section.questions.length}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Module Progress pill */}
              <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                <span>Reading {activeModule.id} Progress:</span>
                <span className="text-indigo-700 font-bold">
                  {activeModule.sections.filter(s => !!submittedSections[s.id]).length} / {activeModule.sections.length} completed
                </span>
              </div>
            </div>
          </div>

          {/* Tab Content Panel */}
          <div ref={quizPanelRef} className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 pb-32">
            <div className="max-w-3xl mx-auto">
              
              {/* Instructions banner */}
              <div className="mb-6 bg-slate-100/70 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
                <div className="bg-indigo-100 text-indigo-700 p-1.5 rounded-lg mt-0.5 flex-shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800 mb-0.5">Instructions</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Read the passage on the left and complete this section. Click <span className="font-semibold text-indigo-600">'Check Answers'</span> when you're ready to check your responses.
                  </p>
                </div>
              </div>

              {/* Active Section / Tab Render */}
              {activeSection.id === 'r1-table' ? (
                <Reading1Table 
                  key={activeSection.id} 
                  section={activeSection} 
                  answers={answers} 
                  onChange={handleAnswerChange} 
                  isSubmitted={isCurrentTabSubmitted} 
                />
              ) : (
                <div key={activeSection.id} className="mb-8">
                  <div className="flex items-center space-x-3 mb-4 border-b border-slate-200 pb-2">
                    <div className="w-1.5 h-6 bg-indigo-600 rounded-full"></div>
                    <h4 className="text-xl font-bold text-slate-800">{activeSection.title}</h4>
                  </div>
                  
                  <div className="bg-indigo-50 text-indigo-900 px-4 py-3 rounded-lg mb-6 text-base md:text-lg border border-indigo-100 shadow-xs">
                    <span className="font-bold">Task: </span>
                    {activeSection.instruction}
                  </div>

                  <div className="space-y-4">
                    {activeSection.questions.map(q => (
                      <QuestionItem
                        key={q.id}
                        question={q}
                        value={answers[q.id] || ''}
                        onChange={(val) => handleAnswerChange(q.id, val)}
                        isSubmitted={isCurrentTabSubmitted}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer / Action Bar */}
          <div className="absolute bottom-0 right-0 left-0 bg-white/95 backdrop-blur-sm border-t border-slate-200 p-4 md:p-5 flex items-center justify-between z-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
             <div className="flex items-center gap-3">
                {isCurrentTabSubmitted ? (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <span className={`flex items-center text-base md:text-lg font-bold ${
                      currentTabScore.correct === currentTabScore.total ? 'text-emerald-600' : 'text-slate-800'
                    }`}>
                      <Award className="w-5 h-5 mr-1.5 text-indigo-600" />
                      {activeSection.title}: {currentTabScore.correct} / {currentTabScore.total}
                    </span>
                    {allModuleSectionsSubmitted && (
                      <span className="text-xs md:text-sm font-semibold bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md border border-indigo-100">
                        Total: {moduleScore.correct} / {moduleScore.total}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="text-sm md:text-base font-medium text-slate-600">
                    <span className="font-semibold text-slate-800">{currentTabAnsweredCount}</span> of {activeSection.questions.length} questions answered
                  </div>
                )}
             </div>
             
             <div className="flex items-center space-x-2 md:space-x-3">
               {isCurrentTabSubmitted ? (
                 <>
                   <Button onClick={handleResetCurrentTab} variant="outline" size="md">
                     <RotateCcw className="w-4 h-4 mr-1.5" />
                     Try Again
                   </Button>

                   {/* Next tab button within current module */}
                   {nextSectionInModule && (
                     <Button 
                       onClick={() => handleSwitchTab(nextSectionInModule.id)} 
                       variant="primary" 
                       size="md"
                     >
                       Next: {nextSectionInModule.title}
                       <ChevronRight className="w-4 h-4 ml-1.5" />
                     </Button>
                   )}

                   {/* Next reading button when on the last tab */}
                   {!nextSectionInModule && activeModuleIndex < READING_MODULES.length - 1 && (
                     <Button 
                       onClick={() => {
                         setActiveModuleIndex(prev => prev + 1);
                         quizPanelRef.current?.scrollTo({ top: 0 });
                       }} 
                       variant="secondary"
                       size="md"
                     >
                       Next Reading
                       <ChevronRight className="w-4 h-4 ml-1.5" />
                     </Button>
                   )}
                 </>
               ) : (
                 <Button onClick={handleSubmitCurrentTab} variant="primary" size="md">
                   <CheckCircle className="w-4 h-4 mr-1.5" />
                   Check Answers
                 </Button>
               )}

               {/* Optional reset all reading if any tab is submitted */}
               {anyModuleSectionSubmitted && (
                 <button
                   onClick={handleResetEntireReading}
                   title="Reset all tabs in this reading"
                   className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                 >
                   <RotateCw className="w-4 h-4" />
                 </button>
               )}
             </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;