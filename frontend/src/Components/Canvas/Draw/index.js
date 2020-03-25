import Entities from './Entities'
import Level from './Level'
import BottomPanel from './Buttons/BottomPanel.js'
import BottomInventoryIcons from './Buttons/BottomInventoryIcons.js'
import UserInterface from './UI'

export default class Draw {
	constructor() {
		this.Entity = new Entities();
		this.UserInterface = new UserInterface();
		this.Level = new Level()
		this.BottomPanel = new BottomPanel();
		this.BottomInventoryIcons = new BottomInventoryIcons();
	}

	

}