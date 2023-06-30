class AmericaS{
    constructor(ele){
        this.ele=ele
        this.displayCountries()

    }



            
displayCountries(){
        const americaSButton = document.getElementById("americaS_btn");
            americaSButton.addEventListener("click", function() {
    
    // Function to select and display all African countries
    
      const svg = document.getElementById('allSvg'); 
      const d = document.getElementById("map");
      d.className = "sam_class"
    
      // List of American countries
      var americanCountriesS = [
    
        'Argentina',
        'Bolivia',
        'Brazil',
        'Chile',
        'Colombia',
        'Ecuador',
        'Guyana',
        'Paraguay',
        'Peru',
        'Suriname',
        'Uruguay',
        'Venezuela'
      ];
      
    
    
      
    
      let americaC=[]
    
      for(let i =0; i<americanCountriesS.length; i++){
        americaC.push(americanCountriesS[i].toLowerCase())
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
export default AmericaS;
    