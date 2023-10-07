
const URL = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyB30w61K2yt8xwZrYKWeBOIT3yVOJIseMI&q=pizza recipe&type=video&part=snippet&maxResults=2&order=viewCount&topicID=cooking';
const API_KEY = 'AIzaSyB30w61K2yt8xwZrYKWeBOIT3yVOJIseMI'
// const video = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id={VIDEO_ID}&key=AIzaSyB30w61K2yt8xwZrYKWeBOIT3yVOJIseMI&q';

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
            console.log(description)
        });

    }

    func()
    
}

getVideos();
