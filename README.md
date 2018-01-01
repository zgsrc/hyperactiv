# Hyperactiv

<br>

### A super tiny reactive library. :zap:
<p>
    <a href="https://www.npmjs.com/package/hyperactiv"><img alt="npm-badge" src="https://img.shields.io/npm/v/hyperactiv.svg?colorB=ff733e" height="20"></a>
    <a href="https://travis-ci.org/elbywan/hyperactiv"><img alt="travis-badge" src="https://travis-ci.org/elbywan/hyperactiv.svg?branch=master"></a>
    <a href='https://coveralls.io/github/elbywan/hyperactiv?branch=master'><img src='https://coveralls.io/repos/github/elbywan/hyperactiv/badge.svg?branch=master' alt='Coverage Status' /></a>
    <a href="https://github.com/elbywan/hyperactiv/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license-badge" height="20"></a>
</p>

<br>

## Description

Hyperactiv is a library which `observes` object mutations and `computes` values depending on those changes.
Whenever an `observed object` property is mutated, the `computed functions` that depend on this property will be called.

Of course, Hyperactiv automatically handles these dependencies so you never have to explicitly declare which function depends on which property.

## Demo

**[Paint demo](https://elbywan.github.io/hyperactiv/)**

## Setup

```bash
npm i hyperactiv
```

```html
<script src="https://unpkg.com/hyperactiv"></script>
```

## Import

```js
/* Hyperactiv is bundled as an UMD package */
const hyperactiv = require('hyperactiv')

const { computed, observe, dispose } = hyperactiv
```

## Usage

#### Observe object and arrays

```js
const observedObject = observe({ a: 5, b: 4 })
const observedArray = observe([ 3, 2, 1 ])
```

#### Define computed functions

```js
let result = 0
const computedFunction = computed(() => {
    result =
        observedObject.a + observedObject.b +
        observedArray.reduce((acc, curr) => acc + curr)
})

// By default, a computed function is automatically called when declared :
console.log(result) // -> 15

// To prevent this behaviour set the autoRun option to false :
const _ = computed(() => {}, { autoRun: false })

// Warning : the computed function *must* be called at least once to calculate its dependencies
```

#### Mutate observed properties

```js
// computedFunction will be called each time one of its dependencies is changed
observedObject.a = 6
console.log(result) // -> 16
observedArray[0] = 4
console.log(result) // -> 17
```

#### Release computed functions

```js
// Observed objects store computed function references in a Set, so you need to
// release those yourself whenever needed to prevent memory leaks
dispose(computedFunction)
```

## Code samples

#### A simple sum

```js
// Observe an object and its properties
const obj = observe({
    a: 1, b: 2, sum: 0
})

// The computed function auto-runs by default
computed(() => {
    // This function depends on obj.a and obj.b
    obj.sum = obj.a + obj.b
})

console.log(obj.sum) // -> 3
obj.a = 2
console.log(obj.sum) // -> 4
obj.b = 3
console.log(obj.sum) // -> 5
```

#### Nested functions

```js
const obj = observe({
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    totalSum: 0
})

const aPlusB = () => {
    return obj.a + obj.b
}
const cPlusD = () => {
    return obj.c + obj.d
}

// Depends on a, b, c, d
computed(() => {
    obj.totalSum = aPlusB() + cPlusD()
})

console.log(obj.totalSum) // -> 10
obj.a = 2
console.log(obj.totalSum) // -> 11
obj.d = 5
console.log(obj.totalSum) // -> 12
```

#### Chaining computed properties

```js
const obj = observe({
    a: 0,
    b: 0,
    c: 0,
    d: 0
})

computed(() => { obj.b = obj.a * 2 })
computed(() => { obj.c = obj.b * 2 })
computed(() => { obj.d = obj.c * 2 })

obj.a = 10
console.log(obj.d) // -> 80
```

#### Asynchronous computations

```js
// Promisified setTimeout
const delay = time => new Promise(resolve => setTimeout(resolve, time))

const obj = observe({ a: 0, b: 0, c: 0 })
const multiply = () => {
    obj.c = obj.a * obj.b
}
const delayedMultiply = computed(
    // when dealing with asynchronous functions
    // wrapping with computeAsync is essential to monitor dependencies
    ({ computeAsync }) =>
        delay(100).then(() =>
            computeAsync(multiply)),
    { autoRun: false }
)

delayedMultiply().then(() => {
    console.log(obj.b) // -> 0
    obj.a = 2
    obj.b = 2
    return delay(200)
}).then(() => {
    console.log(obj.c) // -> 4
})
```

#### Batch computations

```js
// Promisified setTimeout
const delay = time => new Promise(resolve => setTimeout(resolve, time))

// Enable batch mode
const array = observe([0, 0, 0], { batch: true })
let sum = 0
let triggerCount = 0

const doSum = computed(() => {
    ++triggerCount
    sum = array.reduce((acc, curr) => acc + curr)
})

console.log(sum) // -> 0

// Even if we are mutating 3 properties, doSum will only be called once asynchronously.
array[0] = 1
array[1] = 2
array[2] = 3

console.log(sum) // -> 0

delay(10).then(() => {
    console.log(`doSum triggered ${triggerCount} time(s).`) // -> doSum triggered 2 time(s).
    console.log(sum) // -> 6
})
```

#### Observe only some properties

```js
const object = {
    a: 0,
    b: 0,
    sum: 0
}
// Use props to observe only some properties
// observeA reacts only when mutating 'a'
const observeA = observe(object, { props:  ['a'] })
// Use ignore to ignore some properties
// observeB reacts only when mutating 'b'
const observeB = observe(object, { ignore: ['a', 'sum'] })

const doSum = computed(function() {
    observeA.sum = observeA.a + observeB.b
})

// Triggers doSum
observeA.a = 2
console.log(object.sum) // -> 2
// Does not trigger doSum
observeA.b = 1
observeB.a = 1
console.log(object.sum) // -> 2
// Triggers doSum
observeB.b = 2
console.log(object.sum) // -> 3
```


#### This and class syntaxes

```js
class MyClass {
    constructor() {
        this.a = 1
        this.b = 2

        const _this = observe(this)
        // Bind computed functions to the instance
        this.doSum = computed(this.doSum.bind(_this))
        // Return an observed instance
        return _this
    }

    doSum() {
        this.sum = this.a + this.b
    }
}

const obj = new MyClass()
console.log(obj.sum) // -> 3
obj.a = 2
console.log(obj.sum) // -> 4
```

```js
const obj = observe({
    a: 1,
    b: 2,
    doSum: function() {
        this.sum = this.a + this.b
    }
})

// Bind the computed function
obj.doSum = computed(obj.doSum.bind(obj))
console.log(obj.sum) // -> 3
obj.a = 2
console.log(obj.sum) // -> 4
```

## API

### observe

> observe(Object | Array, { props: String[], ignore: String[], batch: boolean }) => Proxy

Observes an object or an array and returns a proxified version which reacts on mutations.

**Options**

* props: String[]

Observe only these properties.

* ignore: String[]

Ignore these properties.

* batch: boolean

Batch computed properties calls, wrapping them in a setTimeout and executing them in a new context and preventing excessive calls.

### computed

> computed(fun: Function, { autoRun: boolean }) => Proxy

**Options**

Wraps a function and captures observed properties which are accessed during the function execution.
When those properties are mutated, the function is called to reflect the changes.

* autoRun: boolean

Runs the function argument.

### dispose

> dispose(Function) => void

Will remove the computed function from the reactive Maps (the next time an bound observer property is called) allowing garbage collection.