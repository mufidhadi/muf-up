const fs = require('fs');

const content = fs.readFileSync('src/constants.ts', 'utf8');

// We need to parse the TS file, find lessons without codeExample, and add a quiz.
// Since it's a JS object exported as a string, we can use regex or AST.
// A simpler way is to use regex to find lessons.

let modifiedContent = content;

const lessonRegex = /({\s*id:\s*'[^']+',\s*title:\s*'([^']+)',\s*content:\s*`[\s\S]*?`)(,\s*codeExample:\s*`[\s\S]*?`|,\s*codeExample:\s*'[\s\S]*?')?(\s*})/g;

let match;
let count = 0;
const lessonsWithQuiz = [];

modifiedContent = modifiedContent.replace(lessonRegex, (fullMatch, p1, title, p3, p4) => {
  if (!p3) { // No codeExample
    count++;
    lessonsWithQuiz.push(title);
    const quizStr = `,
          quiz: {
            question: "Apa poin utama dari materi '" + title + "'?",
            options: [
              "Memahami konsep dasar dan penerapannya.",
              "Menghafal semua sintaks tanpa pemahaman.",
              "Melewati materi ini karena tidak penting.",
              "Hanya fokus pada penulisan kode yang rumit."
            ],
            correctAnswerIndex: 0
          }`;
    return p1 + quizStr + p4;
  }
  return fullMatch;
});

fs.writeFileSync('src/constants.ts', modifiedContent, 'utf8');
console.log("Added quizzes to " + count + " lessons.");
console.log(JSON.stringify(lessonsWithQuiz, null, 2));
