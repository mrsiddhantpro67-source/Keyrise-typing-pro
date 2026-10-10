const express = require('express');
const path = require('path');

const app = express();
const PUBLIC_DIR = path.join(__dirname, 'public');

app.disable('x-powered-by');

// Render uses this to check that the service is alive
app.get('/health', (req, res) => res.status(200).send('ok'));

// Serve the typing app (public/index.html and any other static files)
app.use(express.static(PUBLIC_DIR, { maxAge: '1h' }));

// Anything else opens the app
app.use((req, res) => res.sendFile(path.join(PUBLIC_DIR, 'index.html')));

// Render sets PORT automatically; 3000 is used when running locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`KeyRise is running on port ${PORT}`);
});
