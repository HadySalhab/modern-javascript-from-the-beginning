let re;

re = /hello/;
re = /hello/i; //i=case insensitive
re = /hello/g; //Global Search

// console.log(re);
// console.log(re.source);

//exec() - Return result in an array or null
// const result = re.exec("Hello world");
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

//test() - Return true or false
//case sensitive
// const result = re.test("Hello");
// console.log(result);

//match() - Return result array or null
// const str = "Hellx There";
// const result = str.match(re);
// console.log(result);

//search() - Returns index of the first match if not found returns -1
// const str = "hello There";
// const result = str.search(re);
// console.log(result);

//replace() - Return new string with some or all matches of a pattern
const string = "hello there";
const newString = string.replace(re, "hi");
console.log(newString);
