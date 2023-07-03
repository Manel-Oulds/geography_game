class Africa {
  constructor(ele) {
    this.ele = ele;
    this.displayCountries();
    // this.fetchData();
  }

  AFRICANC = [
    "Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "Burkina Faso",
    "Burundi",
    "Republic of Cabo Verde",
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
    "São Tomé and Príncipe",
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
  }


  const d = document.getElementById("map");
  d.className = "af_class"

    fetch('world.svg')
      .then((response) => response.text())
      .then((svgData) => {
        // Add the SVG data to the DOM
        document.getElementById('map').innerHTML = svgData;
      })
      .then(() => {
        const svg = document.getElementById('map');
        const countries = svg.querySelectorAll('path');

        countries.forEach((country) => {
          const countryName = country.getAttribute('id');

          if (countryName && !this.AFRICANC.includes(countryName)) {
            country.style.display = 'none';
          }
        });
      });

      
  }


  fetchFlags() {
    // Fetch Flags
    let flags = {};
  
    // Utiliser Promise.all pour attendre que toutes les requêtes fetch soient terminées
    Promise.all(
      this.AFRICANC.map((country) =>
        fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
          .then((res) => res.json())
          .then((data) => (flags[country] = data[0].flags["svg"]))
      )
    ).then(() => {
      const playDiv = document.getElementById("play");
      playDiv.innerHTML = ""
      playDiv.style.display="show"
  
      // Obtenir six drapeaux aléatoires
      const randomFlags = this.getRandomFlags(flags, 6);
  
      // Afficher les drapeaux dans l'élément play_div
      randomFlags.forEach((flag) => {
        const flagImg = document.createElement("img");
        flagImg.setAttribute("src", flag);
        playDiv.appendChild(flagImg);
      });
    });
  }
  
  getRandomFlags(flags, count) {
    const flagKeys = Object.keys(flags);
    const shuffledKeys = flagKeys.sort(() => 0.5 - Math.random());
    const randomKeys = shuffledKeys.slice(0, count);
    const randomFlags = randomKeys.map((key) => flags[key]);
    return randomFlags;
  }
  

  displayCountries() {
    const africaButton = document.getElementById('africa_btn');
    africaButton.addEventListener('click', () => {
      document.getElementById("play").style.opacity= 1;
      (document.getElementsByClassName("main_buttons"))[0].style.display = 'none';
      this.fetchFlags();
      this.fetchData();
    
    });


    const africaB = document.getElementsByClassName("africa_btn");
    if (africaB.length > 0) {
    africaB[0].addEventListener('click', () => {
    document.getElementsByClassName("main_buttons")[0].style.display = 'none';
    if (document.getElementById("play")) document.getElementById("play").style.display=show;
    this.fetchFlags();
    this.fetchData();
    

    });
}
   

  }
}

export default Africa;



