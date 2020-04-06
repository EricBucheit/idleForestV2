let credits = {
	shovel: creditTheGuy("Based on \"spear walk\" by XOR", 
						 "https://opengameart.org/users/xor", 
						 "shovel",
						 "https://opengameart.org/content/lpc-spadeshovel-spritesheet"
						 ),
	zombie: creditTheGuy("[LPC] Zombie by Benjamin K. Smith, commissioned by castelonia. Based on the male LPC base by Stephen Challener (Redshrike) and the thrust and shoot animations by Johannes Sjölund (wulax).",
						 "https://opengameart.org/content/lpc-zombie",
						 "zombie",
						 "https://opengameart.org/content/lpc-zombie"
						 ),
	
}

function creditTheGuy(name, site, work, origin) {
	return ({
		name: name,
		site: site,
		work : work,
		origin: origin,
	})
}