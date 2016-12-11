let investigate = {
	investigationRoom: [
		0,
		[220,230,330,300,function() {
			//chest
			if (gamestate.flags.keyFound) {
				gamestate.flags.doorOpen = true;
				return "chestOpen";
			} else {
				return "chestLocked";
			}
		}],
		[320,90,420,270,function() {
			//door
			if (gamestate.flags.doorOpen) {
				localStorage.LD37 = "true";
				return "doorOpen";
			} else if (gamestate.flags.keyFound) {
				return "doorKey";
			} else {
				return "doorLocked";
			}
		}],
		[20,50,270,310,function() {
			//lockers
			if (gamestate.flags.keyFound) {
				return "locker2";
			} else {
				return "locker";
			}
		}]
	],
	investigationLocker: [
		1,
		[330,170,360,240,function() {
			//key
			gamestate.flags.keyFound = true;
			return "lockerKey";
		}],
		[260,180,400,330,function() {
			//note
			return "lockerNote";
		}]
	],
	investigationRoom2: [
		0,
		[220,230,330,300,function() {
			//chest
			return "chestAlt";
		}],
		[320,90,420,270,function() {
			//door
			return "doorAlt";
		}],
		[20,50,270,310,function() {
			//lockers
			return "lockerAlt";
		}]
	],
	investigationLocker2: [
		1,
		[220,230,330,300,function() {
			//chest
			return "chestAlt";
		}],
	],
}
