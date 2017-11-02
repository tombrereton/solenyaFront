
const fetchDataToJSON = (url) => {
         return fetch(url)
        .then((resp) =>{
           resp = resp.json();
           return resp;
        })
        .catch(error => {
            console.log("Fetching Data from Json Error:" + error);
        });


   
}

// const fetchDescriptionToJSON = (productId) =>{
//     const url =
// }


export default fetchDataToJSON;
