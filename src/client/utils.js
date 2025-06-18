export async function loadTextFromFile(filePath) {
  const sourceText = fetch(filePath)
    .then((response) => response.text())
    .then((text) => text);
  return sourceText;
}

export async function loadBinaryFromFile(filePath) {
  const sourceBuffer = fetch(filePath)
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => arrayBuffer);
  return sourceBuffer;
}