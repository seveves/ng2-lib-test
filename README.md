# ng2-lib-test
Just a library test for angular2 modules that demonstrates the basic concepts how you can create your own library based on several commonjs modules.
These modules will be installed to a base angular2 application via npm.

All this is done with typescript and without any help of a module bundler like rollup.js, webpack or browserify.

Only the base application uses webpack for creating the angular2 application.
The application shows how you can extend components with shared components and how to extend the routes of your base module by other modules both normaly and lazy loaded.

## Setup
### Shared Module
* cd @lib-test/shared
* npm install && npm run build && npm pack
* cd ..

### Extend Module
* cd @lib-test/extend
* npm install && npm install ..\shared\lib-test-shared-1.0.0.tgz && npm run build && npm pack
* cd ..

### Lazy Module
* cd @lib-test/lazy
* npm install && npm install ..\shared\lib-test-shared-1.0.0.tgz && npm run build && npm pack
* cd ..

### Base Module
* cd @lib-test/base
* npm install
* npm install ..\shared\lib-test-shared-1.0.0.tgz
* npm install ..\extend\lib-test-extend-1.0.0.tgz
* npm install ..\lazy\lib-test-lazy-1.0.0.tgz
* npm start
* Open a browser and browse to 'http://localhost:3000'
