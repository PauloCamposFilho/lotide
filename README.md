# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @paulocamposfilho/lotide`

**Require it:**

`const _ = require('@paulocamposfilho/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(['some', 'array'])`: returns the first item of a given array.
* `tail(['another', 'some', 'array'])`: returns a resulting array without the first item from the given array
* `middle(['your', 'array'])`: returns an array with the middle items from the given array. If the array has an even amount of items, the two most central will be returned.
* `findKey(object, callback)`: returns the keyName from an object given a callback that checks for a value within the object.
* `findKeyByValue(object, value)`: given a value, looks through the object and returns (when it exists) the key that matches it.
* `countLetters(string)`: returns an object containing each letter from the string as a key, and its respective value being how many instances of that letter are present in the string (case insensitive search).
* `countOnly([], {})`: given an array of items, checks the array against an object to return the amount of times the keys from the object appear in the array (object must be declared with the value of the keys as true in order to be search against. eg myObject = { thisKey: true }).
* `letterPositions(string)`: returns an object with its keys corresponding to each unique letter from the string, paired with an array with the index-position that the letter appears for its value.
* `map(array, callback)`: my simplified implementation of the Array.prototype.map . Given an array, iterates through it calling the passed callback function and returning the value into a resulting array that is returned at the end.
* `takeUntil(array, callback)`: given the array, iterates through it, pushing each item into the resulting array, until the callback function (that takes the current item as an argument into it) returns a truthy value.
* `without(originalArray, expurgeArray)`: given an original array, returns a new array removing from the original array any items present in the expurgeArray.