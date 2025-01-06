Wenn die PMD-Ergebnisse nicht in der generierten Maven-Site auftauchen, könnte es daran liegen, dass das **Maven PMD Plugin** nicht korrekt in die **Maven Site**-Generierung eingebunden ist. Um PMD-Berichte in der Site sichtbar zu machen, musst sicherstellt werden, dass das PMD-Plugin in die Site-Generierung integriert wird.

### Schritte, um PMD-Ergebnisse in die Maven-Site zu integrieren:

1. **PMD-Plugin in der `pom.xml` zur Site-Generierung hinzufügen**

   Stelle sicher, dass das PMD-Plugin in der `pom.xml` auch für die Site-Generierung definiert ist, indem es im `<reporting>`-Abschnitt eingefügt wird:

   ```xml
   <reporting>
     <plugins>
       <plugin>
         <groupId>org.apache.maven.plugins</groupId>
         <artifactId>maven-pmd-plugin</artifactId>
         <version>3.15.0</version>
       </plugin>
     </plugins>
   </reporting>
   ```

   Dieser Abschnitt sorgt dafür, dass PMD-Berichte beim Generieren der Site berücksichtigt werden.

2. **Maven-Site-Generierung ausführen**

   Führe den folgenden Befehl aus, um die Maven-Site zu erstellen, einschließlich des PMD-Berichts:

   ```bash
   mvn site
   ```

   Dieser Befehl generiert die komplette Maven-Site, einschließlich der PMD-Ergebnisse. Die Ergebnisse sollten sich dann in der Datei `target/site/pmd.html` befinden, und der Bericht sollte in der Site-Navigation unter "Project Reports" erscheinen.

3. **Site-Dashboard für PMD-Ergebnisse überprüfen**

   Nachdem die Site generiert wurde, öffne die generierte HTML-Seite im Verzeichnis `target/site/index.html` in einem Browser. Unter **Project Reports** den **PMD-Bericht** kann der Bericht eingesehen werden.

### Beispiel `pom.xml` mit PMD und Site-Integration:

Hier ist eine vollständige Beispielkonfiguration für die `pom.xml`, die sowohl die PMD-Analyse als auch die Integration in die Maven-Site sicherstellt:

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>at.fhj.msd</groupId>
  <artifactId>contdel-app</artifactId>
  <version>1.0-SNAPSHOT</version>
  <packaging>jar</packaging>

  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-pmd-plugin</artifactId>
        <version>3.15.0</version>
        <executions>
          <execution>
            <phase>validate</phase>
            <goals>
              <goal>check</goal>
              <goal>cpd-check</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>

  <reporting>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-pmd-plugin</artifactId>
        <version>3.15.0</version>
      </plugin>
    </plugins>
  </reporting>
</project>
```

### Wichtige Hinweise:

- **PMD-Version**: Sicherstellen, dass eine kompatible PMD-Version verwendet wird, die mit dem Maven-Projekt und den Java-Versionen kompatibel ist.
- **Maven-Site-Plugin**: Das Maven-Site-Plugin wird normalerweise mit der `mvn site`-Phase verwendet und ist dafür verantwortlich, alle Plugins und deren Berichte in die Site zu integrieren.

### Weitere Fehlersuche:

Falls die PMD-Ergebnisse weiterhin nicht in der Site auftauchen:
- Überprüfe das **`target/site`**-Verzeichnis, ob die PMD-Berichte tatsächlich erzeugt wurden.
- Überprüfe, ob Fehler während der Site-Generierung im Maven-Protokoll angezeigt werden.
- Stelle sicher, dass keine Konflikte mit anderen Plugins bestehen, die die Site-Generierung beeinflussen könnten.

Mit diesen Änderungen sollten die PMD-Ergebnisse korrekt in der Maven-Site angezeigt werden.