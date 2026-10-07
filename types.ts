export enum QuestionType {
  TEXT_INPUT = 'TEXT_INPUT',
  MATCHING = 'MATCHING',
  DROPDOWN = 'DROPDOWN'
}

export interface Question {
  id: string;
  type: QuestionType;
  instruction: string;
  label?: string; // specific label for the input (e.g., "1", "2")
  correctAnswer: string | string[]; // Can be multiple valid answers
  options?: { value: string; label: string }[]; // For matching/dropdown
  placeholder?: string;
  context?: string; // Preceding text for fill-in-the-blank
  postContext?: string; // Following text for fill-in-the-blank
  explanation?: string; // Explanation shown after submission
}

export interface Section {
  id: string;
  title: string;
  instruction: string;
  questions: Question[];
}

export interface ReadingModule {
  id: number;
  title: string;
  image?: string; // URL to the image
  content: string; // The reading passage
  sections: Section[];
}