'use strict';


var rwd_menu = document.querySelectorAll('.rwd_menu')[0];

rwd_menu.addEventListener('click', function(e) {
	if( e.target === this ) {
		this.classList.toggle('js-menu_opened');
	}
},false);

var submenu = document.querySelectorAll('.rwd_menu li.parent');

for (var i = 0; i < submenu.length; ++i) {
	submenu[i].addEventListener('click', function(e) {
		if( e.target === this ) {
			this.classList.toggle('js-submenu_opened');
		}
	},false);	
}