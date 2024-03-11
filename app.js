const express = require('express');
const app = express();
const prospectRoutes = require('./routes/prospect.routes');
const loginRoutes = require('./routes/login.routes');

app.use(express.json());

app.use('/api/prospects', prospectRoutes);
app.use('/api/login', loginRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));