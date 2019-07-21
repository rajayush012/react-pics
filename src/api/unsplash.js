import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization : 'Client-ID 2faadcc9f86615dfb3c1591efa2ab526d77b61089435fc364e72141b634fb12b'
    }
})


