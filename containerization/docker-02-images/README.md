### Anleitung zur Nutzung von Docker-Images

**Ziel:** Lernen, wie man Docker-Images verwendet, um Container zu erstellen, zu verwalten und zu optimieren.

---

#### Schritt 1: Docker-Image suchen

Bevor Sie ein Docker-Image verwenden können, müssen Sie möglicherweise ein passendes Bild finden. Docker Hub ist das zentrale Repository für Docker-Images.

- **Docker Hub besuchen:** Gehen Sie zu [Docker Hub](https://hub.docker.com/).
- **Suche nach einem Image:** Verwenden Sie die Suchleiste, um nach spezifischen Images zu suchen (z. B. `nginx`, `mysql`, `node`, etc.).

#### Schritt 2: Docker-Image herunterladen

Um ein Docker-Image herunterzuladen, verwenden Sie den Befehl `docker pull`.

```bash
docker pull <image-name>:<tag>
```

- Beispiel: Um das offizielle Nginx-Image herunterzuladen, verwenden Sie:

```bash
docker pull nginx:latest
```

#### Schritt 3: Docker-Images auflisten

Um die auf Ihrem System vorhandenen Docker-Images anzuzeigen, verwenden Sie den Befehl:

```bash
docker images
```

Dieser Befehl listet alle verfügbaren Images auf, einschließlich ihrer Repository-Namen, Tags, IDs und Größen.

#### Schritt 4: Container aus einem Image erstellen

Um einen Container aus einem Docker-Image zu erstellen und zu starten, verwenden Sie den Befehl `docker run`.

```bash
docker run --name <container-name> -p <host-port>:<container-port> -d <image-name>:<tag>
```

- Beispiel: Um einen Nginx-Container zu starten, der auf Port 8080 des Hosts hört, verwenden Sie:

```bash
docker run --name my-nginx -p 8080:80 -d nginx:latest
```

#### Schritt 5: Container verwalten

- **Container-Status überprüfen:** Um alle laufenden Container anzuzeigen, verwenden Sie:

```bash
docker ps
```

- **Alle Container anzeigen:** Um auch gestoppte Container anzuzeigen:

```bash
docker ps -a
```

- **Container stoppen:** Um einen laufenden Container zu stoppen:

```bash
docker stop <container-name>
```

- **Container entfernen:** Um einen Container zu entfernen (stoppte Container):

```bash
docker rm <container-name>
```

#### Schritt 6: Docker-Image optimieren

Um Docker-Images zu optimieren und die Größe zu reduzieren, können Sie folgende Strategien anwenden:

1. **Multi-Stage-Builds verwenden:** Mit Multi-Stage-Builds können Sie verschiedene Schritte Ihres Builds in separaten Images durchführen, sodass nur die benötigten Artefakte im finalen Image verbleiben.

2. **.dockerignore-Datei verwenden:** Erstellen Sie eine `.dockerignore`-Datei, um unnötige Dateien von Ihrem Build-Prozess auszuschließen, z. B. Entwicklungsdateien oder Verzeichnisse, die nicht benötigt werden.

#### Schritt 7: Eigenes Docker-Image erstellen

Wenn Sie ein eigenes Docker-Image erstellen möchten, benötigen Sie ein `Dockerfile`, das die Anweisungen zum Erstellen des Images enthält.

- Beispiel eines einfachen `Dockerfile` für eine Node.js-Anwendung:

```Dockerfile
# Basis-Image
FROM node:latest

# Arbeitsverzeichnis festlegen
WORKDIR /usr/src/app

# Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# Anwendungscode kopieren
COPY . .

# Exponieren des Ports
EXPOSE 3000

# Startbefehl
CMD ["node", "app.js"]
```

- Um das Image zu erstellen, führen Sie folgenden Befehl aus:

```bash
docker build -t my-node-app .
```

#### Schritt 8: Docker-Images exportieren und importieren

- **Exportieren eines Docker-Images:** Um ein Docker-Image in eine TAR-Datei zu exportieren:

```bash
docker save -o my-image.tar <image-name>:<tag>
```

- **Importieren eines Docker-Images:** Um ein Docker-Image aus einer TAR-Datei zu importieren:

```bash
docker load -i my-image.tar
```

---

### Weiterführende Links

- [Docker Documentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Dockerfile Best Practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [Using Docker Compose](https://docs.docker.com/compose/)

Mit dieser Anleitung sollten Sie in der Lage sein, Docker-Images effektiv zu nutzen, Container zu erstellen und zu verwalten sowie Ihre eigenen Images zu erstellen und zu optimieren.