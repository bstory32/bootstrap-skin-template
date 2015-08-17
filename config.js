// Config.js            |
// =====================|




(function(){   
	// Set Template Config
	var template = {
		bootstrap: 'bootstrap-3.3.5-dist', // Version of bootstrap
		themeDir: 'theme', // Directory 
		projectName: 'Basic Theme', // Project Name
		projectDir: 'basic_theme', //Project Directory
		log: true // Console log config
	}

	// to use bower run the following commands
	// npm install bower
	// bower install bootstrap
	var bower = {
		useBower: true, // Using bower is optional
		bowerDir: 'bower_components', // Bower components directory
		bootstrap: 'bootstrap' //bootstrap Directory inside bower


	}

	
	// Set title
	$('head title').append(template.project);

	// Load Bootstrap
	if (bower.useBower) {
		$('head').append('<link rel="stylesheet" href="'+bower.bowerDir+'/'+bower.bootstrap+'/dist/css/bootstrap.css" type="text/css" />');
		if (template.log) {console.log('Bower Bootstrap Loaded: ' + template.bootstrap);};
	} else {
		$('head').append('<link rel="stylesheet" href="dist/'+template.bootstrap+'/css/bootstrap.css" type="text/css" />');
		if (template.log) {console.log('Bootstrap Loaded: ' + template.bootstrap);};
	};
	
	
	//Load Theme
	$('head').append('<link rel="stylesheet" href="'+template.themeDir+'/'+template.projectDir+'/css/main.css" type="text/css" />');
	if (template.log) {console.log('Theme Loaded: ' + template.projectName);};


})();



