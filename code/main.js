let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.height = 600;
canvas.width = 480;
ctx.font = "16px monospace";

let toLoad = [
	"img/room.png",
	"img/locker.png",
	"img/chest.png",
	"img/door.png",
	"img/locker2.png"
];

let images = [];

let gamestate = {
	mode: 0, // 0 - text, 1 - investigation
	submode: "intro",
	line: 1,
	flags: {
		keyFound: false,
		doorOpen: false,
	}
};

function changeImage(id) {
	if (id < 0) {
		ctx.fillStyle = "black";
		ctx.fillRect(0,0,480,480);
	} else {
		ctx.drawImage(images[id], 0, 0);
	}
}

function changeText(str) {
	let arg = str.split("\n");

	ctx.fillStyle = "black";
	ctx.fillRect(0,480,480,160);
	ctx.fillStyle = "white";
	for (var i = 0; i < arg.length; i++) {
		ctx.fillText(arg[i],16,496+16*i)
	}
}

function main() {
	changeImage(-1);
	changeText(text[gamestate.submode][gamestate.line]);
}

(function() { //load
	let loaded = 0;
	for (var i = 0; i < toLoad.length; i++) {
		images[i] = new Image();
		images[i].onload = function() {
			if (++loaded >= toLoad.length) {
				main();
			}
		}
		images[i].src = toLoad[i];
	}
}());

canvas.addEventListener("click",function(e) {
	gamestate.line++;
	if (gamestate.mode === 0) {
		if (gamestate.line < text[gamestate.submode].length) {
			changeText(text[gamestate.submode][gamestate.line]);
		} else {
			gamestate.line = 1;
			gamestate.mode = text[gamestate.submode][0][1]
			gamestate.submode = text[gamestate.submode][0][2];
			if (gamestate.mode === 0) {
				changeImage(text[gamestate.submode][0][0]);
				changeText(text[gamestate.submode][gamestate.line]);
			} else {
				changeImage(investigate[gamestate.submode][0]);
				changeText("(Click to inspect.)");
			}
		}
	} else if (gamestate.mode === 1) {
		let x = e.clientX-canvas.getBoundingClientRect().left;
		let y = e.clientY-canvas.getBoundingClientRect().top;
		for (var i = 1; i < investigate[gamestate.submode].length; i++) {
			let el = investigate[gamestate.submode][i];
			if (x > el[0] && x < el[2] && y > el[1] && y < el[3]) {
				gamestate.line = 1;
				gamestate.mode = 0;
				gamestate.submode = investigate[gamestate.submode][i][4]();
				changeImage(text[gamestate.submode][0][0]);
				changeText(text[gamestate.submode][gamestate.line]);
				break;
			}
		}
		console.log(x+" "+y);
	}
})
