const fs = require('fs');

const content = fs.readFileSync('src/constants.ts', 'utf8');
const lines = content.split('\n');

const newLines = [];
let currentLessonTitle = '';
let hasCodeExample = false;
let insideLesson = false;
let lessonStartLine = -1;
let openBraces = 0;
let lessonBraceLevel = -1;

let count = 0;
const lessonsWithQuiz = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Check if we are entering a lesson object
  // A lesson object typically starts after `lessons: [`
  // But we can just look for `id:` and `title:`
  
  const titleMatch = line.match(/title:\s*'([^']+)'/);
  if (titleMatch && line.startsWith('          title:')) {
    currentLessonTitle = titleMatch[1];
    insideLesson = true;
    hasCodeExample = false;
  }

  if (insideLesson) {
    if (line.includes('codeExample:')) {
      hasCodeExample = true;
    }
    
    // If we hit the end of the lesson object
    // Usually it's `        },` or `        }`
    if (line.match(/^\s*},?$/) && line.length < 15) {
      if (!hasCodeExample) {
        // Inject quiz before this line
        const quizStr = `          quiz: {
            question: "Apa poin utama dari materi '" + ${JSON.stringify(currentLessonTitle)} + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          },`;
        newLines.push(quizStr);
        count++;
        lessonsWithQuiz.push(currentLessonTitle);
      }
      insideLesson = false;
    }
  }

  newLines.push(line);
}

fs.writeFileSync('src/constants.ts', newLines.join('\n'), 'utf8');
console.log("Added quizzes to " + count + " lessons.");
console.log(JSON.stringify(lessonsWithQuiz, null, 2));
