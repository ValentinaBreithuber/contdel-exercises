### Übungsanleitung: Automatischer Build mit Maven

#### Ziel der Übung

Das Ziel dieser Übung ist es, ein einfaches Java-Projekt mit Maven zu erstellen und einen automatischen Build-Prozess zu konfigurieren.

#### Voraussetzungen

- Java Development Kit (JDK) installiert
- Maven installiert
- Ein Texteditor oder eine IDE Ihrer Wahl

#### Überprüfung der Installation

1. **Maven-Version überprüfen**

   Überprüfen Sie, ob Maven korrekt installiert ist, indem Sie den folgenden Befehl im Terminal ausführen:

    ```bash
    mvn -v
    ```

   Dies sollte die installierte Maven-Version und die Java-Version ausgeben.

2. **Java-Version überprüfen**

   Stellen Sie sicher, dass Java (JDK) korrekt installiert ist. Führen Sie diesen Befehl aus:

    ```bash
    java -version
    ```

   Dies zeigt die installierte Java-Version an. Stellen Sie sicher, dass sie mit den Versionen in der `pom.xml` übereinstimmt.

#### Schritte

1. **Projektstruktur erstellen**

   Öffnen Sie ein Terminal und navigieren Sie zu dem Verzeichnis, in dem Sie das Projekt erstellen möchten. Führen Sie dann den folgenden Befehl aus:

    ```bash
    mvn archetype:generate -DgroupId=at.fhj.msd -DartifactId=contdel-app -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false

    ```

   Dies wird eine neue Projektstruktur in einem Verzeichnis namens `contdel-app` erstellen.

2. **Projektstruktur überprüfen**

   Nach der Ausführung des Archetype-Befehls sollte die folgende Struktur generiert worden sein:

   ```plaintext
   contdel-app/
   |-- pom.xml
   |-- src/
   |   |-- main/
   |   |   |-- java/
   |   |-- test/
   ```

   Überprüfen Sie, ob diese Verzeichnisse und die `pom.xml`-Datei korrekt erstellt wurden.

3. **POM-Datei bearbeiten**

   Navigieren Sie in das `contdel-app` Verzeichnis und öffnen Sie die `pom.xml` Datei in einem Texteditor. Dies ist die Konfigurationsdatei für Maven.

4. **Abhängigkeiten hinzufügen**

   Fügen Sie eventuelle Abhängigkeiten in den `<dependencies>` Abschnitt der `pom.xml` Datei ein. 
   Es wird empfohlen, eine neuere Version zu verwenden, insbesondere JUnit 5, das mehr Funktionalitäten und bessere Unterstützung bietet. Hier ist eine aktualisierte Version der pom.xml, die auf JUnit 5 verweist:   
   Zum Beispiel:

    ```xml
    <dependencies>
		<dependency>
		  <groupId>org.junit.jupiter</groupId>
		  <artifactId>junit-jupiter-api</artifactId>
		  <version>5.8.0</version>
		  <scope>test</scope>
		</dependency>
		<dependency>
		  <groupId>org.junit.jupiter</groupId>
		  <artifactId>junit-jupiter-engine</artifactId>
		  <version>5.8.0</version>
		  <scope>test</scope>
		</dependency>
    </dependencies>
    ```

5. **Build-Prozess ausführen**

   Gehen Sie zurück zum Terminal und führen Sie den folgenden Befehl aus, um das Projekt zu kompilieren, Abhängigkeiten herunterzuladen und die Tests auszuführen:

    ```bash
    mvn clean install
    ```

   Dies wird alle Abhängigkeiten herunterladen, den Code kompilieren und die Tests ausführen.

6. **Ergebnisse überprüfen**

   Überprüfen Sie die Ausgabe im Terminal, um sicherzustellen, dass der Build erfolgreich war. Sie sollten eine Meldung wie `BUILD SUCCESS` sehen.

7. **Optional: Kompilieren ohne Tests**

   Falls Sie nur den Code kompilieren möchten, ohne Tests auszuführen, verwenden Sie den Befehl:

    ```bash
    mvn clean compile
    ```

8. **JAR-Datei erstellen**

   Falls Sie das Projekt als `.jar`-Datei packen möchten, führen Sie diesen Befehl aus:

    ```bash
    mvn package
    ```

   Die JAR-Datei wird im `target`-Verzeichnis gespeichert.

#### Erweiterungen: Maven-Plugins

