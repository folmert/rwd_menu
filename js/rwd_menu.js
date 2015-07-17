var menu = document.querySelectorAll('.rwd_menu')[0];

menu.addEventListener('click', function(e) {
	if( e.target === this ) {
		this.classList.toggle('js-menu_opened');
	}
},false);


var submenu = document.querySelectorAll('.rwd_menu li.parent');


var index;
for (index = 0; index < submenu.length; ++index) {
	submenu[index].addEventListener('click', function(e) {
		this.classList.toggle('js-submenu_opened');
	},false);
	
}


