const Refrencia = require('../../models/referencia.model');


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

const generatePDF = async (referencias) => {

    var docDefinition = {
        content: [
            {
                image: 'images/eqhlogo.jpg',
                fit: [100, 75],
            },
            {
                style: 'tableLineHorizontal',
                table: {
                    widths: ['*', 300],
                    body: [
                        [
                            {
                                style: 'tableLineHorizontal',
                                text: [
                                    { text: 'Empresa: Gruma' },
                                    '\n',
                                    { text: 'Fecha de aplicación: 10 Marzo 2023' },
                                    '\n',
                                    { text: 'Folio: 00009' }
                                ], fontSize: 8, bold: false,

                            },
                            {
                                style: 'tableLineHorizontal',
                                text: [
                                    { text: 'Solicitante Lic. Ana Gonzalez' },
                                    '\n',
                                    { text: 'Puesto: Gerente General' },
                                    '\n',
                                    { text: 'Puesto de candidato: Ing. Procesos' },
                                ],
                                fontSize: 8, bold: false
                            },
                        ]
                    ]

                },
            },
            {
               text: ' '
            },
            {
                style: 'tableLineHorizontal',
                table: {
                    widths: ['*'],
                    body: [
                        [
                            {
                                text: [
                                    { text: 'CONCLUCIÓN' },
                                ], alignment: "center",color:"#FFFFFF" ,fillColor: "#3972E5"

                            }
                        ], [{
                            text: [
                                { text: 'Apto', fontSize: 12 },
                            ],alignment: "center"

                        }], [{
                            text: [
                                { text: 'No se obtuvieron referencias laborales sobre el candidato debido a que los teléfonos de las empresas cambiaron o están fuera de servicio, cabe mencionar que no cuentan con antecedentes sociales o demandas laborales. ' }
                            ], color:"#000000"

                        }]
                    ]

                }
            },

            {
                style: 'tableExample',
                table: {
                    widths: [100, '*', 200, '*'],
                    body: [
                        ['Id', 'Candidato', 'alta', 'Sucursal'],
                        ...referencias.map(referencia => [
                            { text: referencias.nombre, bold: true, color: 'red' }, // Estilo para el título en negrita y rojo
                            referencia.apellido,
                            '',
                            ''
                        ])
                    ]
                }
            }
        ],
        styles: {
            header: {
                fontSize: 12,
                bold: false,
                margin: [0, 0, 0, 10]
            },
            subheader: {
                fontSize: 12,
                bold: true,
                margin: [0, 10, 0, 5]
            },
            tableExample: {
                margin: [0, 5, 0, 15]
            },
            tableOpacityExample: {
                margin: [0, 5, 0, 15],
                fillColor: 'blue',
                fillOpacity: 0.3
            },
            tableHeader: {
                bold: false,
                color: 'black'
            },
            tableLineHorizontal: {
                fonts:{
                    fontSize:8,
                    color: "grey",
                    bold:false,
                },
                border: {
                    bottom: {
                        style: 'double',
                        lineWidth: 2,
                        color: 'gray'
                    }
                },
                color: 'gray',
                lineWidth: 0.8,
                align: 'center',


            },
        },
        defaultStyle: {
            // alignment: 'justify'
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

class rptReferenciasService {
    static async crear(Id) {
        try {
            const referencias = await Refrencia.obtenerPorIdCandidato(Id);
            generatePDF(referencias);
        } catch (error) {
            throw new Error('Error al crear el DPF, servicio: ' + error);
        }
    }
} module.exports = rptReferenciasService;