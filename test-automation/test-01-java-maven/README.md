### Übungsanleitung: Automatischer Build mit Maven und Testautomatisierung

#### Ziel der Übung

Diese Übung zeigt, wie man ein einfaches Java-Projekt mit Maven erstellt, einen automatisierten Build-Prozess konfiguriert und Testautomatisierung integriert.

#### Voraussetzungen

- Java Development Kit (JDK) installiert
- Maven installiert
- Ein Texteditor oder eine IDE Ihrer Wahl

#### Schritte

1. **Projektstruktur erstellen**

   Erstelle eine neue Maven-Projektstruktur mit:
   ```bash
   mvn archetype:generate -DgroupId=at.fhj.msd -DartifactId=contdel-app -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
   ```

2. **POM-Datei anpassen**

   Öffne die `pom.xml` und füge Abhängigkeiten hinzu, z.B. für Unit-Tests mit JUnit:
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

3. **Testen automatisieren**

   Integriere die Tests in den Build-Prozess. Maven führt Tests mit dem `Surefire`-Plugin automatisch aus:
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

4. **Build und Tests ausführen**

   Führe den Build und die Tests mit folgendem Befehl aus:
   ```bash
   mvn clean install
   ```
   Maven wird den Code kompilieren, Abhängigkeiten herunterladen, Unit-Tests ausführen und ein `.jar`-Paket erstellen.

5. **Ergebnisse überprüfen**

   Sicherstellen, dass `BUILD SUCCESS` angezeigt wird und die Tests bestanden haben.

#### Erweiterte Aufgaben

- **Integrationstests hinzufügen**: In der POM eine separate Testphase für Integrationstests definieren.
- **Code-Analyse**: Verwende Plugins wie **Checkstyle** oder **PMD**, um die Codequalität zu analysieren.
- **Berichterstattung**: Generiere Test- und Code-Coverage-Berichte mit Plugins wie **JaCoCo**.

---

### Zusätzliche Plugins und Automatisierungen

- **JaCoCo**: Fügt Code-Coverage-Berichte hinzu.
   ```xml
   <plugin>
       <groupId>org.jacoco</groupId>
       <artifactId>jacoco-maven-plugin</artifactId>
       <version>0.8.7</version>
       <executions>
           <execution>
               <goals>
                   <goal>prepare-agent</goal>
               </goals>
           </execution>
           <execution>
               <id>report</id>
               <goals>
                   <goal>report</goal>
               </goals>
           </execution>
       </executions>
   </plugin>
   ```

- **Checkstyle**: Überprüft, ob der Code bestimmten Stilvorgaben entspricht.
   ```xml
   <plugin>
       <groupId>org.apache.maven.plugins</groupId>
       <artifactId>maven-checkstyle-plugin</artifactId>
       <version>3.1.0</version>
   </plugin>
   ```

Diese erweiterte Anleitung unterstützt sowohl das Bauen als auch das automatisierte Testen von Java-Projekten mithilfe von Maven und einer Teststrategie. Ein Beispiel zu Parametrisierte Tests kann [hier](parameterized-test.md) fortgesetzt werden.