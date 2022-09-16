const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(urlencodedParser)
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/getRoute',(req,res)=>{
})
app.post('/recieve-data',(req,res)=>{

    try{
    // res.end(JSON.stringify(res));
    console.log(req.body)
    if(req.body!== null ){
        res.end("khali kyu bhej rha h")
        return;
    }
    let data=req.body;
    console.log(data)

   
   res.write("OK")
}
catch(error){
    console.log(error);
}
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