1. **Checkstyle Plugin zur Code-Analyse hinzufügen**

   Um die Code-Qualität sicherzustellen, können Sie das Maven Checkstyle Plugin verwenden. Fügen Sie das Plugin in die `pom.xml` hinzu:

    ```xml
    <build>
      <plugins>
        <plugin>
          <groupId>org.apache.maven.plugins</groupId>
          <artifactId>maven-checkstyle-plugin</artifactId>
          <version>3.1.2</version>
          <executions>
            <execution>
              <phase>validate</phase>
              <goals>
                <goal>check</goal>
              </goals>
            </execution>
          </executions>
        </plugin>
      </plugins>
    </build>
    ```

   Führen Sie dann den Checkstyle-Check mit folgendem Befehl aus:

    ```bash
    mvn checkstyle:check
    ```

2. **Surefire Plugin zur Testkonfiguration hinzufügen**

   Das Maven Surefire Plugin steuert, wie Tests ausgeführt werden. Fügen Sie es in Ihre `pom.xml` ein:

    ```xml
    <build>
      <plugins>
        <plugin>
          <groupId>org.apache.maven.plugins</groupId>
          <artifactId>maven-surefire-plugin</artifactId>
          <version>2.22.2</version>
        </plugin>
      </plugins>
    </build>
    ```

   Um nur die Tests auszuführen, können Sie den Befehl verwenden:

    ```bash
    mvn test
    ```

#### Aufgaben

- Ändern Sie den Code und fügen Sie einige Unit-Tests hinzu. Führen Sie den Build erneut aus und überprüfen Sie die Ergebnisse.
- Experimentieren Sie mit verschiedenen [Maven-Plugins](maven-plugins.md) und konfigurieren Sie zusätzliche Build-Schritte, wie z.B. Code-Analyse.

**für kommende Übungen:**
- Richten Sie eine CI-Pipeline ein und führen Sie automatisierte Tests bei jedem Commit durch.
- Erstellen Sie ein Docker-Image des Projekts und führen Sie es in einer isolierten Umgebung aus.


### Erweiterungen (spätere Übungen)

#### Continuous Integration (CI) einrichten

Eine Continuous Integration (CI) Lösung ist hilfreich, um Builds bei jedem Code-Commit automatisch auszuführen. Zum Beispiel kann eine **GitHub Actions** Konfiguration so aussehen:

```yaml
name: Maven Build

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout Code
      uses: actions/checkout@v2
    - name: Set up JDK 11
      uses: actions/setup-java@v1
      with:
        java-version: '11'
    - name: Build with Maven
      run: mvn clean install
```

#### Erweiterte Abhängigkeitsverwaltung

- **Transitive Abhängigkeiten**: Maven kümmert sich automatisch um Abhängigkeiten, die von anderen Bibliotheken benötigt werden. Achte darauf, wichtige Versionen in der `pom.xml` explizit zu definieren.
- **Dependency-Scopes**: Achte darauf, Abhängigkeiten im passenden Scope (z. B. `compile`, `test`, `runtime`) zu deklarieren, um die Größe des finalen Artefakts zu minimieren.

#### Best Practices für Tests

- **Unit-Tests und Integrationstests**: Trenne Unit-Tests von Integrationstests und führe sie in separaten Maven-Profilen aus.
- **Mockito und TestNG**: Verwende Test-Frameworks wie TestNG oder Mockito für erweiterte Testfälle, um z. B. das Mocken von Objekten in den Unit-Tests zu ermöglichen.

#### Docker-Integration

Um das Projekt portabel zu machen, kann eine Docker-Integration nützlich sein. Hier ein Beispiel für eine **Dockerfile**:

```dockerfile
FROM maven:3.8.1-openjdk-11 AS build
WORKDIR /app
COPY . .
RUN mvn clean install

FROM openjdk:11-jre-slim
COPY --from=build /app/target/contdel-app.jar /app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

Dieses Dockerfile führt den Build in einem Maven-Container aus und erstellt ein Docker-Image, das in jeder Umgebung lauffähig ist.

#### Fehlerbehandlung und Logging

Für die Fehlerbehandlung und das Logging während des Build-Prozesses kannst du Maven’s eingebautes Logging verwenden. Alternativ lassen sich Logging-Bibliotheken wie **SLF4J** oder **Logback** einbinden, um detaillierte Protokolle zu erzeugen.

---
