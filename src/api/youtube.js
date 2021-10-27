import axios from "axios";

const KEY = "AIzaSyAMGP1J8ywbtAZnxPzpkoZK6l59CRqvxtE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
