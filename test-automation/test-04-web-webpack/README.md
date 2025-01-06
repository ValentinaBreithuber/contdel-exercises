### Übungsanleitung: Automatisches Bauen und Testen mit Webpack

#### Ziel der Übung

Diese Übung zeigt, wie Webpack für das automatische Bauen und Testen von JavaScript-Projekten genutzt wird. Dabei wird eine einfache Projektstruktur aufgebaut, Webpack für das Bundling konfiguriert und Unit-Tests mit **Jest** durchgeführt. Zusätzlich wird darauf hingewiesen, dass für vollständige Integrationstests auch das gebündelte `bundle.js` getestet werden sollte.

#### Voraussetzungen

- Kenntnisse in JavaScript und Node.js
- Node.js und npm installiert

### Schritte

#### 1. **Projektinitialisierung**
```bash
mkdir webpack-demo
cd webpack-demo
npm init -y
```

#### 2. **Webpack und CLI installieren**
```bash
npm install --save-dev webpack webpack-cli
```

#### 3. **Projektstruktur erstellen**

```
webpack-demo/
├── src/
│   ├── index.js
│   └── math.js
├── tests/
│   └── math.test.js
├── package.json
└── webpack.config.js
```

- **math.js**:
```javascript
exports.add = function(a, b) {
    return a + b;
};
```

- **index.js**:
```javascript
const { add } = require('./math');
console.log(add(1, 2));  // Output: 3
```

#### 4. **Webpack-Konfiguration erstellen**

**webpack.config.js**:
```javascript
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
```

#### 5. **Build-Skript hinzufügen und Build ausführen**

In der `package.json`:
```json
"scripts": {
    "build": "webpack"
}
```

Build ausführen:
```bash
npm run build
```

Webpack bündelt die JavaScript-Dateien in `bundle.js`.

### Testen der Module mit Jest

#### 6. **Jest installieren**
```bash
npm install --save-dev jest
```

#### 7. **Test-Skript hinzufügen**
In der `package.json`:
```json
"scripts": {
    "test": "jest"
}
```

#### 8. **Unit-Tests für Module schreiben**

**tests/math.test.js**:
```javascript
const { add } = require('../src/math');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});
```

#### 9. **Tests ausführen**
```bash
npm test
```

### Integrationstests für das Bundle

#### Weiterführende Tests:
Während Unit-Tests für Module ausreichend sind, wird empfohlen, auch **Integrationstests** für die gebündelte Datei (`bundle.js`) durchzuführen. Diese Tests stellen sicher, dass das Bündeln mit Webpack keine Fehler oder unerwartetes Verhalten verursacht.

Ein Integrationstest kann die Funktionen der **`bundle.js`** verifizieren, indem es den gebündelten Code testet. Dazu kann die Datei dynamisch geladen und evaluiert werden (wie im vorangegangenen Beispiel gezeigt) oder es können automatisierte End-to-End-Tests mit Test-Frameworks wie **Cypress** oder **Puppeteer** integriert werden, die das Verhalten der gebündelten Anwendung im Browser simulieren.

### Abschließender Hinweis

Diese Übung zeigt die Grundlagen des automatischen Bauens und Testens mit Webpack und Jest. Für vollständige Tests ist es sinnvoll, den Bundling-Prozess durch Integrationstests zu verifizieren, um sicherzustellen, dass die Anwendung nach dem Build korrekt funktioniert.