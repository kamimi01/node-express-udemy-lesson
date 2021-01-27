const gulp = require("gulp")
const concat = require("gulp-concat")
const uglify = require("gulp-uglify")
const rename = require("gulp-rename")

gulp.task("minify", function (done) {
  gulp
    .src(["sample1.js", "sample2.js"], { cwd: "./src" })
    .pipe(concat("bundle.js"))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./dist"))
  done()
})

gulp.task("default", gulp.series(["minify"]), function (done) {
  done()
})
