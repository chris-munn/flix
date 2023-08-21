import api from '../api/index';

const getMovies = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const path = 'films/filter/now_showing';
            const query = '?limit=10';

            const res = await api().get(`${path}/${query}`);

            resolve(res.data);
        } catch (e) {
            console.log(e);
            reject(e);
        }
    });
};

export default getMovies;
