import axios from 'axios';

const searchImage = async (term) => {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID HvFVVHRL8pT_2ODTeM3dxiMvS9ilz9Oy1HYpxLm7-I0'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImage;
