# Übungsanleitung: Multiple Container Beispiel mit Docker Compose

## Ziel
In dieser Übung lernen Sie, wie Sie Docker Compose verwenden, um eine Multi-Container-Anwendung zu erstellen, die aus einem Node.js-Server, Apache, Nginx als Reverse-Proxy und MySQL besteht. Nginx leitet Anfragen an den Node.js- und den Apache-Server weiter, während MySQL als Datenbank für die Anwendung dient.

---

### Schritt 1: Docker Compose installieren

- Stellen Sie sicher, dass Docker Compose auf Ihrem System installiert ist. Informationen zur Installation finden Sie in der [offiziellen Docker-Dokumentation](https://docs.docker.com/compose/install/).
- Um zu überprüfen, ob Docker Compose installiert ist, führen Sie den Befehl im Terminal aus:
  ```bash
  docker-compose --version
  ```

---

### Schritt 2: `docker-compose.yml` erstellen

- Erstellen Sie in einem neuen Verzeichnis eine Datei namens `docker-compose.yml` mit folgendem Inhalt:

```yaml
version: '3.8'

services:
  proxy:
    image: nginx
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - nodeapp
      - apache

  nodeapp:
    image: node:20
    volumes:
      - ./nodeapp:/usr/src/app
    working_dir: /usr/src/app
    command: node app.js
    depends_on:
      - db

  apache:
    image: httpd
    volumes:
      - ./public-html:/usr/local/apache2/htdocs

  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: example
      MYSQL_DATABASE: exampledb
    volumes:
      - mysql-data:/var/lib/mysql

volumes:
  mysql-data: {}
```

#### Erklärung der Konfiguration:
- **services**: Hier definieren wir vier Dienste: 
  - **proxy**: Der Nginx-Proxy, der als Schnittstelle für eingehende Anfragen dient.
  - **nodeapp**: Der Node.js-Server, der die Anwendung ausführt.
  - **apache**: Der Apache-Server, der statische Inhalte bereitstellt.
  - **db**: Der MySQL-Datenbankdienst, der die Anwendung unterstützt.
  
- **volumes**: Wir verwenden Volumes für MySQL, um die Daten dauerhaft zu speichern.

### Schritt 3: Nginx-Konfiguration erstellen

- Erstellen Sie eine Datei namens `nginx.conf` im selben Verzeichnis mit folgendem Inhalt:

```nginx
events {}

http {
    upstream nodeapp {
        server nodeapp:3000;
    }

    upstream apache {
        server apache:80;
    }

    server {
        listen 80;

        location /nodeapp/ {
            proxy_pass http://nodeapp/;
        }

        location /apache/ {
            proxy_pass http://apache/;
        }
    }
}
```

- Diese Konfiguration leitet die Anfragen basierend auf dem angeforderten Pfad an den entsprechenden Dienst weiter.

### Schritt 4: Node.js-Anwendung erstellen

- Erstellen Sie das Verzeichnis `nodeapp` und fügen Sie eine Datei namens `app.js` mit folgendem Inhalt hinzu:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js app\n');
});

app.listen(3000, () => {
  console.log('Node.js app listening on port 3000');
});
```

- Stellen Sie sicher, dass Sie die Abhängigkeiten in der `package.json` definieren:
```json
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "A simple Node.js app",
  "main": "app.js",
  "dependencies": {
    "express": "^4.17.1"
  },
  "scripts": {
    "start": "node app.js"
  }
}
```

### Schritt 5: Docker Compose verwenden

- Navigieren Sie im Terminal zu dem Verzeichnis, in dem sich Ihre `docker-compose.yml`-Datei befindet. Führen Sie den folgenden Befehl aus, um die Container zu starten:
```bash
docker-compose up -d
```

### Schritt 6: Überprüfen der Anwendung

- Öffnen Sie einen Webbrowser und navigieren Sie zu:
  - `http://localhost/nodeapp/` für den Node.js-Server.
  - `http://localhost/apache/` für den Apache-Server.

- Überprüfen Sie, ob die Anwendung wie erwartet funktioniert.

### Schritt 7: Docker Compose herunterfahren

- Um die Container zu stoppen und zu entfernen, verwenden Sie:
```bash
docker-compose down
```

---

### Fehlerbehebung

- **Container starten nicht**: Überprüfen Sie die Logs der Container mit:
  ```bash
  docker logs <container_name>
  ```
  Ersetzen Sie `<container_name>` durch den Namen des entsprechenden Containers (z.B. `my-wordpress`, `my-mysql`).

- **Datenbankverbindung schlägt fehl**: Stellen Sie sicher, dass die Umgebungsvariablen für die MySQL-Datenbank korrekt gesetzt sind und dass die Container im gleichen Netzwerk sind.

---

### Weiterführende Punkte

1. **Erforschen von Docker-Netzwerken**: Lernen Sie die verschiedenen Typen von Docker-Netzwerken (Bridge, Host, Overlay) und deren Einsatzmöglichkeiten kennen.
2. **Service-Discovery mit Nginx**: Vertiefen Sie Ihr Verständnis, wie Nginx als Reverse-Proxy für mehrere Dienste fungiert und wie Sie Routing und Load-Balancing implementieren können.
3. **Persistente Daten**: Erforschen Sie die Verwaltung von Volumes und wie Sie sicherstellen, dass Ihre Daten auch nach dem Stoppen von Containern erhalten bleiben.

---

Mit dieser Anleitung haben Sie die Grundlagen der Verwendung von Docker Compose für eine Multi-Container-Anwendung mit WordPress, MySQL, Node.js und Nginx erlernt. Dies ist ein wesentlicher Schritt in Richtung einer containerisierten Anwendungsarchitektur und einer effizienten Entwicklung und Bereitstellung.