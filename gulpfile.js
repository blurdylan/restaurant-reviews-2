var gulp = require("gulp");
let cleanCSS = require("gulp-clean-css");
var concat = require("gulp-concat");
const minify = require("gulp-babel-minify");
var uglify = require("gulp-uglify");

gulp.task("pack-css", () =>
  gulp.
    src("src/css/*.css").
    pipe(concat("bundlecss.css")).
    pipe(cleanCSS()).
    pipe(gulp.dest("src/css/dist"))
);

gulp.task("pack-js", () =>
  gulp.
    src([
"src/js/main.js",
"src/js/dbhelper.js"
]).
    pipe(concat("bundle.js")).
    pipe(minify({mangle: {keepClassName: true}})).
    pipe(gulp.dest("src/js/dist"))
);
