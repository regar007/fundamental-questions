# NodeJs fundamentals

**Q. What is NodeJs?**

It is a javascript runtime environment developed by facebook for enabling devlopers to write serverside code using js. Its has http module implemented to write server-ready code. It enable users to create lightweight application with less build time. It popular for data intensive applications as it uses asynchronus, non-blocking, event driven model to handle requests.

**Q. Middlewares in nodejs?**

Midlewares are responsible for handling http requests before actually invoking the api function or response before sending it out. There can be multiple middlewares used in application like halmet, express, cors, authentication jwt, passport etc.

**Q. global objects?**

they are present in all the modules by default. eg. __direname, filename, export, require etc.


**Q. Child proccess `spawn` vs `fork`**

When you run spawn, you send it a system command that will be run on its own process, but does not execute any further code within your node process.

Fork is a special instance of spawn, that runs a fresh instance of the V8 engine. Meaning, you can essentially create multiple workers, running on the exact same Node code base, or perhaps a different module for a specific task. This is most useful for creating a worker pool. While node's async event model allows a single core of a machine to be used fairly efficiently, it doesn't allow a node process to make use of multi core machines. Easiest way to accomplish this is to run multiple copies of the same program, on a single processor.

**Q. Nodejs streams**

Stream are used node to hnadle continuous read/write of data entities.
readable stream, writeable stream, duplex stream which is read-write , transform stream which is also read-write used to transform or modifiing data in when processing.

**Q. What is readFile and createReadStream?**

`readFile` read the file content in asynchronous manner and loads into memory before user can access it. `createReadStream` is used to create readable stream to read small chunks from file with default size of 64 kb but can be changed as required.

**Q. What is REPL**

Read Eval Print Loop. its like node teminal to checkout node working and execution.

**Q. Stubs in nodejs**

Stubs are functions used in testing for mimiking api aur data for analyzing individual component behaviour. 

**Q. Test pyramid implementation using HTML API**

It is impleemtated by creating a pyramid like test cases. It has three components
- Fewer number of HTTP endpoint test cases.
- Smaller number of integration test methods.
- Higher number of unit test cases.


**Q. buffer class in nodejs**

Its used to store byte array data in nodejs. Its similar to how arrays and list are implemented. It refers to the raw memory location and not present on the v8 engine heap. 


**Q. What is expressjs?**

Express is the framwork for nodejs application. It enhances the development time and easy implementation of web application on nodejs. It offers features like api routing, req-res handling, body-parsing, url encoding, middleware support, templating and many more.

**Q. what is package.json**

Its a meta data file where we have all the packages as dependencies or dev-dependencies, about the app version, author, licence, npm commands to start the app.

**Q. Connect module in nodejs**

Connect module make it simple to add middleware to node http module. It extends http.Server. Connect is used to create server with plugin/middleware support. Express extend Connect.Server to add extra features to app.

**Q. passport in nodejs**

Its used as middleware for authentication pupose. It provides different ways (strategies) to create a unique authentication flow. e.g, OpenId, SMAL, JWT etc.

**Q. EventEmitter in nodejs**

`EventEmitter` is used to create events similar to bwroser events to manually trigger and listen to those events. `.emit` and `.on` is used to emit and listen.
