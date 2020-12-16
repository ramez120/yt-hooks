import  { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  const search = async (term) => {
    const youtubeResponse = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(youtubeResponse.data.items);
  };
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  return [videos, search];
};
export default useVideos;
