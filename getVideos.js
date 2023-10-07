
const URL = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyB30w61K2yt8xwZrYKWeBOIT3yVOJIseMI&q=pizza-recipe&type=video&part=snippet&maxResults=25&order=viewCount&topicID=cooking';

// const video = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id={VIDEO_ID}&key=AIzaSyB30w61K2yt8xwZrYKWeBOIT3yVOJIseMI&q';

function getVideos() {

    const func = async () => {
        const response = await fetch(URL)
        if (response.status !== 200) {
            console.log(Error("Something is wrong!"));
        }
        
        const data = await response.json();
        const items = data.items;
        
        const VIDEO_ID = (items[0].id.videoId);
        const VIDEO = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${VIDEO_ID}&key=AIzaSyB30w61K2yt8xwZrYKWeBOIT3yVOJIseMI&q`;
        const videoResponse = await fetch(VIDEO);
        if (videoResponse.status !== 200) {
            console.log(Error("Something is wrong!"));
        }

        const videoData = await videoResponse.json();
        console.log(videoData.items[0].snippet.description);
        
    }

    func();

    
}



getVideos();