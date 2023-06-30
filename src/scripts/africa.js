class Africa{
    constructor(ele){
        this.ele=ele
        this.displayCountries()

    }



            
displayCountries(){


    const africaButton = document.getElementById("africa_btn");
        africaButton.addEventListener("click", function() {

// Function to select and display all African countries

  const svg = document.getElementById('allSvg'); 

  // List of African countries
  let africanCountries = [
    "Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cameroon",
    "Central African Republic",
    "Chad",
    "Comoros",
    "Côte d'Ivoire",
    "Djibouti",
    "Democratic Republic of the Congo",
    "Egypt",
    "Equatorial Guinea",
    "Eritrea",
    "Eswatini",
    "Ethiopia",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Kenya",
    "Lesotho",
    "Liberia",
    "Libya",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Mauritius",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Niger",
    "Nigeria",
    "Republic of Congo",
    "Rwanda",
    "Sao Tome and Principe",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Sudan",
    "Tanzania",
    "Togo",
    "Tunisia",
    "Uganda",
    "Zambia",
    "Zimbabwe"
  ];

  let africaC=[]

  for(let i =0; i<africanCountries.length; i++){
    africaC.push(africanCountries[i].toLowerCase())
  }
    



  // Loop through all the SVG elements
  for (const element of svg.children) {
    const countryName = element.getAttribute('id');

    // Check if the country is in the list of African countries
    if(countryName){
    if (africaC.includes(countryName.toLowerCase())) {
      // Display the country
      element.style.display = 'block';
    } else {
      // Hide non-African countries
      element.style.display = 'none';
    }}
} })

  }
}

export default Africa;