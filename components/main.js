$(document)
	.ready(function() {

		// Declare the buttons for further use
		// var #buttonName = $('selector');

		var $home = $('a-entity[data-src="#home"]');
		var $restaurant1 = $('a-entity[data-src="#restaurant1"]');
		var $restaurant2 = $('a-entity[data-src="#restaurant2"]');
		var $restaurant3 = $('a-entity[data-src="#restaurant3"]');
		var $restaurant4 = $('a-entity[data-src="#restaurant4"]');
		var $restaurant5 = $('a-entity[data-src="#restaurant5"]');

		var restaurants = [$restaurant1, $restaurant2, $restaurant3, $restaurant4, $restaurant5];

		// End of the declaration
		var $thumbnails = $('.thumbnail');

		// Fn for showing buttons
		// Usage:
		// show([$button1, $button2, ..., $buttonN]);
		var show = function(el) {
			for (var i = 0; i < el.length; i++) {
				el[i].attr('visible', 'true');
			}
		};

		// Fn for set the postion of a button
		// Usage:
		// setPos($buttonName, x, y, z, rotationX, rotationY, rotationZ]);
		var setPos = function(el, x, y, z, rx, ry, rz) {
			el.attr('position', x + ' ' + y + ' ' + z);
			el.attr('rotation', rx + ' ' + ry + ' ' + rz);
		};

		// Fn for switching to another scene and show the all the buttons in it
		// Usage:
		// setScene([$button1, $button2, ..., $buttonN]);
		var setScene = function(elToShow) {

			// Hide all the buttons
			$thumbnails
				.each(function(index, el) {
					$(this).attr('visible', 'false');
				});

			// Show useful buttons
			show(elToShow);
		};

		// initialize
		// initialize
		show(restaurants); // Buttons need to be shown at the start
		// setPos($buttonName, x, y, z, rotationX, rotationY, rotationZ]);

		function toRadians(angle) {
			return angle * (Math.PI / 180);
		}

		setPos($home, 0, 0, 4, 0, 180, 0); // initial postion of button 1

		for (var i = 0; i < restaurants.length; i++) {
			var x = 0,
				y = 0,
				rotY = '';

			x = 4 * Math.sin(toRadians(72 * i));
			z = -4 * Math.cos(toRadians(72 * i));
			rotY = -72 * i;

			setPos($(restaurants[i]), x, 0, z, 0, rotY, 0);
		}
		// Button control

		// $buttonName.click(function(e) {
		// 	setScene([$button1, $button2, ..., $buttonN]);
		// 	setPos($buttonName1, x, y, z, rotationX, rotationY, rotationZ]);
		// 	setPos($buttonName2, x, y, z, rotationX, rotationY, rotationZ]);
		// .
		// .
		// 	setPos($buttonNameN, x, y, z, rotationX, rotationY, rotationZ]);
		// });

		$home
			.click(function(e) {
				setScene(restaurants);
			});

		$(restaurants).each(function(index, el) {
			$(this)
				.click(function(e) {
					setScene([$home]);
				});
		});

		// End of button control

	});
