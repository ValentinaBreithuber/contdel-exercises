# Übungsanleitung: Erste Schritte mit Docker

## Ziel
Erlernen der Grundlagen von Docker durch Ausführen eines einfachen Nginx-Containers und später eines Node.js-Containers. Diese Anleitung bietet eine schrittweise Vorgehensweise, um die Containerisierung zu verstehen und in die Praxis umzusetzen.

---

### Schritt 1: Ausführen eines Nginx-Containers

- **Nginx-Container starten:**
  - Öffnen Sie ein Terminal oder eine Eingabeaufforderung.
  - Führen Sie den Befehl aus:
    ```bash
    docker run --name my-nginx -p 8080:80 -d nginx
    ```
    Dieser Befehl bewirkt Folgendes:
    - `--name my-nginx`: Weist dem Container den Namen "my-nginx" zu, damit Sie ihn später leicht identifizieren können.
    - `-p 8080:80`: Leitet den Port 8080 Ihres Hosts auf den Port 80 des Containers um, sodass Sie über `http://localhost:8080` auf den Nginx-Server zugreifen können.
    - `-d`: Startet den Container im Hintergrund (detached mode), damit das Terminal weiterhin verfügbar ist.
    - `nginx`: Verwendet das offizielle Nginx-Image aus Docker Hub.

- **Überprüfen des Nginx-Servers:**
  - Öffnen Sie einen Webbrowser und navigieren Sie zu `http://localhost:8080`. Sie sollten die Standard-Startseite von Nginx sehen, was bestätigt, dass der Container erfolgreich läuft.

---

### Schritt 2: Herunterladen eines Node.js-Images

- **Node.js-Image herunterladen:**
  - Geben Sie den folgenden Befehl in das Terminal ein, um das offizielle Node.js-Image von Docker Hub herunterzuladen:
    ```bash
    docker pull node
    ```

---

### Schritt 3: Erstellen einer einfachen Node.js-Anwendung

- **Anwendungsverzeichnis erstellen (optional):**
  - Erstellen Sie auf Ihrem Host-System einen neuen Ordner für Ihre Node.js-Anwendung:
    ```bash
    mkdir my-node-app
    cd my-node-app
    ```

- **Erstellen einer einfachen Node.js-App:**
  - Erstellen Sie eine Datei namens `app.js` mit folgendem Inhalt:
    ```javascript
    const http = require('http');

    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World\n');
    });

    const port = process.env.PORT || 3000;
    server.listen(port, () => {
      console.log(`Server running at port ${port}`);
    });
    ```

  - Erstellen Sie eine Datei namens `package.json` mit folgendem Inhalt:
    ```json
    {
      "name": "my-node-app",
      "version": "1.0.0",
      "description": "A simple Node.js app",
      "main": "app.js",
      "scripts": {
        "start": "node app.js"
      }
    }
    ```

---

### Schritt 4: Ausführen der Node.js-Anwendung in einem Docker-Container

- **Erstellen eines Dockerfiles:**
  - Erstellen Sie im selben Verzeichnis eine Datei namens `Dockerfile` mit folgendem Inhalt:
    ```dockerfile
    FROM node:latest

    WORKDIR /usr/src/app

    COPY package*.json ./

    RUN npm install

    COPY . .

    EXPOSE 3000

    CMD ["npm", "start"]
    ```
  - **Erklärung des Dockerfiles**:
    - `FROM node:latest`: Legt das Basis-Image auf die neueste Version von Node.js fest.
    - `WORKDIR /usr/src/app`: Setzt das Arbeitsverzeichnis im Container.
    - `COPY package*.json ./`: Kopiert die `package.json` und `package-lock.json` in den Container.
    - `RUN npm install`: Installiert die Abhängigkeiten.
    - `COPY . .`: Kopiert den restlichen Anwendungscode in den Container.
    - `EXPOSE 3000`: Legt fest, dass der Container auf Port 3000 lauschen soll.
    - `CMD ["npm", "start"]`: Definiert den Befehl zum Starten der Anwendung.

- **Bauen des Docker-Images:**
  - Führen Sie im Terminal (im Verzeichnis des Dockerfiles) den folgenden Befehl aus, um das Docker-Image zu erstellen:
    ```bash
    docker build -t my-node-app .
    ```

- *optionaler Schritt zum Docker-Image teilen:*
	- Führen Sie die Schritte laut weiterer Anleitung aus, zum [Teilen eines Docker Image](share-docker.md).

- **Starten des Containers:**
  - Starten Sie den Container mit dem Befehl:
    ```bash
    docker run --name my-node-container -p 3000:3000 -d my-node-app
    ```

- **Überprüfen der Node.js-Anwendung:**
  - Öffnen Sie einen Webbrowser und navigieren Sie zu `http://localhost:3000`. Sie sollten die Nachricht "Hello World" sehen, was bestätigt, dass Ihre Node.js-Anwendung erfolgreich im Container läuft.

---

### Zusammenfassung

Mit diesen Schritten haben Sie erfolgreich einen Nginx-Container gestartet und eine einfache Node.js-Anwendung in einem Docker-Container ausgeführt. Dies bietet Ihnen einen grundlegenden Einstieg in die Verwendung von Docker für die Entwicklung und Bereitstellung von Anwendungen.

### Weiterführende Links:
- [Docker-Dokumentation](https://docs.docker.com/)
- [Node.js-Dokumentation](https://nodejs.org/en/docs/)
- [Nginx-Dokumentation](https://nginx.org/en/docs/)

Fühlen Sie sich frei, weitere Ressourcen zu erkunden, um Ihre Kenntnisse über Docker und containerisierte Anwendungen zu vertiefen.