const express = require('express');
const app = express();
const prospectRoutes = require('./routes/prospect.routes');
const loginRoutes = require('./routes/login.routes');
const empresaRoutes = require('./routes/empresa.routes');
const perfilRoutes = require('./routes/perfil.routes');
const menuRoutes = require('./routes/menu.routes');
const servicioRoutes = require('./routes/servicio.routes');
const direccionRoutes = require('./routes/direccion.routes');
const referenciaRoutes = require('./routes/referencia.routes');

const cors = require('cors');

app.use(express.json());
app.use(cors()); 

app.use(cors({ origin: '*' }));

app.use('/api/prospect', prospectRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/empresa', empresaRoutes);
app.use('/api/perfil', perfilRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/servicio', servicioRoutes);
app.use('/api/direccion', direccionRoutes);
app.use('/api/referencia', referenciaRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));