module.exports=function(grunt){
  grunt.initConfig({
    less:{
      developerCSS:{
        options:{},
        files:{
          "css/style.css":"./style.less"
        }
      }
    }
  });

  // 加载任务
  grunt.loadNpmTasks("grunt-contrib-less");

  // 祖册任务
  grunt.registerTask("runLess",["less:developerCSS"]);

}
