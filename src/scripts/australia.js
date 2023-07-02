class Australia {
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
  d.className = "aus_class"

    fetch('world.svg')
      .then((response) => response.text())
      .then((svgData) => {
        // Add the SVG data to the DOM
        document.getElementById('map').innerHTML = svgData;
      })
      .then(() => {
        // Hide non-European countries
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

        const svg = document.getElementById('map');
        const countries = svg.querySelectorAll('path');

        countries.forEach((country) => {
          const countryName = country.getAttribute('id');

          if (countryName && !spc.includes(countryName)) {
            country.style.display = 'none';
          }
        });
      });
  }

  displayCountries() {
    const spButton = document.getElementById('sp_btn');
    spButton.addEventListener('click', () => {
      (document.getElementsByClassName("main_buttons"))[0].style.display = 'none';
      this.fetchData();
    });


    const spB = document.getElementsByClassName("sp_btn");
    if (spB.length > 0) {
    spB[0].addEventListener('click', () => {
    document.getElementsByClassName("main_buttons")[0].style.display = 'none';
    this.fetchData();
    });
}
   

  }
}

export default Australia;






    
     
    
   
      
    
    