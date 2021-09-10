import axios from 'axios';

const urlLaunches="https://api.spacexdata.com/v3/launches"
export const getLaunchesService=async () => {
    return axios.get(urlLaunches).then((resp)=>resp.data);
}