В Java существует несколько методов для сравнения строк. Вот наиболее часто используемые из них:

1. **Метод `equals()`**:
    Этот метод сравнивает две строки на предмет точного совпадения символов с учетом регистра.

    ```java
    String str1 = "Hello";
    String str2 = "hello";
    boolean result = str1.equals(str2);  // false
    ```

2. **Метод `equalsIgnoreCase()`**:
    Этот метод сравнивает две строки на предмет точного совпадения символов, игнорируя регистр.

    ```java
    String str1 = "Hello";
    String str2 = "hello";
    boolean result = str1.equalsIgnoreCase(str2);  // true
    ```

3. **Метод `compareTo()`**:
    Этот метод лексикографически сравнивает две строки. Он возвращает отрицательное число, ноль или положительное число, если вызывающая строка меньше, равна или больше переданной строки соответственно.

    ```java
    String str1 = "Hello";
    String str2 = "World";
    int result = str1.compareTo(str2);  // result < 0, т.к. "Hello" меньше "World"
    ```

4. **Метод `compareToIgnoreCase()`**:
    Этот метод лексикографически сравнивает две строки, игнорируя регистр.

    ```java
    String str1 = "Hello";
    String str2 = "hello";
    int result = str1.compareToIgnoreCase(str2);  // result == 0
    ```

5. **Метод `contentEquals()`**:
    Этот метод сравнивает строку с объектом типа `CharSequence` на предмет точного совпадения символов. Он может быть полезен для сравнения строки с объектом типа `StringBuffer` или `StringBuilder`.

    ```java
    String str1 = "Hello";
    StringBuilder str2 = new StringBuilder("Hello");
    boolean result = str1.contentEquals(str2);  // true
    ```

6. **Метод `regionMatches()`**:
    Этот метод сравнивает подстроки в строках. Он имеет две версии: одна учитывает регистр, другая — нет.

    ```java
    String str1 = "HelloWorld";
    String str2 = "WorldHello";
    boolean result = str1.regionMatches(5, str2, 0, 5);  // true, "World" == "World"
    ```

    С учетом регистра:
    
    ```java
    boolean resultIgnoreCase = str1.regionMatches(true, 5, str2, 0, 5);  // true
    ```

Применение каждого из этих методов зависит от конкретных задач и требований вашего приложения.