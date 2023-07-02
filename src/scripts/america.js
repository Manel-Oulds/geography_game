class America {
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
  d.className = "nam_class"

    fetch('world.svg')
      .then((response) => response.text())
      .then((svgData) => {
        // Add the SVG data to the DOM
        document.getElementById('map').innerHTML = svgData;
      })
      .then(() => {
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
       

        const svg = document.getElementById('map');
        const countries = svg.querySelectorAll('path');

        countries.forEach((country) => {
          const countryName = country.getAttribute('id');

          if (countryName && !americanCountriesN.includes(countryName)) {
            country.style.display = 'none';
          }
        });
      });
  }

  displayCountries() {
    const americaNButton = document.getElementById('americaN_btn');
    americaNButton.addEventListener('click', () => {
      (document.getElementsByClassName("main_buttons"))[0].style.display = 'none';
      this.fetchData();
    });


    const americaNB = document.getElementsByClassName("americaN_btn");
    if (americaNB.length > 0) {
    americaNB[0].addEventListener('click', () => {
    document.getElementsByClassName("main_buttons")[0].style.display = 'none';
    this.fetchData();
    });
}
   

  }
}

export default America;







