// task 1

function task1 (text, char){
    let result = [];
    if (text === "" || char === "") {
        return "";
    }
    else {
      for (let i = 0; i < text.length; i++) {
      result.push(text[i] = char);
      }
    }
    return result.join("");
}

console.log(task1 ("abc", "z"));


// task 2

function addNum (arr) {
    let result = [];
    let item = '';
    for (let i = 0; i < arr.length; i++) {
        item = (i + 1) + ': ' + arr[i];
        result.push(item);
    }
    return result;
}

console.log(addNum(['a', 'b', 'c', 'd']));

// task 3

function maxProduct (arr) {
    const sort = arr.sort((a, b) => b - a);
    return sort[0] * sort[1];
}

console.log(maxProduct([2, 3, 6]));

// task 4

function removeChar (str) {
    let split = str.split(',');
    if (split.length <= 2) {
        return null;
    }
    else {
        return split.slice(1, -1).join(' ');
    }
}


console.log(removeChar ("1,2,3,4"));