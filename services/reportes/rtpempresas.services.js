const Empresas = require('../../models/empresa.model');


const fs = require('fs');
const path = require('path');

const fonts = {
    Roboto: {
        normal: path.join(__dirname, '..', '..\\fonts\\Arial', 'Arial Black.ttf'), // Ruta a la fuente regular
        bold: path.join(__dirname, '..', '..\\fonts\\Arial', 'Arial Bold.ttf'), // Ruta a la fuente en negrita
        italics: path.join(__dirname, '..', '..\\fonts\\Arial', 'Arial Italic.ttf'), // Ruta a la fuente cursiva
        bolditalics: path.join(__dirname, '..', '..\\fonts\\Arial', 'Arial Bold Italic.ttf') // Ruta a la fuente negrita cursiva
    }

};

const PdfPrinter = require('pdfmake');
const printer = new PdfPrinter(fonts);

const generatePDF = async (documents) => {

    var docDefinition = {
        content: [
            {
                text: [
                    'This ',
                    { text: 'is', color: 'green' },
                    ' the first ',
                    { text: 'paragraph', color: 'red' }
                ]
            },
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 310,
                        h: 290,
                        r: 5,
                        dash: { length: 5 },
                        // lineWidth: 10,
                        lineColor: 'blue',
                    },
                    {
                        type: 'rect',
                        x: 1,
                        y: 1,
                        w: 308,
                        h: 288,
                        r: 4,
                        lineColor: 'red',
                        color: '#ffffe0',
                    },
                    {
                        type: 'polyline',
                        lineWidth: 3,
                        closePath: true,
                        points: [{ x: 10, y: 10 }, { x: 35, y: 40 }, { x: 100, y: 40 }, { x: 125, y: 10 }]
                    },
                    {
                        type: 'polyline',
                        lineWidth: 2,
                        color: 'blue',
                        lineColor: 'red',
                        points: [{ x: 10, y: 110 }, { x: 35, y: 140 }, { x: 100, y: 140 }, { x: 125, y: 110 }, { x: 10, y: 110 }]
                    },
                    {
                        type: 'line',
                        x1: 40, y1: 60,
                        x2: 260, y2: 60,
                        lineWidth: 3
                    },
                    {
                        type: 'line',
                        x1: 40, y1: 80,
                        x2: 260, y2: 80,
                        lineWidth: 10,
                        lineCap: 'round'
                    },
                    {
                        type: 'line',
                        x1: 40, y1: 100,
                        x2: 260, y2: 100,
                        lineWidth: 10,
                        lineCap: 'square'
                    },
                    {
                        type: 'ellipse',
                        x: 150, y: 140,
                        color: 'red',
                        fillOpacity: 0.5,
                        r1: 80, r2: 60
                    },
                    {
                        type: 'rect',
                        x: 150,
                        y: 200,
                        w: 150,
                        h: 50,
                    },
                    {
                        type: 'rect',
                        x: 10, y: 200, w: 100, h: 10,
                        linearGradient: ['red', 'blue']
                    },
                    {
                        type: 'rect',
                        x: 10, y: 215, w: 100, h: 10,
                        linearGradient: ['red', 'green', 'blue']
                    },
                    {
                        type: 'rect',
                        x: 10, y: 230, w: 100, h: 10,
                        linearGradient: ['red', 'yellow', 'green', 'blue']
                    },
                    {
                        type: 'ellipse',
                        x: 260, y: 140,
                        r1: 30, r2: 20,
                        linearGradient: ['red', 'green', 'blue', 'red'],
                    },
                    {
                        type: 'rect',
                        x: 10, y: 250, w: 50, h: 30,
                        color: ['stripe45d', 'blue'],
                    }
                ]
            },
            'This text should be rendered under canvas',
            {
                color: 'black',

                text: [
                    'This should be black ',
                ]
            }
        ],
        defaultStyle: {
            color: 'gray',
        },
        patterns: {
            stripe45d: {
                boundingBox: [1, 1, 4, 4],
                xStep: 3,
                yStep: 3,
                pattern: '1 w 0 1 m 4 5 l s 2 0 m 5 3 l s'
            }
        }
    };
    const pdfDocGenerator = printer.createPdfKitDocument(docDefinition); // Utiliza createPdf
    pdfDocGenerator.pipe(fs.createWriteStream('documents.pdf'));
    pdfDocGenerator.end();
};

class rptEmpresasService {
    static async crear(Id) {
        try {
            const empresas = await Empresas.obtenerTodasEmpresas(Id);
            generatePDF(empresas);
        } catch (error) {
            throw new Error('Error al crear el DPF,rptEmpresasService, servicio: ' + error);
        }
    }
} module.exports = rptEmpresasService;