const gulp = require("gulp")
const rename = require("gulp-rename")

gulp.task("rename", function (done) {
  gulp
    .src("./src/sample1.txt")
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./dist"))
  done()
})

gulp.task("default", gulp.series(["rename"]), function (done) {
  done()
})
