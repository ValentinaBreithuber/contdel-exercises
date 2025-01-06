# Build Automation
Ein automatischer Build-Prozess ist ein wichtiger Bestandteil der modernen Softwareentwicklung und dient dazu, den Quellcode in eine ausführbare Anwendung zu übersetzen. Dieser Prozess ist oft Teil einer größeren CI/CD-Pipeline (Continuous Integration/Continuous Deployment). Hier sind einige der zentralen Bestandteile eines automatischen Builds:

---

## Allgemeiner Überblick

### Source Code Repository
- Ein zentraler Ort, an dem der gesamte Quellcode des Projekts gespeichert ist. Häufig verwendete Tools sind Git, SVN usw.

### Build-Skript oder Build-Konfiguration
- Ein Skript oder eine Konfigurationsdatei, die die spezifischen Schritte des Build-Prozesses definiert. Beispiele sind `pom.xml` für Maven, `build.gradle` für Gradle, `package.json` für npm usw.

### Abhängigkeitsmanagement
- Ein Mechanismus, um alle externen Bibliotheken und Frameworks zu verwalten, die für das Projekt erforderlich sind. Dies wird oft durch das Build-Tool selbst verwaltet.

### Compiler
- Ein Tool, das den Quellcode in Maschinencode oder Bytecode übersetzt. Beispiele sind `javac` für Java, `gcc` für C/C++ usw.

### Linker
- Ein Tool, das mehrere Code-Dateien und Bibliotheken zu einer einzigen ausführbaren Datei zusammenfügt. Dies ist besonders in kompilierten Sprachen wie C/C++ relevant.

### Testautomatisierung
- Die Ausführung von Unit-Tests, Integrationstests und anderen Tests ist ein integraler Bestandteil des Build-Prozesses, um sicherzustellen, dass der Code wie erwartet funktioniert.

### Code-Analyse und Linting
- Tools zur statischen Code-Analyse und zum Linting können in den Build-Prozess integriert werden, um Code-Qualität und -Konformität sicherzustellen.

### Artefakt-Erstellung
- Der Build-Prozess erzeugt oft ein oder mehrere "Artefakte", das sind die ausführbaren Dateien, Bibliotheken oder Archive, die dann verteilt oder deployt werden können.

### Logging und Berichterstattung
- Der Build-Prozess sollte detaillierte Logs und Berichte generieren, um den Status des Builds und etwaige Fehler leicht nachvollziehen zu können.

### Benachrichtigungen
- Automatische Benachrichtigungen bei Build-Fehlern oder erfolgreichen Builds, oft per E-Mail oder über andere Kommunikationskanäle.

Diese Bestandteile können je nach den spezifischen Anforderungen des Projekts und den verwendeten Technologien variieren.

---

## Einführung zu CRISP im Kontext des Automatischen Builds

CRISP steht für "Complete, Repeatable, Informative, Scheduled, Portable" und ist ein Akronym, das die zentralen Bestandteile eines effizienten und robusten automatischen Build-Prozesses beschreibt. Diese Prinzipien dienen als Leitfaden für die Entwicklung und Wartung von Build-Systemen, die nicht nur zuverlässig und effizient sind, sondern auch die Qualität des Endprodukts sicherstellen.

---

### Vollständig (Complete):

Der Build-Prozess sollte in der Lage sein, das gesamte Projekt von Grund auf neu zu erstellen. Dies beinhaltet die Kompilierung des Codes, das Ausführen von Tests und das Erstellen von Artefakten, alles ohne menschliches Eingreifen. Dies stellt sicher, dass keine manuellen Schritte erforderlich sind, die zu Fehlern oder Inkonsistenzen führen könnten.

### Wiederholbar (Repeatable):

Ein effizientes Build-System muss die Fähigkeit besitzen, zu jedem Zeitpunkt den exakt gleichen Build erneut zu erstellen. Dies wird durch die Versionierung von Build-Skripten und Abhängigkeiten erreicht. Die Skripte und alle notwendigen Informationen sollten in einem Versionskontrollsystem gespeichert sein, um die Wiederholbarkeit zu gewährleisten.

### Informativ (Informative):

Ein gutes Build-System dient als Frühwarnsystem für Probleme im Code oder in den Abhängigkeiten. Es sollte detaillierte Logs und Berichte generieren, die bei der Fehlersuche und -behebung helfen. Im Falle eines fehlgeschlagenen Builds sollten diese Informationen ausreichend sein, um die Ursache schnell und effizient zu identifizieren.

### Geplant (Scheduled):

Automatische Builds sollten in regelmäßigen Abständen oder nach bestimmten Ereignissen (wie einem neuen Commit im Repository) ausgeführt werden. Dies stellt sicher, dass das System immer auf dem neuesten Stand ist und Probleme frühzeitig erkannt werden.

### Portabel (Portable):

Ein robustes Build-System sollte so konzipiert sein, dass es auf verschiedenen Systemen und Plattformen lauffähig ist. Dies ist besonders wichtig für plattformübergreifende Projekte. Die Build-Skripte und -Konfigurationen sollten so gestaltet sein, dass sie ohne Änderungen auf verschiedenen Systemen ausgeführt werden können.

---

