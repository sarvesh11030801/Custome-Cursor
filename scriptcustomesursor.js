var main = document.querySelector("#main")
var crs = document.querySelector(".cursor")

main.addEventListener("mousemove", function(cursourmovedetails){
    crs.style.left = cursourmovedetails.x+"px"
    crs.style.top = cursourmovedetails.y+"px"
})