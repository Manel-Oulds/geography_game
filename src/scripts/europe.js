class Europe {
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
  d.className = "eu_class"

    fetch('world.svg')
      .then((response) => response.text())
      .then((svgData) => {
        // Add the SVG data to the DOM
        document.getElementById('map').innerHTML = svgData;
      })
      .then(() => {
        // Hide non-European countries
        const europeanCountries = [
          'Albania',
          'Andorra',
          'Austria',
          'Belarus',
          'Belgium',
          'Bosnia and Herzegovina',
          'Bulgaria',
          'Croatia',
          'Cyprus',
          'Czech Republic',
          'Denmark',
          'Estonia',
          'Finland',
          'France',
          'Germany',
          'Greece',
          'Hungary',
          'Iceland',
          'Ireland',
          'Italy',
          'Kosovo',
          'Latvia',
          'Liechtenstein',
          'Lithuania',
          'Luxembourg',
          'Malta',
          'Moldova',
          'Monaco',
          'Montenegro',
          'Netherlands',
          'North Macedonia',
          'Norway',
          'Poland',
          'Portugal',
          'Romania',
          'Russia',
          'San Marino',
          'Serbia',
          'Slovakia',
          'Slovenia',
          'Spain',
          'Sweden',
          'Switzerland',
          'Ukraine',
          'United Kingdom',
        ];

        const svg = document.getElementById('map');
        const countries = svg.querySelectorAll('path');

        countries.forEach((country) => {
          const countryName = country.getAttribute('id');

          if (countryName && !europeanCountries.includes(countryName)) {
            country.style.display = 'none';
          }
        });
      });
  }

  displayCountries() {
    const europeButton = document.getElementById('europe_btn');
    europeButton.addEventListener('click', () => {
      (document.getElementsByClassName("main_buttons"))[0].style.display = 'none';
      this.fetchData();
    });


    const europeB = document.getElementsByClassName("europe_btn");
    if (europeB.length > 0) {
    europeB[0].addEventListener('click', () => {
    document.getElementsByClassName("main_buttons")[0].style.display = 'none';
    this.fetchData();
    });
}
   

  }
}

export default Europe;
