### Anleitung für Parametrisierte Tests mit JUnit 5

#### Ziel der Übung

Diese Anleitung zeigt, wie parametrisierte Tests mit JUnit 5 durchgeführt werden können, um wiederholte Testfälle effizient zu strukturieren. Das Beispiel testet die Additionsfunktion einer einfachen `Calculator`-Klasse.

#### Beispiel: Parametrisierte Tests mit JUnit 5

**Calculator-Klasse**:
```java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}
```

**JUnit-5-Test mit Parametrisierung**:
```java
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

public class CalculatorTest {

    @ParameterizedTest
    @CsvSource({
        "1, 1, 2",
        "2, 3, 5",
        "3, 3, 6",
        "100, 200, 300"
    })
    public void testAdd(int a, int b, int expectedResult) {
        Calculator calculator = new Calculator();
        assertEquals(expectedResult, calculator.add(a, b));
    }
}
```

#### Optimierungen

1. **Testen unterschiedlicher Eingaben**: Verwenden Sie `@CsvSource`, um verschiedene Werte für die Parameter zu definieren. Jede Zeile stellt einen separaten Testlauf dar, der verschiedene Eingaben an die Methode übergibt.
2. **Vereinfachung des Testprozesses**: Parametrisierte Tests reduzieren Redundanz, da mehrere Eingaben in einem einzigen Testfall überprüft werden können, anstatt mehrere Testmethoden zu schreiben.

#### Abhängigkeiten in Maven

Um parametrisierte Tests mit JUnit 5 zu ermöglichen, müssen die entsprechenden Abhängigkeiten in der `pom.xml`-Datei hinzugefügt werden:

```xml
<dependencies>
    <!-- JUnit Jupiter API -->
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-api</artifactId>
        <version>5.8.2</version>
        <scope>test</scope>
    </dependency>
    <!-- JUnit Jupiter Engine -->
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-engine</artifactId>
        <version>5.8.2</version>
        <scope>test</scope>
    </dependency>
    <!-- JUnit Jupiter Params for Parameterized Tests -->
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-params</artifactId>
        <version>5.8.2</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```

Fügen Sie diese Abhängigkeiten in den `<dependencies>`-Abschnitt Ihrer `pom.xml` ein, um parametrisierte Tests mit JUnit 5 zu unterstützen.

#### Maven-Befehle

Führen Sie die Tests mit folgendem Befehl aus:

```bash
mvn test
```

Maven führt die Tests automatisch aus und zeigt die Ergebnisse in der Konsole an.

---

### Erweiterungen

1. **Erweiterte Parametrisierung**: Nutzen Sie weitere Annotations wie `@MethodSource`, um komplexere Testdatenquellen bereitzustellen.
2. **Negative Tests**: Erweitern Sie die Tests, um ungültige Eingaben und erwartete Fehler zu testen.
3. **Reporting**: Integrieren Sie Test-Reporting-Plugins (z. B. `Surefire` oder `JaCoCo`), um erweiterte Berichte über Testergebnisse und Testabdeckung zu erhalten.
