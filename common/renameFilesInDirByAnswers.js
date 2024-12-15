const fs = require('fs').promises;
const path = require('path');

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Не указан путь к директории.");
  process.exit(1);
}

const directoryPath = path.join(__dirname, "..", args[0]);
const sourcePath = path.join(directoryPath, "Исходники");
const answersPath = path.join(directoryPath, "Документы", "Вопросы (GPT).md");
const filePattern = /./;

async function renameFilesInDirectory() {
  try {
    // Проверка существования файла с ответами
    await fs.access(answersPath);

    // Чтение и обработка ответов
    const data = await fs.readFile(answersPath, 'utf-8');
    const answers = [];

    const lines = data.split('\n');
    lines.forEach(line => {
      const match = line.match(/^(\d+)/);
      if (match) {
        const answerKey = match[1]; // Извлекаем только цифры из строки
        let str = line.replace(/^(\d+)\. /, `${answerKey}-`); // Убираем лишний формат
        if (str.endsWith("+")) {
          str = str.slice(0, -2); // Убираем "+", если есть
        }
        answers[parseInt(answerKey) - 1] = str.trim();
      }
    });

    // Проверка существования директории с исходниками
    await fs.access(sourcePath);

    // Получаем список файлов
    const files = await fs.readdir(sourcePath);

    for (const file of files) {
      const filePath = path.join(sourcePath, file);
      const fileStat = await fs.stat(filePath);

      if (fileStat.isFile() && file.match(filePattern)) {
        const match = file.match(/(\d+)/);
        if (match && match[1]) {
          const answerKey = match[1];
          const newFileName = `${answers[+answerKey - 1]}.md`;
          const newFilePath = path.join(sourcePath, newFileName);

          // Переименование файла
          await fs.rename(filePath, newFilePath);
          console.log(`Файл ${file} переименован в ${newFileName}`);
        }
      }
    }
  } catch (err) {
    console.error("Ошибка:", err);
  }
}

renameFilesInDirectory();
