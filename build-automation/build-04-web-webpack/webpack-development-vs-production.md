### Anleitung: Webpack für Entwicklungs- und Produktions-Builds

#### Einleitung
Webpack ist ein leistungsfähiger Modulbündler, der für Entwicklungs- und Produktionsprozesse verwendet werden kann. Mithilfe der **`mode`-Option** können Builds speziell für die **Entwicklung** oder **Produktion** optimiert werden. Hier ist eine Anleitung, wie man Webpack so konfiguriert, dass es für beide Umgebungen funktioniert.

#### Ziel
- **Entwicklungsmodus**: Ermöglicht schnelles Feedback durch schnelle Builds, aktivierte Source Maps und Hot Module Replacement (HMR).
- **Produktionsmodus**: Optimiert den Code für die Ausführung im Browser, inklusive Minifizierung und Tree Shaking.

#### Beispielkonfiguration: Entwicklung und Produktion

1. **Installation der Abhängigkeiten**:
   ```bash
   npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader
   ```

2. **Erstellen der `webpack.config.js` für beide Modi**:
   Webpack ermöglicht das Umschalten zwischen **Entwicklung** und **Produktion** durch die `mode`-Option. Hier ist eine Beispielkonfiguration:
   
   ```javascript
   const path = require('path');
   const HtmlWebpackPlugin = require('html-webpack-plugin');

   module.exports = (env, argv) => {
     const isProduction = argv.mode === 'production';

     return {
       entry: './src/index.js',
       output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, 'dist'),
         clean: true
       },
       mode: isProduction ? 'production' : 'development',
       devtool: isProduction ? false : 'source-map',
       plugins: [
         new HtmlWebpackPlugin({
           template: './src/index.html'
         })
       ],
       devServer: {
         static: './dist',
         hot: true
       },
       module: {
         rules: [
           {
             test: /\.css$/,
             use: ['style-loader', 'css-loader']
           }
         ]
       }
     };
   };
   ```

   **Erklärungen**:
   - `mode: 'production'`: Aktiviert Optimierungen wie Minifizierung und Tree Shaking.
   - `devtool: 'source-map'`: Hilft im Entwicklungsmodus beim Debuggen.
   - `devServer.hot`: Ermöglicht Hot Module Replacement im Entwicklungsmodus.
   - **`argv.mode`**: Erkennt automatisch, ob der Build im Entwicklungs- oder Produktionsmodus ausgeführt wird.

3. **Anpassen der `package.json`-Skripte**:
   Um Webpack im Entwicklungs- oder Produktionsmodus auszuführen, können die folgenden Skripte in die `package.json` hinzugefügt werden:
   
   ```json
   {
     "scripts": {
       "build:dev": "webpack --mode development",
       "build:prod": "webpack --mode production",
       "start": "webpack serve --open --mode development"
     }
   }
   ```

   **Erklärungen**:
   - `build:dev`: Startet den Entwicklungsbuild mit `mode: development`.
   - `build:prod`: Führt einen optimierten Produktionsbuild aus.
   - `start`: Startet den Entwicklungsserver mit Hot Module Replacement und öffnet den Browser.

4. **Erstellen der Dateien für das Projekt**:

   - **`src/index.js`**:
     ```javascript
     import './styles.css';

     console.log('Hello from Webpack!');
     ```

   - **`src/index.html`**:
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

   - **`src/styles.css`**:
     ```css
     body {
       background-color: lightblue;
     }
     ```

5. **Build-Prozess ausführen**:

   - **Entwicklungs-Build**:
     ```bash
     npm run build:dev
     ```

   - **Produktions-Build**:
     ```bash
     npm run build:prod
     ```

   - **Entwicklungsserver starten**:
     ```bash
     npm start
     ```

#### Unterschied zwischen Entwicklungs- und Produktions-Builds

- **Entwicklungsmodus**:
  - Aktiviert **Source Maps** für einfacheres Debugging.
  - Ermöglicht **Hot Module Replacement (HMR)**, damit Änderungen sofort im Browser sichtbar sind, ohne die Seite neu zu laden.
  - Schnelleres Builden ohne Minifizierung.

- **Produktionsmodus**:
  - **Minifizierung** von JavaScript und CSS.
  - **Tree Shaking**, um ungenutzten Code zu eliminieren.
  - Optimiertes Laden von Modulen für bessere Performance.

#### Fazit
Webpack ermöglicht es, Projekte sowohl für die Entwicklung als auch für die Produktion effizient zu bauen. Im Entwicklungsmodus liegt der Fokus auf schnellen Builds und Live-Feedback, während der Produktionsmodus optimierte, performante Bundles erstellt. Durch die Integration beider Modi in einem Setup kann der Build-Prozess für beide Szenarien automatisiert werden.