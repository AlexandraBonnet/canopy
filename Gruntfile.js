module.exports = function(grunt) {

// 1. Toutes les configurations vont ici: 
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
        // 2. la configuration pour la concaténation va ici.
        dist: {
        src: [
            'js/vendor/jquery/dist/jquery.min.js', // jQuery
            'js/vendor/stellar.js/jquery.stellar.min.js', //Stellar parallax
            'js/vendor/jquery-waypoints/waypoints.min.js', //Waypoints
            'js/vendor/jquery.easing/js/jquery.easing.js' //jQuery Easing
        ],
        dest: 'js/plugins.js'
    	}
    },
    
    uglify: {
	    my_target: {
	      files: {
	        'js/main.min.js': ['js/main.js'],
	        'js/plugins.min.js':['js/plugins.js'],
	        'js/vendor/modernizr/modernizr.min.js': ['js/vendor/modernizr/modernizr.js']
	      }
	    }
	},
    
    cssmin: {
	  minify: {
	    expand: true,
	    cwd: 'css/',
	    src: ['*.css', '!*.min.css'],
	    dest: 'css/',
	    ext: '.min.css'
	  }
	},
    
    compass: {                    // Task
	    dist: {                   // Target
	      options: {              // Target options
	        sassDir: 'scss',
	        cssDir: 'css',
	        watch: true
	      }
	    }
    },

    watch: {
        css: {
            files: 'scss/**/*.scss',
            tasks: ['compass']
        }
    }
  

});

// 3. Nous disons à Grunt que nous voulons utiliser ce plug-in.
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');


// 4. Nous disons à Grunt quoi faire lorsque nous tapons "grunt" dans la console.
grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'compass', 'watch']);

};