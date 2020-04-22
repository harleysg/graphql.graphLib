# Curso de Creación de APIs con GraphQL y Node.js - backend

[webtraining.zone](https://webtraining.zone/)

## downloads

-   [graphql-playground](https://www.electronjs.org/apps/graphql-playground)

## error

El error inicio en este archivo:

path: src/graphql/queries.js

![Image of Yaktocat](https://uploads.disquscdn.com/images/524c70684ca6d2e4831ee75233be78c12c85aed0ee57cffd5332737dcf089575.png)

Pero en console me arroja un error que no he podido entender.

```
Server listen port: 4000
(node:11560) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)
(node:11560) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

y al hacer la consulta en graphql playground sale el siguiente error:

```
Error: Cannot use GraphQLInterfaceType "Node" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.

```
