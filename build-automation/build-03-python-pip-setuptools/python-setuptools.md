### Anleitung: Installation und Überprüfung von Python, setuptools und build

#### 1. Überprüfen der Python-Installation

Bevor mit der Verwendung von `setuptools` oder dem Python-Projekt begonnen wird, ist es wichtig sicherzustellen, dass Python korrekt installiert ist.

1. **Python-Version überprüfen**:
   Um zu überprüfen, ob Python auf dem System installiert ist, folgenden Befehl in der Kommandozeile ausführen:

   ```bash
   python --version
   ```

   Oder, falls der Befehl nicht funktioniert:

   ```bash
   python3 --version
   ```

   Dieser Befehl sollte die installierte Python-Version anzeigen, z. B.:

   ```bash
   Python 3.11.0
   ```

2. **Fehlerbehebung**:
   Falls keine Python-Version angezeigt wird oder der Befehl nicht gefunden wird, ist Python möglicherweise nicht installiert oder nicht in den Umgebungsvariablen des Systems eingetragen.
   - Python kann von der offiziellen Website heruntergeladen werden: [https://www.python.org/downloads/](https://www.python.org/downloads/)
   - Während der Installation darauf achten, die Option **"Add Python to PATH"** auszuwählen, um Python systemweit verfügbar zu machen.

#### 2. Installation von `setuptools` und `build`

Falls beim Ausführen von Befehlen wie `python setup.py` oder `python -m build` eine Fehlermeldung wie **ModuleNotFoundError: No module named 'setuptools'** oder **No module named 'build'** auftritt, bedeutet das, dass die entsprechenden Module nicht installiert sind.

Um dieses Problem zu beheben, müssen `setuptools` und `build` installiert werden:

1. **Setuptools und build installieren**:
   - In der Kommandozeile den folgenden Befehl ausführen, um `setuptools` und `build` zu installieren:

   ```bash
   pip install setuptools build
   ```

   Wenn `pip` nicht installiert ist, kann es über Python installiert werden. In diesem Fall den Befehl ausführen:

   ```bash
   python -m ensurepip --upgrade
   ```

2. **Überprüfung der Installation von `setuptools` und `build`**:
   - Um sicherzustellen, dass beide Module korrekt installiert wurden, die folgenden Befehle ausführen:

   ```bash
   pip show setuptools
   pip show build
   ```

   Diese Befehle zeigen Informationen über die installierten Versionen von `setuptools` und `build` an, z. B.:

   ```bash
   Name: setuptools
   Version: 58.0.0

   Name: build
   Version: 0.7.0
   ```

3. **Setuptools und build erneut installieren, falls notwendig**:
   - Falls die Module nicht korrekt installiert sind oder eine alte Version verwendet wird, können sie erneut installiert oder aktualisiert werden:

   ```bash
   pip install --upgrade setuptools build
   ```

#### 3. Build-Befehl ausführen

Nachdem sichergestellt wurde, dass Python, `setuptools` und `build` installiert sind, kann der Build-Befehl ausgeführt werden, um das Python-Paket zu erstellen:

1. **Quell- und Wheel-Distribution erstellen**:
   - Anstelle von `python setup.py` den folgenden Befehl verwenden, um den Build durchzuführen:

   ```bash
   python -m build
   ```

   Dies erstellt sowohl eine Quell-Distribution (`.tar.gz`) als auch eine Wheel-Datei (`.whl`) im `dist/`-Verzeichnis.

#### 4. Verwendung einer virtuellen Umgebung (Optional)

Es wird empfohlen, eine **virtuelle Umgebung** für Python-Projekte zu verwenden, um Abhängigkeiten sauber zu isolieren.

1. **Virtuelle Umgebung erstellen**:
   - Eine virtuelle Umgebung erstellen, indem der folgende Befehl ausgeführt wird:

   ```bash
   python -m venv venv
   ```

   Dies erstellt eine virtuelle Umgebung im Verzeichnis `venv/`.

2. **Virtuelle Umgebung aktivieren**:
   - Die Umgebung aktivieren:

   - **Linux/macOS**:
     ```bash
     source venv/bin/activate
     ```

   - **Windows**:
     ```bash
     venv\Scripts\activate
     ```

3. **Abhängigkeiten installieren**:
   - Nach der Aktivierung der virtuellen Umgebung können alle Abhängigkeiten, einschließlich `setuptools` und `build`, innerhalb der Umgebung installiert werden, ohne das globale Python-System zu beeinflussen:

   ```bash
   pip install setuptools build
   ```

4. **Verlassen der virtuellen Umgebung**:
   - Die virtuelle Umgebung kann durch Eingabe von `deactivate` verlassen werden:

   ```bash
   deactivate
   ```

#### Zusammenfassung

- **Python-Installation überprüfen**: Mit `python --version` sicherstellen, dass Python korrekt installiert ist.
- **Setuptools und build installieren**: Falls die Module nicht verfügbar sind, mit `pip install setuptools build` installieren.
- **Virtuelle Umgebung verwenden**: Eine virtuelle Umgebung kann zur sauberen Verwaltung von Abhängigkeiten verwendet werden.
