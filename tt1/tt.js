const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://tiktok-download-without-watermark.p.rapidapi.com/analysis',
  params: {
    url: 'https://www.tiktok.com/@tiktok/video/7232384225691880746',
    hd: '0'
  },
  headers: {
    'X-RapidAPI-Key': 'eeb0af8448mshd1f58ba36d13d1bp110d71jsn',
    'X-RapidAPI-Host': 'tiktok-download-without-watermark.p.rapidapi.com'
  }
};



async function getResponse() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getResponse();