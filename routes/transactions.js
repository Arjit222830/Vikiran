const express = require('express');
const router = express.Router();
const {Register}= require('../models/register');

router.get('/',async function(req,res){
    const registers= await Register.find();
    res.status(200).render('event_management',{registers: registers});
});

router.post('/pdf', (req, res, next)=>{

    const registers= await Register.find();

    var documentDefinition = {
        content: [
            {
                layout: 'lightHorizontalLines', // optional
                table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
                    headerRows: 1,
                    widths: [ '*', 'auto', 100, '*' ],
                    body: [
                        [ 'First', 'Second', 'Third', 'The last one' ],
                        [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
                        [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
                    ]
                }
            }
        ]
    }
    
    const pdfDoc = pdfMake.createPdf(documentDefinition);
    pdfDoc.getBase64((data)=>{
    res.writeHead(200, {'Content-Type': 'application/pdf','Content-Disposition':'attachment;filename="transaction_details.pdf"'});
    const download = Buffer.from(data.toString('utf-8'), 'base64');
    res.end(download);

    });
});



module.exports = router;