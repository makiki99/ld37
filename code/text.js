let text = {
	intro: [
		[-1,0,"intro2"],
		"Me:\n...",
		"Me:\n...Ugh...",
		"Me:\n...Where am I?",
		"Me:\nWhere is the light?"
	],
	intro2: [
		[0,1,"investigationRoom"],
		"Me:\nHuh?",
		"Me:\nDunno how, but the light suddenly turned on!",
		"Me:\nWait... I don't remember this room at all!",
		"Me:\nMy phone is also nowhere to be found.",
		"Me:\nThe hell is going on?!",
		"Me:\n...",
		"Me:\n...Is there any way out?"
	],
	//locker
	locker: [
		[0,1,"investigationLocker"],
		"Me:\nThere are some lockers here.",
		"Me:\nSurprisingly, one of them isn't locked.",
		"Me:\nLet's check it out."
	],
	lockerNote: [
		[1,1,"investigationLocker"],
		"Me:\nThere is a note here.",
		"Me:\nUh...",
		"Me:\nIs that a code?",
		"Me:\nDunno about programming, but I don't think code is meant to be printed.",
		"Me:\nIt won't help me anyways - I'm not a programmer."
	],
	lockerKey: [
		[1,1,"investigationRoom"],
		"Me:\nA key...?",
		"Me:\nI guess I'll take it.",
		"Me:\nThere isn't anything else which is useful...",
		"Me:\nGuess I'll see where I can use this key."
	],
	locker2: [
		[0,1,"investigationRoom"],
		"Me:\nMaybe this key works with one of these lockers?",
		"Me:\nNah. It is too big so it doesn't fit these keyholes."
	],
	//chest
	chestLocked: [
		[0,1,"investigationRoom"],
		"Me:\nThere is a chest here.",
		"Me:\nIt is locked though.",
		"Me:\nStill, there's probably a reason why it is here."
	],
	chestOpen: [
		[0,0,"chestOpen2"],
		"Me:\nI guess that key is meant to open that chest...",
		"Me:\nHuh, it really did open it.",
		"Me:\nLet's look into it."
	],
	chestOpen2: [
		[2,1,"investigationRoom"],
		"Me:\nA note?",
		"Me:\nIt only says that the door hs been opened.",
		"Me:\nI guess there is nothing else to this chest."
	],
	//door
	doorLocked: [
		[0,1,"investigationRoom"],
		"Me:\nA door.",
		"Me:\nI don't know where it leads, but there is no harm in checking it out, right?",
		"Me:\n...it's locked?",
		"Me:\nAnd it looks like it is the only way outside.",
		"Me:\n...",
		"Me:\nWait... That means...",
		"Me:\nI am locked here..."
	],
	doorKey: [
		[0,1,"investigationRoom"],
		"Me:\nMaybe this is the key to open this door?",
		"Me:\nWait... There is no keyhole.",
		"Me:\nIs there any other way to open this door?"
	],
	doorOpen: [
		[0,0,"ending"],
		"Me:\nThe door unlocked...?",
		"Me:\nI see. In that case, let's get outta here."
	],
	//ending
	ending:[
		[3,0,"ending2"],
		"Me:\nWhat.",
		"Me:\nJust... what.",
		"Me:\nWhy would someone be so cruel...",
		"Me:\n...to first give hope to escape...",
		"Me:\nand then do this?",
		"Me:\nHuh?",
		"There is a note here...",
		"Note:\n\"Sorry, mr. Player Character, but I had to make this room your whole world.\"",
		"Note:\n\"It's just because of the theme of Ludum Dare 37 - One Room\"",
		"Note:\n\"But don't worry. Soon the user will close this webpage...\"",
		"Note:\n\"...and you will come back to your friends and family.\"",
		"Me:\n...",
		"Me:\nUh...",
		"Me:\nI think I can come up with only one possibility.",
		"Me:\nA possibility that this is a nightmare, and I'll just wake up in my bed."
	],
	ending2:[
		[-1,2,"end"],
		"Me:\n...right?",
		"Me:\n...",
		"Me:\nI don't know who is that user mentioned in that note...",
		"Me:\nBut...",
		"Me:\nIf he or she can hear me...",
		"Me:\nPlease.",
		"Me:\nHelp me.",
		"Me:\nClose \"this webpage\", whatever that means.",
		"Me:\nI want to get out.",
		"Me:\nDon't do this to me.",
		"Me:\nLet me wake up.",
		"Me:\nLet me go back.",
		"Me:\nPlease...",
		"Me:\n..."
	]
}
