В Java классы `String`, `StringBuilder` и `StringBuffer` используются для работы со строками, но у них есть важные различия, которые делают каждый из них подходящим для различных сценариев. Рассмотрим их особенности, различия и примеры использования.

### String

- **Неизменяемость**: Объекты класса `String` являются неизменяемыми, то есть после создания строка не может быть изменена.
- **Потокобезопасность**: Не требуется, так как объекты `String` неизменяемы.
- **Использование**: Подходит для работы со статическими строками и текстами, которые не требуют изменения.

#### Пример:
```java
public class Main {
    public static void main(String[] args) {
        String str = "Hello";
        str += " World";  // Создается новый объект строки
        System.out.println(str);  // Output: Hello World
    }
}
```

### StringBuilder

- **Изменяемость**: Объекты класса `StringBuilder` являются изменяемыми, то есть содержимое строки может быть изменено после создания объекта.
- **Потокобезопасность**: Не является потокобезопасным. Не рекомендуется использовать в многопоточных средах без дополнительной синхронизации.
- **Использование**: Подходит для случаев, когда требуется часто изменять содержимое строки в однопоточных приложениях.

#### Пример:
```java
public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello");
        sb.append(" World");
        System.out.println(sb.toString());  // Output: Hello World
    }
}
```

### StringBuffer

- **Изменяемость**: Объекты класса `StringBuffer` также являются изменяемыми.
- **Потокобезопасность**: Является потокобезопасным, так как все методы `StringBuffer` синхронизированы.
- **Использование**: Подходит для случаев, когда требуется изменять содержимое строки в многопоточных приложениях.

#### Пример:
```java
public class Main {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Hello");
        sb.append(" World");
        System.out.println(sb.toString());  // Output: Hello World
    }
}
```

### Сравнение и выбор

| Характеристика     | String                | StringBuilder         | StringBuffer          |
|--------------------|-----------------------|-----------------------|-----------------------|
| Изменяемость       | Нет                   | Да                    | Да                    |
| Потокобезопасность | Не требуется          | Нет                   | Да                    |
| Производительность | Высокая при неизменности | Высокая при изменениях | Ниже, чем у `StringBuilder` |
| Использование      | Статические строки    | Однопоточные приложения | Многопоточные приложения |

### Когда использовать что

- **String**: Используйте `String` для неизменяемых строк, например, для констант или когда не планируется изменять строку.
- **StringBuilder**: Используйте `StringBuilder` в однопоточных приложениях, когда требуется частое изменение строк.
- **StringBuffer**: Используйте `StringBuffer` в многопоточных приложениях, когда требуется изменять строки и нужна потокобезопасность.

### Пример использования всех трех

```java
public class Main {
    public static void main(String[] args) {
        // String
        String str = "Hello";
        str += " World";
        System.out.println("String: " + str);

        // StringBuilder
        StringBuilder sb = new StringBuilder("Hello");
        sb.append(" World");
        System.out.println("StringBuilder: " + sb.toString());

        // StringBuffer
        StringBuffer sbf = new StringBuffer("Hello");
        sbf.append(" World");
        System.out.println("StringBuffer: " + sbf.toString());
    }
}
```

Вывод:
```
String: Hello World
StringBuilder: Hello World
StringBuffer: Hello World
```

Таким образом, `String`, `StringBuilder` и `StringBuffer` предоставляют различные возможности для работы со строками в зависимости от требований к изменяемости и потокобезопасности.