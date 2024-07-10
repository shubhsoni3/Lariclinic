import React, { useEffect, useState } from "react";

const api = "AIzaSyDR6MKciIFrD8u5zQiOnYyD8cbWswN0WdQ";
const channelId = "UC4lCd3RR2HzwI2RfGmwSo5A";
const fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${api}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;

const AttendLiveEvents = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchUrl);
        const resJson = await response.json();
        const result = resJson.items.map((doc) => ({
          ...doc,
          VideoLink: "https://www.youtube.com/embed/" + doc.id.videoId,
        }));
        setVideos(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const videosToShow = videos.slice(0, 3);

  return (
    <div>
      <div>
        {videosToShow.map((video, index) => (
          <div className="col d-flex justify-content-center py-4" key={index}>
            <iframe
              src={video.VideoLink}
              title={`YouTube video player ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendLiveEvents;
