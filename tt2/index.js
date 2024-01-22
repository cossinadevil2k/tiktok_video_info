const axios = require('axios');



async function ytb(){
  const options = {
    method: 'GET',
    url: 'https://tiktok-video-audio-downloader.p.rapidapi.com/geturl',
    params: {
      video_url: 'https://www.tiktok.com/@championsleague/video/7269742420261178656'
    },
    headers: {
      'X-RapidAPI-Key': 'eeb0af8448mshd1f58ba36d13d1bp110d71jsn6',
      'X-RapidAPI-Host': 'tiktok-video-audio-downloader.p.rapidapi.com'
    }
  };


  try {
  const response = await axios.request(options);
  console.log(response.data.url);
  } catch (error) {
    console.error(error);
  }
}

ytb();