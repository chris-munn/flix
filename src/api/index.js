import axios from 'axios';

export default () => {
    const baseUrl = 'https://api.flixpremiere.com/v1/';

    return axios.create({
        baseURL: baseUrl,
        timeout: 20000,
        headers: {
        'Content-Type': 'application/json',
        },
    });
};
