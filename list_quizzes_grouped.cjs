const fs = require('fs');
const content = fs.readFileSync('src/constants.ts', 'utf8');
const lines = content.split('\n');

let currentModule = '';
let currentLesson = '';
const grouped = {};

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  const moduleMatch = line.match(/title:\s*'(\d+\.\s+[^']+)'/);
  if (moduleMatch && line.startsWith('      title:')) {
    currentModule = moduleMatch[1];
    grouped[currentModule] = [];
  }

  const lessonMatch = line.match(/title:\s*'([^']+)'/);
  if (lessonMatch && line.startsWith('          title:')) {
    currentLesson = lessonMatch[1];
  }

  if (line.includes('quiz: {')) {
    if (currentModule && currentLesson) {
      grouped[currentModule].push(currentLesson);
    }
  }
}

for (const [mod, lessons] of Object.entries(grouped)) {
  if (lessons.length > 0) {
    console.log(`- **${mod}**`);
    for (const lesson of lessons) {
      console.log(`  - ${lesson}`);
    }
  }
}
