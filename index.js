'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Returns the input value as it is.
 * 
 * @param {*} value: The value to return 
 * @returns: The value that is inputted
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: Identifies the data type of the inputted value and returns it as a string
 * @param {*} value: The value whose data type is to be identified 
 * @returns: A string that contains the data type of the inputted value
 */
function typeOf(value) {
    if (Array.isArray(value)) {
        return "array";
    } else if (value === null) {
        return "null";
    } else {
        return typeof value;
    }
}
module.exports.typeOf = typeOf;

/**
 * first: Returns the first number of elements in the inputted array.
 * 
 * @param {Array} array: The array whose first number of elements are to be returned
 * @param {Number} num: The number of elements to return
 * @returns: An empty array if array is not an array, the first element of an array if num is not a number,
 * or an array that contains the first number of elements in array
 */
function first(array, num) { 
    var outputArray = [];
    
    if (Array.isArray(array) === false || num <= 0) {
        return [];
    }

    if (typeof num !== "number") {
        return array[0];
    } else if (num > 0 && num <= array.length) {
        for (var i = 0; i < num; i++) {
            outputArray.push(array[i]);
        }
        
        return outputArray;
    } else if (num > array.length) {
        return array;
    }
}
module.exports.first = first;

/**
 * last: Returns the last number of elements in array
 * 
 * @param {Array} array: The array whose last number of elements are to be returned
 * @param {Number} num: The number of elements in array to be returned 
 * @returns: An empty array if array is not an array, the last element of array if num is not a number,
 * or an array that contains the last number of elements in array
 */
function last(array, num) {
    var outputArray = [];

    if (Array.isArray(array) === false || num <= 0) {
        return [];
    }

    if (typeof num !== "number") {
        return array[array.length - 1];
    } else if (num > 0 && num <= array.length) {
        for (var i = array.length - num; i < array.length; i++) {
            outputArray.push(array[i]);
        }

        return outputArray;
    } else if (num > array.length) {
        return array;
    }
}
module.exports.last = last;


/**
 * indexOf: Returns the index of value in array.
 * 
 * @param {Array} array: The array whose values are to be searched for value, whose index is to be returned
 * @param {*} value: The value for which to search in array
 * @returns: -1 if array does not contain value or the index of value in array if value is in array
 */
function indexOf(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }

    return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Returns a boolean that is determined by whether an array contains the inputted value.
 * 
 * @param {Array} array: The array to check for value
 * @param {*} value: The value whose existence in array is to be checked
 * @returns: false if array does not contain value or true if value is in array
 */
function contains(array, value) {
    var i = 0;
    var boolean = false;
    
    while (i < array.length && boolean === false) {
        array[i] === value ? boolean = true : boolean = false;
        i++;
    }

    return boolean;
}
module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * unique: Returns all the elements in the inputted array without their duplicates
 * 
 * @param {Array} array: The array whose elements are copied into the array to return without their duplicates 
 * @returns: An array that contains all of the unique elements of array
 */
function unique(array) {
    var value;
    var outputArray = [];

    for (var i = 0; i < array.length; i++) {
        value = array[i];
        if (_.indexOf(outputArray, value) === -1) {
            outputArray.push(value);
        }
    }

    return outputArray;
}
module.exports.unique = unique;

/**
 * filter: Calls the inputted function on each element in the inputted array and 
 * returns an array whose elements are those that returned true when the inputted function
 * was called
 * 
 * @param {Array} array: The array whose elements are tested by func 
 * @param {Function} func: The function that tests the elements of array 
 * @returns: an array whose elements returned true when the inputted function was called
 */
function filter(array, func) {
    var outputArray = [];

    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
            outputArray.push(array[i]);
        }
    }

    return outputArray;
    
}
module.exports.filter = filter;

/**
 * reject: Calls the inputted function on the elements of the inputted array
 * and returns an array whose elements returned false when the function was called on them
 * 
 * @param {Array} array: The array whose elements will be tested by func 
 * @param {Function} func: The function that tests the elements of array
 * @returns: An array whose elements returned false when tested by func 
 */
function reject(array, func) {
    var outputArray = [];

    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === false) {
            outputArray.push(array[i]);
        }
    }

    return outputArray;
    
}
module.exports.reject = reject;

/**
 * partition: Calls the inputted function on the elements of the inputted array
 * and creates and returns two arrays: one that contains the values for which the inputted
 * function returned true and another that contains the values for which the inputted function returned false
 * 
 * @param {Array} array: The array whose elements are tested by func
 * @param {Function} func: The function that tests the elements of array
 * @returns: An array composed of two arrays, one whose values returned true when the function was called
 * and another whose values returned false
 */
function partition(array, func) {
    var outputArray = [];
    var truthyArray = [];
    var falsyArray = [];

    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
            truthyArray.push(array[i]);
        } else {
            falsyArray.push(array[i]);
        }
    }

    outputArray.push(truthyArray, falsyArray);

    return outputArray;
}
module.exports.partition = partition;

/**
 * map: Calls the inputted function on the inputted collection and returns the collection
 * with the elements manipulated by the function
 * 
 * @param {Array or Object} collection: The collection whose elements are manipulated by func
 * @param {Function} func: The function that manipulates collection's elements
 * @returns: A version of collection whose elements have been manipulated by func 
 */
function map(collection, func) {
    var outputArray = [];
    
    if (Array.isArray(collection) === true) {
        for (var i = 0; i < collection.length; i++) {
            outputArray.push(func(collection[i], i, collection));
        }
    } else if (typeof collection === "object" && collection !== null) {
        for (var key in collection) {
            outputArray.push(func(collection[key], key, collection));
        }
    }

    return outputArray;
}
module.exports.map = map;


