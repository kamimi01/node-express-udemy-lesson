const gulp = require("gulp")
const concat = require("gulp-concat")

gulp.task("concat", function (done) {
  gulp
    .src(["sample1.txt", "sample2.txt"], { cwd: "./src" })
    .pipe(concat("bundle.txt"))
    .pipe(gulp.dest("./dist"))
  done()
})

gulp.task("default", gulp.series(["concat"]), function (done) {
  done()
})
