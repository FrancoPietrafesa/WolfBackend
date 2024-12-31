const express = require('express');
const next = require('next');
const { google } = require('googleapis');
require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Asegúrate de que las saltos de línea se manejen bien
      project_id: process.env.GOOGLE_PROJECT_ID,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  server.post('/submit-form', async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).send('Nombre y correo electrónico son requeridos');
    }

    try {
      const authClient = await auth.getClient();
      const sheets = google.sheets({ version: 'v4', auth: authClient });
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SPREADSHEET_ID, // Usar el ID de la hoja desde las variables de entorno
        range: 'Hoja 1!A:B',
        valueInputOption: 'RAW',
        resource: {
          values: [
            [name, email]
          ],
        },
      });
      console.log('Datos agregados:', response.data.updates.updatedRange);
      res.send('Datos recibidos y procesados');
    } catch (error) {
      console.error('Error al agregar los datos:', error);
      res.status(500).send(`Error al procesar los datos: ${error.message}`);
    }
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
