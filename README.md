# Example for @angular-architects/module-federation

This examples loads 3 microfrontend into a shell:

## Important Files

Have a particular look at the following files:

- ``readme.md``: Shows how to install dependencies and how to start the example
- ``projects\mfe1\webpack.config.js``: Microfrontend config
- ``projects\shell\webpack.config.js``: Shell config
- ``projects\shell\src\app\app.routes.ts``: Lazy route for microfrontend
- ``projects\shell\src\decl.d.ts``: Typing for mapped Url pointing to microfrontend

## Installation and Usage

- Install packages: ``yarn`` (!)*
- Start Micro Frontend (remote): ``ng serve mfe1 -o``
- Start Micro Frontend (remote): ``ng serve mfe2 -o``
- Start Micro Frontend (remote): ``ng serve mfe3 -o``
- Start Shell (host): ``ng serve shell -o``
- Make sure ``mfe1`` ``mfe2`` ``mfe3`` is started before ``shell`` is loaded into the browser
- Use the hyperlink ``flights/flight-search`` in the ``shell`` to load `mfe1`

\* Please note, you **must** use **yarn** during the beta phase of CLI 11 b/c it allows to override dependencies to force the CLI into webpack 5.

## Creating a new MFE appliction

- Create mfe1 application and home component 
``ng g application mfe1 --routing --style=css``
``ng g c home --project=mfe1``
- Create a new feature module under mfe1
``ng g m mfefeature --routing --project=mfe1``
``ng g c mfefeature --project=mfe1``
- Update routing for home app and feature modules.
- Run the application : ``ng serve mfe1 -o``
- Add module federation to project
``ng add @angular-architects/module-federation --project mfe1 --port 5000``
- Add Modulefederated plugin to mfe1 and host application

\* For futher reference on creation of standalone applications, refer https://dev.to/sbhuvane/micro-frontend-in-angular-using-module-federation-31om


## More Details on Module Federation

Have a look at this [article series about Module Federation](https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-part-2-module-federation-with-angular/)

## Angular Trainings, Workshops, and Consulting

- [Angular Trainings and Workshops](https://www.angulararchitects.io/en/angular-workshops/)
- [Angular Consulting](https://www.angulararchitects.io/en/consulting/)

## Difference between single-spa and module-federation

- Single-Spa: 

- This JavaScript framework for front-end microservices can be implemented with all three frameworks/libraries such as Angular, React, and Vue.js. Based on the need, it can lazy load the applications. It has features like,
1) Top-level routing
2) Use of multiple frameworks on the same page without refreshing the page
3) Lazy load code for improved initial load-time
4) Standalone application with 0 dependency on other app's.


- Module-Federation: 

- Module Federation can be of great use when:
1) You have a large project that tends to end up as a software monolithe in traditional architectures
2) You can split your project into several, more of less self-sufficient domains (e.g. in Self-Contained-System/SCS architecture)
3) The application will be developed in multiple and independent teams
4) Your teams can agree on a frontend framework (like Angular) for the purpose of harmonization
5) You do not plan to give up this harmonization in the near future

- Shortcomings of module federation:
1) You do not have control over the framework and version usage of the individual teams
2) One or more of your microfrontends might want to swap to a different framework in near future
3) You do not use webpack as a module bundler (Module Federation is a webpack 5 feature)
4) You require an old Angular version < 11.0.0 (Angular 11 first has opt-in support for Webpack 5)
