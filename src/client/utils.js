export async function loadTextFromFile(filePath) {
  const sourceText = fetch(filePath)
    .then((response) => response.text())
    .then((text) => text);
  return sourceText;
}
