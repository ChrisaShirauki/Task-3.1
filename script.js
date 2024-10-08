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
        if (response.status === 404) {
            throw new Error('404: Not Found');
        } else if (response.status === 500) {
            throw new Error('500: Internal Server Error');
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    }
    return response.json()}) //Return the json response
   .then(data =>{                                                          //Pass json data into the modal
      document.getElementById("result").innerHTML = JSON.stringify (data, null, 4);  //Make the Json format more readable
   })
   .catch(error=>{
     console.error ('ERROR', error); // In case any error may happen
     document.getElementById("result").innerHTML = error.message;
   })

   //open modal
   document.querySelector('.message').style.display='flex'
   
}

 //close modal 
 function closeModal(){
  document.querySelector('.message').style.display='none';
 }
