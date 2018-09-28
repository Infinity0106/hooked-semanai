# HOOKED 🔱

e-commerce with product and events recommendation based on link data using [CarbonLDP](https://github.com/CarbonLDP/carbonldp-js-sdk)

## project set up

to install dependencies

```sh
$ yarn
```

## run the server

starts and opens the server in localhost:3000

```sh
yarn start
```

## show interactive documentation

to start the components documentation you will need to run
this will generate the documentation in localhost:9001

```sh
yarn run storybook
```

### detailed information of react

[detailed readme](./react_readme.md)

## Structure of the project

the main information is in the folder `./src`
where you can see the router, store, reducres, components and backend files

- the router is the app.js and home.js (where is the redirection)

- the reducers are the store objects that existe this are for models in the database or they can also be for states in the application

- the components folder structure is where the magic happens, you have the index that is the main component, sometime you can have sub-components that are in another js file, but mainly the component logic goes to the ctrl.js file this communicate with the backend file and updates the stores via reducres and actions in redux

- the backend file stores all actions made to carbon like seeding and also the queries executed

NOTE:
you have stories folder which stores the components documentation
