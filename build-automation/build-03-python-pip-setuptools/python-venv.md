### Anleitung: Verwendung von virtuellen Umgebungen für Python

#### 1. Was ist eine virtuelle Umgebung?
Eine virtuelle Umgebung ist ein isolierter Python-Arbeitsbereich, in dem Abhängigkeiten und Pakete unabhängig vom globalen Python-System installiert werden. Dies hilft, Konflikte zwischen Projekten zu vermeiden, die unterschiedliche Versionen von Abhängigkeiten benötigen.

#### 2. Erstellung einer virtuellen Umgebung

1. **Erstellen**:  
   Mit dem Befehl `venv` kann eine virtuelle Umgebung erstellt werden:

   ```bash
   python -m venv venv
   ```

   Dies erstellt ein Verzeichnis namens `venv`, das die Umgebung enthält.

#### 3. Aktivierung der virtuellen Umgebung

1. **Aktivierung**:
   Nach der Erstellung muss die Umgebung aktiviert werden:

   - **Linux/macOS**:
     ```bash
     source venv/bin/activate
     ```
   
   - **Windows**:
     ```bash
     venv\Scripts\activate
     ```

   Nach der Aktivierung wird der Name der Umgebung in der Konsole angezeigt.

#### 4. Installation von Abhängigkeiten

In der aktivierten Umgebung können nun alle Pakete und Abhängigkeiten installiert werden, ohne das globale Python-System zu beeinflussen:

```bash
pip install <paketname>
```

Beispiel:

```bash
pip install requests
```

#### 5. Verlassen der virtuellen Umgebung

Um die virtuelle Umgebung zu verlassen, einfach den Befehl `deactivate` ausführen:

```bash
deactivate
```

#### 6. Virtuelle Umgebung löschen

Das Löschen einer virtuellen Umgebung ist einfach: das Verzeichnis `venv/` kann manuell gelöscht werden, um alle installierten Pakete und die Konfigurationen zu entfernen.

---

### Zusammenfassung der Befehle

1. **Erstellen einer virtuellen Umgebung**:
   ```bash
   python -m venv venv
   ```

2. **Aktivieren der virtuellen Umgebung**:
   - Linux/macOS:
     ```bash
     source venv/bin/activate
     ```
   - Windows:
     ```bash
     venv\Scripts\activate
     ```

3. **Verlassen der virtuellen Umgebung**:
   ```bash
   deactivate
   ```

Mit virtuellen Umgebungen wird sichergestellt, dass Python-Projekte mit den richtigen Abhängigkeiten und Versionen laufen, ohne das globale System zu beeinflussen.