class Map {
    constructor(ele) {
        this.ele = ele;
        
       
        this.displayHome();
        this.fetchData();
    }
    fetchData() {
        let original = this.ele
       
        
        fetch('world.svg')
        .then(response => response.text())
        .then(svgData => {
            // Add the SVG data to the DOM
            original.innerHTML = svgData;

            // Get all the path elements representing countries
            const countries = document.querySelectorAll('path');
            const d = document.getElementById("map");
            d.className="mapC";

            countries.forEach(country => {
                country.addEventListener('click', function () {
                    let name = (country.id).toLowerCase();
                    let capital= fetch(`https://restcountries.com/v3.1/name/${(country.id)}?fullText=true`).then(res => res.json()).then(data=> window.alert(`   Name: ${name}  ${data[0].flag }  \n   Capital: ${data[0].capital[0]}\n   Continent: ${data[0].continents}` ))  
            
                })
                
            });
        });
    }

    displayHome(){
        // debugger
        const worldButton = document.getElementById("world_btn");
        worldButton.addEventListener("click", () => {
            this.fetchData();
        });
    }
    
}
export default Map;