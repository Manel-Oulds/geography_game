
import Map from "./scripts/map"
import Asia from "./scripts/asia"
import Africa from "./scripts/africa"
import Australia from "./scripts/australia"
import Europe from "./scripts/europe"
import America from "./scripts/america"
import Home from "./scripts/home"
import AmericaS from "./scripts/americaS"
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("map")
    new Home(container)
    new Map(container)
    new Asia(container)
    new Africa(container)
    new Europe(container)
    new Australia(container)
    new America(container)
    new AmericaS(container)
})