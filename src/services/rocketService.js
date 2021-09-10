import axios from 'axios';
const urlGetRocket='https://api.spacexdata.com/v3/rockets';

export const getRocketsService= async ()=>{
    return axios.get(urlGetRocket).then((response)=>response.data);
}
