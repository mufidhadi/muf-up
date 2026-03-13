import fs from 'fs';

const content = fs.readFileSync('src/constants.ts', 'utf8');
const lines = content.split('\n');
let currentLessonTitle = '';
const lessonsWithQuiz = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const titleMatch = line.match(/title:\s*'([^']+)'/);
  if (titleMatch) {
    if (line.startsWith('          title:')) {
      currentLessonTitle = titleMatch[1];
    }
  }
  if (line.includes('quiz: {')) {
    lessonsWithQuiz.push(currentLessonTitle);
  }
}

console.log(lessonsWithQuiz.map(t => "- " + t).join('\n'));
