# rwd_menu

Just a simple responsive menu.

  - no jQuery
  - no need of adding new code to your project
  - only 2 files
  - support for sub-menus

### How to use

Add to your project 2 files:

```html
<link href="rwd_menu/css/rwd_menu.css" rel="stylesheet" />
<script src="rwd_menu/js/rwd_menu.js"></script>
```

**rwd_menu** works for screens under 992px and within `.rwd_menu` element which contains `ul` list.<br>
Submenu container must be a `li` element with class `.parent`.

```html
<nav class="rwd_menu">
	<ul>
		<li>
			<a href="#">Home</a>
		</li>
		<li class="parent">
			<span>Offer</span>
			<ul>
				<li>
					<a href="#">Offer 1</a>
				</li>
				<li>
					<a href="#">Offer 2</a>
				</li>
			</ul>
		</li>
	</ul>
</nav>


```
