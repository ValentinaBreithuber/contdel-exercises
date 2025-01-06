# Übungsanleitung: Verwendung von Docker Compose für WordPress und MySQL

## Ziel
In dieser Übung lernen Sie, wie Sie Docker Compose verwenden, um eine Multi-Container-Anwendung mit WordPress und MySQL zu konfigurieren und zu betreiben. Docker Compose vereinfacht die Verwaltung mehrerer Container, indem die Konfiguration in einer YAML-Datei definiert wird.

---

### Schritt 1: Docker Compose installieren

Stellen Sie sicher, dass Docker Compose auf Ihrem System installiert ist. Die Installation kann je nach Betriebssystem variieren:

- **Windows/Mac**: Docker Desktop enthält Docker Compose bereits. Wenn Sie Docker Desktop installiert haben, ist Docker Compose automatisch verfügbar.
- **Linux**: Oft muss Docker Compose separat installiert werden. Informationen zur Installation finden Sie in der [offiziellen Docker-Dokumentation](https://docs.docker.com/compose/install/).

Um zu überprüfen, ob Docker Compose installiert ist, führen Sie den folgenden Befehl im Terminal aus:
```bash
docker-compose --version
```
Wenn Docker Compose installiert ist, zeigt dieser Befehl die aktuelle Version an. Andernfalls müssen Sie die Installation gemäß Ihrer Systemkonfiguration durchführen.

---

### Schritt 2: `docker-compose.yml` erstellen

Erstellen Sie in einem neuen Verzeichnis eine Datei namens `docker-compose.yml`. Fügen Sie folgenden Inhalt hinzu:

```yaml
version: '3.1'

services:
  mysql:
    image: mysql:5.7
    volumes:
      - mysql-volume:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: my-secret-pw
      MYSQL_DATABASE: wordpressdb
      MYSQL_USER: wordpressuser
      MYSQL_PASSWORD: wordpresspw

  wordpress:
    depends_on:
      - mysql  # sicherstellen, dass der MySQL-Dienst vor WordPress gestartet wird
    image: wordpress:latest
    ports:
      - "8000:80"
    restart: always
    environment:
      WORDPRESS_DB_HOST: mysql:3306
      WORDPRESS_DB_USER: wordpressuser
      WORDPRESS_DB_PASSWORD: wordpresspw
      WORDPRESS_DB_NAME: wordpressdb
    volumes:
      - wordpress-volume:/var/www/html

volumes:
  mysql-volume: {}
  wordpress-volume: {}
```

#### Erklärung der Konfiguration:
- **services**: Hier definieren wir zwei Dienste:
  - **mysql**: Der MySQL-Datenbankdienst.
  - **wordpress**: Der WordPress-Dienst, der von der MySQL-Datenbank abhängt (daher `depends_on`).
  
- **volumes**: Wir verwenden Volumes (`mysql-volume` und `wordpress-volume`), um die Daten persistent zu speichern. Das bedeutet, dass die Daten auch dann erhalten bleiben, wenn die Container gestoppt oder gelöscht werden.

Wenn Sie bereits existierende Volumes verwenden möchten, können Sie den Abschnitt `volumes` wie folgt anpassen:
```yaml
volumes:
  mysql-volume:
    external: true
  wordpress-volume:
    external: true
```

---

### Schritt 3: Docker Compose verwenden

Navigieren Sie im Terminal zu dem Verzeichnis, in dem sich Ihre `docker-compose.yml`-Datei befindet. Führen Sie den folgenden Befehl aus, um die in der YAML-Datei definierten Container zu starten:
```bash
docker-compose up -d
```
Der `-d`-Flag sorgt dafür, dass die Container im Hintergrund gestartet werden.

---

### Schritt 4: WordPress-Zugriff

Nachdem die Container gestartet wurden, ist WordPress unter `http://localhost:8000` erreichbar. Sie sollten die WordPress-Installationsseite sehen, auf der Sie die Konfiguration für Ihre Website vornehmen können.

---

### Schritt 5: Docker Compose herunterfahren

Um die Container zu stoppen und zu entfernen, verwenden Sie:
```bash
docker-compose down
```
Dieser Befehl stoppt die laufenden Container und entfernt sie, während die Daten in den Volumes erhalten bleiben.

---

### Weiterführende Punkte

1. **Netzwerkverwaltung**: Erforschen Sie, wie Docker Compose Netzwerke verwaltet und wie Sie eigene Netzwerke definieren können.
2. **Umgebungsvariablen**: Lernen Sie, wie Sie [Umgebungsvariablen sicher in Docker Compose verwenden](config-env.md) und sensible Informationen handhaben.
3. **Docker Compose in der Produktion**: Überlegen Sie, wie Sie Docker Compose in einer Produktionsumgebung verwenden können, einschließlich der Integration mit Orchestrierungstools wie Kubernetes.
4. **Versionskontrolle**: Speichern Sie die `docker-compose.yml`-Datei in Ihrem Versionskontrollsystem (z.B. Git), um die Konfiguration und Änderungen nachverfolgen zu können.

---

Mit dieser Anleitung sollten Sie in der Lage sein, Docker Compose effektiv zu verwenden, um eine WordPress-Anwendung in Kombination mit MySQL zu konfigurieren und zu betreiben. Dies ist ein entscheidender Schritt in Richtung einer containerisierten Anwendungsarchitektur und einer effizienten Entwicklung und Bereitstellung.