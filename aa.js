const axios = require('axios');
const express = require('express');

const app = express();

app.get('/a.m3u8', async (req, res) => {
  try{
  const a = await axios.get('https://247c.mrgamingstreams.com/mrgamingbtsport2.m3u8');
  res.send(a.data);
    console.log("Working")
  }catch{
    res.end();
    
  }
})

app.get('*', async (req, res) => {
  try{
  const a = await axios.get('https://247c.mrgamingstreams.com'+req.path);
  res.send(a.data);
  }catch{
    res.end();
  }
})

app.listen(3000)
