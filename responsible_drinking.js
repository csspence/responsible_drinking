/*
Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of 
water you should drink to not be hungover.

Example parties:
Input 0:
"1 beer"

Output 0:
"1 glass of water"

Explaination 0:
You drank one standard drink

Input 1:
"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"

Output 1:
"10 glasses of water"

Explaination 1:
You drank ten standard drinks

Note:

To keep the things simple, we'll considere that any "numbered thing" in the string is a drink. Even "1 bear" => "1 glass of water" 
or "1 chainsaw and 2 pools" => "3 glasses of water"...
*/

const hydrate = (s) => {
  const numObj = {
    1 : '1',
    2 : '2',
    3 : '3',
    4 : '4',
    5 : '5',
    6 : '6',
    7 : '7',
    8 : '8',
    9 : '9',
    0 : '0'
  }
  let currentNum = '';
  let waters = 0;
  for(let i = 0; i < s.length; i++) {
    if(i === 0 && numObj[s[i]] === s[i]) {
      currentNum += s[i];
    }
    if(i > 0 && i !== s.length - 1 && numObj[s[i]] === s[i]) {
      currentNum += s[i];
    }
    if(i > 0 && numObj[s[i]] !== s[i] && currentNum.length > 0) {
      waters += parseInt(currentNum);
      currentNum = '';
    }
    if(i === s.length - 1 && numObj[s[i]] === s[i]) {
      currentNum += s[i];
      waters += parseInt(currentNum);
    }
  }

  return waters === 1 ? waters + ' glass of water' : waters + ' glasses of water';
}