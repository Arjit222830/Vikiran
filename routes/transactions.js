const express = require('express');
const router = express.Router();
const {Register}= require('../models/register');
const pdfMake = require('../pdfmake/pdfmake');
const vfsFonts = require('../pdfmake/vfs_fonts');

pdfMake.vfs = vfsFonts.pdfMake.vfs;

router.get('/',async function(req,res){
    const registers= await Register.find();
    res.status(200).render('event_management',{registers: registers});
});

const table = (data)=>{
  
    /*var thead= ['S.No','Event Name','Team Name','Team Leader','College Name','Tot. Mem','Transaction ID','Contact','Date'];
    for(var i=0;i<thead.length;i++)
    {
        var tbody=[];
        tbody.push(i+1);
        tbody.push(data[i].event_name);
        tbody.push(data[i].team_name);
        tbody.push(data[i].team_leader);
        tbody.push(data[i].college_name);
        tbody.push(data[i].total_members);
        tbody.push(data[i].transaction);
        tbody.push(data[i].contact);
        tbody.push(data[i].date);

        thead.push(tbody);
    } */
        var rows= [['S.No','Event Name','Team Name','Team Leader']];
        for(var i=0;i<4;i++)
            rows.push([i+1, data[i].event_name, data[i].team_name, data[i].team_leader]);
    
        return rows
};

router.post('/transaction', async(req, res, next)=>{

    const registers= await Register.find();

    var documentDefinition = {
        content: [
            {
                layout: 'lightHorizontalLines', // optional
                table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
                    headerRows: 1,
                    widths: [ '*', 'auto', 100, '*', '100', ],
                    body: table(registers)
                }
            }
        ]
    }
    
    const pdfDoc = pdfMake.createPdf(documentDefinition);
    pdfDoc.getBase64((data)=>{
    res.writeHead(200, {'Content-Type': 'application/pdf','Content-Disposition':'attachment;filename="registration_details.pdf"'});
    const download = Buffer.from(data.toString('utf-8'), 'base64');
    res.end(download);

    });
});



module.exports = router;