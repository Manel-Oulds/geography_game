class Asia {
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
  d.className = "as_class"

    fetch('world.svg')
      .then((response) => response.text())
      .then((svgData) => {
        // Add the SVG data to the DOM
        document.getElementById('map').innerHTML = svgData;
      })
      .then(() => {
        // Hide non-European countries
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

        const svg = document.getElementById('map');
        const countries = svg.querySelectorAll('path');

        countries.forEach((country) => {
          const countryName = country.getAttribute('id');

          if (countryName && !asianCountries.includes(countryName)) {
            country.style.display = 'none';
          }
        });
      });
  }

  displayCountries() {
    const asiaButton = document.getElementById('asia_btn');
    asiaButton.addEventListener('click', () => {
      (document.getElementsByClassName("main_buttons"))[0].style.display = 'none';
      this.fetchData();
    });


    const asiaB = document.getElementsByClassName("asia_btn");
    if (asiaB.length > 0) {
    asiaB[0].addEventListener('click', () => {
    document.getElementsByClassName("main_buttons")[0].style.display = 'none';
    this.fetchData();
    });
}
   

  }
}

export default Asia;


