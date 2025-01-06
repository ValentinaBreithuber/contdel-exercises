### Webpack
**Webpack** ist in der **Build-Automatisierung** relevant, weil es den gesamten Frontend-Build-Prozess für moderne JavaScript-Anwendungen effizienter gestaltet. Es kombiniert und optimiert mehrere Ressourcen wie JavaScript, CSS und Bilder in einem oder mehreren Bundles. Durch **Code-Splitting** werden nur benötigte Dateien geladen, was die Performance verbessert. Außerdem unterstützt es **Tree Shaking**, um ungenutzten Code zu eliminieren, und bietet Plugins für Automatisierungen wie die Generierung von HTML oder das Hot Module Replacement (HMR), was schnelle Entwicklungs-Iterationen ermöglicht. 

Diese Features machen Webpack zu einem wertvollen Bestandteil der Build-Automatisierung in Webprojekten.


#### Funktionsweise
Webpack ist ein Modulbündler für moderne JavaScript-Anwendungen, der mehrere Ressourcen wie JavaScript, CSS, Bilder etc. verarbeitet und zu einem oder mehreren Bundles kombiniert. Diese Bundles können dann effizient im Browser ausgeführt werden. Webpack ermöglicht Code-Splitting, damit der Code nur bei Bedarf geladen wird, und unterstützt moderne Frontend-Technologien wie **ES6-Module** und **Tree Shaking**, um ungenutzten Code zu eliminieren.

#### Handhabung
Webpack wird über eine Konfigurationsdatei namens `webpack.config.js` gesteuert. Diese Datei definiert, wie Webpack den Code verarbeiten soll, von der Eingabedatei (entry point) bis zur Ausgabe des finalen Bundles.

#### Erstes einfaches Beispiel

1. **Installation von Webpack**:
   Installiere Webpack und einige nützliche Plugins:
   ```bash
   npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin
   ```

2. **Erstellen einer Konfigurationsdatei `webpack.config.js`**:
   Eine einfache Konfiguration mit einem Entry-Point und einem Output:
   ```javascript
   const path = require('path');

   module.exports = {
     entry: './src/index.js',
     output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname, 'dist')
     },
     plugins: [
       new HtmlWebpackPlugin({
         template: './src/index.html'
       })
     ]
   };
   ```


   - **HtmlWebpackPlugin**: Dies generiert automatisch die `index.html`, die das gebündelte Skript (`bundle.js`) referenziert.
   - **Output und Filename**: Ermöglicht die Anpassung des Ausgabeordners und des Dateinamens.
   - **Mode**: Füge `mode: 'development'` oder `mode: 'production'` hinzu, um automatisch Optimierungen basierend auf der Umgebung durchzuführen.

3. **Erstellen der JavaScript-Datei `src/index.js`**:
   Eine einfache Datei, die eine Konsolenausgabe ausgibt:
   ```javascript
   console.log('Hello, Webpack!');
   ```

4. **HTML-Datei `src/index.html`** hinzufügen:
   Ein einfaches HTML-Dokument, das die generierte `bundle.js` einbindet:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Webpack App</title>
   </head>
   <body>
       <h1>Hello, Webpack!</h1>
   </body>
   </html>
   ```

5. **Hinzugefügte npm-Skripte**:
   Um den Build-Prozess zu automatisieren und Webpack einfacher auszuführen, fügen Sie in der `package.json` ein Skript hinzu:
   ```json
   {
     "scripts": {
       "build": "webpack",
       "start": "webpack serve --open"
     }
   }
   ```

6. **Build-Prozess ausführen**:
   Der Build-Prozess erzeugt das Bundle, welches im `dist`-Ordner gespeichert wird:
   ```bash
   npm run build
   ```

7. **Starten des Entwicklungsservers**:
   Der Entwicklungsserver bietet Live-Neuladen und Hot Module Replacement (HMR):
   ```bash
   npm start
   ```

**abschließende Punkte**

- **Mode-Option**: Füge in der Konfiguration die `mode`-Option hinzu, um zwischen **Entwicklungsmodus** (`development`) und **Produktionsmodus** (`production`) zu wechseln. Dies sorgt für optimierte Bundles in der Produktion:
   ```javascript
   mode: 'development',
   ```

- **Source Maps**: Im Entwicklungsmodus ist es ratsam, Source Maps zu aktivieren, um Debugging zu erleichtern:
   ```javascript
   devtool: 'source-map',
   ```

- **Loaders**: Um CSS oder Bilder zu verarbeiten, können Webpack-Loaders verwendet werden, z.B.:
   ```bash
   npm install --save-dev css-loader style-loader
   ```
   Und in der `webpack.config.js`:
   ```javascript
   module: {
     rules: [
       {
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
       }
     ]
   }
   ```
