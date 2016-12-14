# ng2-lib-test
Just a library test for angular2 modules

## Setup
### Shared Module
* cd @lib-test/shared
* npm install
* npm run build
* npm link

### Base Module (includes Shared Module)
* cd @lib-test/Base
* npm install
* npm link @lib-test/shared
* npm start
