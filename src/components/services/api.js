import axios from "axios";

const baseURL = 'https://pixabay.com/api/';
const apiKey = '28539221-d5e0309a6fde535568a0abe02';


const fetchImages = async searchQuery => {
    const response = axios.get(`${baseURL}?q=${searchQuery}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => console.log(response.data.hits))
    return (await response).data.hits;
}

export  {fetchImages};