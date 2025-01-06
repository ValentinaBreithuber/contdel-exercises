Um das **Maven Surefire Plugin** in die Maven Site zu integrieren, damit die Testergebnisse als Bericht in der generierten Site erscheinen, muss das Surefire-Plugin im Abschnitt `<reporting>` in deiner `pom.xml` hinzufügt werden.

Das Surefire Plugin erzeugt automatisch Berichte über die Testergebnisse, die in der Maven Site angezeigt werden können. Hier sind die Schritte, um das Surefire-Plugin richtig zu konfigurieren und die Testergebnisse in der Site zu integrieren.

### 1. **Surefire Plugin in die `pom.xml` einbinden**

Füge das **Maven Surefire Plugin** sowohl in den `<build>`-Abschnitt als auch in den `<reporting>`-Abschnitt der `pom.xml` hinzu.

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>at.fhj.msd</groupId>
  <artifactId>contdel-app</artifactId>
  <version>1.0-SNAPSHOT</version>

  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>2.22.2</version>
      </plugin>
    </plugins>
  </build>

  <reporting>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-report-plugin</artifactId>
        <version>2.22.2</version>
      </plugin>
    </plugins>
  </reporting>
</project>
```

### 2. **Site-Generierung mit Surefire-Berichten**

Führe die folgenden Befehle aus, um die Maven-Site einschließlich der Surefire-Testberichte zu erstellen:

```bash
mvn clean site
```

Dieser Befehl wird die **Maven Site** generieren und den Surefire-Bericht einbeziehen.

- Die Testergebnisse werden als HTML-Bericht im Verzeichnis `target/site/surefire-report.html` generiert.
- Zusätzlich erscheinen die Ergebnisse auch in der Site-Navigation unter dem Bereich **Project Reports**.

### 3. **Ergebnisse überprüfen**

Öffne die generierte HTML-Seite `target/site/index.html` in einem Browser. Im Abschnitt **Project Reports** gibt es einen Eintrag für **Surefire Report** , der die Testergebnisse anzeigt.

### 4. **Erweiterte Surefire-Report-Konfiguration**

Es können auch zusätzliche Konfigurationen zum Surefire-Report-Plugin hinzugefügt werden, wie z. B. das Aktivieren von XML-Ausgaben oder das Konfigurieren von Berichtsinhalten:

```xml
<reporting>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-surefire-report-plugin</artifactId>
      <version>2.22.2</version>
      <configuration>
        <outputDirectory>${project.build.directory}/site/surefire-report</outputDirectory>
        <showSuccess>true</showSuccess> <!-- Zeigt auch erfolgreiche Tests an -->
      </configuration>
    </plugin>
  </plugins>
</reporting>
```

### 5. **Ergebnisse in der Kommandozeile anzeigen**

Falls die Surefire-Berichte direkt in der Kommandozeile eingesehen werden wollen, kann folgender Befehl verwendet werden:

```bash
mvn surefire-report:report
```

Dieser Befehl erzeugt ebenfalls eine Ausgabe der Testberichte und speichert sie in `target/site/surefire-report.html`.

### Beispiel für vollständige `pom.xml`:

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>at.fhj.msd</groupId>
  <artifactId>contdel-app</artifactId>
  <version>1.0-SNAPSHOT</version>

  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>2.22.2</version>
      </plugin>
    </plugins>
  </build>

  <reporting>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-report-plugin</artifactId>
        <version>2.22.2</version>
        <configuration>
          <outputDirectory>${project.build.directory}/site/surefire-report</outputDirectory>
          <showSuccess>true</showSuccess>
        </configuration>
      </plugin>
    </plugins>
  </reporting>
</project>
```

