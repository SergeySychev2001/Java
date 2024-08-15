const fs = require("fs");
const path = require("path");

const getPath = (...i) => path.join(...i);

const parseQuestions = (from, to) => {
    fs.readFile(getPath(from), "utf-8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
  
      const parsedData = data.split("\n").map((i) => {
        const finded = i.match(/\d+/);
        return {
          key: finded[0],
          value: i.slice(finded.index + finded[0].length + 2),
        };
      });
  
      parsedData.forEach(i => {
        addTitle(getPath(to, `${i.key}.md`), i.value);
      })
    });
  };

const addTitle = (filePath, title) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
      
        const updatedContent = `# ${title}` + "\n" + "\n" + data;
      
        fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      });
}

parseQuestions("Basic_syntax/docs/Вопросы (GPT).md", "Basic_syntax/src")