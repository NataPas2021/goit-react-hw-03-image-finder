import axios from "axios";

const fetchImagesWithQuery = async searchQuery => {
    const response = axios.get(`/search?query=${searchQuery}`);
    return (await response).data.hits;
}

export default fetchImagesWithQuery;