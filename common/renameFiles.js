const fs = require("fs");
const path = require("path");

const renameFiles = (directory) => {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error("Ошибка чтения папки:", err);
      return;
    }

    files.forEach((file) => {
      const oldPath = path.join(directory, file);
      const newPath = path.join(directory, file + ".md");

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(`Ошибка переименования файла ${file}:`, err);
        } else {
          console.log(
            `Файл ${file} успешно переименован в ${path.basename(newPath)}`
          );
        }
      });
    });
  });
};

renameFiles("Basic_syntax/src")