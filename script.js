// The nominatim API for search is the url : https://nominatim.openstreetmap.org/search? 
// Infos : endodeURIComponent is an already made validation that turns spaces or special characters into a url mode. The user doesn't have to transform the location into url code.

//Creating function that uses Nominatim Search API : 

function searchMap(){

   var userLocation = document.getElementById("tag").value;
   const apiSearch = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(userLocation)}`; // After the query (?) we want the format in Json and q value equals to user location

   fetch(apiSearch,{   //Request from nominatim API to query the endpoit ( users location).
       method: 'GET',  //Search operatior that is used for data gaining.
       headers: {      // Expecting that the response will arrive in JSON format.
           'Accept' : 'application/json'
       }
   })
   .then(response=> {
    if(!response.ok){
        throw new Error ('HTTP request failed! status: ${response.status}`');  //Validation if the request search was successful
    }
    return response.json()}) //Return the json response
   .then(data =>{                                                          //Pass json data into the modal
      document.getElementById("result").innerHTML = JSON.stringify (data);
   })
   .catch(error=>{
     console.error ('ERROR', error); // In case any error may happen
   })
}
