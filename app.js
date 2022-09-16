const express = require('express')
const app = express()
const axios=require('axios')
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
    if(req.body === null ){
        res.send("khali kyu bhej rha h")
        return;
    }
    let data=req.body;
    let isOk=cleanData(data);
    if(isOk == null){
        res.send("Upload a better photu");
    }


   
   res.send(isOk);
}
catch(error){
    console.log(error);
}
})

// takes raw json data and returns the gst no from it
const cleanData=(data)=>{
    let cleanedData;
    const regex = ".*^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}.*";

    for(let i=0;i<=data.length-15;i+=1){
        let temp=data.substring(i,i+15);
        let ans=temp.match(regex);
        if(ans){
            cleanedData=ans
            //console.log(ans)
        }
    }

    if(cleanData===null){
        return false;
    }

    // gst no returner
    return verifyGST(cleanedData)
}

const verifyGST=async (gstNo)=>{

        let data;
    axios.get(`https://services.gst.gov.in/services/api/search/goodservice?gstin=${gstNo}`)
        .then((resp) => {
            if(resp.hasOwnProperty(('errorCode'))){
                return(false);
            }
            return (true);
            console.log(resp.data);
        })
        .catch(err => {
            // Handle Error Here
            console.error(err);
            return ("upload a better image");
        });
    //const res = await axios('/data');




}
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// console.log(cleanData("APDAFDPAKDPAKDPA33AAPCS4963G1Z0DJadjnADNANJ33AAPCS4963G1Z0dsds"))
// console.log(verifyGST("33AAPCS4963G1Z0"))