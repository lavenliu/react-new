# ES6 基础

## 遍历数组

```js
let a = [2, 3, 4, 6, 7, 8, 9];

[2, 3, 5, 4, 5, 2, 2].forEach(x => console.log(x));

for (let i of a) {
    console.log(i);
}
```

## Promise

通过封装 `Promise` 公共代码，然后可以在组件中使用其 `then` 方法了。


## JsonP 插件使用

