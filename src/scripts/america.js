class America{
    constructor(ele){
        this.ele=ele
        this.displayCountries()

    }



            
displayCountries(){
        const americaNButton = document.getElementById("americaN_btn");
            americaNButton.addEventListener("click", function() {
    
    // Function to select and display all African countries
    
      const svg = document.getElementById('allSvg'); 
      const d = document.getElementById("map");
      d.className = "nam_class"
    
      // List of American countries
      var americanCountriesN = [
    
          'Antigua and Barbuda',
          'Bahamas',
          'Barbados',
          'Belize',
          'Canada',
          'Costa Rica',
          'Cuba',
          'Dominica',
          'Dominican Republic',
          'El Salvador',
          'Grenada',
          'Guatemala',
          'Haiti',
          'Honduras',
          'Jamaica',
          'Mexico',
          'Nicaragua',
          'Panama',
          'Saint Kitts and Nevis',
          'Saint Lucia',
          'Saint Vincent and the Grenadines',
          'Trinidad and Tobago',
          'United States'
        ];
      
    
    
      
    
      let americaC=[]
    
      for(let i =0; i<americanCountriesN.length; i++){
        americaC.push(americanCountriesN[i].toLowerCase())
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
    