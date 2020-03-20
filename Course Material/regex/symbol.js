let re;
//Literal Characters
re = /hello/;
re = /hello/i;

//Metacharacter Symbols
re = /^h/; //Must Start With
re = /^h/i; //Must Start With
re = /d$/i; //Must end with
re = /world$/i; //must end with world
re = /^hello$/i; //must start and end with hello
re = /h.llo/i; //Matches any ONE character,
re = /h*llo/i; //Matches any character 0 or more times
re = /gre?a?y/i; //optional sometimes can be written as grey or gray, to avoid conflict. we can use ? to match both
re = /practis?c?e/i;
re = /practis?c?e\?/i; //escaping the '?' functionality if it is included in the string we are trying to match

//Character Set
//Brackets []
re = /gr[ae]y/i; //whatever the character is, it has to be either a or e. (better solution than ? -> because ? allows empty character)
re = /[GF]ray/; //Must be either uppercase G or F
re = /[^GF]ray/i; //Match anything except G or F (do not get confused with the `start with`)
re = /^[GF]ray/i; //Must start with either G or F
re = /[A-Z]ray/; //Match any uppercase letter in the range A to Z
re = /[a-z]ray/; //Match any lowercase from a to z
re = /[A-Za-z]ray/; //Match any lower or upper case from a to z
re = /[0-9]ray/; //Match any digit between 0 to 9
re = /[0-9][0-9]ray/;

//Braces{} - Quantifiers
re = /Hel{2}o/i; //looks at the character before it -> it has to have 2 of this character in this case
re = /Hel{2,4}o/i; // l must occur two to four times
re = /Hel{2,}o/i; //must occur at least two times.

//Parentheses () - Grouping
re = /([0-9]x){3}/;
re = /^([0-9]x){3}$/;

// Shorthand character classes
re = /\w/; //word Character - alphanumeric or _
re = /\w+/; // + means one or more
re = /\W/; // Non word character -> no word, no numeric value , no underscore
re = /\d/; //Match any digit
re = /\d+/; //Match any digit 0 or more times.
re = /\D/; //Match any Non-digit
re = /\s/; //Match whitespace char
re = /\S/; //Match non-whitespace char
re = /Hell\b/i; //Word boundary

//Assertions.
re = /x(?=y)/; //Match x only if followed by y
re = /x(?!y)/; //Match x only if NOT followed by y

const str = " ";

//Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);
