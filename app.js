const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/getRoute',(req,res)=>{
})
app.post('/recieve-data',(req,res)=>{

    response = {
        first_name:req.body,
        last_name:req.body
    };
    console.log(response);
    res.end(JSON.stringify(response));
    console.log(req)
    if(req.body!== null ){
        res.end("khali kyu bhej rha h")
    }
    let data=req.body;

    res.end("okay");
})

// takes raw json data and returns the gst no from it
const cleanData=(data)=>{
    const cleanedData="";
    return cleanedData
}

const verifyGST=(gstNo)=>{



}
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})