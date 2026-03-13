export interface Quiz {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
  quiz?: Quiz;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Curriculum {
  id: string;
  title: string;
  description: string;
  modules: Module[];
}
