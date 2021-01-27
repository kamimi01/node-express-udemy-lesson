// gulpのバージョンが4.x系なため、記載方法が3.x系とは異なる
const gulp = require("gulp")

gulp.task("a", function (done) {
  console.log("a")
  done()
})

gulp.task("b", function (done) {
  console.log("b")
  done()
})

gulp.task("default", gulp.series(["a", "b"]), function (done) {
  done()
})
