let text = {
	intro: [
		[-1,"intro2"],
		"...",
		"...Ugh...",
		"...Where am I?",
		"Where is the light?"
	],
	intro2: [
		[0,"_investigationRoom"],
		"Huh?",
		"Dunno how, but the light suddenly turned on!",
		"Wait... I don't remember this room at all!",
		"My phone is also nowhere to be found.",
		"The hell is going on?!",
		"...",
		"Guess it's time to look around."
	],
	//locker
	locker: [
		[0,"_investigationLocker"],
		"There are some lockers here.",
		"Surprisingly, one of them isn't locked.",
		"Let's check it out."
	],
	lockerNote: [
		[1,"_investigationLocker"],
		"There is a note here.",
		"Uh...",
		"Is that a code?",
		"Dunno about programming, but I don't think code is meant to be printed.",
		"It won't help me anyways - I'm not a programmer."
	],
	lockerKey: [
		[1,"_investigationRoom"],
		"A key...?",
		"I guess I'll take it.",
		"There isn't anything else which is useful...",
		"Guess I'll see where I can use this key."
	],
	locker2: [
		[0,"_investigationRoom"],
		"Maybe this key works with one of these lockers?",
		"Nah. It is too big so it doesn't fit these keyholes."
	]
	//chest
	chestLocked: [
		[0,"_investigationRoom"],
		"There is a chest here.",
		"It is locked though.",
		"Still, there's probably a reason why it is here."
	],
	chestOpen: [
		[0,"chestOpen2"],
		"I guess that key is meant to open that chest...",
		"Huh, it really did open it.",
		"Let's look into it."
	],
	chestOpen2: [
		[2,"_investigationRoom"],
		"A note?",
		"It only says that the door hs been opened.",
		"I guess there is nothing else to this chest."
	]
	//door
	doorLocked: [
		[0,"_investigationRoom"],
		"A door.",
		"I don't know where it leads, but there is no harm in checking it out, right?",
		"...it's locked?",
		"And it looks like it is the only way outside.",
		"...",
		"Wait... That means...",
		"I am locked here..."
	],
	doorKey: [
		[0,"_investigationRoom"],
		"Maybe this is the key to open this door?",
		"Wait... There is no keyhole.",
		"Is there any other way to open this door?"
	]
	doorOpen: [
		[0,"ending"],
		"The door unlocked...?",
		"I see. In that case, let's get outta here."
	],
	//ending
	ending:[
		[3,"ending2"],
		"What.",
		"Just... what.",
		"Why would someone be so cruel...",
		"...to first give hope to escape...",
		"and then do this?",
		"Huh?",
		"There is a note here..."
		"\"Sorry, mr. Player Character, but I had to make this room your whole world.\"",
		"\"It's just because of the theme of Ludum Dare 37 - One Room\"",
		"\"But don't worry. Soon the user will close this webpage...\"",
		"\"...and you will come back to your friends and family.\"",
		"...",
		"Uh...",
		"I think I can come up with only one possibility.",
		"A possibility that this is a nightmare, and I'll just wake up in my bed."
	],
	ending2:[
		[-1,"_end"],
		"...right?",
		"...",
		"I don't know who is that user mentioned in that note...",
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
		"..."
	]
}
