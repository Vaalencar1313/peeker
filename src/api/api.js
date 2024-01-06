import axios from "axios";

export const fetchReels = async (passedHashtag) => {
  const options = {
    method: "GET",
    url: "https://instagram-data1.p.rapidapi.com/hashtag/feed/reels",
    params: { hashtag: passedHashtag },
    headers: {
      "X-RapidAPI-Key": "2aeeb71004msh03d1e156f733d4ep193c84jsn6f973aa3a5c9",
      "X-RapidAPI-Host": "instagram-data1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const fetchUserStories = async (passedUsername) => {
  const options = {
    method: "GET",
    url: "https://instagram-data1.p.rapidapi.com/user/stories",
    params: { username: passedUsername },
    headers: {
      "X-RapidAPI-Key": "2aeeb71004msh03d1e156f733d4ep193c84jsn6f973aa3a5c9",
      "X-RapidAPI-Host": "instagram-data1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (e) {
    throw e;
  }
};
