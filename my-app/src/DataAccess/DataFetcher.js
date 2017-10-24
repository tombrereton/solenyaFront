
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


export default fetchDataToJSON;
