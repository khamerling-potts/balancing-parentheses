// long recursive solution:
// function balancingParentheses(string) {
//   debugger;
//   string = string.split("");
//   if (string.length <= 1) {
//     return string.length;
//   }

//   if (string[0] === "(") {
//     const foundIdx = string.indexOf(")", 1);
//     if (foundIdx > 0) {
//       string.splice(foundIdx, 1);
//       string.shift();
//       return balancingParentheses(string.join(""));
//     } else {
//       return string.length;
//     }
//   }
//   return 1 + balancingParentheses(string.slice(1).join(""));
// }

function balancingParentheses(string) {
  let unmatched = 0;
  let opening = 0;
  for (let char of string) {
    if (char === "(") {
      opening++;
      continue;
    }
    //if we're here, it's a closing paren
    if (opening > 0) {
      opening--;
      continue;
    } else {
      unmatched++;
      continue;
    }
  }
  return opening + unmatched;
}

if (require.main === module) {
  // add your own tests in here
  console.log(balancingParentheses("((("));

  console.log("Expecting: 0");
  console.log(balancingParentheses("(()())"));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses("()))"));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(")"));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*
Problem: return the number of additional parantheses needed to be balanced
create variable for opening parens and unmatched closing parens
loop through string
if its an opening paren, increment opening and continue
if its a closing paren
  is opening greater than 0?
  if yes, decrement opening and continue
  if not, increment unmatched and continue

return opening plus unmatched
*/
