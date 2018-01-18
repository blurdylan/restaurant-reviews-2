var gulp = require("gulp");
let cleanCSS = require("gulp-clean-css");

gulp.task("minify-css", () =>
  gulp.
    src("src/css/*.css").
    pipe(cleanCSS({compatibility: "ie8"})).
    pipe(gulp.dest("src/css/dist"))
);
