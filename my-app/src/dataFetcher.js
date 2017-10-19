import Root from './Root';
const localUrl = 'http://localhost:3000/Products';

const productServiceEndpoint = 'http://team-solenya-product-dev.azurewebsites.net/';

const fetchDataToJSON = (url) => {
         return fetch(url)
        .then((resp) =>{
           resp = resp.json();
           //console.log(resp);
           return resp;
        })
        .catch(error => {
            return "foo";
            throw new Error("error message:" + error);
        });


   
}


// fetchDataToJSON(localUrl).then(d=>console.log("datafetcher",d));

export default fetchDataToJSON;


//need to get a function that returns just the json array by itself 