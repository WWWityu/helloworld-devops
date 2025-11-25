// server.js - Az egyszerű Node.js/Express HTTP szerver
import express from 'express';

const app = express();
const port = 8080;

// Egyszerű HTTP GET útvonal
app.get('/', (req, res) => {
  // A kötelezően elvárt egyszerű szöveges válasz
  res.send('Hello DevOps World! - Verebes Viktor által készített végleges verzió');
});

app.listen(port, () => {
  console.log(`Az alkalmazás a http://localhost:${port} címen fut!`);
  console.log('Készen áll a konténerizálásra és a DevOps folyamatokra.');
});
// A HTTP elérés és a szövegvisszaadás elvárása teljesítve.