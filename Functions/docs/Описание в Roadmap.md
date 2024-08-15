Метод/функция - это способ выполнения некоторой задачи. Аналогично, в программировании, например в Java, метод функции - это блок кода, написанный для многократного выполнения определенной задачи. Он обеспечивает многократное использование кода. Мы пишем функцию один раз и используем ее много раз. Это работает по принципу «DRY», то есть «Не повторяйся».

1. Определить функцию - datatype function_name(parameters){body}
2. Вызов функции - имя_функции(значения)
3. Лямбда-функции - x -> x + 1
4. Передать функцию как переменную -
```java
    final Consumer<Integer> simpleReference1 = App::someMethod1;  
    simpleReference1.accept(1);
```

Посетите следующие ресурсы, чтобы узнать больше:

1. [Methods/Functions in Java](https://www.javatpoint.com/method-in-java)
2. [Learn Functions/Methods in Java](https://www.w3schools.com/java/java_methods.asp)
3. [Functions / Methods in Java](https://www.youtube.com/watch?v=vvanI8NRlSI)
4. [Lambda functions](https://www.w3schools.com/java/java_lambda.asp)
5. [Passing functions as a variable](https://northcoder.com/post/passing-java-functions-in-variables/)