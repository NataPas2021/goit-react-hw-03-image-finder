import axios from "axios";

const apiKey = '28539221-d5e0309a6fde535568a0abe02';

const fetchImages = async searchQuery => {
    const response = axios.get(`https://pixabay.com/api/?q=${searchQuery}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`);
    console.log(response)
    return (await response).data.hits;
}

export default fetchImages;