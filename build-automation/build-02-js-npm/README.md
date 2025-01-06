### npm: Funktionsweise und Handhabung

#### Funktionsweise
npm (Node Package Manager) ist ein Paketmanager und Build-Tool für JavaScript-Projekte. Es wird hauptsächlich in Verbindung mit Node.js verwendet, kann aber auch für Frontend-Projekte genutzt werden. npm verwendet eine Datei namens `package.json`, um die Projektstruktur, Abhängigkeiten, Skripte und andere Konfigurationen zu definieren.

#### Handhabung
npm bietet eine Vielzahl von Befehlen, die über die Kommandozeile ausgeführt werden können. Einige der wichtigsten Befehle sind:

- **`npm init`**: Erstellt eine neue `package.json`-Datei für das Projekt.
- **`npm install`**: Installiert alle Abhängigkeiten, die in der `package.json`-Datei definiert sind.
- **`npm install <package>`**: Installiert ein bestimmtes Paket und fügt es zur `package.json` hinzu.
- **`npm install --save-dev <package>`**: Installiert ein Paket als Entwicklungsabhängigkeit und speichert es unter `devDependencies` in der `package.json`.
- **`npm run <script>`**: Führt ein in der `package.json` definiertes Skript aus.
- **`npm test`**: Führt Tests aus, die im `test`-Skript der `package.json` definiert sind.
- **`npm uninstall <package>`**: Entfernt ein installiertes Paket und aktualisiert die `package.json`.
- **`npm publish`**: Veröffentlicht ein Paket im npm-Repository.

#### Zusätzliche npm-Befehle und Optionen
- **`npm outdated`**: Zeigt veraltete Pakete an, die aktualisiert werden sollten.
- **`npm update`**: Aktualisiert alle installierten Abhängigkeiten auf die in der `package.json` definierten Versionen.
- **`npm audit`**: Überprüft das Projekt auf bekannte Sicherheitslücken und zeigt Lösungsvorschläge an.
- **`npm audit fix`**: Versucht, gefundene Sicherheitslücken automatisch zu beheben.
- **`npm cache clean`**: Bereinigt den lokalen npm-Cache.

#### Einfaches Beispiel
1. **Projektverzeichnis erstellen**: Ein neues Verzeichnis für das Projekt erstellen und dorthin navigieren:
    ```bash
    mkdir contdel-app
    cd contdel-app
    ```

2. **Projekt initialisieren**: Den folgenden Befehl ausführen, um eine `package.json`-Datei zu erstellen:
    ```bash
    npm init -y
    ```
   Dies erzeugt eine `package.json`-Datei mit Standardwerten.

3. **Abhängigkeit hinzufügen**: Ein Paket (z.B. `express`) als Abhängigkeit installieren:
    ```bash
    npm install express
    ```
   Dies fügt "express" zur Liste der Abhängigkeiten in der `package.json` hinzu und installiert es im `node_modules/` Verzeichnis.

4. **Entwicklungsabhängigkeit hinzufügen**: Ein Entwicklungstool wie `nodemon` als Entwicklungsabhängigkeit hinzufügen:
    ```bash
    npm install --save-dev nodemon
    ```

5. **Skript hinzufügen**: Ein Start-Skript zur `package.json` hinzufügen:
    ```json
    "scripts": {
      "start": "node index.js",
      "dev": "nodemon index.js"
    }
    ```
   Dies erlaubt es, das Projekt im Entwicklungsmodus mit `npm run dev` auszuführen, was dank `nodemon` automatisch neu startet, wenn Änderungen an den Dateien vorgenommen werden.

6. **Projekt ausführen**: Das Projekt mit dem folgenden Befehl ausführen:
    ```bash
    npm start
    ```
   Dies führt `node index.js` aus, wie im Start-Skript definiert.

7. **Sicherheitsanalyse durchführen**: Eine Analyse auf Sicherheitslücken mit `npm audit` ausführen:
    ```bash
    npm audit
    ```

   Sicherheitslücken können automatisch behoben werden, indem der folgende Befehl verwendet wird:
    ```bash
    npm audit fix
    ```

### Erweiterungen

#### Paketverwaltung optimieren:
- **`package-lock.json`**: Eine automatisch erstellte Datei, die sicherstellt, dass das Projekt bei jedem Build dieselben Abhängigkeiten verwendet. Diese Datei sollte in Versionskontrollsysteme (z. B. Git) eingecheckt werden, um Konsistenz zu gewährleisten.
- **SemVer-Regeln verstehen**: npm verwendet **SemVer** (Semantic Versioning), um sicherzustellen, dass Abhängigkeiten korrekt verwaltet werden. Beispiel:
  - `"express": "^4.17.1"`: `^` bedeutet, dass die Hauptversion (`4.x.x`) beibehalten wird, aber kleinere und Patch-Versionen (z. B. `4.18.0`) automatisch aktualisiert werden.
  - `"express": "~4.17.1"`: `~` erlaubt nur Patch-Updates (z. B. `4.17.2`).

### Erweiterungen (spätere Übungen)

#### Code-Qualität und Tests:
- **Jest für Tests**: Jest ist ein beliebtes Framework für Unit-Tests in JavaScript. Um Jest als Testwerkzeug hinzuzufügen:
  ```bash
  npm install --save-dev jest
  ```
  In der `package.json` das Testskript hinzufügen:
  ```json
  "scripts": {
    "test": "jest"
  }
  ```
  Tests können nun mit folgendem Befehl ausgeführt werden:
  ```bash
  npm test
  ```

- **ESLint zur Code-Qualität**: ESLint ist ein statisches Analysewerkzeug, das JavaScript-Code auf Fehler und Konventionen überprüft:
  ```bash
  npm install --save-dev eslint
  ```
  Eine ESLint-Konfiguration kann mit folgendem Befehl erstellt werden:
  ```bash
  npx eslint --init
  ```
  Nach der Konfiguration kann der Code analysiert werden mit:
  ```bash
  npx eslint .
  ```

### Weitere Ressourcen
- **npm Documentation**: Um mehr über npm zu erfahren und alle Befehle im Detail zu verstehen, ist die offizielle npm-Dokumentation unter [https://docs.npmjs.com/](https://docs.npmjs.com/) zugänglich.
- **npm Security**: Für einen tieferen Einblick in Sicherheitsüberprüfungen und Empfehlungen kann die npm-Security-Seite [https://www.npmjs.com/advisories](https://www.npmjs.com/advisories) besucht werden.
- **npm Integration**: Einbinden von einzelnen Funktionen in den npm Build Prozess mittels package.json. [siehe Anleitung](npm-script-integration.md)
