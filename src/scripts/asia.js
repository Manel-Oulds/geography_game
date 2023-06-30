class Asia{
    constructor(ele){
        this.ele=ele

        this.displayCountries()

    }

    displayCountries(){
        const asiaButton = document.getElementById("asia_btn");
        asiaButton.addEventListener("click", function() {

// Function to select and display all African countries

  const svg = document.getElementById('allSvg'); 
  const d = document.getElementById("map");
  d.className = "as_class"

  // List of African countries
  var asianCountries = [
  'Afghanistan',
  'Armenia',
  'Azerbaijan',
  'Bahrain',
  'Bangladesh',
  'Bhutan',
  'Brunei',
  'Cambodia',
  'China',
  'Cyprus',
  'Georgia',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Israel',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Lebanon',
  'Malaysia',
  'Maldives',
  'Mongolia',
  'Myanmar (Burma)',
  'Nepal',
  'North Korea',
  'Oman',
  'Pakistan',
  'Palestine',
  'Philippines',
  'Qatar',
  'Russia',
  'Saudi Arabia',
  'Singapore',
  'South Korea',
  'Sri Lanka',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Thailand',
  'Timor-Leste',
  'Turkey',
  'Turkmenistan',
  'United Arab Emirates',
  'Uzbekistan',
  'Vietnam',
  'Yemen'
];




  let asiaC=[]

  for(let i =0; i<asianCountries.length; i++){
    asiaC.push(asianCountries[i].toLowerCase())
  }
    



  // Loop through all the SVG elements
  for (const element of svg.children) {
    const countryName = element.getAttribute('id');

    // Check if the country is in the list of Asian countries
    if(countryName){
    if (asiaC.includes(countryName.toLowerCase())) {
      // Display the country
      element.style.display = 'block';
    } else {
      // Hide non-asian countries
      element.style.display = 'none';
    }}
  } })

    }
}

export default Asia;