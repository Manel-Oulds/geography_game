class Africa {
  constructor(ele) {
    this.ele = ele;
    this.displayCountries();
    // this.fetchData();
  }

  fetchData() {

    if (!document.getElementById("my_div")){
      let my_div = document.createElement("div");
      my_div.setAttribute("id","my_div");
      (document.getElementById("container")).appendChild(my_div);
      let map = document.createElement("div");
      map.setAttribute("id","map")
      my_div.appendChild(map);
     }


  if (!document.getElementById("play")){
  let play_div = document.createElement("div");
  play_div.setAttribute("id","play");
  (document.getElementById("container")).appendChild(play_div);
  play_div.style.opacity = -1}


  const d = document.getElementById("map");
  d.className = "af_class"

    fetch('world.svg')
      .then((response) => response.text())
      .then((svgData) => {
        // Add the SVG data to the DOM
        document.getElementById('map').innerHTML = svgData;
      })
      .then(() => {
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
          "Ivory Coast",
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
          "Republic of the Congo",
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
       

        const svg = document.getElementById('map');
        const countries = svg.querySelectorAll('path');

        countries.forEach((country) => {
          const countryName = country.getAttribute('id');

          if (countryName && !africanCountries.includes(countryName)) {
            country.style.display = 'none';
          }
        });
      });
  }

  displayCountries() {
    const africaButton = document.getElementById('africa_btn');
    africaButton.addEventListener('click', () => {
      (document.getElementsByClassName("main_buttons"))[0].style.display = 'none';
      this.fetchData();
    });


    const africaB = document.getElementsByClassName("africa_btn");
    if (africaB.length > 0) {
    africaB[0].addEventListener('click', () => {
    document.getElementsByClassName("main_buttons")[0].style.display = 'none';
    this.fetchData();
    });
}
   

  }
}

export default Africa;