/**
 * pluck: Calls map on every object in an array of objects, returning the value of the inputted property
 * for every element in the array
 * 
 * @param {Array} arrayOfObjects: The array of objects on which map acts to return the value of the property
 * for each object
 * @param {String} property: The property whose value is to be returned by map
 * @returns: An array whose elements are the values of property for each object in arrayOfObjects
 */
function pluck(arrayOfObjects, property) {
    var outputArray = [];

    outputArray = _.map(arrayOfObjects, function (element, index, collection) {
        return element[property];
    });

    return outputArray;
}
module.exports.pluck = pluck;

/**
 * every: Returns a boolean based on whether every element in a collection returns true
 * when the inputted function is called on the collection
 * 
 * @param {Array or Object} collection: The collection on which func acts
 * @param {Function} func: The function that acts on collection, testing whether each element returns true
 * @returns: true if every element in collection returns true when func is called or false if even one element in collection returns false
 * when func is called
 */
function every(collection, func) {
    if (typeof func === "function") {
        if (Array.isArray(collection) === true) {
            var randomIndex = Math.floor(Math.random() * collection.length);
            if (typeof func(collection[randomIndex], randomIndex, collection) === "boolean") {
                for (var i = 0; i < collection.length; i++) {
                    if (func(collection[i], i, collection) === false) {
                        return false;
                    }
                }
            } else {
                for (var i = 0; i < collection.length; i++) {
                    if (!collection[i]) {
                        return false;
                    }
                }
            }
        } else if (typeof collection === "object" && collection !== null) {
            var arrayOfKeys = Object.keys(collection);
            var randomKey = arrayOfKeys[Math.floor(Math.random() * arrayOfKeys.length)];

            if (typeof func(collection[randomKey], randomKey, collection) === "boolean") {
                for (var key in collection) {
                    if (func(collection[key], key, collection) === false) {
                        return false;
                    }
                }
            } else {
                for (var key in collection) {
                    if (!collection[key]) {
                        return false;
                    }
                }
            }
        }
    } else if (Array.isArray(collection) === true) {
        for (var i = 0; i < collection.length; i++) {
            if (!collection[i]) {
                return false;
            }
        }
    } else if (typeof collection === "object" && collection !== null) {
        for (var key in collection) {
            if (!collection[key]) {
                return false;
            }
        }
    }

    return true;
}
module.exports.every = every;

/**
 * some: Returns a boolean value based on whether a collection has at least one element
 * that returns true when a function is called
 * 
 * @param {Array or Object} collection: The collection whose elements are tested by func
 * @param {Function} func: The function that tests each element of collection 
 * @returns: true if at least one element in collection returns true when func is called
 * or false if every element in collection returns false when func is called
 */

function some(collection, func) {
    if (typeof func === "function") {
        if (Array.isArray(collection) === true) {
            var randomIndex = Math.floor(Math.random() * collection.length);
            if (typeof func(collection[randomIndex], randomIndex, collection) === "boolean") {
                for (var i = 0; i < collection.length; i++) {
                    if (func(collection[i], i, collection) === true) {
                        return true;
                    }
                }
            } else {
                for (var i = 0; i < collection.length; i++) {
                    if (collection[i]) {
                        return true;
                    }
                }
            }
        } else if (typeof collection === "object" && collection !== null) {
            var arrayOfKeys = Object.keys(collection);
            var randomKey = arrayOfKeys[Math.floor(Math.random() * arrayOfKeys.length)];

            if (typeof func(collection[randomKey], randomKey, collection) === "boolean") {
                for (var key in collection) {
                    if (func(collection[key], key, collection) === true) {
                        return true;
                    }
                }
            } else {
                for (var key in collection) {
                    if (collection[key]) {
                        return true;
                    }
                }
            }
        }
    } else if (Array.isArray(collection) === true) {
        for (var i = 0; i < collection.length; i++) {
            if (collection[i]) {
                return true;
            }
        }
    } else if (typeof collection === "object" && collection !== null) {
        for (var key in collection) {
            if (collection[key]) {
                return true;
            }
        }
    }

    return false;
}
module.exports.some = some;

/**
 * reduce: Calls the inputted function on every element of the inputted array,
 * using the returned value of each iteration for the subsequent iteration
 * 
 * @param {Array} array: The array on which func is called
 * @param {Function} func: The function that acts on each element of array
 * @param {*} seed: The initial value that eventually accumulates to the returned value
 * @returns: The accumulated value
 */
_.reduce = function (array, func, seed) {
    var previousResult;
    
    if (seed === undefined) {
        previousResult = array[0];
    } else {
        previousResult = func(seed, array[0], 0);
    }

    for (var i = 1; i < array.length; i++) {
        previousResult = func(previousResult, array[i], i);
    }

    return previousResult;
}
module.exports.reduce = reduce;

/**
 * extend: Copies the contents of inputted objects into the first inputted object
 * 
 * @param {Object} obj1: The object into which the contents of subsequent objects are copied
 * @param {Object} obj2: The object whose contents are copied into obj1
 * @returns: An object whose contents include the contents of all of the objects passed into this function
 */
function extend(obj1, obj2) {
    var arrayOfObjects = Array.from(arguments);

    for (var i = 0; i < arrayOfObjects.length; i++) {
        Object.assign(obj1, arrayOfObjects[i]);
    }

    return obj1;
}
module.exports.extend = extend;