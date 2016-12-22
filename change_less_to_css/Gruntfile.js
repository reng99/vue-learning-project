module.exports = function(grunt){
  grunt.initConfig({
    pkg:grunt.file.readJSON("package.json"),

      less: {
          developerCSS: {
              options: {
                  compress: false,
                  yuicompress: false
              },
              files: {
                  'dist/style.css': './style.less'
              }
          }
      },

      watch: {
          less: {
              files: ['./style.less'],
              tasks: ['buildMyCSS']
          }
      }
  });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("buildMyCSS",["less:developerCSS"]);

    // 测试
    // grunt.registerTask("reng",function(){console.log("this is the content")});
}
