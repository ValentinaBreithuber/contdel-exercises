# Übungsanleitung: Netzwerk und Datenspeicher in Docker definieren (mit WordPress-Volume)

## Ziel
In dieser Übung lernen Sie, wie Sie Netzwerke und Volumes in Docker konfigurieren, um die Datenpersistenz und Kommunikation zwischen Containern zu ermöglichen. Die Übung konzentriert sich auf die Einrichtung eines Volumes für eine WordPress-Anwendung in Verbindung mit einer MySQL-Datenbank.

---

### Schritt 1: Docker-Netzwerk erstellen

- **Netzwerk erstellen:**
  - Führen Sie den Befehl `docker network create my-network` aus, um ein benutzerdefiniertes Netzwerk zu erstellen. Dieses Netzwerk ermöglicht es den Containern, miteinander zu kommunizieren.

### Schritt 2: Docker-Volumes erstellen

- **Volumes erstellen:**
  - Erstellen Sie ein Volume für MySQL:
    ```bash
    docker volume create mysql-volume
    ```
  - Erstellen Sie ein Volume für WordPress:
    ```bash
    docker volume create wordpress-volume
    ```

### Schritt 3: MySQL-Container mit Netzwerk und Volume starten

- **MySQL-Container starten:**
  - Um die neueste Version von MySQL zu starten, verwenden Sie den folgenden Befehl:
    ```bash
    docker run --name my-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw --network my-network --volume mysql-volume:/var/lib/mysql -d mysql:latest
    ```

  - Oder, um MySQL 5.7 mit einer spezifischen Datenbank und Benutzer zu starten, verwenden Sie:
    ```bash
    docker run --name my-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw --network my-network --volume mysql-volume:/var/lib/mysql -e MYSQL_DATABASE=wordpressdb -e MYSQL_USER=wordpressuser -e MYSQL_PASSWORD=wordpresspw -d mysql:5.7
    ```
    - **Parameter Erklärung**:
      - `--name my-mysql`: Der Name des MySQL-Containers.
      - `-e MYSQL_ROOT_PASSWORD=my-secret-pw`: Setzt das Passwort für den MySQL-Root-Benutzer.
      - `--network my-network`: Weist den Container dem zuvor erstellten Netzwerk zu.
      - `--volume mysql-volume:/var/lib/mysql`: Bindet das Volume an den Speicherort, an dem MySQL seine Daten speichert.

### Schritt 4: WordPress-Container mit Netzwerk und Volume starten

- **WordPress-Container starten:**
  - Um den WordPress-Container zu starten, verwenden Sie den folgenden Befehl:
    ```bash
    docker run --name my-wordpress --network my-network --volume wordpress-volume:/var/www/html -e WORDPRESS_DB_HOST=my-mysql -e WORDPRESS_DB_USER=wordpressuser -e WORDPRESS_DB_PASSWORD=wordpresspw -e WORDPRESS_DB_NAME=wordpressdb -p 8080:80 -d wordpress
    ```

  - **Parameter Erklärung**:
    - `--name my-wordpress`: Der Name des WordPress-Containers.
    - `--network my-network`: Verknüpft den WordPress-Container mit dem MySQL-Container im selben Netzwerk.
    - `--volume wordpress-volume:/var/www/html`: Bindet das Volume an den Speicherort, an dem WordPress seine Dateien speichert.
    - `-p 8080:80`: Leitet den Port 8080 des Hosts auf den Port 80 des Containers um.

### Schritt 5: Überprüfen der Konfiguration

- **Netzwerkkommunikation und Datenpersistenz überprüfen:**
  - Öffnen Sie einen Webbrowser und navigieren Sie zu `http://localhost:8080`, um zu überprüfen, ob WordPress korrekt funktioniert und auf die MySQL-Datenbank zugreifen kann.
  - Stoppen Sie die Container mit:
    ```bash
    docker stop my-wordpress my-mysql
    ```
  - Starten Sie die Container erneut mit:
    ```bash
    docker start my-wordpress my-mysql
    ```
  - Überprüfen Sie, ob die Daten (z.B. WordPress-Installation und MySQL-Datenbank) erhalten geblieben sind.

### Speicherort der Volumes

Die Speicherorte von Docker-Volumes auf der Festplatte hängen vom Betriebssystem und der Docker-Konfiguration ab. Hier sind die üblichen Speicherorte:

- **Für Linux**:
  - Docker speichert Volumes standardmäßig unter `/var/lib/docker/volumes/`. Jedes Volume hat einen eigenen Ordner innerhalb dieses Verzeichnisses.

- **Für Windows (mit Docker Desktop)**:
  - Die Volumes werden in der MobyLinuxVM gespeichert, die Docker Desktop verwendet. Der direkte Zugriff auf diese Dateien von Windows aus ist nicht so einfach wie unter Linux. Sie können jedoch über die Docker CLI oder Container auf diese Volumes zugreifen.

- **Für macOS (mit Docker Desktop)**:
  - Ähnlich wie bei Windows werden die Volumes in der virtuellen Maschine gespeichert. Der direkte Zugriff auf die Dateien ist nicht einfach, aber der Zugriff über die Docker CLI oder Container ist möglich.

Um den genauen Speicherort eines bestimmten Volumes zu finden, können Sie den folgenden Befehl verwenden:

```bash
docker volume inspect <VOLUME_NAME>
```

### Weiterführende Punkte:

1. **Erforschen von Docker-Netzwerken**: Lernen Sie die verschiedenen Typen von Docker-Netzwerken (Bridge, Host, Overlay) und deren Einsatzmöglichkeiten kennen.
2. **Verwaltung von Docker-Volumes**: Experimentieren Sie mit verschiedenen Arten von Volumes, um Daten zwischen Containern zu teilen oder Daten über Container-Neustarts hinweg zu speichern.
3. **Backup von Volumes**: Überlegen Sie, wie Sie Daten in Ihren Volumes sichern können, um Datenverluste zu vermeiden.
4. **Docker Compose**: Schauen Sie sich Docker Compose an, um komplexere Anwendungen mit mehreren Containern einfacher zu orchestrieren.

---

Mit dieser Anleitung sollten Sie in der Lage sein, Netzwerke und Volumes in Docker zu definieren und zu nutzen, um die Kommunikation zwischen Containern und die Datenpersistenz in Anwendungen wie WordPress zu gewährleisten.