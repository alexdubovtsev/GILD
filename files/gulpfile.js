// Main module
import gulp from "gulp";
// Import paths
import { path } from "./gulp/config/path.js";
// Import plugins
import  { plugins } from "./gulp/config/plugins.js";

// Passing value to global variable
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    isWebP: !process.argv.includes('--nowebp'),
	isFontsReW: process.argv.includes('--rewrite'),
    path: path,
    gulp: gulp,
    plugins: plugins,
}


// Import tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { jsDev } from "./gulp/tasks/js-dev.js";
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontStyle } from './gulp/tasks/fonts.js';
import { zip } from './gulp/tasks/zip.js';
import { svg_Sprite } from "./gulp/tasks/svgSprite.js";
import { ftp } from './gulp/tasks/ftp.js';
import { gitignore } from "./gulp/tasks/gitignore.js";

// Changes watcher
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html); //gulp.series(html, ftp)
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

// Экспорт задач
export { html }
export { scss }
export { js }
export { jsDev }
export { images }
export { fonts }
export { svg_Sprite }
export { ftp }
export { zip }


// Fonts processing
const fonts = gulp.series(reset, otfToTtf, ttfToWoff, fontStyle);
// Dev tasks
const devTasks = gulp.parallel(fonts, gitignore);
// Main tasks
const mainTasks = gulp.series(fonts, jsDev, js, gulp.parallel(copy, html, scss, images, gitignore));

// Task execution script
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// Script export
export { dev }
export { build }
export { deployZIP }
export { deployFTP }

// Default script execution
gulp.task('default', dev);