const { src, dest, watch, parallel, series } = require("gulp");
const sass = require('gulp-sass');
const sync = require("browser-sync").create();
const fileinclude = require('gulp-file-include');

const views = './src/views/**/*.html'
const css = './docs/assets/css/*.css'

function generateCSS(cb) {
    src(css)
        .pipe(dest('docs/assets/css'))
        .pipe(sync.stream());
    cb();
}


function generateHTML(cb) {
    src('./src/views/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest("docs"));
    cb();
}

function watchFiles(cb) {
    watch(views, generateHTML);
}


function browserSync(cb) {
    sync.init({
        server: {
            baseDir: "./docs"
        }
    });
    watch(views, generateHTML);
    watch("./docs/**.html").on('change', sync.reload);
    watch("./docs/assets/css/*.css").on('change', sync.reload);
}

exports.default = series(generateHTML, browserSync);