# Angular2 vs React+Redux vs Vue+Vuex Comparison 


## Purpose of This Project

This project was created so that developers could more easily compare existing JavaScript solutions. It has a simple CRUD form built in 
1. Angular2 
2. React+Redux 
3. Vue+Vuex

It's just a simple list of "blog articles" with create, read, update, and delete (CRUD) functionality. There's a lot more that could have been added to these apps, but I felt it would be easier to compare them without the distractions of form validation, user-confirmations, testing, etc. I wanted to focus on the bare minimum necessary for a CRUD example so others can easily compare apples to apples.

A note to developers that are unfamiliar with any of the 3 solutions: the JavaScript ecosystem has moved forward a lot since Angular 1's debut. 
- ES6 has brought many new features to JavaScript: classes, modules, multi-line strings, default parameters, arrow functions, destructuring, block scopes, let, const, and shorthand property names
- Transpilers are being used to handle these new features: Babel (for React and Vue) and TypeScript (for Angular2)
- Build tools have changed: Bower, Grunt, and Gulp have been replaced with import statements, Webpack, and SystemJS
Whichever you choose, there will be a lot to learn.

---

## Comparison Summary 
Here are my opinions based on working with the three tech stacks for a few weeks. I'm sure other developers will have other opinions that they hold equally strongly, and I respect that. I imagine after working with all the tools for a few years I might have slightly different opinions, and that all these technologies will evolve rapidly. 

Here are the pros and cons of each as I see them

### Angular2
#### Pros
Honestly, the more I work with other solutions, the harder it gets to say a lot of positive things about Angular2. Although it may initially seem like a huge benefit that they offer a complete solution, over time it seems like more and more of a negative. You have to use everything they recommend, nothing more, nothing less. (See below for more detail.) Similarly TypeScript feels like a plus with it's strong types, error checking, and clear interfaces, but is difficult to learn to set up. There seem to be few resources out there to show you how to add typings to your project, and not all IDE's seem to support it well.
- **A complete solution** 
- **Class syntax:** makes the code very well organized
- **TypeScript** 

#### Cons
There seem to be a lot of negatives. Far too much changed between Angular1 and 2. The HTML templating syntax was the least of it. They added TypeScript, both SystemJS and Webpack, Rx.js, and replaced promises with observables. The learning curve is very heavy. Also, because Angular has it's own special version of everything (e.g. $http, $q, etc) it is extremely difficult to migrate existing projects. Everything needs to be rewritten.
- **Too much has changed**
- **Very steep learning curve**
- **It's not plain JS:** difficult to migrate to other frameworks or upgrade to Angular2
- **Somewhat verbose:** every file needs tons of import statments
- **Angular2 syntax:** not as simple as Angular1. ng-____ was so much simpler.
- **TypeScript** 
- **Errors aren't helpful at all**


### React+Redux
#### Pros
React seems to have a few very clear advantages. If you need to make a mobile app, or search engine optimization (SEO) is important to you, React has the oldest and most mature solutions.
- **Mobile** 
- **Server-side rendering**
- **Immutable Data** 

#### Cons
Implementing delete operation for our CRUD app was by far the most complex in React+Redux. It required 13 pieces of code strewn across 7 files! Also, standardization is a big problem. While Angular is too strict with it's recommendations, React is too loose. Some developers feel it is better to have "more choices!!!" I feel the opposite. React technologies seem to change often. Flux has been replaced by Redux. Redux seems like it's going to be replaced by MobX. The examples I found used Thunks. I'm told that Saga is a better (and more complicated) solution. Researching, learning, comparing, and vetting the myriad choices is very time consuming. Especially in a large corporation with many teams in many countries, standardization (having a "right way") would seem to be a huge benefit.
- **Complexity**
- **No standard technologies**


### Vue+Vuex
#### Pros
It really does seem like someone took the best parts of the competing solutions!
- **Angular1's syntax:** v-for, v-if, v-model, v-class, etc
- **React's speed and size**
- **Redux's state management:** single store, immutable state
- **Great CLI:** Vue, router, Webpack, HMR, eslint, tests
- **Simplicity**
- **Recommenations but not too opinionated:** Angular2 often seems too rigid while React has the opposite extreme: you need to figure out all the pieces you want to use for your solution. Vue seems to take the middle road: it recommends a complete solution but ultimately lets you pick the pieces you want to use. Better yet, you can scaffold out a new project with a single line in the terminal.

#### Cons
- **Code style:** linting rules are a little weird. It prefers no semicolons and adds spaces in some weird places. 
- **No classes:** I liked Angular2's classes, but I guess I can live without them.

---

## Numerical Comparison

### Size and speed (load + render time) of built code
Angular2 is by far the largest. React+Redux and Vue+Vuex are similar.
- Angular2:     1,500 kb,   1.5 seconds!
- React+Redux:  200 kb,     0.6 seconds
- Vue+Vuex:     400 kb,     0.6 seconds

### Complexity of adding delete functionality to our CRUD app
React was by far the most complicated. Angular2 and Vue+Vuex are similar.
- Angular2:     3 blocks of code in 3 files
- React+Redux:  13 blocks of code in 7 files!
- Vue+Vuex:     3 blocks of code in 3 files

---

## Installing Dependencies and Running the Projects 

You will need to install and then run all 3 of the following to try the different solutions.

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
I modified the code into a simple CRUD form for a blog and swapped SystemJS for Angular2 Webpack.

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
Once again, I changed it into a simple CRUD form for a blog.

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
Vue CLI's command "vue init webpack PROJECT_NAME" was used. Then I built the CRUD app from scratch.

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

---

## Learning More
There's a lot to learn with each solution. I would recommend the following videos and links. 

### Angular2
- https://app.pluralsight.com/library/courses/angular-2-first-look
- https://angular.io/docs/ts/latest/tutorial/
- https://github.com/preboot/angular2-webpack

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
