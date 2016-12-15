# ng2-lib-test
Just a library test for angular2 modules

## Setup
### Shared Module
* cd @lib-test/shared
* npm install
* npm run build
* npm pack

### Base Module (includes Shared Module)
* cd @lib-test/base
* npm install
* npm install ../shared/lib-test-shared.VERSION.tgz
* npm start
