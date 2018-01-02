var gulp = require("gulp")
var hebing = require('gulp-concat')
var cmm = require('gulp-rename')
var ysJs = require('gulp-uglify')
var less = require('gulp-less');
var webserver = require("gulp-webserver")

gulp.task("copyFile", function() { //拷贝
    gulp.src(['./*.docx'])
        .pipe(gulp.dest('./text/'))

})

gulp.task("hb", function() { //合并

    gulp.src(['./*.css'])
        .pipe(hebing('style.css'))
        .pipe(gulp.dest('./css/'))

})


gulp.task("by", function() { //编译
    gulp.src(['./*.less'])
        .pipe(less())
        .pipe(gulp.dest('./css/'))

})

gulp.task("ysjs", function() { //js
    gulp.src(['./*.js'])
        .pipe(ysJs())
        .pipe(cmm("data_format.min.js")) //重命名
        .pipe(gulp.dest('./js/'))

})

//启动sercer服务器
gulp.task("server", function() {
    gulp.src('.');
    pipe(webserver({
        port: 1207,
        middleware: function(req, res) {
            res.setHeader('Access-Control-Allow-Origin', '*')


        }
    }))
})
gulp.task('default', ["server"])