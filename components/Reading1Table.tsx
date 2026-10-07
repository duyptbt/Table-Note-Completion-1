import React from 'react';
import { Section } from '../types';
import QuestionItem from './QuestionItem';

interface Reading1TableProps {
  section: Section;
  answers: Record<string, string>;
  onChange: (id: string, val: string) => void;
  isSubmitted: boolean;
}

const Reading1Table: React.FC<Reading1TableProps> = ({ section, answers, onChange, isSubmitted }) => {
  const getQuestion = (id: string) => section.questions.find(q => q.id === id);

  const renderCellQuestion = (id: string) => {
    const q = getQuestion(id);
    if (!q) return null;
    return (
      <QuestionItem
        question={q}
        value={answers[q.id] || ''}
        onChange={(val) => onChange(q.id, val)}
        isSubmitted={isSubmitted}
        variant="plain"
        hideLabel={true}
        hideContext={true}
      />
    );
  };

  return (
    <div className="mb-10">
      <div className="flex items-center space-x-3 mb-4 border-b border-slate-200 pb-2">
        <div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
        <h4 className="text-xl font-bold text-slate-800">{section.title}</h4>
      </div>
      
      <div className="bg-indigo-50 text-indigo-900 px-4 py-3 rounded-lg mb-6 text-lg border border-indigo-100 shadow-sm">
        <span className="font-bold">Task: </span>
        {section.instruction}
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-300 shadow-sm">
        <table className="w-full text-base min-w-[700px]">
          <thead>
            <tr className="bg-slate-100 text-slate-800 border-b border-slate-300">
              <th className="p-4 text-left font-bold w-1/6 border-r border-slate-300">City</th>
              <th className="p-4 text-left font-bold w-1/6 border-r border-slate-300">Overall position in survey</th>
              <th className="p-4 text-left font-bold w-1/3 border-r border-slate-300">Perceived advantages</th>
              <th className="p-4 text-left font-bold w-1/3">Perceived disadvantages</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-300 bg-white">
            {/* London Row */}
            <tr>
              <td className="p-4 font-bold text-slate-800 align-top border-r border-slate-300 bg-slate-50/50">London</td>
              <td className="p-4 align-top border-r border-slate-300">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">1</span>
                  {renderCellQuestion('q1_london_pos')}
                </div>
              </td>
              <td className="p-4 align-top border-r border-slate-300">
                <ul className="list-disc pl-5 space-y-3 text-slate-700">
                  <li>
                    Is more <span className="underline decoration-slate-400 underline-offset-2">well-known</span> than the other cities.
                  </li>
                  <li>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span>Has excellent</span>
                      <span className="font-bold text-slate-900">2</span>
                      {renderCellQuestion('q1_london_adv')}
                      <span>opportunities.</span>
                    </div>
                  </li>
                </ul>
              </td>
              <td className="p-4 align-top">
                <div className="flex flex-wrap items-baseline gap-2 text-slate-700">
                  <span>Is very</span>
                  <span className="font-bold text-slate-900">3</span>
                  {renderCellQuestion('q1_london_dis')}
                  <span>.</span>
                </div>
              </td>
            </tr>

            {/* Sydney Row */}
            <tr>
              <td className="p-4 font-bold text-slate-800 align-top border-r border-slate-300 bg-slate-50/50">Sydney</td>
              <td className="p-4 align-top border-r border-slate-300 text-slate-700">
                Second
              </td>
              <td className="p-4 align-top border-r border-slate-300">
                <ul className="list-disc pl-5 space-y-3 text-slate-700">
                  <li>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span>Residents are the</span>
                      <span className="font-bold text-slate-900">4</span>
                      {renderCellQuestion('q1_sydney_adv1')}
                      <span>.</span>
                    </div>
                  </li>
                  <li>
                    Has the best <span className="underline decoration-slate-400 underline-offset-2">quality of life</span>.
                  </li>
                  <li>
                     <div className="flex flex-wrap items-baseline gap-2">
                      <span>Has the most pleasant</span>
                      <span className="font-bold text-slate-900">5</span>
                      {renderCellQuestion('q1_sydney_adv2')}
                      <span>.</span>
                    </div>
                  </li>
                </ul>
              </td>
              <td className="p-4 align-top text-slate-700">
                 <span className="underline decoration-slate-400 underline-offset-2">Not many</span> things to see.
              </td>
            </tr>

            {/* Paris Row */}
            <tr>
              <td className="p-4 font-bold text-slate-800 align-top border-r border-slate-300 bg-slate-50/50">Paris</td>
              <td className="p-4 align-top border-r border-slate-300">
                 <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">6</span>
                  {renderCellQuestion('q1_paris_pos')}
                </div>
              </td>
              <td className="p-4 align-top border-r border-slate-300">
                 <ul className="list-disc pl-5 space-y-3 text-slate-700">
                  <li>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span>Is more</span>
                      <span className="font-bold text-slate-900">7</span>
                      {renderCellQuestion('q1_paris_adv')}
                      <span>than other cities.</span>
                    </div>
                  </li>
                </ul>
              </td>
              <td className="p-4 align-top">
                 <div className="flex flex-wrap items-baseline gap-2 text-slate-700">
                  <span>Has <span className="underline decoration-slate-400 underline-offset-2">a lot</span> of</span>
                  <span className="font-bold text-slate-900">8</span>
                  {renderCellQuestion('q1_paris_dis')}
                  <span>.</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reading1Table;