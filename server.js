const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (agar koi CSS/JS/Images alag se ho, par yahan sab ek hi me hai)
app.use(express.static(path.join(__dirname)));

// Root route par aapki HTML file send karega
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Keyrisetypingpro.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
