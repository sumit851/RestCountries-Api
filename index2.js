const getCountryName = (alpha3Code) => {
    const url = `https://restcountries.com/v3.1/alpha/${alpha3Code}`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => data[0].name.common);
  };
  
  const getCountryNeighbors2 = (countryName) => {
    const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const borders = data[0].borders;
          return Promise.all(borders.map(getCountryName));
        } else {
          throw new Error('No data found for the given country name');
        }
      });
  };
  
  getCountryNeighbors2('India')
    .then((neighbors) => {
      console.log(neighbors);
    })
    .catch((error) => {
      console.log(error);
    });
  