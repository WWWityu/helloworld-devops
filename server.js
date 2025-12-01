import express from 'express';
import open from 'open'; // Importáljuk az 'open' csomagot a böngészőnyitáshoz

const app = express();
const port = 8080;
const url = `http://localhost:${port}`;

// Egyszerű HTTP GET útvonal, most már beágyazott HTML/CSS-sel
app.get('/', (req, res) => {
  // A HTML válasz, amely tartalmazza a vizuális formázást (<style> blokk)
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="hu">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DevOps App</title>
        <style>
            /* Egyszerű, de látványos CSS stílusok */
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                margin: 0;
                background-color: #f0f4f8; /* Világoskék háttér */
                font-family: 'Arial', sans-serif;
            }
            .message-box {
                background-color: #ffffff;
                padding: 40px 60px;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                text-align: center;
                border-left: 8px solid #3b82f6; /* Kék hangsúlyos él */
            }
            h1 {
                color: #1e40af; /* Mélyebb kék szöveg */
                font-size: 2.5em;
                margin: 0;
            }
            .version {
                margin-top: 10px;
                color: #4b5563;
                font-size: 1em;
            }
        </style>
    </head>
    <body>
        <div class="message-box">
            <h1>Hello DevOps World! Verebes Viktor vagyok R8Q3N0 a Neptun kódom</h1>
            <p class="version">Vizuálisan formázott verzió</p>
        </div>
    </body>
    </html>
  `;

  // Elküldjük a teljes HTML választ
  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Az alkalmazás a ${url} címen fut!`);
  console.log('Készen áll a konténerizálásra és a DevOps folyamatokra.');

  // Automatikus böngészőnyitás a szerver indulása után
  open(url);
  console.log(`A böngésző automatikusan megnyitja: ${url}`);
});