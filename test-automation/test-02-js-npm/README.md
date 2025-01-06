### Übungsanleitung: JavaScript-Tests mit npm und Jest

#### Ziel der Übung

Ziel ist es, automatisierte Unit-Tests für JavaScript-Projekte zu erstellen und auszuführen, wobei die Testbibliothek **Jest** verwendet wird. Automatisierte Tests helfen dabei, Codequalität zu sichern, Fehler frühzeitig zu erkennen und kontinuierliche Integrationen zu unterstützen.

#### Voraussetzungen

- Grundlegende Kenntnisse in JavaScript und npm
- Node.js und npm sind bereits installiert
- Ein bestehendes JavaScript-Projekt oder die Bereitschaft, ein neues Projekt zu starten

### Schritte zur Implementierung und Testautomatisierung

### 1. **Installation von Jest**

Beginnen Sie mit der Installation von **Jest** als Entwicklungsabhängigkeit im Projekt:
```bash
npm install --save-dev jest
```
**Jest** ist eine leistungsstarke JavaScript-Testplattform, die einfache Konfigurationen, Mocks und Test-Coverage unterstützt. Es wird als Standardbibliothek für das Testen von JavaScript-Anwendungen verwendet, da es leicht in bestehende Projekte integriert werden kann.

### 2. **Erstellen eines npm-Skripts für Tests**

In der `package.json`-Datei muss ein Skript hinzugefügt werden, um die Tests bequem auszuführen. Die Tests werden mit `jest` über das hinzugefügte Skript gestartet:

**package.json**:
```json
{
  "scripts": {
    "test": "jest"
  }
}
```
Durch diese Konfiguration wird Jest jedes Mal ausgeführt, wenn der Befehl `npm test` in der Konsole eingegeben wird.

### 3. **Erstellen einer Multiplizierungsfunktion**

Beginnen Sie mit einer einfachen Funktion zur Multiplikation von zwei Zahlen:

**calculator.js**:
```javascript
function multiply(a, b) {
  return a * b;
}

module.exports = multiply;
```
Diese Funktion ist der Kern der Berechnung und dient als Grundlage für den Testprozess. Sie wird durch Unit-Tests überprüft, um sicherzustellen, dass sie korrekt funktioniert.

### 4. **Erstellen eines Bestell-Services**

Der Service berechnet den Gesamtpreis einer Bestellung basierend auf Preis und Menge. Dieser Service nutzt die oben definierte `multiply`-Funktion, um den Bestellbetrag zu berechnen.

**orderService.js**:
```javascript
const multiply = require('./calculator');

function order(price, quantity) {
  return multiply(price, quantity);
}

module.exports = order;
```
Der Service zeigt, wie verschiedene Module und Funktionen in einem Projekt zusammenarbeiten, und wird ebenfalls durch Tests abgedeckt, um die korrekte Funktionsweise sicherzustellen.

### 5. **Schreiben von Unit Tests**

Unit-Tests für die `multiply`-Funktion und den `order`-Service werden erstellt. Jeder Test vergleicht das tatsächliche Ergebnis mit dem erwarteten Ergebnis.

**calculator.test.js**:
```javascript
const multiply = require('./calculator');

test('multiply 2 and 3 to get 6', () => {
  expect(multiply(2, 3)).toBe(6);
});
```

**orderService.test.js**:
```javascript
const order = require('./orderService');

test('order with price 2 and quantity 3 should be 6', () => {
  expect(order(2, 3)).toBe(6);
});
```
Diese Tests sind notwendig, um sicherzustellen, dass die Funktionen unter verschiedenen Bedingungen korrekt arbeiten.

### 6. **Tests ausführen**

Die Tests können mit folgendem Befehl ausgeführt werden:
```bash
npm test
```
Jest wird alle definierten Tests automatisch erkennen und ausführen. Falls ein Test fehlschlägt, wird in der Konsole ein Fehlerprotokoll angezeigt.

### Erweiterungen und Optimierungen

1. **Erweiterte Testszenarien**:
   - Zusätzliche Tests mit unterschiedlichen Eingaben (z. B. negative Werte, Null, Dezimalzahlen) erhöhen die Testabdeckung und gewährleisten, dass alle möglichen Eingaben korrekt verarbeitet werden.
   - Tests für Randfälle oder Fehlerbedingungen (z. B. ungültige Eingaben) sollten ebenfalls hinzugefügt werden.

2. **Test-Coverage (Testabdeckung)**:
   Mit Jest lässt sich die Testabdeckung einfach überprüfen. Hierfür wird die `--coverage`-Option verwendet:
   ```bash
   npm test -- --coverage
   ```
   Dies generiert einen Bericht über die Abdeckung des Codes durch die Tests und hebt nicht getestete Teile des Codes hervor.

3. **Mocking von Modulen**:
   Jest bietet eine leistungsstarke Mocking-Funktion, die es ermöglicht, Abhängigkeiten zu simulieren. Das ist besonders nützlich, um externe Funktionen oder APIs während der Tests zu isolieren.

   **Beispiel für Mocking**:
   ```javascript
   jest.mock('./calculator', () => ({
     multiply: jest.fn(() => 42)
   }));
   ```

   In diesem Beispiel wird die `multiply`-Funktion gemockt, um immer den Wert `42` zurückzugeben, unabhängig von den übergebenen Parametern. Dies hilft, die Testabhängigkeit von der tatsächlichen Implementierung zu vermeiden und die Tests isolierter durchzuführen.

### Abschluss und Fazit

Mit dieser Anleitung wurde gezeigt, wie grundlegende Unit-Tests in einem JavaScript-Projekt mit Jest und npm erstellt und ausgeführt werden. Tests tragen wesentlich zur Verbesserung der Codequalität bei, indem sie sicherstellen, dass Änderungen keine unerwünschten Nebeneffekte verursachen. Es wird empfohlen, in allen zukünftigen Projekten automatisierte Tests zu implementieren, um eine hohe Codequalität und Stabilität zu gewährleisten.

Durch die Nutzung von **Test-Coverage-Berichten** und **Mocking** können die Tests noch robuster gestaltet und auf komplexere Anwendungen erweitert werden.