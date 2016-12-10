let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.height = 600;
canvas.width = 480;
ctx.font = "16px monospace";

let toLoad = [
	"img/room.png",
	"img/locker.png",
	"img/chest.png",
	"img/door.png"
];

let images = [];

let gamestate = {
	items: {
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

function drawText(str) {
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
	drawText("0123456789012345678901234567890123456789");
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
