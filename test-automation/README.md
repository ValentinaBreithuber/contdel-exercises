### Übungsanleitung: Testautomatisierung

#### Einleitung

Diese Übungsanleitung führt durch vier Übungen zur **Testautomatisierung** in verschiedenen Technologien: Java, Python, JavaScript und Web-Entwicklung. Ziel ist es, die Testautomatisierung zu wiederholen und zu vertiefen, um Projekte effizienter und stabiler zu gestalten.

---

## Überblick

| Übung | Technologie | Zeit mit Vorkenntnissen | Zeit ohne Vorkenntnisse | Link                                                           |
|-------|-------------|-------------------------|-------------------------|----------------------------------------------------------------|
| 1     | Java        | 30-45 Minuten           | 45-90 Minuten           | [test-01-java-maven](test-01-java-maven)                       |
| 2     | JavaScript      | 30-45 Minuten           | 45-90 Minuten           | [test-02-js-npm](test-02-js-npm)                               |
| 3     | Python  | 30-45 Minuten           | 45-90 Minuten           | [test-03-python-pip-setuptools](test-03-python-pip-setuptools) |
| 4     | Web         | 30-45 Minuten           | 45-90 Minuten           | [test-04-web-webpack](test-04-web-webpack)                     |

**Hinweis**: Die angegebenen Zeiten sind Schätzungen. Starten Sie mit der Ihnen vertrautesten Technologie.

---

## Einführung in die Testautomatisierung für die Beispiele

### 1. Java (Maven)

In der **Java-Maven**-Übung wird mit JUnit getestet. Das **JUnit-Framework** ist ideal für Unit-Tests, da es viele Annotations und Assertions bereitstellt. **Parameterized Tests** bieten die Möglichkeit, verschiedene Eingabewerte zu testen, und Mocking-Frameworks wie **Mockito** simulieren Abhängigkeiten.

---

### 2. JavaScript (npm + Jest)

Mit **Jest** in der JavaScript-Umgebung lässt sich Testabdeckung aktivieren. Die Übung zeigt, wie Unit-Tests in npm integriert werden, um sicherzustellen, dass alle JavaScript-Module korrekt arbeiten. **Mocking** und **Stubbing** werden genutzt, um komplexe Abhängigkeiten zu isolieren.

---

### 3. Python (Setuptools)

Für **Python** wird das `unittest`-Framework verwendet. Dieses Framework ermöglicht einfache Unit-Tests, kann aber durch Bibliotheken wie **pytest** erweitert werden. Zudem können **Mock-Objekte** und **Stubs** verwendet werden, um externe Abhängigkeiten zu isolieren und realistische Testszenarien zu simulieren.

---

### 4. Web-Entwicklung (Webpack)

Für **Webpack**-Projekte werden automatisierte Tests mit Jest integriert. Diese Übung konzentriert sich auf das Testen von gebündelten Ressourcen und zeigt, wie Tests bereits während des **Build-Prozesses** ausgeführt werden können. Erweiterte Integrationstests sind notwendig, um das finale `bundle.js` zu verifizieren.

---

## Ergänzende Test-Themen

- **Testabdeckung** ([Beispiel](test-04-web-webpack/test-coverage.md)): Messen Sie, welche Teile Ihres Codes von Tests abgedeckt werden, und erweitern Sie Ihre Tests entsprechend.
- **Parameterisierte Tests** ([Beispiel](test-01-java-maven/parameterized-test.md)): Testen Sie Ihre Funktionen mit verschiedenen Datensätzen, um die Robustheit sicherzustellen.
- **Mocking und Stubbing** ([Beispiel](test-03-python-pip-setuptools/mocking.md)): Verwenden Sie Mock-Objekte, um die Abhängigkeiten Ihrer Tests zu isolieren und besser kontrollieren zu können.
- **Test Reports**: Erzeugen Sie nach jedem Testlauf detaillierte Berichte, um Fehler leicht nachvollziehen zu können.
- **Continuous Testing**: Integrieren Sie Ihre Tests in eine **CI/CD-Pipeline**, um bei jeder Codeänderung automatisiert Tests auszuführen und so die Stabilität des Codes zu gewährleisten.

---

## Abschließender Hinweis

Nach Abschluss dieser Übungsreihe sollten Sie in der Lage sein, Testautomatisierung in verschiedenen Projekten anzuwenden. Dies steigert die Effizienz, verbessert die Codequalität und hilft, potenzielle Fehler frühzeitig zu erkennen. Nutzen Sie die Konzepte zur Integration in zukünftige Projekte oder eine TechDemo.