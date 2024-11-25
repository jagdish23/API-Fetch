import axios from 'axios';

// axios.get('https://catfact.ninja/fact')
// .then(response => console.log(response.data))
// .catch(error => console.log('Error' , error));

// console.log('hiii');

async function fetchdata() {
    try{
        const response=await
fetch('https://catfact.ninja/fact');
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error('Error' , error);
    }
}
fetchdata();


