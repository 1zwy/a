// made by 1zwy (super giga chad man)

// console.log "print" commands
Game.Notify("Controls", 'The controls are "printed" in the developer console.')

console.log("%cCONTROLS:", "color: rgb(255,0,0); font-Size: 26px; font-Weight: bold; font-Family: arial;")
console.log("%cF: Autoclick Cookie\nG: Spawn Golden Cookies\nH: Autoclick Golden Cookies\nL: Spawn Infinite Cookies", "color: rgb(211,0,0); font-Size: 18px; font-Weight: bold; font-Family: arial;")

//variables
var autoclick = false
var autoclickgc = false

//functions
document.addEventListener("keyup", function(event) {
	if (event.keyCode === 70){ // F
		if (autoclick===false){autoclick=true}else{autoclick=false}
	}else if (event.keyCode === 76){ // L
		Game.Earn(Infinity)
	}else if (event.keyCode === 71){ //G
		var newShimmer=new Game.shimmer("golden");
	}else if (event.keyCode === 72){ // H
		if (autoclickgc===false){autoclickgc=true}else{autoclickgc=false}
	}
}, false)

setInterval(function(){ // Autoclick
	if (autoclick===true){
		Game.ClickCookie()
	}
},10)

setInterval(function(){ 
	if (autoclickgc===true){
		Game.shimmers.forEach(function(shimmer) { if (shimmer.type ='golden'){shimmer.pop()}})
	}
},500);