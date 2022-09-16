const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/getRoute',(req,res)=>{
})
app.post('/recieve-data',(req,res)=>{
    if(req.body!== null ){
        res.send("khali kyu bhej rha h")
    }
    let data=req.body;

    res.send("okay");
})

// takes raw json data and returns the gst no from it
const cleanData=(data)=>{
    const cleanedData;
    return cleanedData
}

const verifyGST=(gstNo)=>{



}
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})