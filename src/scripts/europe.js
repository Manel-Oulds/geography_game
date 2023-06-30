class Europe{
    constructor(ele){
        this.ele=ele
        this.displayCountries()

    }



            
displayCountries(){
    
        const europeButton = document.getElementById("europe_btn");
            europeButton.addEventListener("click", function() {
    
    // Function to select and display all European countries
    
      const svg = document.getElementById('allSvg'); 
    
      // List of African countries
      var europeanCountries = [
      'Albania',
      'Andorra',
      'Austria',
      'Belarus',
      'Belgium',
      'Bosnia and Herzegovina',
      'Bulgaria',
      'Croatia',
      'Cyprus',
      'Czech Republic',
      'Denmark',
      'Estonia',
      'Finland',
      'France',
      'Germany',
      'Greece',
      'Hungary',
      'Iceland',
      'Ireland',
      'Italy',
      'Kosovo',
      'Latvia',
      'Liechtenstein',
      'Lithuania',
      'Luxembourg',
      'Malta',
      'Moldova',
      'Monaco',
      'Montenegro',
      'Netherlands',
      'Macedonia',
      'Norway',
      'Poland',
      'Portugal',
      'Romania',
      'Russia',
      'San Marino',
      'Serbia',
      'Slovakia',
      'Slovenia',
      'Spain',
      'Sweden',
      'Switzerland',
      'Ukraine',
      'United Kingdom (UK)',
    //   'Vatican City (Holy See)'
    ];
    
    
    
      let europeC=[]
    
      for(let i =0; i<europeanCountries.length; i++){
        europeC.push(europeanCountries[i].toLowerCase())
      }
        
    
    
    
      // Loop through all the SVG elements
      for (const element of svg.children) {
        const countryName = element.getAttribute('id');
    
        // Check if the country is in the list of African countries
        if(countryName){
        if (europeC.includes(countryName.toLowerCase())) {
          // Display the country
          element.style.display = 'block';
        } else {
          // Hide non-African countries
          element.style.display = 'none';
        }}
      } })
}
}

export default Europe;