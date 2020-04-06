class Info {
	constructor(info) {
		this.name = info.name || "No Name";
		this.user_id = info.user_id || -1;
		this.description = info.description || this.name;
		this.type = info.type || "enemy";
		this.currLevel = info.currLevel || 0;
		this.highestLevel = info.highestLevel || 0;
		this.deaths = info.deaths || 0;
		this.inventoryPage = "inventory";
		this.difficulty = info.difficulty || "Easy";
		this.sound = info.sound || false
		
		this.menu = {
			menus : ["buy", "craft", "cook"],
			current : "none",
			category : 0,
			subcategory: 0,

			close : function() {
				this.current = "none";
			},

			open : function(menu) {
				this.reset();
				this.current = menu;
			},

			reset : function() {
				this.category = 0;
				this.subcategory = 0;
			}
		}
	}
}

module.exports = Info;