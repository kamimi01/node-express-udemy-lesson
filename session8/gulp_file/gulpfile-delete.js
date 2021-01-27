const gulp = require("gulp")
const del = require("del")

gulp.task("delete", function (done) {
  return del("./dist/*")
})

gulp.task("default", gulp.series(["delete"]), function (done) {
  done()
})
