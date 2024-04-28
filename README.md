# Cf6-componentsLib
This library is for use free.

I am implementing severals components used in my webpages



## How run in development?
Install dependencies: 
```shell
npm install
cd projects/ngx-components-lib-cf6
npm install
```

For run the library:
```shell
  cd projects
  ng build ngx-components-lib-cf6 --watch
```

For check the webpage for test the lib run :
```shell
#./
  ng serve --port <port>

```

## How to publish the library
1. Build library:
```shell
  cd projects/ngx-components-lib-cf6
  ng build --configuration=production

```
2. Login in your npm account
```shell
  npm login
```
3. publish the library
```shell
cd ../../dist/ngx-components-lib-cf6
npm publish
```



