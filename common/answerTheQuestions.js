const fs = require("fs");
const path = require("path");

const getPath = (...i) => path.join("..", ...i);

const getAnswer = async (prompt) => {
  const apiKey = "sk-xvZhE9znNcjEqlVKTuw2rgw7mPTFLzG8";
  const apiUrl = "https://api.proxyapi.ru/openai/v1/chat/completions";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };

  const data = {
    model: "gpt-4o",
    messages: [{ role: "user", content: `${prompt} (Java)` }],
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData.choices[0].message.content;
  } catch (error) {
    console.error("Ошибка при выполнении запроса к GPT API:", error);
    return "Произошла ошибка при попытке получить ответ от GPT.";
  }
};

const writeAnswerToFile = (answer, directory, file) => {
  fs.writeFile(getPath(directory, file), answer, (err) => {
    console.log(err);
    return;
  });
};

const getQuestions = (from, to) => {
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

    parsedData.forEach((i) => {
      getAnswer(i.value)
        .then((r) => {
          writeAnswerToFile(r, to, `${i.key}.md`);
        })
        .catch((err) => console.log(err));
    });
  });
};

getQuestions(
  "DataTypes_and_Variables/docs/Вопросы (GPT).md",
  "DataTypes_and_Variables/src"
);
