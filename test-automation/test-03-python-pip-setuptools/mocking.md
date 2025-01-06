### Testanleitung für Mocking und Stubbing in Python

#### Ziel der Anleitung

Diese Anleitung zeigt, wie Mocking und Stubbing mit der **`unittest.mock`**-Bibliothek in Python verwendet werden können, um das Verhalten von Abhängigkeiten in automatisierten Tests zu simulieren. Durch das Isolieren von Abhängigkeiten kann der Code zuverlässig getestet werden, ohne auf externe Systeme oder unvorhersehbare Ressourcen angewiesen zu sein.

#### Voraussetzungen

- Python ist installiert
- Grundlegende Kenntnisse in Python und Unit-Testing
- Ein bestehendes Python-Projekt mit `unittest` als Test-Framework

---

### Schritte zur Implementierung von Mocking und Stubbing

#### 1. **Importieren der `unittest.mock`-Bibliothek**
Zuerst muss die `unittest.mock`-Bibliothek importiert werden, um Mocks und Stubs zu verwenden:
```python
from unittest.mock import Mock, patch
```

#### 2. **Erstellen eines Mock-Objekts**
Ein Mock-Objekt simuliert die Funktionalität einer Klasse oder Methode. Es kann so konfiguriert werden, dass es vordefinierte Werte zurückgibt.
```python
my_mock = Mock()
```

#### 3. **Stubbing einer Methode**
Das Verhalten einer Methode kann durch Stubbing vorgegeben werden:
```python
my_mock.my_method.return_value = 'stubbed value'
```

#### 4. **Schreiben des Tests mit Mocks**
In einem Test kann das Mock-Objekt verwendet werden, um zu überprüfen, wie eine Methode aufgerufen wurde.
```python
def test_my_function():
    result = my_function(my_mock)
    my_mock.my_method.assert_called_once()
```

#### 5. **Mocking mit `patch`**
Mit der `patch`-Funktion kann ein Objekt im Anwendungscode direkt gemockt werden. Dies eignet sich, wenn echte Abhängigkeiten im Test umgangen werden sollen.
```python
with patch('path.to.ClassName') as MockedClass:
    MockedClass.return_value.my_method.return_value = 'some value'
    # Testlogik
```

#### 6. **Assertions zur Verifikation von Mock-Aufrufen**
Mocks bieten eine Vielzahl von Assertion-Methoden, um zu überprüfen, wie und ob sie aufgerufen wurden:
```python
my_mock.my_method.assert_called_with('expected_argument')
```

#### 7. **Tests ausführen**
Tests werden wie gewohnt mit dem `unittest`-Testrunner ausgeführt:
```bash
python -m unittest test_module.py
```

---

### Beispiel: Mocking eines Bestell-Services

Angenommen, es gibt eine `Calculator`-Klasse und einen `OrderService`, der den `Calculator` verwendet:

**calculator.py**:
```python
class Calculator:
    def add(self, a, b):
        return a + b
```

**order_service.py**:
```python
from calculator import Calculator

class OrderService:
    def __init__(self):
        self.calculator = Calculator()

    def total_order(self, prices):
        return self.calculator.add(sum(prices), 10)
```

### Test mit Mocking

In einem Test kann die `Calculator`-Abhängigkeit durch ein Mock-Objekt ersetzt werden:

**test_order_service.py**:
```python
import unittest
from unittest.mock import Mock
from order_service import OrderService

class TestOrderService(unittest.TestCase):
    def test_total_order(self):
        # Mocking der Calculator-Abhängigkeit
        calculator_mock = Mock()
        calculator_mock.add.return_value = 30

        # Stubbing im Service
        order_service = OrderService()
        order_service.calculator = calculator_mock

        # Testlogik
        result = order_service.total_order([10, 10])
        self.assertEqual(result, 30)

        # Verifikation des Mock-Aufrufs
        calculator_mock.add.assert_called_with(20, 10)

if __name__ == '__main__':
    unittest.main()
```

Dieser Test überprüft, ob der `Calculator` korrekt gemockt und aufgerufen wird.

---

### Mocks vs. Stubs

#### Mock:
- **Mock**-Objekte simulieren Abhängigkeiten und zeichnen auf, wie sie verwendet wurden (z. B. wie oft Methoden aufgerufen wurden).
- **Ziel**: Überprüfen, wie Objekte und Methoden im Test verwendet werden.

#### Stub:
- **Stubs** liefern vordefinierte Antworten, zeichnen aber keine Informationen über die Aufrufe auf.
- **Ziel**: Einfaches Simulieren von Rückgabewerten ohne Prüfung der Verwendung.

**Mock-Beispiel**:
```python
from unittest.mock import Mock
mock = Mock()
mock.method.return_value = 'mocked value'
mock.method()  # Gibt 'mocked value' zurück
mock.method.assert_called_once()
```

**Stub-Beispiel**:
```python
class Stub:
    def method(self):
        return 'stubbed value'

stub = Stub()
print(stub.method())  # Gibt 'stubbed value' zurück
```

---

### Zusammenfassung

- **Mocks**: Simulieren das Verhalten eines Objekts und protokollieren, wie es verwendet wird. Sie eignen sich besonders gut für das Testen von Interaktionen und Abhängigkeiten.
- **Stubs**: Simulieren lediglich die Rückgabewerte und sind nützlich, wenn das Verhalten isoliert getestet werden soll, ohne sich um die Aufrufdetails zu kümmern.

Beide Techniken sind wichtige Werkzeuge zur Automatisierung von Tests und helfen, externe Abhängigkeiten zu isolieren, um den Fokus auf die getestete Funktionalität zu legen.