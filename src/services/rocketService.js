import axios from 'axios';
const urlGetRocket='';

const getRockets=()=>{
    axios.get('https://api.spacexdata.com/v3/launches');
}