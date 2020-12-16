
import axios from 'axios';
const KEY = 'AIzaSyDzPxmIQDNcjF8wBQqkb0VFVxtUTff-xY8';

export default axios.create({
    baseURL : ' https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 4,
        key : KEY

    }
})