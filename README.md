# angular2-vs-react-redux
Basic example app to compare Angular2 vs React+Redux


#Purpose of This Project

This project was created so that developers could more easily compare Angular2 and React. It has a simple CRUD form built in 
1. Angular2 
2. React+Redux 

It's just a simple list of "blog articles" with create, update, and delete functionality. There's a lot more that could have been added to these 2 apps, but I felt it would be easier to compare the two without the distractions of form validation, user-confirmations, testing, etc. I wanted to focus on the bare minimum necessary for a CRUD example so others can easily compare apples to apples.

A note to developers that are unfamiliar with either: the JavaScript ecosystem has moved forward a lot since Angular 1's debut. 
- ES6 has brought many new features to JavaScript: classes, modules, multi-line comments, default parameters, arrow functions, destructuring, block scopes, let, const, and shorthand property names
- Transpilers are being used to handle these new features: Babel (for React) and TypeScript (for Angular2)
- Build tools have changed: Bower, Grunt, and Gulp have been replaced with import statements, Webpack, and SystemJS
Whichever you choose, there will be a lot to learn.



#Installing Dependencies and Running the Projects 

You will need to install and then run all 3 of the following to try the 2 examples.

##Server
This is a simple Express server for our articles api to which we can make get, post, put, and delete requests.

Run the following:
```
cd server-api
npm install nodemon -g 
npm install
npm start
```


##Angular2
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

##React+Redux
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



#Learning More
There's a lot to learn with either solution. I would recommend the following videos and links. (BTW, you have to pay for PluralSight courses. IMHO, it is very much worth it.)

##Angular2
- https://app.pluralsight.com/library/courses/angular-2-first-look
- https://angular.io/docs/ts/latest/tutorial/

##React+Redux
- https://app.pluralsight.com/library/courses/react-flux-building-applications 
- https://app.pluralsight.com/library/courses/react-redux-react-router-es6 
