const axios = require('axios');
const URL = 'https://randomuser.me/api/';


axios.get(URL).then(resp => {
    console.log(resp.data);
});

async function asyncAxios() {
    console.log('asyncResponse');
    let asyncResponse = await axios.get(URL);
    console.log(asyncResponse.data);
    // Get first and last name
    let firstName = asyncResponse.data.results[0].name.first;
    let lastName = asyncResponse.data.results[0].name.last;
    let fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}

asyncAxios();