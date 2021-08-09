//eslint
// eslint-disable-next-line no-unused-vars
import { Dropdown, Accordion, Modal } from 'bootstrap';
window.addEventListener( 'load', function( ) {
	feather.replace();

	const images = document.querySelectorAll( '.has-magnifier img' );
	Array.prototype.forEach.call( images, ( image ) => {
		console.log( image );
		magnify( image, 3 );
	} );
} );

function magnify( img, zoom = 1 ) {
	/* Create magnifier glass: */
	const glass = document.createElement( 'DIV' );
	glass.setAttribute( 'class', 'img-magnifier-glass' );

	/* Insert magnifier glass: */
	img.parentElement.insertBefore( glass, img );

	/* Set background properties for the magnifier glass: */
	glass.style.backgroundColor = 'fff';
	glass.style.backgroundImage = "url('" + img.src + "')";
	glass.style.backgroundRepeat = 'no-repeat';
	glass.style.backgroundSize =
		( img.width * zoom ) + 'px ' + ( img.height * zoom ) + 'px';
	const bw = 3;
	const w = glass.offsetWidth / 2;
	const h = glass.offsetHeight / 2;

	/* Execute a function when someone moves the magnifier glass over the image: */
	glass.addEventListener( 'mousemove', moveMagnifier );
	img.addEventListener( 'mousemove', moveMagnifier );

	/*and also for touch screens:*/
	glass.addEventListener( 'touchmove', moveMagnifier );
	img.addEventListener( 'touchmove', moveMagnifier );
	function moveMagnifier( e ) {
		/* Prevent any other actions that may occur when moving over the image */
		e.preventDefault();
		/* Get the cursor's x and y positions: */
		const pos = getCursorPos( e );
		let x = pos.x;
		let y = pos.y;
		/* Prevent the magnifier glass from being positioned outside the image: */
		if ( x > img.width - w / zoom ) {
			x = img.width - w / zoom;
		}
		if ( x < w / zoom ) {
			x = w / zoom;
		}
		if ( y > img.height - h / zoom ) {
			y = img.height - h / zoom;
		}
		if ( y < h / zoom ) {
			y = h / zoom;
		}
		/* Set the position of the magnifier glass: */
		glass.style.left = x - w + 'px';
		glass.style.top = y - h + 'px';
		/* Display what the magnifier glass "sees": */
		glass.style.backgroundPosition =
			'-' + ( x * zoom - w + bw ) + 'px -' + ( y * zoom - h + bw ) + 'px';
	}

	function getCursorPos( e ) {
		let
			x = 0,
			y = 0;
		e = e || window.event;
		/* Get the x and y positions of the image: */
		const a = img.getBoundingClientRect();
		/* Calculate the cursor's x and y coordinates, relative to the image: */
		x = e.pageX - a.left;
		y = e.pageY - a.top;
		/* Consider any page scrolling: */
		x = x - window.pageXOffset;
		y = y - window.pageYOffset;
		return { x, y };
	}
}
