export function parseCommand(userInput) {
  const cutStr = userInput.trim().split(' ');
  const obj = { entity: cutStr[0], action: cutStr[1], args: cutStr.slice(2)};
  return obj;
}