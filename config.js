// Config.js            |
// =====================|




(function(){   
	// Set Template Config
	var template = {
		project: 'Basic Theme', // Project Name
		bootstrap: 'bootstrap-3.3.5-dist', // Version of bootstrap
		theme: 'theme', // Directory 
		log: true // Console log config
	}

    var init = {
		setTitle: function(){
			// Set Project Name
			document.title = template.project;
		},
		// loadBootstrap: function() {
		// 	// Loading bootstrap
		// 	file = location.pathname.split( "/" ).pop();

		// 	link = document.createElement( "link" );
		// 	link.href = file.substr( 0, file.lastIndexOf( "." ) ) + ".css";
		// 	link.type = "text/css";
		// 	link.rel = "stylesheet";
		// 	link.media = "screen,print";

		// 	document.getElementsByTagName( "head" )[0].appendChild( link );
		// }
	}
})();



