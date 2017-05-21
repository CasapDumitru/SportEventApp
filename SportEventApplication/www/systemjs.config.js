/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
	System.config({
		paths: {
			'npm:': 'node_modules/'
		},
		map: {
			app: 'app',

			// angular bundles
			'@angular/core': 'npm:@angular/core/bundles/core.umd.js',
			'@angular/common': 'npm:@angular/common/bundles/common.umd.js',
			'@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
			'@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
			'@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
			'@angular/http': 'npm:@angular/http/bundles/http.umd.js',
			'@angular/router': 'npm:@angular/router/bundles/router.umd.js',
			'@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
			'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
			'angular2-google-maps': 'npm:angular2-google-maps',  

			// other libraries
			'rxjs':                      'npm:rxjs',
			'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',

			'angular2-infinite-scroll': 'node_modules/angular2-infinite-scroll',
			'ng2-datetime-picker' : 'node_modules/ng2-datetime-picker/dist',
    		'angular2-click-to-edit': 'node_modules/angular2-click-to-edit@1.0.50',
			'ng2-imageupload': 'node_modules/ng2-imageupload'


		},
		packages: {
			app: {
				main: './main.js',
				defaultExtension: 'js'
			},
			rxjs: {
				defaultExtension: 'js'
			},
			"angular2-google-maps/core": {
            "defaultExtension": "js",
            "main": "index.js"
        	},
			'angular2-infinite-scroll': {
				main: 'angular2-infinite-scroll.js',
				defaultExtension: 'js'
			},
			'ng2-datetime-picker': { 
				main: 'ng2-datetime-picker.umd.js', 
				defaultExtension: 'js'
		    },
			'angular2-click-to-edit': { 
				main: 'index',
				defaultExtension: 'js'
			},
			'ng2-imageupload': {
              main: 'index.js',
              defaultExtension: 'js'
          }
	 }
	});
})(this);