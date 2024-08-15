`ArrayList` - это класс в Java, который реализует интерфейс `List` и предоставляет динамический массив, т.е. массив изменяемого размера. Он входит в пакет `java.util`. Давайте разберем, как объявить и использовать `ArrayList`.

### Объявление `ArrayList`

Для создания объекта `ArrayList`, вы можете использовать следующую синтаксис.

1. **Импорт класса:**
   В начале файла нужно импортировать класс `ArrayList`:
   
   ```java
   import java.util.ArrayList;
   ```

2. **Объявление и создание экземпляра:**
   Объявление и инициализация `ArrayList` для хранения объектов определенного типа, например, строк:

   ```java
   ArrayList<String> list = new ArrayList<>();
   ```

### Примеры использования

1. **Добавление элементов:**
   Добавление элементов в `ArrayList` с помощью метода `add()`:

   ```java
   list.add("Apple");
   list.add("Banana");
   list.add("Cherry");
   ```

2. **Получение элементов:**
   Получение элемента по индексу с помощью метода `get()`:

   ```java
   String fruit = list.get(1); // Получаем элемент "Banana"
   System.out.println(fruit);
   ```

3. **Изменение элементов:**
   Замена элемента на определенной позиции с помощью метода `set()`:

   ```java
   list.set(1, "Blueberry"); // Заменяем "Banana" на "Blueberry"
   ```

4. **Удаление элементов:**
   Удаление элемента по индексу с помощью метода `remove()`:

   ```java
   list.remove(2); // Удаляем элемент "Cherry"
   ```

5. **Проверка размера:**
   Получение размера `ArrayList` с помощью метода `size()`:

   ```java
   int size = list.size(); // Получаем размер списка
   System.out.println(size);
   ```

6. **Итерация по элементам:**
   Итерация по элементам с использованием цикла `for-each`:

   ```java
   for (String fruit : list) {
       System.out.println(fruit);
   }
   ```

Вот полный пример, демонстрирующий вышеописанные операции:

```java
import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        // Создаем ArrayList для хранения строк
        ArrayList<String> list = new ArrayList<>();
        
        // Добавляем элементы
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");
        
        // Получаем элемент
        String fruit = list.get(1);
        System.out.println("Second element: " + fruit); // Output: Banana
        
        // Изменяем элемент
        list.set(1, "Blueberry");
        
        // Удаляем элемент
        list.remove(2); // Удаляет "Cherry"
        
        // Проверяем размер
        int size = list.size();
        System.out.println("Size: " + size); // Output: 2
        
        // Итерация по элементам
        for (String f : list) {
            System.out.println(f);
        }
        // Output:
        // Apple
        // Blueberry
    }
}
```

### Дополнительная информация

- `ArrayList` позволяет хранить `null` значения.
- Методы `add`, `get`, и `set` выполняются за постоянное время, в худшем случае метод `remove` может выполняться за линейное время.
- Вы можете создать `ArrayList` с начальной емкостью, чтобы избежать частого переразмера массива:

  ```java
  ArrayList<Integer> numbers = new ArrayList<>(20);
  ```

Эти основные операции и методы помогут вам эффективно использовать `ArrayList` в Java.