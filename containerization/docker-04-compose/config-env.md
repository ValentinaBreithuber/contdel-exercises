# Übungsanleitung: Verwendung einer .env-Datei zur Verwaltung von Umgebungsvariablen in Docker Compose

## Ziel
In dieser Übung lernen Sie, wie Sie eine `.env`-Datei erstellen und verwenden, um sensible Daten und Umgebungsvariablen in Docker Compose zu verwalten. Dies verbessert die Sicherheit und Flexibilität Ihrer Docker-Umgebung.

---

### Schritt 1: Erstellen der .env-Datei

1. **Erstellen Sie eine neue `.env`-Datei** im gleichen Verzeichnis wie Ihre `docker-compose.yml`. Öffnen Sie einen Texteditor und fügen Sie die folgenden Zeilen hinzu:

   ```plaintext
   MYSQL_ROOT_PASSWORD=my-secret-pw
   MYSQL_DATABASE=wordpressdb
   MYSQL_USER=wordpressuser
   MYSQL_PASSWORD=wordpresspw
   ```

   **Hinweis**: Passen Sie die Werte entsprechend Ihren Anforderungen an. Diese Variablen werden später in Ihrer Docker Compose-Konfiguration verwendet.

### Schritt 2: Anpassen der docker-compose.yml

2. **Passen Sie die `docker-compose.yml`-Datei an**, um die Umgebungsvariablen aus der `.env`-Datei zu verwenden. Hier ist ein Beispiel für die Verwendung:

   ```yaml
   version: '3.8'

   services:
     db:
       image: mysql:8.0
       volumes:
         - mysql-volume:/var/lib/mysql
       restart: always
       environment:
         MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
         MYSQL_DATABASE: ${MYSQL_DATABASE}
         MYSQL_USER: ${MYSQL_USER}
         MYSQL_PASSWORD: ${MYSQL_PASSWORD}

     wordpress:
       depends_on:
         - db
       image: wordpress:latest
       ports:
         - "8000:80"
       restart: always
       environment:
         WORDPRESS_DB_HOST: db:3306
         WORDPRESS_DB_USER: ${MYSQL_USER}
         WORDPRESS_DB_PASSWORD: ${MYSQL_PASSWORD}
         WORDPRESS_DB_NAME: ${MYSQL_DATABASE}
       volumes:
         - wordpress-volume:/var/www/html

   volumes:
     mysql-volume: {}
     wordpress-volume: {}
   ```

   In diesem Beispiel verwenden die `environment`-Abschnitte der MySQL- und WordPress-Container die Werte aus der `.env`-Datei.

### Schritt 3: Starten der Anwendung

3. **Starten Sie die Container** mit Docker Compose, indem Sie den folgenden Befehl im Terminal ausführen:

   ```bash
   docker-compose up -d
   ```

   - Docker Compose liest automatisch die `.env`-Datei und verwendet die dort definierten Variablen.

### Schritt 4: Überprüfen der Anwendung

4. **Überprüfen Sie die Konfiguration**:
   - Öffnen Sie einen Webbrowser und navigieren Sie zu `http://localhost:8000`, um sicherzustellen, dass die WordPress-Anwendung läuft.
   - Sie können die Logs des MySQL-Containers mit folgendem Befehl überprüfen:

   ```bash
   docker logs my-mysql
   ```

### Schritt 5: Sicherheit der .env-Datei

5. **Schützen Sie Ihre .env-Datei**:
   - Stellen Sie sicher, dass die `.env`-Datei nicht in Ihrem Versionskontrollsystem (z.B. Git) enthalten ist. Fügen Sie die Datei zu Ihrer `.gitignore`-Datei hinzu:
   ```plaintext
   .env
   ```

### Zusammenfassung

Durch die Verwendung einer `.env`-Datei können Sie sensible Informationen und Umgebungsvariablen in Ihrer Docker Compose-Konfiguration effektiv verwalten. Dies verbessert die Sicherheit und Flexibilität Ihrer Anwendung, indem es ermöglicht, Konfigurationen einfach zu ändern, ohne die `docker-compose.yml`-Datei anpassen zu müssen.

### Weiterführende Links

- [Docker Compose-Dokumentation](https://docs.docker.com/compose/)
- [Docker-Umgebungsvariablen](https://docs.docker.com/compose/environment-variables/)
- [Sichere Umgebungsvariablen](https://12factor.net/config)