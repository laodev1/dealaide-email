
# Module Syntax Node-Express Starter

## Install

    $ git clone https://github.com/LandAdvisors/node-express-esm-starter.git
    $ cd node-express-esm-starter
    $ npm install

## Start
```
   $ npm start
```
## Simple build proces for changes
```
   $ npm run build
```
## Architecture
```.
├── assets                  # Static images, icons, global styles & other assets.
├── routes                  # Express Routes
│   ├── api                 ## Generic API routes and things that have not been protected with the auth middleware for obvious reasons
├── dist                    # Compiled files
├── src                     # Frontend Source files
│   ├── components          ## Web components
│   ├── styles              ## Styles 
│   └── app-root.js         ## Root component and frontend routing for [Lit](https://lit.dev) Application
│   └── main-view.js        ## View that loads on the ```/``` route.
│   └── state-view.js       ## Composable wrapper class to pass global state properties from the state management library along with a couple other methods for managing state & events.
│   └── view-404.js         ## 404 error static view
├── state                   # Global state management (Written by me. Behaves similar to Redux in structure but is observable without middleware.)
├── index.html              # main index page
├── server.js               # node server
├── rollup.config.js        # rollup.js main config file
├── package.json            # main package.json file
└── README.md               # This file
```
## Languages & tools

### JavaScript

- [Express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node.
- [Rollup](https://rollupjs.org/guide/en/) -Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the new standardized format for code modules included in the ES6 revision of JavaScript, instead of previous idiosyncratic solutions such as CommonJS and AMD. ES modules let you freely and seamlessly combine the most useful individual functions from your favorite libraries. This will eventually be possible natively everywhere, but Rollup lets you do it today.
- [Lit](https://lit.dev) - Building on top of the Web Components standards, Lit adds just what you need to be happy and productive: reactivity, declarative templates and a handful of thoughtful features to reduce boilerplate and make your job easier. Every Lit feature is carefully designed with web platform evolution in mind.
- [Vaadin Router](https://vaadin.com/router) Vaadin router is a small (< 7kb) yet powerful client-side router JS library. It uses a widely adopted express.js syntax for routers (users/:id) to map URLs to views based on Web Component. It has all the features you expect from a modern router: async route resolution, animated transition, child routes, navigation guards, redirects, and more. Vaadin router works with Web Components regardless of how they are created.

### HTML &  CSS
[Tailwind CSS](https://tailwindcss.com/)- Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.


## Comment Standards

### Class members
#### Class members should be formatted as follows:

Short description: Use a period at the end.
@since x.x.x: Should be 3-digit for initial introduction (e.g. @since 1.0.1). If significant changes are made, additional @since tags, versions, and descriptions should be added to serve as a changelog.
@access: If the members is private, protected or public. Private members are intended for internal use only.
@type: List the type of the class member.
@property List all properties this object has in case it’s an Object. Use a period at the end.
@member: Optionally use this to override JSDoc’s member detection in place of @type to force a class member.
@memberof: Optionally use this to override what class this is a member of.

```
/**
 * Short description. (use period)
 *
 * @since  x.x.x
 * @access (private, protected, or public)
 *
 * @type     {type}
 * @property {type} key Description.
 *
 * @member   {type} realName
 * @memberof className
 */
 ```

### Functions
#### Functions should be formatted as follows:

Summary: A brief, one line explanation of the purpose of the function. Use a period at the end.
Description: A supplement to the summary, providing a more detailed description. Use a period at the end.
@deprecated x.x.x: Only use for deprecated functions, and provide the version the function was deprecated which should always be 3-digit (e.g. @since 3.6.0), and the function to use instead.
@since x.x.x: Should be 3-digit for initial introduction (e.g. @since 3.6.0). If significant changes are made, additional @since tags, versions, and descriptions should be added to serve as a changelog.
@access: Only use for functions if private. If the function is private, it is intended for internal use only, and there will be no documentation for it in the code reference.
@class: Use for class constructors.
@augments: For class constuctors, list direct parents.
@mixes: List mixins that are mixed into the object.
@alias: If this function is first assigned to a temporary variable this allows you to change the name it’s documented under.
@memberof: Namespace that this function is contained within if JSDoc is unable to resolve this automatically.
@static: For classes, used to mark that a function is a static method on the class constructor.
@see: A function or class relied on.
@link: URL that provides more information.
@fires: Event fired by the function. Events tied to a specific class should list the class name.
@listens: Events this function listens for. An event must be prefixed with the event namespace. Events tied to a specific class should list the class name.
@global: Marks this function as a global function to be included in the global namespace.
@param: Give a brief description of the variable; denote particulars (e.g. if the variable is optional, its default) with JSDoc @param syntax. Use a period at the end.
@yield: For generator functions, a description of the values expected to be yielded from this function. As with other descriptions, include a period at the end.
@return: Note the period after the description.

```
  /**
 * Summary. (use period)
 *
 * Description. (use period)
 *
 * @since      x.x.x
 * @deprecated x.x.x Use new_function_name() instead.
 * @access     private
 *
 * @class
 * @augments parent
 * @mixes    mixin
 *
 * @alias    realName
 * @memberof namespace
 *
 * @see  Function/class relied on
 * @link URL
 * @global
 *
 * @fires   eventName
 * @fires   className#eventName
 * @listens event:eventName
 * @listens className~event:eventName
 *
 * @param {type}   var           Description.
 * @param {type}   [var]         Description of optional variable.
 * @param {type}   [var=default] Description of optional variable with default variable.
 * @param {Object} objectVar     Description.
 * @param {type}   objectVar.key Description of a key in the objectVar parameter.
 *
 * @yield {type} Yielded value description.
 *
 * @return {type} Return value description.
 */
 ```
