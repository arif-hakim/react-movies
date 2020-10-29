import config from '../utils/config'
let movie = {}

movie.getPopular = async (page = 1) => {
    let response = await fetch(`${config.api_url}/movie/popular/?page=${page}&api_key=${config.api_key}`);
    let result = await response.json();
    return result
}

export default movie