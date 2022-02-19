<<<<<<< HEAD
# Change Log

## [1.3.0] 2021-03-24
### Bug fixing
- Changed the way we import images
  - Old way: `require("path/to/imgae")`
  - New way: `require("path/to/imgae").default`
### Major style changes
### Deleted components
### Added components
### Deleted dependencies
- `react-bootstrap-switch` (replaced by the simple Bootstrap Switch: https://reactstrap.github.io/components/form/#Custom-Inputs)
### Added dependencies
- `bootstrap@4.6.0`
- `jquery@3.6.0` (Only to stop warnings from Bootstrap)
### Updated dependencies
```
moment            2.26.0   →   2.29.1
node-sass         4.14.1   →    5.0.0
nouislider        14.5.0   →   14.6.4
react            16.13.1   →   17.0.2
react-datetime    2.16.3   →    3.0.4
react-dom        16.13.1   →   17.0.2
react-scripts      3.4.1   →    4.0.3
reactstrap         8.4.1   →    8.9.0
typescript         3.9.5   →    4.2.3
```
### Warning
_When doing a clean install, you might have some warnings, those come from `node_modules` and do not affect the project in any way._
_The following two error might occur while doing a clean install - They do not affect the product in any way:_
_npm WARN react-datetime@3.0.4 requires a peer of react@^16.5.0 but none is installed. You must install peer dependencies yourself._
_npm WARN @babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining@7.13.12 requires a peer of @babel/core@^7.13.0 but none is installed. You must install peer dependencies yourself._

## [1.2.0] 2020-06-12
### Bug fixing
- https://github.com/creativetimofficial/paper-kit-react/issues/2 (changed the fonts import to `~assets/fonts` and also added assets path inside `jsconfig.json` file)
- Other Paper React products issues solved here as well
  - https://github.com/creativetimofficial/ct-paper-kit-pro-react/issues/2
  - https://github.com/creativetimofficial/paper-dashboard-react/issues/15
  - https://github.com/creativetimofficial/paper-dashboard-react/issues/8
  - https://github.com/creativetimofficial/ct-paper-dashboard-pro-react/issues/8
  - https://github.com/creativetimofficial/ct-paper-dashboard-pro-react/issues/6 - solution to this is to change the usage of the ModalHeader from reactstrap to simple Bootstrap ones:
  So, instead of:
```
<ModalHeader className="justify-content-center" toggle={this.toggleModalDemo}>
    Modal Title
</ModalHeader>
```
  You should use
```
<div className="modal-header justify-content-center">
  <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.toggleModalDemo}>
    <span aria-hidden="true">×</span>
  </button>
  <h5 className="modal-title">Modal Title</h5>
</div>
```
### Major style changes
- `src/assets/scss/paper-kit/_nucleo-outline.scss` (changed the fonts import to `~assets/fonts` and also added assets path inside `jsconfig.json` file)
- `src/assets/scss/paper-kit/_nucleo-icons.scss` (changed the fonts import to `~assets/fonts` and also added assets path inside `jsconfig.json` file)
- `src/assets/scss/react/plugins/_plugin-nouislider.scss` (due to new `noUiSlider` API)
=======
## [1.1.0] 2020-02-14
### Bug fixing
- Changed all 1.0.0 versioning to v1.1.0
- Solved https://github.com/creativetimofficial/argon-design-system-react/issues/2
- Changes to match [Argon Design System](https://www.creative-tim.com/product/argon-design-system?ref=adsr-changelog) by Creative Tim
- -  `src/components/Footers/CardsFooter.js`
- - `src/views/IndexSections/Datepicker.js`
- Solved build issue
### Major style changes
- Changed the whole scss/css files and folders to match those of [Argon Design System](https://www.creative-tim.com/product/argon-design-system?ref=adsr-changelog) by Creative Tim
>>>>>>> 503ea0042df0412edb5a6c18b017dda724b41614
### Deleted components
### Added components
### Deleted dependencies
### Added dependencies
<<<<<<< HEAD
+ gulp@4.0.2 (for Creative Tim copyrights)
+ gulp-append-prepend@1.0.8 (for Creative Tim copyrights)
### Updated dependencies
```
moment             2.24.0   →    2.26.0
node-sass          4.12.0   →    4.14.1
nouislider         13.1.5   →    14.5.0
react              16.8.6   →   16.13.1
react-dom          16.8.6   →   16.13.1
react-router        5.0.1   →     5.2.0
react-router-dom    5.0.1   →     5.2.0
react-scripts       3.0.1   →     3.4.1
reactstrap          8.0.0   →     8.4.1
typescript          3.5.2   →     3.9.5
```
### Warning
_All the following products: Paper Kit React, Paper Dashboard React, Paper Kit PRO React and Paper Dashboard PRO React have been updated together, and thus, we've added to all of them the same version of 1.2.0 - we may have skipped some versions for some of the above products, we've done so, since we want all Paper & React products to share the same versions._
_While in development some of the plugins that were used for this product will throw some warnings - note, this only happens in development, the UI or the functionality of the product is not affected, also, if the issues will persist in React 17, we'll drop usage of those plugins, and replace them with other ones._
_Warnings might appear while doing an npm install - they do not affect the UI or the functionality of the product, and they appear because of NodeJS and not from the product itself._

## [1.0.0] 2019-06-26
### Original Release
- Added Reactstrap as base framework
- Added design from Paper Kit 2 by Creative Tim
=======
+ eslint-plugin-flowtype@3.13.0 (To stop warning: `npm WARN eslint-config-react-app@5.2.0 requires a peer of eslint-plugin-flowtype@3.x but none is installed. You must install peer dependencies yourself.`)
+ bootstrap@4.3.1 (To match the new files and folders of scss)
+ jquery@3.4.1 (To stop warning: `npm WARN bootstrap@4.4.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.`)
### Updated dependencies
```
headroom.js           0.9.4   →    0.11.0
node-sass            4.12.0   →    4.13.1
nouislider           13.1.5   →    14.1.1
react                16.8.6   →   16.12.0
react-dom            16.8.6   →   16.12.0
react-router          5.0.0   →     5.1.2
react-router-dom      5.0.0   →     5.1.2
react-scripts         3.0.0   →     3.3.1
reactstrap            8.0.0   →     8.4.1
@types/googlemaps   3.30.19   →    3.39.2
@types/react        16.8.16   →   16.9.19
typescript            3.4.5   →     3.7.5
```
### Warning
**The following warnings could not be solved, due to some of our dependencies, however, they do not affect the functionality or the UI of the product:**
```
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated popper.js@1.16.1: Popper changed home, find its new releases at @popperjs/core
npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
```
**The following warning could not be solved due to the usage of react-datetime (Note: if the warning will persist after React changes version to 17, we'll drop the support for react-datetime and replace them with other react library for dates input):**
```
Warning: componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.

Please update the following components: DateTime
```

## [1.0.0] 2019-05-13
### Original Release
- Added Reactstrap as base framework
- Added design from Argon Design System by Creative Tim
>>>>>>> 503ea0042df0412edb5a6c18b017dda724b41614
