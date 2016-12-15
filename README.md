# ng2-lib-test
Just a library test for angular2 modules

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