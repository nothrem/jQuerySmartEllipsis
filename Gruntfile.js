module.exports = function (grunt) {
    grunt.initConfig({
        //minify JS files
        uglify: {
            js: {
                options: {
                    banner: '/* Minified by UglifyJS (http://lisperator.net/uglifyjs/) using grunt-contrib-uglify */',

                    sourceMap: true, //create sourcemap for debugging
                    compress:  {      //remove redundant spaces, etc.
                        drop_console:  true,  //remove all console.* calls to reduce size
                        drop_debugger: true, //remove all debugger calls to reduce size
                        dead_code:     true,     //remove unreachable code (e.g. code after return or inside if(false){...})

                        //note: following properties are mostly TRUE by default
                        // and are listed just for the comment and option to disable them if there is a problem
                        properties:  true,    //rewrite array properties (a['b']) to objects (a.b)
                        comparisons: true,  //optimize conditions (e.g. 'a >= b' to 'a<b')
                        booleans:    true,      //remove operator !! where not needed
                        if_return:   true,     //remove 'else' part of IF after return or continue
                        join_vars:   true,     //remove duplicate 'var' from consecutive variable definitions
                        reduce_vars: true,   //replace constant variables with actual value (magic numbers)

                        passes: 3            //repeat the compression of already optimized code to remove glitches created by consecutive rules (e.g. remove redundant parenthesis)
                    },
                    mangle:    {        //rename defined variables to make them shorter
                        properties: false, //do NOT mangle object properties (because they may be used in other files)
                        reserved:   [  //list of variables that must not be renamed (because they are used elsewhere)
                        ]
                    },
                    beautify:  {
                        beautify:     false,    //do NOT beautify, but apply the other options to the minified code
                        max_line_len: 160   //limit line length of the minified file (makes it better comparable in versioning)

                    },
                    output:    {
                        comments:    'some', //keep comments starting with @preserve or @license); note that such comments inside dead code are still removed!
                        quote_style: 0    //optimize quotes to prevent escaping where possible
                    },
                    ie8:       true,       //preserve compatibility with old IE (makes files slightly larger)
                    report:    'gzip'   //calculate how big the file will be after gzipping; works only with '--verbose' parameter
                },
                files:   [
                    {
                        expand: true,
                        src:    [
                            '*.js',          //compile all JS files...
                            '!*.min.js',     //...except for already minified ones
                            '!Gruntfile.js'  //also ignore this configuration
                        ],
                        ext:    '.min.js',
                        extDot: 'last'
                    }
                ]
            }
        },

        //watch for file changes and do required tasks
        watch: {
            less: {
                files: ['**/*.js'],
                tasks: ['uglify']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('compile', [
        'uglify'
    ]);

};
