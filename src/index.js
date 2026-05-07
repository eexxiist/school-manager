import { parseCommand } from './command-parser.js';

const readline = require('readline');

async function processLineByLine() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  for await (const line of rl) {
    const {entity, action, args} = parseCommand(line);
    if (entity === 'trainee') {
      handleTraineeCogitmmand(action, args);
    } else if (entity === 'course') {
      handleCourseCommand(action, args);
    }
  }
}
processLineByLine()