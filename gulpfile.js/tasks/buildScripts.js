const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify_es = require("gulp-uglify-es").default;

const paths = require("../paths.js");

const uglifyOptions = {
  compress: false,
  mangle: false
};

module.exports = function buildScripts() {
  return gulp.src(paths.scripts.srcFiles)
    .pipe(uglify_es(uglifyOptions))
    .pipe(babel())
    .pipe(gulp.dest(paths.scripts.distFolder));
};
