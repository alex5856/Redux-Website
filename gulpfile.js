'use strict';

var gulp             = require('gulp'),
    del              = require('del'), // 刪除檔案
    gutil            = require("gulp-util"),
    concat           = require('gulp-concat'), // 合併檔案
    uglify           = require('gulp-uglify'), // 混淆壓縮
    minify           = require('gulp-minify'), // js 壓縮
    jsonminify       = require('gulp-jsonminify'), // json 壓縮
    minifycss        = require('gulp-minify-css'), // css 壓縮
    htmlmin          = require('gulp-htmlmin'), // html 壓縮
    cache            = require('gulp-cache'),  // 快取
    rename           = require('gulp-rename'), // 重新命名
    imagemin         = require('gulp-imagemin'), // 圖檔壓縮
    connect          = require('gulp-connect'), // web server
    browserify       = require('browserify'),
    source           = require('vinyl-source-stream'),
    buffer           = require('vinyl-buffer'),
    babelify         = require('babelify');

gutil.log('Environment', gutil.colors.cyan(gulp.env.production ? 'Production' : 'Development'));

// 來源資料夾
var ASSETS_DIR = 'src/';

// 輸出資料夾
var DIST_DIR = 'build/';

// src 資料夾
var DIR;

// 輸出資料夾
var DEST_DIR;

// web server
gulp.task('server', function(){
    connect.server({
      livereload: true
    });
});

var paths = {
  html: {dir: ASSETS_DIR, distDir: DIST_DIR},
  js: getPaths('js'),
  css : getPaths('css'),
  images: getPaths('images')
};

//HTML
gulp.task('html', function () {
  DIR = paths.html.dir;
  DEST_DIR = paths.html.distDir;

  /**
  removeComments // 清除註解
  removeCommentsFromCDATA:true,
  removeEmptyAttributes // 刪除空白的屬性 <input id="" /> ==> <input />
  removeScriptTypeAttributes // 刪除 <script> 內屬性 type="text/javascript"
  removeStyleLinkTypeAttributes// 刪除 <style> 與 <link> 內的屬性 type="text/css"
  collapseWhitespace // 壓縮 html
  **/
  var html_options = {};
  html_options = {
      removeComments: true,
      removeCommentsFromCDATA: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      collapseWhitespace: true
  };

  return gulp.src(DIR +'*.html')
    .pipe(htmlmin(html_options))
    .pipe(gulp.dest(DEST_DIR))
    .pipe(connect.reload());
});


// JS
gulp.task('js', function() {
    DIR = paths.js.dir;
    DEST_DIR = paths.js.distDir;

    // 預先刪除輸出資料夾js目錄內檔案
    var delFile = del([DEST_DIR + '/*.js']);

    browserify({
      entries: [DIR + 'index.js'],
      transform: [babelify],
    })
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    //.pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(DEST_DIR))
    .pipe(connect.reload())
    .on('error', handleError);

});

// CSS
gulp.task('css', function() {
    DIR = paths.css.dir;
    DEST_DIR = paths.css.distDir;

    var delFile = del([DEST_DIR + '/*']);

    var contact;
    contact = gulp.src([DIR + '*.css'])
         .pipe(concat('all.css'))
         .pipe(minifycss())
         .pipe(rename({ suffix: '.min' }))
         .pipe(gulp.dest(DEST_DIR))
         .pipe(connect.reload());
});

// Images
gulp.task('images', function() {

    DIR = paths.images.dir;
    DEST_DIR = paths.images.distDir;

    var delFile = del([DEST_DIR + '/*']);

    var images = gulp.src([DIR + '**/*'])
      .pipe(imagemin({ optimizationLevel: 3,
                       progressive: true,
                       interlaced: true }))
      .pipe(gulp.dest(DEST_DIR))
      .pipe(connect.reload());
});

// 設定 NODE_ENV 為 production
gulp.task('apply-prod-environment', function() {
    process.env.NODE_ENV = 'production';
    //process.env.NODE_ENV = 'development';
});

var Tasks =[];
Tasks = ['server','css','js','images','html',
         'apply-prod-environment','watch'];

// Default task
gulp.task('default', Tasks, function(){

});

// Watch
gulp.task('watch', function() {
  gulp.watch(paths.html.dir + '*.html', ['html']);
  gulp.watch(paths.css.dir + '**/*.css', ['css']);
  gulp.watch(paths.js.dir + '**/*.js', ['js']);
  gulp.watch(paths.images.dir + '**/*', ['images']);
});


// get path
function getPaths (n) {
  let p = {};
  p.dir = ASSETS_DIR + n + '/';
  p.distDir = DIST_DIR + n ;
  return p
}

// handleError
function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}