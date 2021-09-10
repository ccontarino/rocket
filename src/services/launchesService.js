import axios from 'axios';

const urlLaunches="https://api.spacexdata.com/v3/launches"
const getLaunches= () => {
    return axios.get(urlLaunches).then((resp)=>resp.data);
}