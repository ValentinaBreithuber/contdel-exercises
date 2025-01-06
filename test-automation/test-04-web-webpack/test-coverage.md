### Anleitung zur Integration von Testabdeckung mit Jest

Jest ist ein beliebtes Test-Framework für JavaScript, das auch Funktionen zur Messung der Testabdeckung bietet. Hier ist eine einfache Anleitung zur Integration von Testabdeckung in ein Projekt mit Jest.

#### Voraussetzungen:
- Node.js und npm sind installiert
- Ein bestehendes JavaScript-Projekt mit Jest als Test-Framework

#### Schritte:

1. **Jest installieren**: Falls Jest noch nicht in Ihrem Projekt installiert ist, können Sie es mit folgendem Befehl installieren:
    ```bash
    npm install --save-dev jest
    ```

2. **Jest Konfiguration**: Öffnen Sie Ihre `package.json` Datei und fügen Sie einen "scripts"-Eintrag für Jest hinzu, falls noch nicht vorhanden:
    ```json
    "scripts": {
      "test": "jest"
    }
    ```

3. **Testabdeckung aktivieren**: Um die Testabdeckung zu aktivieren, können Sie den `--coverage` Flag verwenden. Aktualisieren Sie den "test"-Eintrag in der `package.json` wie folgt:
    ```json
    "scripts": {
      "test": "jest --coverage"
    }
    ```

4. **Tests ausführen**: Führen Sie Ihre Tests mit dem folgenden Befehl aus:
    ```bash
    npm test
    ```

5. **Testabdeckung analysieren**: Nach dem Ausführen der Tests wird ein Verzeichnis `coverage/` erstellt, das die Testabdeckungsdaten enthält. Sie können die Datei `coverage/lcov-report/index.html` in einem Webbrowser öffnen, um einen detaillierten Bericht anzuzeigen.

6. **Optional - Anpassen der Abdeckungsoptionen**: Sie können die Abdeckungsoptionen in der `jest.config.js` Datei oder direkt in der `package.json` unter dem Schlüssel `"jest"` anpassen. Zum Beispiel:
    ```json
    "jest": {
      "collectCoverageFrom": [
        "src/**/*.{js,jsx}"
      ]
    }
    ```

Das ist alles! Jetzt haben Sie Testabdeckung in Ihrem Jest-Projekt aktiviert und können die Ergebnisse analysieren, um die Qualität Ihres Codes zu verbessern.