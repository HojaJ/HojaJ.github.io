const { src, dest, watch, parallel, series } = require("gulp");

const sass = require('gulp-sass');
const sync = require("browser-sync").create();
const fileinclude = require('gulp-file-include');

const views = './src/views/**/*.html'
const scss = './src/scss/**/*.scss'
const css = './src/css/**/*.css'



function generateSASS(cb) {
    src(scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('docs/assets/sass'))
        .pipe(sync.stream());
    cb();
}
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
    watch(scss, generateSASS);
    watch(css, generateCSS)
}


function browserSync(cb) {
    sync.init({
        server: {
            baseDir: "./docs"
        }
    });
    watch(views, generateHTML);
    watch(scss, generateSASS);
    watch(css, generateCSS)
    watch("./docs/**.html").on('change', sync.reload);
}

exports.sass = generateSASS;
exports.css = generateCSS;
exports.html = generateHTML;
exports.watch = watchFiles;
exports.sync = browserSync;

exports.default = series(generateHTML, browserSync);