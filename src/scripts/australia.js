class Australia{
    constructor(ele){
        this.ele=ele
        this.displayCountries()

    }



            
displayCountries(){
    
        const spButton = document.getElementById("sp_btn");
            spButton.addEventListener("click", function() {
    
    // Function to select and display all European countries
    
      const svg = document.getElementById('allSvg'); 
    
     
    
      var spc = [
      'Australia',
      'Fiji',
      'Kiribati',
      'Marshall Islands',
      'Micronesia',
      'Nauru',
      'New Zealand',
      'Palau',
      'Papua New Guinea',
      'Samoa',
      'Solomon Islands',
      'Tonga',
      'Tuvalu',
      'Vanuatu'
    ];
      
    
    
    
      let spcC=[]
    
      for(let i =0; i<spc.length; i++){
        spcC.push(spc[i].toLowerCase())
      }
        
    
    
    
      // Loop through all the SVG elements
      for (const element of svg.children) {
        const countryName = element.getAttribute('id');
    
        // Check if the country is in the list of African countries
        if(countryName){
        if (spcC.includes(countryName.toLowerCase())) {
          // Display the country
          element.style.display = 'block';
        } else {
          // Hide non-African countries
          element.style.display = 'none';
        }}
      } })
    
    
    }
}

export default Australia;

    