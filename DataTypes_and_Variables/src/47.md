Функции массивов, такие как `Arrays.sort()` и `Arrays.copyOf()`, являются частью класса `java.util.Arrays` и предоставляют удобные методы для работы с массивами в Java. Давайте рассмотрим, как их можно использовать.

### Arrays.sort()

Метод `Arrays.sort()` используется для сортировки элементов массива. Он перегружен для различных типов массивов (int[], double[], Object[] и т.д.).

Пример использования `Arrays.sort()` для сортировки массива целых чисел:

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] numbers = {5, 3, 7, 1, 4};

        // Сортировка массива
        Arrays.sort(numbers);

        // Вывод отсортированного массива
        System.out.println("Отсортированный массив: " + Arrays.toString(numbers));
    }
}
```

В данном примере массив `numbers` будет отсортирован в порядке возрастания.

### Arrays.copyOf()

Метод `Arrays.copyOf()` используется для копирования части массива в новый массив. Он также перегружен для различных типов массивов. Метод принимает исходный массив и новую длину в качестве параметров.

Пример использования `Arrays.copyOf()` для копирования массива:

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] originalArray = {1, 2, 3, 4, 5};

        // Копирование первых 3 элементов массива
        int[] copiedArray = Arrays.copyOf(originalArray, 3);

        // Вывод копированного массива
        System.out.println("Копированный массив: " + Arrays.toString(copiedArray));
    }
}
```

В этом примере новый массив `copiedArray` будет содержать первые три элемента из `originalArray`.

### Важно знать

- Метод `Arrays.sort()` сортирует массив "на месте", то есть изменяет исходный массив.
- Метод `Arrays.copyOf()` создает новый массив, поэтому исходный массив не изменяется.
- Для сортировки объектов массивов (например, массивов строк) можно использовать `Arrays.sort()` с компаратором, если нужна специфическая логика сортировки.

Пример сортировки массива объектов с использованием компаратора:

```java
import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) {
        String[] names = {"John", "Alice", "Bob"};

        // Сортировка массива строк в обратном порядке (по убыванию)
        Arrays.sort(names, Comparator.reverseOrder());

        // Вывод отсортированного массива
        System.out.println("Отсортированный массив: " + Arrays.toString(names));
    }
}
```

В этом примере строки будут отсортированы в обратном алфавитном порядке.

Надеюсь, это поможет вам при работе с массивами в Java!