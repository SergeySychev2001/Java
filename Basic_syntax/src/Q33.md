В Java для сравнения объектов можно использовать либо метод `equals()`, либо оператор `==`. Однако они выполняют разные функции и используются в различных контекстах. Рассмотрим разницу между ними.

### Оператор `==`

Оператор `==` используется для сравнения примитивных типов и ссылок на объекты. Его поведение различается в зависимости от типа операндов.

1. **Примитивные типы**:
   Для примитивных типов (например, `int`, `char`, `boolean`) оператор `==` сравнивает значения.
   ```java
   int a = 5;
   int b = 5;
   if (a == b) {
       System.out.println("a and b are equal"); // True, поскольку сравниваются значения
   }
   ```

2. **Ссылочные типы**:
   Для ссылочных типов оператор `==` сравнивает ссылки, то есть проверяет, указывают ли две переменные на один и тот же объект в памяти.
   ```java
   String s1 = new String("hello");
   String s2 = new String("hello");
   if (s1 == s2) {
       System.out.println("s1 and s2 are the same object"); // False, поскольку это разные объекты в памяти
   }
   String s3 = s1;
   if (s1 == s3) {
       System.out.println("s1 and s3 are the same object"); // True, поскольку ссылки указывают на один и тот же объект
   }
   ```

### Метод `equals()`

Метод `equals()` используется для сравнения содержимого объектов. Он определен в классе `Object` и может быть переопределен в пользовательских классах для обеспечения логического равенства объектов.

1. **Реализация в классе `Object`**:
   В классе `Object` метод `equals()` по умолчанию реализован как сравнение ссылок, аналогично оператору `==`.
   ```java
   public boolean equals(Object obj) {
       return (this == obj);
   }
   ```

2. **Переопределение метода `equals()`**:
   Для пользовательских классов метод `equals()` обычно переопределяется для сравнения содержимого объектов.
   ```java
   public class Person {
       private String name;
       private int age;

       public Person(String name, int age) {
           this.name = name;
           this.age = age;
       }

       @Override
       public boolean equals(Object obj) {
           if (this == obj) return true;
           if (obj == null || getClass() != obj.getClass()) return false;
           Person person = (Person) obj;
           return age == person.age && Objects.equals(name, person.name);
       }
   }

   public static void main(String[] args) {
       Person p1 = new Person("John", 25);
       Person p2 = new Person("John", 25);
       if (p1.equals(p2)) {
           System.out.println("p1 and p2 are equal"); // True, поскольку содержимое объектов одинаково
       }
   }
   ```

### Основные различия

1. **Сравнение ссылок vs. содержимого**:
   - `==` сравнивает ссылки на объекты, проверяя, указывают ли они на один и тот же объект.
   - `equals()` сравнивает содержимое объектов, определяя логическое равенство.

2. **Примитивные типы**:
   - `==` можно использовать для сравнения значений примитивных типов.
   - `equals()` не применяется к примитивным типам.

3. **Переопределение**:
   - Поведение `==` не может быть изменено.
   - Поведение `equals()` можно переопределить для сравнения содержимого объектов.

### Пример использования

```java
public class ComparisonExample {
    public static void main(String[] args) {
        String str1 = new String("hello");
        String str2 = new String("hello");

        // Сравнение ссылок
        if (str1 == str2) {
            System.out.println("str1 and str2 are the same object");
        } else {
            System.out.println("str1 and str2 are different objects"); // Этот вывод будет напечатан
        }

        // Сравнение содержимого
        if (str1.equals(str2)) {
            System.out.println("str1 and str2 have the same content"); // Этот вывод будет напечатан
        } else {
            System.out.println("str1 and str2 have different content");
        }
    }
}
```

В этом примере оператор `==` показывает, что `str1` и `str2` — это разные объекты, в то время как метод `equals()` подтверждает, что их содержимое одинаково.