const gulp = require("gulp")

gulp.task("copy", function (done) {
  gulp.src("./src/sample1.txt").pipe(gulp.dest("./dist"))
  done()
})

gulp.task("default", gulp.series(["copy"]), function (done) {
  done()
})
