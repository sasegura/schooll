<<<<<<< HEAD
# [Paper Kit React - Free Bootstrap 4, React, React Hooks and Reactstrap UI Kit](https://demos.creative-tim.com/paper-kit-react/#/index?ref=pkr-github-readme) ![version](https://img.shields.io/badge/version-1.3.0-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/material-kit.svg?maxAge=2592000)](https://github.com/creativetimofficial/paper-kit-react/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/paper-kit-react.svg?maxAge=2592000)](https://github.com/creativetimofficial/paper-kit-react/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim-general/Lobby) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)

![Paper Kit React](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-react/opt_pk_react_thumbnail.jpg)

Paper Kit React is a free Bootstrap 4, React, React Hooks and Reactstrap UI Kit with pale colors, beautiful typography and thoughtful drawings. We've created it having paper and drawings in mind.

Any elements that is vital to code a web project is already here, fully coded. All components are fully responsive and look great on every screen size. Transitions, shadows, colors, they all resemble the flow you would have using pieces of paper.

We have created the UI Kit kit having pastel colors and paper in mind. It feels light, fresh and easy to go through. It features beautiful typography, font icons and thoughtful layouts.


### React Hooks support

Paper Kit React is built on top of Bootstrap 4 using React and Reactstrap, so it fully supports React Hooks.


### Bootstrap 4 support

Paper Kit React is built on top of Bootstrap 4 using React and Reactstrap, so it fully supports them. Most of the elements from the framework are re-designed to resemble sheets of paper and color pastels. If the are elements that we have not touched, they will gracefully fall back to the Bootstrap 4 default.


### Examples

Paper Kit React contains some pages already designed and implemented. Here is the list with the pages available. We are also working on more example pages, that you will be able to access no matter the version you download.


