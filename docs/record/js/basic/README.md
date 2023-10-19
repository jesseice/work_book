## 一元操作符加号尝试将 bool 转为 number

```javascript
+true; // 1
```

## new Number / String .. 是对象不是 number new 构造函数都这样 （举一反三）

```javascript
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
// true false false
```

## 如果使用标记模板字面量，第一个参数的值总是包含字符串的数组。其余的参数获取的是传递的表达式的值

```javascript
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = "Lydia";
const age = 21;

getPersonInfo`${person} is ${age} years old`;
// ["", " is ", " years old"] "Lydia" 21
```

## 对象键是字符串 对象做键会 toString [object, object]

```javascript
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
// 456
```

## 引入的模块是 只读 的：你不能修改引入的模块。只有导出他们的模块才能修改其值。

```javascript
// counter.js
let counter = 10;
export default counter;

// index.js
import myCounter from "./counter";

myCounter += 1;

console.log(myCounter);
```

## defineProperty 定义属性默认只读 不能被迭代

```javascript
const person = { name: "Lydia" };

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));
```

## ...args 是剩余参数 只能作为最后一个参数

```javascript
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
// 报错
```

## symbol 不可枚举

```javascript
const info = {
  [Symbol("a")]: "b",
};

console.log(info);
console.log(Object.keys(info));
```

## promise

```javascript
const myPromise = () => Promise.resolve("I have resolved!");

function firstFunction() {
  myPromise().then((res) => console.log(res));
  console.log("second");
}

async function secondFunction() {
  console.log(await myPromise());
  console.log("second");
}

firstFunction();
secondFunction();
```
