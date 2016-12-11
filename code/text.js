let text = {
	intro: [
		[-1,0,"intro2"],
		"...",
		"...Ugh...",
		"...Where am I?",
		"Where is the light?"
	],
	intro2: [
		[0,1,"investigationRoom"],
		"Huh?",
		"Dunno how, but the light suddenly turned on!",
		"Wait... I don't remember this room at all!",
		"My phone is also nowhere to be found.",
		"The hell is going on?!",
		"...",
		"...Is there any way out?"
	],
	//locker
	locker: [
		[0,1,"investigationLocker"],
		"There are some lockers here.",
		"Surprisingly, one of them isn't locked.",
		"Let's check it out."
	],
	lockerNote: [
		[1,1,"investigationLocker"],
		"There is a note here.",
		"Uh...",
		"Is that a code?",
		"Dunno about programming, but I don't think code\nis meant to be printed.",
		"It won't help me anyways - I'm not a programmer."
	],
	lockerKey: [
		[1,1,"investigationRoom"],
		"A key...?",
		"I guess I'll take it.",
		"There isn't anything else which is useful...",
		"Guess I'll see where I can use this key."
	],
	locker2: [
		[0,1,"investigationRoom"],
		"Maybe this key works with one of these lockers?",
		"Nah. It is too big so it doesn't fit these keyholes."
	],
	//chest
	chestLocked: [
		[0,1,"investigationRoom"],
		"There is a chest here.",
		"It is locked though.",
		"Still, there's probably a reason why it is here."
	],
	chestOpen: [
		[0,0,"chestOpen2"],
		"I guess that key is meant to open that chest...",
		"Huh, it really did open it.",
		"Let's look into it."
	],
	chestOpen2: [
		[2,1,"investigationRoom"],
		"A note?",
		"It only says that the door has been opened.",
		"I guess there is nothing else to this chest."
	],
	//door
	doorLocked: [
		[0,1,"investigationRoom"],
		"A door.",
		"I don't know where it leads, but there is no harm\nin checking it out, right?",
		"...it's locked?",
		"And it looks like it is the only way outside.",
		"...",
		"...I hope I am not locked for eternity..."
	],
	doorKey: [
		[0,1,"investigationRoom"],
		"Maybe this is the key to open this door?",
		"Wait... There is no keyhole.",
		"Is there any other way to open this door?"
	],
	doorOpen: [
		[0,0,"ending"],
		"Since the door is unlocked, let's get outta here."
	],
	//ending
	ending:[
		[3,0,"ending2"],
		"What.",
		"Just... what.",
		"Why would someone be so cruel...",
		"...to first give hope to escape...",
		"and then do this?",
		"Huh?",
		"There is a note here...",
		"\"Sorry, mr. Player Character,\nbut I had to make this room your whole world.\"",
		"\"It's just because of the theme of\nLudum Dare 37 - One Room\"",
		"\"But don't worry.\nSoon the user will close this webpage...\"",
		"\"...and you will come back to your friends\nand family.\"",
		"...",
		"Uh...",
		"I think I can come up with only one possibility.",
		"A possibility that this is a nightmare,\nand I'll just wake up in my bed."
	],
	ending2:[
		[-1,0,"realEnd"],
		"...right?",
		"...",
		"I don't know who is that user mentioned\nin that note...",
		"But...",
		"If he or she can hear me...",
		"Please.",
		"Help me.",
		"Close \"this webpage\", whatever that means.",
		"I want to get out.",
		"Don't do this to me.",
		"Let me wake up.",
		"Let me go back.",
		"Please...",
		"...",
	],
	altIntro:[
		[-1,0,"altIntro2"],
		"...",
		"...Ugh...",
		"...Where am I?",
		"Where is the light?"
	],
	altIntro2:[
		[0,1,"investigationRoom2"],
		"Huh?",
		"NOT AGAIN!",
		"Wait...",
		"I feel like there is something different\nin this room..."
	],
	chestAlt:[
		[2,1,"investigationRoom2"],
		"There's only the same note as\nI found before.",
		"Guess there is nothing more to this chest."
	],
	doorAlt:[
		[3,1,"investigationRoom2"],
		"The same wall, the same note.",
		"I don't think there is anything more\nto this...",
		"Althrough, I'm not in a mood to sta\nhere.",
		"I wouldn't be unhappy if I came back\nto my world."
	],
	lockerAlt:[
		[4,1,"investigationLocker2"],
		"Huh?",
		"Another locker has opened?",
		"Let's check it out then."
	],
	pickaxe:[
		[4,1,"investigationRoom2"],
		"A pickaxe?",
		"What I am meant to do with it?",
		"...",
		"Wait...",
		"I think I might know..."
	]
	realEnd:[
		[-1,0,"realEnd"],
		"..."
	]
}
