
const getCountryNeighbors=async(countryName)=>{
    try {
        const url=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
        const options = {
            timeout: 10000 // 10 seconds
          };
        const restCountries=await fetch(url, options);
        const responseData=await restCountries.json();
        return responseData[0].borders;

    } catch (error) {
        console.error("Failed to fetch data from the API:", error);
      
    }
    
}

getCountryNeighbors('United States of America').then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});



const getCountryNeighbors2=(countryName)=>{
    const url=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
   return fetch(url);
};

getCountryNeighbors2('India')
  .then((response) => response.json())
  .then((data) => {
    if (data && data.length > 0) {
      console.log(data[0].borders);
    } else {
      console.log('No data found for the given country name');
    }
  })
  .catch((error) => {
    console.log(error);
  });

