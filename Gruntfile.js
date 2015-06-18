module.exports = function(grunt){
    'use strict';

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var config = {
        www:'www',
        dest:'dest'
    };

    grunt.initConfig({
        config: config,
        copy: {
            templates: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.www %>/',
                        src: ['script/**/*.html', 'tabs.html'],
                        dest: '<%= config.dest %>/'
                    }
                ]
            },
            images: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.www %>/',
                        src: 'img/**/*',
                        dest: '<%= config.dest %>/',
                        flatten: false
                    }
                ]
            },
            /*
             lib:{
             files:[
             {
             expand:true,
             cwd:'<%= config.www %>/',
             src:['lib/ionic/js/ionic.bundle.min.js'],
             dest:'<%= config.dest %>/script',
             flatten:true
             }
             ]
             },
             */
            fonts: {
                files: [
                    {
                        expand:true,
                        cwd:'<%= config.www %>/',
                        src:['lib/ionic/fonts/**/*'],
                        dest:'<%= config.dest %>/fonts/',
                        flatten:true
                    }
                ]
            },
            cordova:{
                files:[
                    {
                        expand:true,
                        cwd:'<%= config.www %>/',
                        src:['cordova.js','cordova_plugins.js','CubeModule.json','plugins/**/*'],
                        dest:'<%= config.dest %>/',
                        flatten:false
                    }
                ]
            }

        },
        clean:{
            dest:{
                src:[
                    '<%= config.dest%>/css/**/*',
                    '<%= config.dest%>/script/**/*',
                    '<%= config.dest%>/img/**/*',
                    '<%= config.dest%>/fonts/**/*',
                    '<%= config.dest%>/plugins/**/*',
                    '<%= config.dest%>/cordova.js',
                    '<%= config.dest%>/cordova_plugins.js',
                    '<%= config.dest%>/CubeModule.json'
                ]
            },
            temp: {
                src: ['<%= config.dest%>/script/temp.js', '<%= config.dest%>/script/temp.min.js']
            }
        },
        jshint: {
            options: {
                curly: true,  //curly: 大括号包裹
                eqeqeq: true, //eqeqeq: 对于简单类型，使用===和!==，而不是==和!=
                newcap: true, //newcap: 对于首字母大写的函数（声明的类），强制使用new
                noarg: true,  //noarg: 禁用arguments.caller和arguments.callee
                sub: true,    //sub: 对于属性使用aaa.bbb而不是aaa['bbb']
                undef: false, //undef: 查找所有未定义变量
                unused: false,//undef: 查找所有定义了但是没被用的变量
                boss: true,   //boss: 查找类似与if(a = 0)这样的代码
                node: true    //node: 指定运行环境为node.js
            },
            all:[
                '<%= config.www %>/script/**/*.js'
            ]
        },
        concat: {
            js: {
                src:[
                    '<%= config.www %>/script/config.js',
                    '<%= config.www %>/script/phone.js',
                    '<%= config.www %>/script/app.js',
                    '<%= config.www %>/script/MainCtrl.js',
                    '<%= config.www %>/script/**/*.js'
                ],
                dest: '<%= config.dest %>/script/temp.js'
            },
            dest: {
                src: [
                    '<%= config.www %>/lib/ionic/js/ionic.bundle.min.js',
                    '<%= config.www %>/lib/storage/angular-local-storage.min.js',
                    '<%= config.dest %>/script/temp.min.js'
                ],
                dest: '<%= config.dest %>/script/dest.min.js'
            }
        },
        uglify: {
            build: {
                src: '<%= config.dest %>/script/temp.js',
                dest: '<%= config.dest %>/script/temp.min.js'
            }
        },
        cssmin: {
            combine: {
                files: {
                    '<%= config.dest %>/css/dest.min.css': ['<%= config.www %>/lib/ionic/css/ionic.min.css', '<%= config.www %>/css/**/*.css']
                }
            }
        }
    });

    grunt.registerTask('default', ['clean', 'jshint', 'copy', 'concat:js', 'uglify', 'concat:dest', 'cssmin', 'clean:temp']);
};