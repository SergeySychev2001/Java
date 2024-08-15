const fs = require('fs');
const path = require('path');

const directory = './путь_к_папке'; // Укажите путь к вашей папке здесь

fs.readdir(directory, (err, files) => {
    if (err) {
        console.error('Ошибка чтения папки:', err);
        return;
    }

    files.forEach((file, index) => {
        const oldPath = path.join(directory, file);
        const newPath = path.join(directory, `новое_имя_${index + 1}.txt`); // Формат нового имени файла

        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                console.error(`Ошибка переименования файла ${file}:`, err);
            } else {
                console.log(`Файл ${file} успешно переименован в ${path.basename(newPath)}`);
            }
        });
    });
});