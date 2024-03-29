const Prospecto = require('../services/prospect.services');
const fs = require('fs');
const path = require('path');
const pdfMake = require('pdfmake');

exports.datosGeneralesCandidato = async (req, res) => {
    try {
        const prospectos = await Prospecto.obtenerProspectosTodosPorEmpresa(req.params.id);
        generatePDF(prospectos);
        res.download('documents.pdf', 'documents.pdf');
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error en ' +
                'controller.datosGeneralesCandidato ' +
                'obtener las empresas ', error
        });
    }
};

const generatePDF = async (documents) => {
    const docDefinition = {
        content: [
          {
            image: path.join(__dirname, '..', 'images', 'eqhlogo.jpg'), // Ruta del logo
            width: 100,
            alignment: 'center'
          },
          { text: 'Reporte de Documentos', style: 'header', alignment: 'center', margin: [0, 20] }, // Título
          {
            style: 'tableExample',
            table: {
              headerRows: 1,
              widths: ['*', '*', '*'],
              body: [
                ['Nombre', 'Correo', 'Teléfono'], // Headers de la tabla
                ...documents.map(document => [document.title, document.content, '']) // Filas de la tabla
              ]
            },
            layout: 'lightHorizontalLines' // Estilo de la tabla
          }
        ],
        styles: {
          header: {
            fontSize: 24,
            bold: true
          },
          tableExample: {
            margin: [0, 5, 0, 15]
          }
        }
      };
    
      const pdfDoc = pdfMake.createPdf(docDefinition);
      pdfDoc.pipe(fs.createWriteStream('documents.pdf'));
      pdfDoc.end();
};

///pdfkit

// // const Prospecto = require('../services/prospect.services');
// // const PDFDocumento = require('pdfkit');
// // const fs = require('fs');
// // const path = require('path');

// // exports.datosGeneralesCandidato = async (req, res) => {
// //     try {
// //         const prospectos = await Prospecto.obtenerProspectosTodosPorEmpresa(req.params.id);
// //         generatePDF(prospectos);
// //         res.download('documents.pdf', 'documents.pdf');
// //     } catch (error) {
// //         res.status(500).json({
// //             mensaje: 'Error en ' +
// //                 'controller.datosGeneralesCandidato ' +
// //                 'obtener las empresas ', error
// //         });
// //     }
// // };

// // const generatePDF = async (documents) => {
// //     const doc = new PDFDocumento();
// //     doc.pipe(fs.createWriteStream('documents.pdf'));
// //     //doc.rect(0, 0, doc.page.width, doc.page.height).fillAndStroke(doc.page.fill, '#002b36');
// //     doc.font('Helvetica');
// //     const imagePath = path.join(__dirname, '..', 'images', 'eqhlogo.jpg');
// //     doc.image(imagePath, {
// //         fit: [100, 50], // Tamaño de la imagen
// //         align: 'left', // Alineación de la imagen

// //     });
// //     doc.moveDown(10); // Salto de línea
// //     doc.fontSize(18).text('Lista de Candidatos', { align: 'center' }).moveDown(0.5);

// //     doc.fill('#93a1a1').fontSize(14).text('ID', { width: 100, align: 'center' });
// //     doc.fill('#93a1a1').text('Título', { width: 200, align: 'center' });
// //     doc.fill('#93a1a1').text('Contenido', { width: 300, align: 'center' });
// //     doc.moveDown(0.5);
// //     documents.forEach((document, index) => {
// //         doc.fontSize(14).text(`CURP #${index + 1}`, { underline: true }).moveDown(0.5);
// //         doc.fontSize(12).text(`Nombre: ${document.nombre}` + `${document.apellido}`).moveDown(0.2);
// //         doc.fontSize(12).text(`Telefono: ${document.telefono}`).moveDown(1);
// //     });
// //     doc.moveDown(2);

// //     doc.end();
// // };