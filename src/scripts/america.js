class America{
    constructor(ele){
        this.ele=ele
        this.displayCountries()

    }



            
displayCountries(){
        const americaButton = document.getElementById("america_btn");
            americaButton.addEventListener("click", function() {
    
    // Function to select and display all African countries
    
      const svg = document.getElementById('allSvg'); 
    
      // List of American countries
      var americanCountries = [
      'Antigua and Barbuda',
      'Argentina',
      'Anguila',
      'Bahamas',
      'Barbados',
      'Belize',
      'Bolivia',
      'Brazil',
      'Canada',
      'Chile',
      'Colombia',
      'Costa Rica',
      'Cuba',
      'Dominica',
      'Dominican Republic',
      'Ecuador',
      'El Salvador',
      "French Guiana",
      'Greenland',
      'Guatemala',
      'Guyana',
      'Haiti',
      'Honduras',
      'Iceland',
      'Jamaica',
      'Martinique',
      'Mexico',
      'Montcerrat',
      'Nicaragua',
      'Panama',
      'Paraguay',
      'Peru',
      'Saint Kitts and Nevis',
      'Saint Lucia',
      'Saint Vincent and the Grenadines',
      'Suriname',
      'Trinidad and Tobago',
      'United States',
      'Uruguay',
      'Venezuela'
    ];
    
    
    
      
    
      let americaC=[]
    
      for(let i =0; i<americanCountries.length; i++){
        americaC.push(americanCountries[i].toLowerCase())
      }
        
    
    
    
      // Loop through all the SVG elements
      for (const element of svg.children) {
        const countryName = element.getAttribute('id');
    
        // Check if the country is in the list of African countries
        if(countryName){
        if (americaC.includes(countryName.toLowerCase())) {
          // Display the country
          element.style.display = 'block';
        } else {
          // Hide non-African countries
          element.style.display = 'none';
        }}
      } })
    
    }

}
export default America;
    