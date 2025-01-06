### Übungsanleitung: Python-Tests mit unittest

#### Ziel der Übung

Diese Übung zeigt, wie Unit-Tests in Python mit dem **unittest**-Framework geschrieben und ausgeführt werden. Unit-Tests sichern die Codequalität, indem sie Funktionen und Services auf Fehler prüfen.

#### Voraussetzungen

- Grundkenntnisse in Python
- Python installiert und konfiguriert
- Ein bestehendes Python-Projekt

### Schritte

### 1. **Multiplizierungsfunktion erstellen**

Erstelle eine einfache Funktion zur Multiplikation:

**calculator.py**:
```python
def multiply(a, b):
    return a * b
```

### 2. **Bestell-Service erstellen**

Ein Service zur Berechnung des Bestellwerts, der die `multiply`-Funktion verwendet:

**order_service.py**:
```python
from calculator import multiply

def order(price, quantity):
    return multiply(price, quantity)
```

### 3. **Unit Tests schreiben**

Schreibe Unit-Tests für beide Funktionen. Dabei wird geprüft, ob die Funktionen korrekt arbeiten.

**test_calculator.py**:
```python
import unittest
from calculator import multiply

class TestCalculator(unittest.TestCase):

    def test_multiply(self):
        self.assertEqual(multiply(2, 3), 6)
        self.assertEqual(multiply(-1, 5), -5)
        self.assertEqual(multiply(0, 100), 0)
```

**test_order_service.py**:
```python
import unittest
from order_service import order

class TestOrderService(unittest.TestCase):

    def test_order(self):
        self.assertEqual(order(2, 3), 6)
        self.assertEqual(order(10, 10), 100)
```

### 4. **Tests ausführen**

Die Tests können mit dem folgenden Befehl ausgeführt werden:
```bash
python -m unittest discover
```
Dieser Befehl durchsucht das Projektverzeichnis nach Testdateien und führt sie aus.

---

### Optimierungen und Erweiterungen:

1. **Weitere Testszenarien**:
    - Zusätzliche Testfälle für negative Zahlen, Nullwerte und andere Sonderfälle.
    - Testen von Fehlern wie ungültigen Eingaben (z. B. nicht-numerische Werte).

2. **Erweiterte Assertions**:
   Verwenden Sie andere Assertions wie `assertTrue`, `assertFalse`, oder `assertRaises`, um komplexere Testszenarien abzudecken:
   ```python
   with self.assertRaises(TypeError):
       multiply("a", 5)
   ```

3. **Test-Abdeckung mit Coverage**:
   Installieren Sie das **coverage**-Paket, um zu überprüfen, wie viel Prozent des Codes durch Tests abgedeckt sind:
   ```bash
   pip install coverage
   coverage run -m unittest discover
   coverage report
   ```

### Abschluss

Nach dieser Übung sollte klar sein, wie Unit-Tests in Python erstellt und ausgeführt werden. Tests sind entscheidend, um sicherzustellen, dass Änderungen am Code keine neuen Fehler einführen. Regelmäßige Tests verbessern die Zuverlässigkeit und Wartbarkeit des Codes.