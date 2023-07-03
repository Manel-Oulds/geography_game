class Asia {
  constructor(ele) {
    this.ele = ele;
    this.displayCountries();
    // this.fetchData();
  }

  ASIAC = [
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
    'Myanmar',
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
  d.className = "as_class"

    fetch('world.svg')
      .then((response) => response.text())
      .then((svgData) => {
        // Add the SVG data to the DOM
        document.getElementById('map').innerHTML = svgData;
      })
      .then(() => {
        // Hide non-European countries
        

        const svg = document.getElementById('map');
        const countries = svg.querySelectorAll('path');

        countries.forEach((country) => {
          const countryName = country.getAttribute('id');

          if (countryName && !this.ASIAC.includes(countryName)) {
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
      this.ASIAC.map((country) =>
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
    const asiaButton = document.getElementById('asia_btn');
    asiaButton.addEventListener('click', () => {
      if(document.getElementById("play")) document.getElementById("play").style.opacity= 1;
      (document.getElementsByClassName("main_buttons"))[0].style.display = 'none';
      this.fetchData();
      this.fetchFlags();
    });


    const asiaB = document.getElementsByClassName("asia_btn");
    if (asiaB.length > 0) {
    asiaB[0].addEventListener('click', () => {
    document.getElementsByClassName("main_buttons")[0].style.display = 'none';
    this.fetchData();
    this.fetchFlags();
    });
}
   

  }
}

export default Asia;


