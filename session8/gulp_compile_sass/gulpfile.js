const gulp = require("gulp")
const concat = require("gulp-concat")
const sass = require("gulp-sass")
const rename = require("gulp-rename")

gulp.task("sass", function (done) {
  gulp
    .src(["sample1.scss", "sample2.scss"], { cwd: "./src" })
    .pipe(concat("bundle.scss"))
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./dist"))
  done()
})

gulp.task("default", gulp.series(["sass"]), function (done) {
  done()
})
