// pages/api/submit-form.js

import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).send('Nombre y correo electrónico son requeridos');
    }

    try {
      // Autenticación de Google
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Asegúrate de que los saltos de línea se manejen bien
          project_id: process.env.GOOGLE_PROJECT_ID,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const authClient = await auth.getClient();
      const sheets = google.sheets({ version: 'v4', auth: authClient });

      // Escribir en la hoja de cálculo
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'Hoja 1!A:B',
        valueInputOption: 'RAW',
        resource: {
          values: [
            [name, email]
          ],
        },
      });

      console.log('Datos agregados:', response.data.updates.updatedRange);
      res.status(200).send('Datos recibidos y procesados');
    } catch (error) {
      console.error('Error al agregar los datos:', error);
      res.status(500).send(`Error al procesar los datos: ${error.message}`);
    }
  } else {
    // Si no es un POST, retornamos un método no permitido
    res.status(405).send('Método no permitido');
  }
}
