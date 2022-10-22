

window.addEventListener( "load", ev => {
	/* [ properties ]
    ================================= */
	let logo = document.querySelector( "logo" );


	/* [ events ]
    ================================= */
	logo.addEventListener( "click", ev => {
		window.open( logo.getAttribute( "src" ), "_self" );
	} );

    
} );