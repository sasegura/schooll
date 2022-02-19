const gulp = require("gulp");
const gap = require("gulp-append-prepend");

<<<<<<< HEAD
gulp.task("licenses", async function () {
  // this is to add Creative Tim licenses in the production mode for the minified js
  gulp
=======
gulp.task("licenses", async function() {
  // this is to add Creative Tim licenses in the production mode for the minified js
  await gulp
>>>>>>> 503ea0042df0412edb5a6c18b017dda724b41614
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
<<<<<<< HEAD
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)
=======
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)
>>>>>>> 503ea0042df0412edb5a6c18b017dda724b41614

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production mode for the minified html
<<<<<<< HEAD
  gulp
=======
  await gulp
>>>>>>> 503ea0042df0412edb5a6c18b017dda724b41614
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
<<<<<<< HEAD
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)
=======
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)
>>>>>>> 503ea0042df0412edb5a6c18b017dda724b41614

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production mode for the minified css
<<<<<<< HEAD
  gulp
=======
  await gulp
>>>>>>> 503ea0042df0412edb5a6c18b017dda724b41614
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
<<<<<<< HEAD
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)
=======
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)
>>>>>>> 503ea0042df0412edb5a6c18b017dda724b41614

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
