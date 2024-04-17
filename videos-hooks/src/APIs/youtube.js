import axios from "axios";

const KEY = "AIzaSyByLtOXJxtPFlUT4bqmrb8t9DBPF1V_pek";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

