class Home {
    constructor(ele) {
        this.ele = ele;
        
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

            countries.forEach(country => {
                country.addEventListener('mouseover', function () {
                    window.onmousemove = function (j) {
                        let x = j.clientX;
                        let y = j.clientY;
                        document.getElementById('name').style.top = y - 60 + 'px';
                        document.getElementById('name').style.left = x + 10 + 'px';
                    };

                    country.style.fill = 'pink';
                    document.getElementById('name').style.opacity = 1;
                    document.getElementById('namep').innerText = country.id;
                });

                country.addEventListener('mouseleave', function () {
                    country.style.fill = '#ececec';
                    document.getElementById('name').style.opacity = 0;
                });
            });
        });
    
};
    
    }
export default Home;