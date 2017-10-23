import Root from './Root';
const localUrl = 'http://localhost:3000/Products';

const productServiceEndpoint = 'http://team-solenya-product-dev.azurewebsites.net/';

const fetchDataToJSON = (url) => {
         return fetch(url)
        .then((resp) =>{
           resp = resp.json();
           
           return resp;
        })
        .catch(error => {
            return "foo";
            throw new Error("error message:" + error);
        });


   
}


export default fetchDataToJSON;