* [Landing Page](https://demos.creative-tim.com/paper-kit-react/#/landing-page?ref=pkr-github-readme)
* [Register](https://demos.creative-tim.com/paper-kit-react/#/register-page?ref=pkr-github-readme)
* [Profile Page](https://demos.creative-tim.com/paper-kit-react/#/profile-page?ref=pkr-github-readme)

Tutorial and components

Once you download the archive, you will be able find a tutorial page inside it explaining how to start using it. You can also check the [documentation online](https://demos.creative-tim.com/paper-kit-react/#/documentation/introduction?ref=pkr-github-readme).


## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)

## Versions

| HTML | Angular | React |
| --- | --- | --- |
| [![Paper Kit 2 HTML](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-2-html/opt_pk2_thumbnail.jpg)](https://www.creative-tim.com/product/paper-kit-2?ref=pkr-github-readme)  | [![Paper Kit 2 Angular](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-2-angular/opt_pk2_angular_thumbnail.jpg)](https://www.creative-tim.com/product/paper-kit-2-angular?ref=pkr-github-readme)  | [![Paper Kit  React](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-react/opt_pk_react_thumbnail.jpg)](https://www.creative-tim.com/product/paper-kit-react?ref=pkr-github-readme)  

| Register Page | Landing Page | Profile Page  |
| --- | --- | ---  |
| [![Register Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-react/register.png)](https://demos.creative-tim.com/paper-kit-react/#/register-page?ref=pkr-github-readme)  | [![Landing Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-react/landing.png)](https://demos.creative-tim.com/paper-kit-react/#/landing-page?ref=pkr-github-readme)  | [![Profile Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-react/profile.png)](https://demos.creative-tim.com/paper-kit-react/#/profile-page?ref=pkr-github-readme)  

[View More](https://demos.creative-tim.com/paper-kit-react/#/index?ref=pkr-github-readme)

## Quick start

1.  Download the project's zip
2.  Make sure you have node.js (<https://nodejs.org/en/>) installed
3.  Type `npm install` in terminal/console in the source folder where `package.json` is located
4.  You will find all the branding colors inside `src/assets/scss/paper-kit/_variables.scss`. You can change them with a `HEX` value or with other predefined variables.
5.  Run in terminal `npm start`.

## Documentation
The documentation for the Paper Kit React is hosted at our [website](https://demos.creative-tim.com/paper-kit-react/#/documentation/introduction?ref=pkr-github-readme).


## File Structure

Within the download you'll find the following directories and files:
```
paper-kit-react
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── jsconfig.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo.svg
    ├── assets
    │   ├── css
    │   │   ├── bootstrap.min.css
    │   │   └── bootstrap.min.css.map
    │   ├── demo
    │   │   └── demo.css
    │   ├── fonts
    │   ├── img
    │   │   ├── examples
    │   │   ├── faces
    │   │   ├── flags
    │   └── scss
    │       ├── paper-kit
    │       │   ├── cards
    │       │   ├── mixins
    │       │   └── plugins
    │       ├── react
    │       │   ├── paper-kit
    │       │   ├── plugins
    │       │   └── react-differences.scss
    │       └── paper-kit.scss
    ├── components
    │   ├── Footers
    │   │   └── DemoFooter.js
    │   ├── Headers
    │   │   ├── IndexHeader.js
    │   │   ├── LandingPageHeader.js
    │   │   └── ProfilePageHeader.js
    │   └── Navbars
    │       ├── ExamplesNavbar.js
    │       └── IndexNavbar.js
    └── views
        ├── Index.js
        ├── NucleoIcons.js
        ├── examples
        │   ├── LandingPage.js
        │   ├── ProfilePage.js
        │   └── RegisterPage.js
        └── index-sections
            ├── SectionButtons.js
            ├── SectionCarousel.js
            ├── SectionDark.js
            ├── SectionDownload.js
            ├── SectionExamples.js
            ├── SectionJavaScript.js
            ├── SectionLogin.js
            ├── SectionNavbars.js
            ├── SectionNavigation.js
            ├── SectionNotifications.js
            ├── SectionNucleoIcons.js
            ├── SectionProgress.js
            └── SectionTypography.js
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">


## Resources
- Demo: <http://demos.creative-tim.com/paper-kit-react/#/index?ref=pkr-github-readme>
- Download Page: <https://www.creative-tim.com/product/paper-kit-react?ref=pkr-github-readme>
- Documentation: <https://demos.creative-tim.com/paper-kit-react/#/documentation/introduction?ref=pkr-github-readme>
- License Agreement: <https://www.creative-tim.com/license?ref=pkr-github-readme>
- Support: <https://www.creative-tim.com/contact-us?ref=pkr-github-readme>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/paper-kit-react/issues)


**Dashboards:**

| HTML | React | Vue  | Angular |
| --- | --- | ---  | ---  |
| [![Paper Dashboard  HTML](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-dashboard-2-html/opt_pd2_thumbnail.jpg)](https://www.creative-tim.com/product/paper-dashboard-2?ref=pkr-github-readme) | [![Paper Dashboard  React](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-dashboard-react/opt_pd_react_thumbnail.jpg)](https://www.creative-tim.com/product/paper-dashboard-pro-react?ref=pkr-github-readme) | [![Vue Paper Dashboard](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-paper-dashboard/opt_pd_vue_thumbnail.jpg)](https://www.creative-tim.com/product/vue-paper-dashboard?ref=pkr-github-readme)  | [![ Paper Dashboard Angular](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-2-angular/opt_pk2_angular_thumbnail.jpg)](https://www.creative-tim.com/product/paper-dashboard-angular?ref=pkr-github-readme)

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Paper Kit 2. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Paper Kit 2. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/?ref=pkr-github-readme).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

- Copyright 2021 Creative Tim (https://www.creative-tim.com/?ref=pkr-github-readme)

[CHANGELOG]: ./CHANGELOG.md
[LICENSE]: ./LICENSE.md

## Useful Links

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)
- [Affiliate Program](https://www.creative-tim.com/affiliates/new?ref=pkr-github-readme) (earn money)
- [Blog Creative Tim](http://blog.creative-tim.com/?ref=pkr-github-readme)
- [Free Products](https://www.creative-tim.com/bootstrap-themes/free?ref=pkr-github-readme) from Creative Tim
- [Premium Products](https://www.creative-tim.com/bootstrap-themes/premium?ref=pkr-github-readme) from Creative Tim
- [React Products](https://www.creative-tim.com/bootstrap-themes/react-themes?ref=pkr-github-readme) from Creative Tim
- [Angular Products](https://www.creative-tim.com/bootstrap-themes/angular-themes?ref=pkr-github-readme) from Creative Tim
- [VueJS Products](https://www.creative-tim.com/bootstrap-themes/vuejs-themes?ref=pkr-github-readme) from Creative Tim
- [More products](https://www.creative-tim.com/bootstrap-themes?ref=pkr-github-readme) from Creative Tim
- Check our Bundles [here](https://www.creative-tim.com/bundles?ref=pkr-github-readme)

### Social Media

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Instagram: <https://www.instagram.com/CreativeTimOfficial>
=======
# [Argon Design System React](https://demos.creative-tim.com/argon-design-system-react?ref=adsr-github-readme) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/home?status=Argon%20Design%20System%20is%20a%20Free%20Bootstrap%204,%20React%20and%20Reactstrap%20Dashboard%20made%20using%20create-react-app%20%E2%9D%A4%EF%B8%8F%0Ahttps%3A//demos.creative-tim.com/argon-design-system-react%20%23react%20%23reactstrap%20%23createreactapp%20%23argon%20%23argondesign%20%23reactkit%20%23argonreact%20%23reactdesign%20%23bootstrap%20%23design%20%23uikit%20%23freebie%20%20via%20%40CreativeTim)


 ![version](https://img.shields.io/badge/version-1.1.0-blue.svg)  ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/argon-design-system-react.svg?maxAge=2592000)](https://github.com/creativetimofficial/argon-design-system-react/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/argon-design-system-react.svg?maxAge=2592000)](https://github.com/creativetimofficial/argon-design-system-react/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim-general/Lobby) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)


![Product Gif](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-design-system-react/argon-design-system-react.gif)

Start your development with a Design System for [Bootstrap 4](https://getbootstrap.com/?ref=creativetim), [React](https://reactjs.org/?ref=creativetim) and [Reactstrap](https://reactstrap.github.io/?ref=creativetim). It is open source, free and it features many components that can help you create amazing websites.

**Fully Coded Components**

Argon Design System React is built with over 100 individual components, giving you the freedom of choosing and combining. All components can take variations in color, that you can easily modify using SASS files.

You will save a lot of time going from prototyping to full-functional code, because all elements are implemented. This Design System is coming with prebuilt examples, so the development process is seamless, switching from our pages to the real website is very easy to be done.

Every element has multiple states for colors, styles, hover, focus, that you can easily access and use.

View [all components here](https://demos.creative-tim.com/argon-design-system-react/#/?ref=adsr-github-readme).

**Complex Documentation**

Each element is well presented in a very complex documentation. You can read more about the [idea behind this design system here](https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-github-readme). You can [check the components here](https://demos.creative-tim.com/argon-design-system-react/#/documentation/alert?ref=adsr-github-readme) and [the foundation here](https://demos.creative-tim.com/argon-design-system-react/#/documentation/colors?ref=adsr-github-readme).

**Example Pages**

If you want to get inspiration or just show something directly to your clients, you can jump start your development with our pre-built example pages. You will be able to quickly set up the basic structure for your web project.

View [example pages here](https://demos.creative-tim.com/argon-design-system-react/#/landing-page?ref=adsr-github-readme).


## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)


## Versions

[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/html-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/argon-design-system)[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/angular-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/argon-design-system-angular)[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/vue-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/vue-argon-design-system)[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/react-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/argon-design-system-react)[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/sketch-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/argon-design-system-react)[<img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/photoshop-logo.jpg" width="60" height="60" />](https://www.creative-tim.com/product/argon-design-system-react)



| HTML | Angular | Vue  | React  |
| --- | --- | ---  |---  |
| [![Argon Design System HTML](https://github.com/creativetimofficial/public-assets/blob/master/argon-design-system/argon-design-system.jpg?raw=true)](https://www.creative-tim.com/product/argon-design-system?ref=adsr-github-readme)  | [![Argon Design System Angular](https://github.com/creativetimofficial/public-assets/blob/master/argon-design-system-angular/argon-design-system-angular.jpg?raw=true)](https://www.creative-tim.com/product/argon-design-system-angular?ref=adsr-github-readme)  | [![Vue Argon Design System](https://github.com/creativetimofficial/public-assets/blob/master/vue-argon-design-system/vue-argon-design-system.jpg?raw=true)](https://www.creative-tim.com/product/vue-argon-design-system?ref=adsr-github-readme)  | [![Argon Design System React](https://github.com/creativetimofficial/public-assets/blob/master/argon-design-system-react/argon-design-system-react.jpg?raw=true)](https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-github-readme)


## Demo

| Buttons | Inputs | Navbars  |
| --- | --- | ---  |
| [![Buttons](https://github.com/creativetimofficial/public-assets/blob/master/argon-design-system-react/buttons.png?raw=true)](https://demos.creative-tim.com/argon-design-system-react/#/)  | [![Inputs](https://github.com/creativetimofficial/public-assets/blob/master/argon-design-system-react/inputs.png?raw=true)](https://demos.creative-tim.com/argon-design-system-react/#/)  | [![Navbar](https://github.com/creativetimofficial/public-assets/blob/master/argon-design-system-react/navbars.png?raw=true)](https://demos.creative-tim.com/argon-design-system-react/#/)  

| Login Page | Landing Page | Profile Page  | Register Page  |
| --- | --- | ---  | ---  |
| [![Login Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-design-system-react/login.png)](https://demos.creative-tim.com/argon-design-system-react/#/login-page)  | [![Landing Page](https://github.com/creativetimofficial/public-assets/blob/master/argon-design-system-react/landing.png?raw=true)](https://demos.creative-tim.com/argon-design-system-react/#/landing-page)  | [![Profile Page](https://github.com/creativetimofficial/public-assets/blob/master/argon-design-system-react/profile.png?raw=true)](https://demos.creative-tim.com/argon-design-system-react/#/profile-page)  | [![Register Page](https://github.com/creativetimofficial/public-assets/blob/master/argon-design-system-react/register.png?raw=true)](https://demos.creative-tim.com/argon-design-system-react/#/register-page)  


[View More](https://demos.creative-tim.com/argon-design-system-react?ref=adsr-github-readme)


## Quick start

- `npm i argon-design-system-react`
- [Download from Github](https://github.com/creativetimofficial/argon-design-system-react/archive/master.zip).
- [Download from Creative Tim](https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-github-readme).
- Install with [Bower](https://bower.io/?ref=creativetim): ```bower install argon-design-system-react```.
- Clone the repo: `git clone https://github.com/creativetimofficial/argon-design-system-react.git`.


## Documentation
The documentation for the Argon Design System React is hosted at our [website](https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview).


## File Structure
Within the download you'll find the following directories and files:

```
Argon Design System React
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE
├── README.md
├── jsconfig.json
├── package.json
├── Documentation
│   └── documentation.html
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    │   ├── css
    │   │   ├── argon-design-system-react.css
    │   │   ├── argon-design-system-react.css.map
    │   │   └── argon-design-system-react.min.css
    │   ├── img
    │   │   ├── brand
    │   │   ├── icons
    │   │   │   └── common
    │   │   ├── ill
    │   │   └── theme
    │   ├── scss
    │   │   ├── argon-design-system-react.scss
    │   │   ├── bootstrap
    │   │   │   ├── mixins
    │   │   │   └── utilities
    │   │   ├── custom
    │   │   │   ├── mixins
    │   │   │   ├── utilities
    │   │   │   └── vendor
    │   │   └── react
    │   │       ├── custom
    │   │       │   └── vendor
    │   │       └── react-differences.scss
    │   └── vendor
    │       ├── font-awesome
    │       │   ├── css
    │       │   └── fonts
    │       └── nucleo
    │           ├── css
    │           └── fonts
    ├── components
    │   ├── Footers
    │   │   ├── CardsFooter.js
    │   │   └── SimpleFooter.js
    │   └── Navbars
    │       └── DemoNavbar.js
    ├── index.js
    └── views
        ├── Index.js
        ├── IndexSections
        │   ├── Alerts.js
        │   ├── Buttons.js
        │   ├── Carousel.js
        │   ├── CustomControls.js
        │   ├── Datepicker.js
        │   ├── Download.js
        │   ├── Hero.js
        │   ├── Icons.js
        │   ├── Inputs.js
        │   ├── Labels.js
        │   ├── Login.js
        │   ├── Menus.js
        │   ├── Modals.js
        │   ├── Navbars.js
        │   ├── Pagination.js
        │   ├── Pills.js
        │   ├── Progress.js
        │   ├── Tabs.js
        │   ├── TooltipPopover.js
        │   └── Typography.js
        └── examples
            ├── Landing.js
            ├── Login.js
            ├── Profile.js
            └── Register.js
```


## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">



## Resources
- Demo: <https://demos.creative-tim.com/argon-design-system-react/#/?ref=adsr-github-readme>
- Download Page: <https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-github-readme>
- Documentation: <https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-github-readme>
- License Agreement: <https://www.creative-tim.com/license?ref=adsr-github-readme>
- Support: <https://www.creative-tim.com/contact-us?ref=adsr-github-readme>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/argon-design-system-react/issues?ref=creativetim)
- **Dashboard:**

| HTML | Angular | Vue | React | Laravel | NodeJS |
| --- | --- | --- | --- | --- | --- |
| [![Argon Dashboard  HTML](https://github.com/creativetimofficial/public-assets/blob/master/argon-dashboard/argon-dashboard.jpg?raw=true)](https://www.creative-tim.com/product/argon-dashboard?ref=adsr-github-readme) | [![Argon Dashboard Angular](https://github.com/creativetimofficial/public-assets/blob/master/argon-dashboard-angular/argon-dashboard-angular.jpg?raw=true)](https://www.creative-tim.com/product/argon-dashboard-angular?ref=adsr-github-readme) | [![Vue Argon Dashboard](https://github.com/creativetimofficial/public-assets/blob/master/vue-argon-dashboard/vue-argon-dashboard.jpg?raw=true)](https://www.creative-tim.com/product/vue-argon-dashboard) | [![Argon Dashboard React](https://github.com/creativetimofficial/public-assets/blob/master/argon-dashboard-react/argon-dashboard-react.jpg?raw=true)](https://www.creative-tim.com/product/argon-dashboard-react?ref=adsr-github-readme) | [![Argon Dashboard Laravel](https://github.com/creativetimofficial/public-assets/blob/master/argon-dashboard-laravel/argon-dashboard-laravel.jpg?raw=true)](https://www.creative-tim.com/product/argon-dashboard-laravel?ref=adsr-github-readme) | [![Argon Dashboard NodeJS](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-nodejs/argon-dashboard-nodejs.jpg)](https://www.creative-tim.com/product/argon-dashboard-nodejs?ref=adsr-github-readme) |

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Argon Design System React. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Argon Design System React. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/?ref=adsr-github-readme).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

- Copyright 2020 Creative Tim (https://www.creative-tim.com/?ref=adsr-github-readme)

- Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md?ref=creativetim)

## Useful Links

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w?ref=creativetim)
- [Affiliate Program](https://www.creative-tim.com/affiliates/new?ref=adsr-github-readme) (earn money)
- [Blog Creative Tim](http://blog.creative-tim.com/?ref=adsr-github-readme)
- [Free Products](https://www.creative-tim.com/bootstrap-themes/free?ref=adsr-github-readme) from Creative Tim
- [Premium Products](https://www.creative-tim.com/bootstrap-themes/premium?ref=adsr-github-readme) from Creative Tim
- [React Products](https://www.creative-tim.com/bootstrap-themes/react-themes?ref=adsr-github-readme) from Creative Tim
- [Angular Products](https://www.creative-tim.com/bootstrap-themes/angular-themes?ref=adsr-github-readme) from Creative Tim
- [VueJS Products](https://www.creative-tim.com/bootstrap-themes/vuejs-themes?ref=adsr-github-readme) from Creative Tim
- [More products](https://www.creative-tim.com/bootstrap-themes?ref=adsr-github-readme) from Creative Tim
- Check our Bundles [here](https://www.creative-tim.com/bundles?ref=adsr-github-readme)

### Social Media

Twitter: <https://twitter.com/CreativeTim?ref=creativetim>

Facebook: <https://www.facebook.com/CreativeTim?ref=creativetim>

Dribbble: <https://dribbble.com/creativetim?ref=creativetim>

Instagram: <https://www.instagram.com/CreativeTimOfficial?ref=creativetim>
>>>>>>> 503ea0042df0412edb5a6c18b017dda724b41614
