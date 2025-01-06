# Übungsanleitung: Verwendung von Umgebungsvariablen in Docker Compose

## Ziel
In dieser Übung lernen Sie, wie Sie Umgebungsvariablen in Docker Compose verwenden, um Konfigurationen für Container zu verwalten. Dies ermöglicht eine sichere Handhabung von sensiblen Informationen wie Passwörtern und API-Schlüsseln, ohne diese direkt im `docker-compose.yml`-File zu speichern.

---

### Schritt 1: Erstellen der `.env`-Datei

1. **Erstellen Sie eine `.env`-Datei** im Verzeichnis Ihrer Docker Compose-Konfiguration.
   - Diese Datei wird dazu verwendet, sensible Informationen zu speichern.
   - Öffnen Sie einen Texteditor und fügen Sie die folgenden Zeilen hinzu:

   ```plaintext
   MYSQL_ROOT_PASSWORD=my-secret-pw
   MYSQL_DATABASE=wordpressdb
   MYSQL_USER=wordpressuser
   MYSQL_PASSWORD=wordpresspw
   ```

   **Hinweis**: Passen Sie die Werte an Ihre Anforderungen an. Diese Variablen werden später in Ihrer `docker-compose.yml`-Datei verwendet.

### Schritt 2: Anpassen der `docker-compose.yml`

2. **Passen Sie Ihre `docker-compose.yml`-Datei an**, um die Umgebungsvariablen aus der `.env`-Datei zu verwenden. Hier ist ein Beispiel für die Verwendung:

```yaml
version: '3.8'

services:
  db:
    image: mysql:5.7
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

- **Erklärung**: 
  - Die Umgebungsvariablen in der `environment`-Sektion sind jetzt auf die Variablen in der `.env`-Datei referenziert. Bei der Ausführung von Docker Compose werden die Werte automatisch geladen.

### Schritt 3: Starten der Anwendung

3. **Starten Sie die Container** mit Docker Compose:
   ```bash
   docker-compose up -d
   ```

### Schritt 4: Überprüfen der Anwendung

4. **Überprüfen Sie die Konfiguration**:
   - Öffnen Sie einen Webbrowser und navigieren Sie zu `http://localhost:8000`, um sicherzustellen, dass die WordPress-Anwendung läuft und auf die MySQL-Datenbank zugreifen kann.

### Schritt 5: .env-Datei schützen

5. **Schützen Sie Ihre `.env`-Datei**:
   - Stellen Sie sicher, dass die `.env`-Datei nicht in Ihr Versionskontrollsystem (z.B. Git) aufgenommen wird. Fügen Sie die `.env`-Datei zur `.gitignore`-Datei hinzu:
   ```plaintext
   .env
   ```

### Schritt 6: Erforschen von Umgebungsvariablen

6. **Experimentieren Sie mit Umgebungsvariablen**:
   - Ändern Sie die Werte in der `.env`-Datei und starten Sie die Container neu, um zu sehen, wie sich die Änderungen auf die Anwendung auswirken.
   - Sie können auch neue Umgebungsvariablen hinzufügen, um andere Konfigurationen zu testen.

---

### Zusammenfassung

Durch die Verwendung einer `.env`-Datei können Sie Umgebungsvariablen effektiv in Ihrer Docker Compose-Konfiguration verwalten. Dies verbessert die Sicherheit Ihrer Anwendung und ermöglicht eine flexible Handhabung von Konfigurationen, ohne dass sensible Daten im Code gespeichert werden müssen.

### Weiterführende Links

- [Docker Compose-Dokumentation](https://docs.docker.com/compose/)
- [Umgebungsvariablen in Docker](https://docs.docker.com/compose/environment-variables/)
- [Best Practices für die Verwendung von Umgebungsvariablen](https://12factor.net/config)