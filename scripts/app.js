const DEBUG = false;

if ( !DEBUG ) {
	$( document ).ready( function () {
		setTimeout(function () {
			window.scrollTo(0, 0);
		},900);
		const disablePreloader = () => {
			let preloader = $( '.preloader' );
			setTimeout( function () {
				if ( !preloader.hasClass( 'done' ) ) {
					wow = new WOW( {
						boxClass : 'wow',      // default
						animateClass : 'animated', // default
						offset : 100,          // default
						mobile : true,       // default
						live : true        // default
					} );
					wow.init();
				}
			}, 900 );
			setTimeout( function () {
				if ( !preloader.hasClass( 'done' ) ) {
					preloader.addClass( 'done' );
				}
			}, 1000 );
		};
		disablePreloader();
	} )
} else
	$( ".preloader" ).css( "display", "none" );

window.onload = function () {
	$( $( document ).ready( function () {
		$( "html" ).niceScroll( {
			zindex : 1000,
			horizrailenabled: false,
		} );
	} ) );

	document.querySelector( ".menu-btn" ).onclick = function () {
		this.classList.toggle( "active" );
		document.querySelector( ".menu" ).classList.toggle( "active" );
	};
	// document.querySelector( ".watch-video-btn" ).onclick = function () {
	// 	document.querySelector( ".phone" ).classList.toggle( "active" );
	// 	document.querySelector( ".phone" ).setAttribute( "src", "images/white.png" );
	// 	document.querySelector( "body" ).classList.toggle( "active" );
	// };
	if ( window.pageYOffset > 0 )
		document.querySelector( ".top-header" ).classList.add( "fixed" );
	window.onscroll = function () {
		if ( window.pageYOffset > 0 )
			document.querySelector( ".top-header" ).classList.add( "fixed" );
		else
			document.querySelector( ".top-header" ).classList.remove( "fixed" );
	};
};