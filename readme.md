
# Module Syntax Node-Express Dealaide Email Starter

## Features
- ES Modules syntax in Node.js
- Express.js as the web framework
- Rollup.js for bundling JavaScript
- Lit for building efficient web components
- Vaadin Router for client-side routing
- Tailwind CSS for utility classes

## Install

    $ git clone https://github.com/laodev1/dealaide-email.git
    $ cd node-express-esm-starter
    $ npm install
## Setting Environment Variables

Make a copy of .env.example and save it as .env
Add your ```OPENAI_API_KEY``` 
**NOTE: MAILTRAP is optional**
## Start
```
   $ npm start
```
## Simple build process for changes
```
   $ npm run build
```
## Architecture
```.
├── assets                  # Static images, icons, global styles & other assets.
├── routes                  # Express Routes
│   ├── api.js              ## Generic API routes and things that have not been protected with the auth middleware for obvious reasons
│   ├── helpers.js          ## Generic API routes and things that have not been protected with the auth middleware for obvious reasons
├── src                     # Frontend Source files
│   ├── components          ## Web components
│   ├── styles              ## Styles 
│   └── app-root.js         ## Root component and frontend routing for [Lit](https://lit.dev) Application
│   └── main-view.js        ## View that loads on the ```/``` route.
│   └── light-dom.js        ## Extensible class to allow rendering in the light dom (```document.querySelector etc..```) instead of the shadow root (```this.shadowRoot.querySelector```). use it like this:
│   │                             ```javascript 
│   │                             import {LightDom} frpm './light-dom.js'
│   │                             class MyElement extends LightDom{
│   │                               ...
│   │                             }
│   │                          
│   │                          ```
│   └── state-view.js       ## Composable wrapper class to pass global state properties from the state management library along with a couple other methods for managing state & events. use it like this:
│   │                         ```javascript 
│   │                         import {StateView} frpm './state-view.js'
│   │                         class MyElement extends StateView{
│   │                           static get properties() {
│   │                              return {
│   │                                 ...StateView.properties,
│   │                              };
│   │                           }
│   │                           ...
│   │                           handleStateEvent(e){
│   │                              this.setState({someState:e.target.value}) // or whatever...
│   │                              //properties will then update for every component that inherits from StateView.
│   │                              //think about it kinda like a provider class but again, is observable and async.
│   │                           }
│   │                         }
│   │                        
│   │                        ```
│   └── view-404.js         ## 404 error static view
├── state                   # Global state management (Written by me. Behaves similar to Redux in structure but is observable without middleware. Can easily be ripped out for redux if that feels like a better fit.)
├── index.html              # main index page
├── server.js               # node server
├── rollup.config.js        # rollup.js main config file
├── package.json            # main package.json file
└── README.md               # This file
└── LISCENSE.md             # The liscense text

```
## Languages & tools

### JavaScript

- [Express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node.
- [Rollup](https://rollupjs.org/guide/en/) -Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the new standardized format for code modules included in the ES6 revision of JavaScript, instead of previous idiosyncratic solutions such as CommonJS and AMD. ES modules let you freely and seamlessly combine the most useful individual functions from your favorite libraries. This will eventually be possible natively everywhere, but Rollup lets you do it today.
- [Lit](https://lit.dev) - Building on top of the Web Components standards, Lit adds just what you need to be happy and productive: reactivity, declarative templates and a handful of thoughtful features to reduce boilerplate and make your job easier. Every Lit feature is carefully designed with web platform evolution in mind.
- [Vaadin Router](https://vaadin.com/router) Vaadin router is a small (< 7kb) yet powerful client-side router JS library. It uses a widely adopted express.js syntax for routers (users/:id) to map URLs to views based on Web Component. It has all the features you expect from a modern router: async route resolution, animated transition, child routes, navigation guards, redirects, and more. Vaadin router works with Web Components regardless of how they are created.

### HTML &  CSS
[Tailwind CSS](https://tailwindcss.com/)- Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/laodev1/dealaide-email/tags). 

## Authors

* **Steve Heideman** - *Initial work* - [laodev1](https://github.com/laodev1)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Will Xander for the idea
 ```
