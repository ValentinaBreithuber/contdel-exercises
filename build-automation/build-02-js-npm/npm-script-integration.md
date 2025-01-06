### ESLint in den Build-Prozess mit npm integrieren

Im Rahmen von npm-Skripten können vor dem Start des eigentlichen Projekts, beispielsweise mit node, viele zusätzliche Schritte hinzugefügt werden. Diese Skripte bieten eine flexible Möglichkeit, den Build-Prozess zu automatisieren und sicherzustellen, dass der Code überprüft und vorbereitet ist, bevor die Anwendung ausgeführt wird. Typische Schritte umfassen Linting (wie mit ESLint), das Ausführen von Tests, die Code-Formatierung, die Erstellung von Produktionsbuilds, die Minifizierung von Dateien oder sogar das Ausführen von Datenbankmigrationen. Durch die Kettenbildung mehrerer Befehle in einem Skript (z. B. mit && in der package.json) **lässt sich der gesamte Entwicklungsprozess automatisieren**, um Fehler frühzeitig zu erkennen und den Code bereitzustellen, der die gewünschten Qualitätsstandards erfüllt, bevor der eigentliche Start des Projekts erfolgt.

#### 1. **ESLint installieren**
Zunächst muss ESLint als Entwicklungsabhängigkeit in das Projekt hinzugefügt werden. Dies erfolgt mit dem folgenden Befehl:

```bash
npm install --save-dev eslint
```

#### 2. **ESLint initialisieren**
Nach der Installation von ESLint kann eine Konfigurationsdatei (`.eslintrc.json`) erstellt werden, die definiert, welche Regeln und Einstellungen für die Code-Analyse gelten sollen:

```bash
npx eslint --init
```

Während der Initialisierung stellt ESLint eine Reihe von Fragen:
- Möchte man ESLint für eine einfache Syntaxprüfung verwenden oder mit einer bestimmten Styleguide (z. B. Airbnb) integrieren?
- Ob das Projekt ES6+ oder ältere JavaScript-Versionen verwendet.
- Ob Module oder Standard-Skript-Tags verwendet werden.
- In welcher Form die Konfiguration gespeichert werden soll (JSON, YAML oder JavaScript).

Nach der Konfiguration wird eine `.eslintrc.json`-Datei im Projektordner erstellt, die alle notwendigen Regeln und Konfigurationen enthält.

#### 3. **Skript zur `package.json` hinzufügen**
Damit ESLint automatisch während des Build-Prozesses ausgeführt wird, kann ein Skript in der `package.json` definiert werden. In der Datei `package.json` den folgenden Abschnitt im Skript-Bereich hinzufügen:

```json
"scripts": {
  "lint": "eslint .",
  "build": "npm run lint && node index.js"
}
```

- **`"lint": "eslint ."`**: Führt ESLint auf allen Dateien im aktuellen Verzeichnis aus.
- **`"build": "npm run lint && node index.js"`**: Führt erst den Linting-Prozess durch, bevor der eigentliche Build (`node index.js`) ausgeführt wird. Das `&&` sorgt dafür, dass der Build nur dann ausgeführt wird, wenn ESLint keine Fehler findet.

#### 4. **Optional: Linting während des Entwicklungsmodus (watch mode)**
Für den Entwicklungsmodus kann zusätzlich ein `dev`-Skript definiert werden, das den Code automatisch auf Linting-Fehler überprüft, wenn Dateien geändert werden. Dazu kann `nodemon` in Kombination mit ESLint verwendet werden:

```bash
npm install --save-dev nodemon
```

Das `dev`-Skript in der `package.json`:

```json
"scripts": {
  "dev": "nodemon --exec 'npm run lint && node index.js'"
}
```

Dieses Skript führt bei jeder Änderung im Code automatisch `npm run lint` und dann `node index.js` aus, was den Entwicklungsprozess beschleunigt.

#### 5. **ESLint im Build-Prozess ausführen**
Um den Linting-Prozess im Rahmen des Build-Prozesses auszuführen, einfach den Befehl `npm run build` im Terminal ausführen:

```bash
npm run build
```

Wenn Fehler oder Verstöße gegen die ESLint-Regeln gefunden werden, wird der Build-Prozess abgebrochen und eine Fehlermeldung ausgegeben. Nur wenn ESLint erfolgreich durchläuft, wird das Projekt gebaut.

#### 6. **Fehlerbehebung und Code-Anpassung**
Falls ESLint Fehler oder Warnungen anzeigt, können diese direkt im Code korrigiert werden, bevor der Build fortgesetzt wird. Die Fehler und Warnungen werden im Terminal detailliert angezeigt, einschließlich der genauen Position im Code, an der ein Verstoß festgestellt wurde.

#### Beispiel für eine `.eslintrc.json`-Datei:
Diese Datei enthält einfache Regeln für ES6-Code, verwendet Tabs anstelle von Leerzeichen und verbietet unbenutzte Variablen:

```json
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "indent": ["error", "tab"],
    "no-unused-vars": ["warn"],
    "semi": ["error", "always"]
  }
}
```

### Zusammenfassung:

1. **ESLint installieren**:  
   `npm install --save-dev eslint`

2. **ESLint konfigurieren**:  
   `npx eslint --init`

3. **ESLint-Skript zur `package.json` hinzufügen**:
   ```json
   "scripts": {
     "lint": "eslint .",
     "build": "npm run lint && node index.js"
   }
   ```

4. **Build ausführen**:  
   `npm run build`

5. **Optional**: Linting im Entwicklungsmodus mit `nodemon`:  
   ```bash
   npm install --save-dev nodemon
   ```

   ```json
   "scripts": {
     "dev": "nodemon --exec 'npm run lint && node index.js'"
   }
   ```

