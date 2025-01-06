### setuptools und pip: Funktionsweise und Handhabung

#### Funktionsweise
**setuptools** ist ein Build-System für Python, das es ermöglicht, Pakete zu erstellen und zu verteilen. Allerdings sollte `setup.py` nicht mehr direkt aufgerufen werden, da dies veraltet ist. **pip** und das Tool **build** sollten stattdessen verwendet werden. `setuptools` verwendet weiterhin die `setup.py`-Datei, um Abhängigkeiten und Konfigurationen zu definieren, aber der Build erfolgt über standardisierte Tools wie `python -m build`.

#### Wichtige Befehle
Die wichtigsten Befehle für `setuptools` und `pip` unter Berücksichtigung der aktuellen Standards sind:

- **`python -m build`**: Baut das Projekt, erstellt Quell- und Wheel-Distributionen.
- **`pip install .`**: Installiert das Python-Paket aus dem aktuellen Verzeichnis.
- **`pip install -r requirements.txt`**: Installiert alle Abhängigkeiten aus der `requirements.txt`.
- **`pip freeze > requirements.txt`**: Exportiert alle aktuellen Abhängigkeiten in eine `requirements.txt`.

#### Einfaches Beispiel

1. **Projektverzeichnis erstellen**:
   
   ```bash
   mkdir contdel_app
   cd contdel_app
   ```

2. **Projekt initialisieren**:
   Eine `setup.py`-Datei erstellen:

   ```python
   from setuptools import setup, find_packages

   setup(
       name='contdel_app',
       version='0.1',
       packages=find_packages(),
       install_requires=[
           # Abhängigkeiten
       ],
   )
   ```

3. **Abhängigkeiten hinzufügen**:
   Eine `requirements.txt`-Datei erstellen:

   ```text
   requests==2.25.1
   ```

4. **Abhängigkeiten installieren**:

   ```bash
   pip install -r requirements.txt
   ```

5. **Paket erstellen**:
   Verwende **build** statt direktem Aufruf von `setup.py`:

   ```bash
   python -m build
   ```

   Dies erstellt sowohl das Quellpaket (`.tar.gz`) als auch das Wheel-Paket (`.whl`) im `dist/`-Verzeichnis.

6. **Paket installieren**:

   ```bash
   pip install .
   ```

7. **Paket nach Änderungen aktualisieren**:

   ```bash
   pip install --upgrade .
   ```

#### Automatisierte Tests mit `pytest`

Tests können in den Build-Prozess integriert werden:

1. **pytest installieren**:

   ```bash
   pip install pytest
   ```

2. **Tests in `setup.cfg` integrieren**:

   Erstelle eine Datei `setup.cfg` mit folgendem Inhalt:

   ```ini
   [tool:pytest]
   testpaths = tests
   ```

3. **Tests ausführen**:

   ```bash
   pytest
   ```

#### Integration in den Build-Prozess

Für die Automatisierung von Builds, Tests und Veröffentlichungen können Skripte und CI-Tools verwendet werden:

1. **Automatisierte Skripte**:

   Ein Beispielskript, das Linting, Tests und Builds ausführt:

   ```bash
   # Linting mit flake8
   pip install flake8
   flake8 .

   # Tests mit pytest
   pytest

   # Build-Prozess
   python -m build
   ```

2. **[Veröffentlichung auf PyPI](https://twine.readthedocs.io/en/stable/)**:

   Mit dem Tool **twine** das [Paket auf PyPI hochladen](python-pypi.md):

   ```bash
   twine upload dist/*
   ```

#### Wheel-Format als moderne Alternative

Das **Wheel-Format** (`.whl`) ist das bevorzugte Distributionsformat für Python-Pakete, da es effizienter und schneller installiert werden kann:

```bash
pip install dist/my_package-0.1-py3-none-any.whl
```

### Fazit

Die Verwendung von `setuptools` in Kombination mit den modernen Tools wie **build** und **twine** bietet eine leistungsfähige Möglichkeit, Python-Pakete zu erstellen und zu veröffentlichen. Der direkte Aufruf von `setup.py` ist veraltet; stattdessen sollten standardisierte Werkzeuge wie `build` und `pip` verwendet werden, um den Build-Prozess zu vereinfachen und Abhängigkeiten besser zu verwalten.