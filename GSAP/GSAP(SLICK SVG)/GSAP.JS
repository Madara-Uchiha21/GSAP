var initialPath = `M 0 150 Q 500 100 990 180`
var finalPath = `M 0 150 Q 500 100 990 180`

var string = document.querySelector("#string")

string.addEventListener("mouseenter",function(dets){
    path =`M 0 150 Q 500 ${dets.y} 100 990 180`
})