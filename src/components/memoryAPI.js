export { searchGifs };

const GIPHY_SEARCH_URL = 'https://api.giphy.com/v1/gifs/search';
const API_KEY = '30ZMDKpsuM5I3H1e8CuYA9tTjaahEJne';

const formatQuery = (query) => {
    return query.split(' ').join('+');
};

const getGifSearchEndpoint = (query, numResults) => {
    const formattedQuery = formatQuery(query);
    return `${GIPHY_SEARCH_URL}?api_key=${API_KEY}&q=${formattedQuery}&limit=${numResults}`;
};

const processGifData = (json) => {
    const gifs = [];
    json.data.forEach((gif) => {
      gifs.push( {url: gif.images.original.url, title: gif.title} );
    });
    console.log(gifs);
    return gifs
}

const makeApiRequest = async (endpoint) => {
    try {
        const response = await fetch(endpoint, { mode: 'cors' });
        console.log(response);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response;
    } catch (error) {
        console.log('API request failed', error);
        return null;
    }
};

const searchGifs = async (query, resultSize) => {
    const response = await makeApiRequest(getGifSearchEndpoint(query, resultSize));
    if (response === null) {
        return null;
    }
    const json = await response.json();
    console.log(json);
    return processGifData(json);
};
