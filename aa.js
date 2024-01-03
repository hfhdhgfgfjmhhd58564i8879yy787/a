const axios = require('axios');
const express = require('express');
const fs = require('fs');

const app = express();

// let x = ""
// setInterval(async ()=>{
//   try{
//   const a = await axios.get('https://247c.mrgamingstreams.com/mrgamingbtsport2.m3u8');
//   const b = a.data.split('\n')
//   const c = 
// await axios({method:'get',url:"https://247c.mrgamingstreams.com/"+b[5],responseType:'stream'});
//   const d = 
// await axios({method:'get',url:"https://247c.mrgamingstreams.com/"+b[7],responseType:'stream'});
//   const e = 
// await axios({method:'get',url:"https://247c.mrgamingstreams.com/"+b[9],responseType:'stream'});
//   const f = 
// await axios({method:'get',url:"https://247c.mrgamingstreams.com/"+b[11],responseType:'stream'});
//   const g = 
// await axios({method:'get',url:"https://247c.mrgamingstreams.com/"+b[13],responseType:'stream'});
//   c.data.pipe(fs.createWriteStream('./aa/'+b[5]));
//   d.data.pipe(fs.createWriteStream('./aa/'+b[7]));
//   e.data.pipe(fs.createWriteStream('./aa/'+b[9]));
//   f.data.pipe(fs.createWriteStream('./aa/'+b[11]));
//   g.data.pipe(fs.createWriteStream('./aa/'+b[13]));
// console.log(1)
//     x = a.data
//   }catch(e){
//     console.log(e)


// }
// },1000)
app.get('/a.m3u8', async (req, res) => {
  try{
  const a = await axios.get('https://247c.mrgamingstreams.com/mrgamingbtsport2.m3u8');
  res.send(a.data);
    console.log("Working")
  }catch{
    res.end();

  }
  // res.send(x)
})

app.get('*', async (req, res) => {
  res.redirect("https://247c.mrgamingstreams.com"+req.path);
})



app.listen(3000)
