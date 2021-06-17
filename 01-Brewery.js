axios.get('https://api.openbrewerydb.org/breweries?by_city=san_diego')
  .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });  



