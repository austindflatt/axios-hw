const axios = require('axios');
const URL = 'https://randomuser.me/api/';


axios.get(URL).then(resp => {
    console.log(resp.data);
});

async function asyncAxios() {
    console.log('asyncResponse');
    let asyncResponse = await axios.get(URL);
    console.log(asyncResponse.data);
}

asyncAxios();