Diese CRISP-Prinzipien bilden die Grundlage für einen automatischen Build-Prozess, der nicht nur effizient und zuverlässig ist, sondern auch die Qualität und Wartbarkeit des Softwareprojekts verbessert.

---

## Reflexionsfrage: Aspekte des Build-Prozesses

Während Sie die Übungen durchführen und die verschiedenen Projekte testen, machen Sie sich Notizen zu den verschiedenen Aspekten, die in den Build-Prozess einfließen können. Berücksichtigen Sie dabei folgende Unterfragen:

1. **Abhängigkeiten**: Welche externen Bibliotheken oder Dienste sind für den Build-Prozess erforderlich? Wie werden diese Abhängigkeiten verwaltet?

2. **Konfiguration**: Welche Konfigurationsdateien oder -parameter sind für den Build-Prozess notwendig? Wie können diese für verschiedene Umgebungen angepasst werden?

3. **Fehlerbehandlung und Logging**: Wie geht der Build-Prozess mit Fehlern um? Gibt es Mechanismen, die sicherstellen, dass der Build-Prozess informativ und nachvollziehbar ist?

Diese Fragen sollen Ihnen dabei helfen, ein tieferes Verständnis für die Komplexität und die verschiedenen Facetten des Build-Prozesses zu entwickeln.

---

## Checkliste für die aktuelle Übungseinheit

Bevor wir in die tiefen Gewässer der Build-Automatisierung und CI/CD-Pipelines eintauchen, ist es wichtig, einige grundlegende Schritte zu verstehen und durchzuführen. Diese Checkliste dient als Vorbereitung für die komplexeren Aspekte der Softwareentwicklung, die wir im Laufe der Lehrveranstaltung behandeln werden. Die folgenden Punkte sind grundlegende, aber entscheidende Schritte, die Sie in der Lage sein sollten, für jedes Softwareprojekt durchzuführen.

### Repository-Management
- [ ] **Repository erstellen**: Erstellen Sie ein Source-Code-Repository für Ihr Beispielprojekt oder Ihre TechDemo. Dies könnte ein Git-Repository sein, das auf GitHub, [GitLab](https://git-iit.fh-joanneum.at/groups/msd-contdel/exercises-students-ws23) oder einem anderen Repository-Host Ihrer Wahl gehostet wird.  

### Build-Konfiguration
- [ ] **Build Skript definieren**: Erstellen Sie ein Build-Skript oder eine Build-Konfigurationsdatei, die die spezifischen Schritte des Build-Prozesses für Ihr Projekt definiert. Dies könnte eine `pom.xml` für ein Maven-Projekt, eine `build.gradle` für ein Gradle-Projekt oder eine `package.json` für ein Node.js-Projekt sein.

### Abhängigkeitsmanagement
- [ ] **Definieren von Dependencies**: Fügen Sie alle notwendigen Abhängigkeiten zu Ihrem Build-Skript oder Ihrer Build-Konfigurationsdatei hinzu. Dies stellt sicher, dass alle benötigten Bibliotheken und Frameworks automatisch heruntergeladen und in den Build-Prozess integriert werden.

### Lokale Build-Ausführung
- [ ] **Lokale Build Skript in Terminal durchlaufen**: Führen Sie das Build-Skript lokal in Ihrem Terminal aus, um sicherzustellen, dass alles wie erwartet funktioniert. Dies ist ein wichtiger Schritt, um eventuelle Fehler frühzeitig zu erkennen und zu beheben.

### Portabilität verifizieren
- [ ] Stellen Sie sicher, dass das Build-Skript und alle zugehörigen Dateien im Repository gespeichert sind. Testen Sie den Build-Prozess auf verschiedenen Systemen innerhalb Ihres 2er-Teams, um die Portabilität zu überprüfen.

### Wiederholbarkeit verifizieren
- [ ] Führen Sie den Build-Prozess mehrmals durch und vergleichen Sie die Ergebnisse. Dies sollte in beiden Systemen des 2er-Teams gemacht werden, um sicherzustellen, dass der Build-Prozess wiederholbar ist.

### Gegenüberstellung mit Anti-Patterns
- [ ] Vergleichen Sie die Bestandteile und Prozesse Ihres automatischen Builds mit den bekannten Anti-Patterns im Bereich des Software-Builds. Identifizieren Sie, welche dieser Anti-Patterns durch Ihren automatischen Build-Prozess adressiert und möglicherweise gelöst werden. Beschreiben Sie in eigenen Worten, warum und wie das jeweilige Anti-Pattern durch Ihren Ansatz aufgelöst wird.

### Dokumentation und README
- [ ] Erstellen Sie eine umfassende Dokumentation für Ihr Projekt. Dazu gehört ein README-File, das den Build-Prozess, die Abhängigkeiten und die Verwendung des Projekts erklärt. Halten Sie auch Ihre Tätigkeiten, Entscheidungen und Recherchen fest, um den Prozess für andere Teammitglieder oder zukünftige Sie selbst nachvollziehbar zu machen.

---

Weitere Themen und Schritte werden im Laufe der Lehrveranstaltung hinzugefügt, um Ihr Verständnis und Ihre Fähigkeiten im Bereich der Build-Automatisierung und der kontinuierlichen Integration weiter zu vertiefen.