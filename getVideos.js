const dotenv = require('dotenv');
dotenv.config()

const API_KEY = process.env.API_KEY;
console.log(API_KEY)
const QUERY = 'pizza-recipes';
const MAX_RESULTS = 2;
const URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${QUERY}&type=video&part=snippet&maxResults=${MAX_RESULTS}&order=viewCount&topicID=cooking`;


function getVideos() {

    const func = async () => {
        const response = await fetch(URL)
        if (response.status !== 200) {
            console.log(Error("Something is wrong!"));
        }
        
        const data = await response.json();
        const items = data.items;
        
        videoDict = new Map();

        for (const item of items) {
            const VIDEO_ID = item.id.videoId;
            const VIDEO = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${VIDEO_ID}&key=${API_KEY}`;
            const videoResponse = await fetch(VIDEO);
            const videoData = await videoResponse.json();
            const description = videoData.items[0].snippet.description;
            videoDict.set(item.snippet.title, description);
        };

        videoDict.forEach((description, title) => {
            console.log(title);
        });

    }

    func()
    
}

getVideos();
