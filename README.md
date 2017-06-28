# Angular2 vs React+Redux Comparison 
Basic example app to compare Angular2 vs React+Redux


## Purpose of This Project

This project was created so that developers could more easily compare Angular2 and React. It has a simple CRUD form built in 
1. Angular2 
2. React+Redux 
3. Vue+Vuex

It's just a simple list of "blog articles" with create, update, and delete functionality. There's a lot more that could have been added to these 2 apps, but I felt it would be easier to compare the two without the distractions of form validation, user-confirmations, testing, etc. I wanted to focus on the bare minimum necessary for a CRUD example so others can easily compare apples to apples.

A note to developers that are unfamiliar with any of the 3 solutions: the JavaScript ecosystem has moved forward a lot since Angular 1's debut. 
- ES6 has brought many new features to JavaScript: classes, modules, multi-line strings, default parameters, arrow functions, destructuring, block scopes, let, const, and shorthand property names
- Transpilers are being used to handle these new features: Babel (for React and Vue) and TypeScript (for Angular2)
- Build tools have changed: Bower, Grunt, and Gulp have been replaced with import statements, Webpack, and SystemJS
Whichever you choose, there will be a lot to learn.



## Comparison Summary 
Here are my opinions based on working with the two tech stacks for a few weeks. I'm sure other developers will have other opinions that they hold equally strongly, and I respect that. I imagine after working with all the tools for a few years I might have slightly different opinions, and that both technologies will evolve rapidly. 

### Angular2 
Choose Angular2 if you want standardized technologies across your company and greater developer productivity.
- **Developer Productivity:** in the end, I found Angular2 to be more straightforward and more productive. For example, to implement the delete functionality, it only required 3 blocks of code in 3 files. To help developers in their comparison, I've added console.log statements allowing one to trace the steps involved in deleting an article. If you check the browser console, you'll see that React+Redux is quite a bit more complicated, requiring more blocks of code spread out over more files. (Angular: 3 pieces in 3 files vs React+Redux: 13 pieces in 7 files)
- **Standardization:** some developers feel it is better to have "more choices!!!" I feel the opposite. React technologies seem to change often. Flux has been replaced by Redux. Redux may currently be in the process of being replaced. The examples I found used Thunks. I'm told that Saga is a better (and more complicated) solution. Researching, learning, comparing, and vetting the myriad choices is very time consuming. Especially in a large corporation with many teams in many countries, standardization (having a "right way") would seem to be a huge benefit.


### React+Redux
Choose React+Redux if you want 1) a smaller, slightly faster app 2) easier mobile development 3) better support for SEO via server-side rendering  
- **File Size:** The production version of the React+Redux app was about 1/10 of the size (React+Redux: 180KB vs Angular2: 1.5MB) and 1/4 of the time to load and render the DOM (React+Redux: 500ms vs Angular2: 2s)
- **Immutable Data:** React+Redux emphasize immutable data. You don't have to worry about other developers modifying state in hard to find ways.
- **Mobile:** React seems to have the stronger mobile toolset with React Native. (I would need to look into this more.)
- **Server-side rendering / isomorphic apps:** React's isomorphic capabilities are more mature and have been around much longer than "Universal," Angular2's solution. If Search Engine Optimization (SEO) is important to you, React+Redux may be the better choice. 



## Installing Dependencies and Running the Projects 

You will need to install and then run all 3 of the following to try the 2 examples.

### Server
This is a simple Express server for our articles api to which we can make get, post, put, and delete requests.

Run the following:
```
cd server-api
npm install
npm start
```


### Angular2
The original code was taken from the Angular2 "Tour of Heroes" app in the official documentation:
https://angular.io/docs/ts/latest/tutorial/
The heroes dashboard, list, and form have been changed into a simple CRUD form for a blog.

Run the following:
```
cd angular2
npm install typescript tslint -g
npm install
npm start
```

Build:
```
npm install http-server -g 
npm run build
http-server ./dist 
```

### React+Redux
The original code was taken from the best React+Redux tutorial I could find:
"Building Applications with React and Redux in ES6" by Cory House
https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents
(Corey's very good. I highly recommend you watch it.)
The courses and authors lists and forms have been changed once again into a simple CRUD form for a blog.

Run the following:
```
cd react-redux
npm install
npm start
```

Build: 
```
npm run build 
```

### Vue.js+Vuex
Vue CLI's command "vue init webpack PROJECT_NAME" was used

Run the following:
```
cd vue-vuex
npm install
npm start
```

Build: 
```
npm run build 
http-server ./dist 
```



## Learning More
There's a lot to learn with either solution. I would recommend the following videos and links. (BTW, you have to pay for PluralSight courses. IMHO, it is very much worth it.)

### Angular2
- https://app.pluralsight.com/library/courses/angular-2-first-look
- https://angular.io/docs/ts/latest/tutorial/

### React+Redux
- https://app.pluralsight.com/library/courses/react-flux-building-applications 
- https://app.pluralsight.com/library/courses/react-redux-react-router-es6 

### Vue+Vuex
- https://vuejs.org/v2/guide/
- https://github.com/vuejs/learn-cli
- https://router.vuejs.org/en/
- http://vuex.vuejs.org/en/
- https://github.com/vuejs/vuex/tree/dev/examples
- https://github.com/vuejs/learn-devtools
- https://github.com/vuejs/awesome-vue

## Webpack
The Angular2 webpack solution is from:
- https://github.com/preboot/angular2-webpack


## A Note on IDE's 
You'll want to configure your IDE to hide the .js and .js.map files generated from Angular's .ts files. Here's how to do it in 2 popular IDE's.

### VS Code
Add this to your settings.json file:
{
    "files.exclude": {
        "**/*.js": {"when": "$(basename).ts"},
        "**/*.js.map": true
    }
}

### IntelliJ
Settings > Languages & Frameworks > TypeScript 
- Check "Enable TypeScript Compiler"
- Uncheck "Track changes"

You will also want to set the version of JavaScript so IntelliJ doesn't highlight all the ES6 and JSX as errors:
Settings > Languages & Frameworks > JavaScript
JavaScript language version: JSX Harmony 
