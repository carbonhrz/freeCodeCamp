function rot13(str) {
  let word = str;
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) < 78 && word.charCodeAt(i) > 64 )
    result += String.fromCharCode(word.charCodeAt(i) + 13);
    if (word.charCodeAt(i) > 77 && word.charCodeAt(i) < 91 )
    result += String.fromCharCode(word.charCodeAt(i) - 13);
    else if (word.charCodeAt(i) < 65 || word.charCodeAt(i) > 90) {
      result += String.fromCharCode(word.charCodeAt(i));
    }
  }

  console.log(result);
  return result;
}

rot13("SERR PBQR PNZC");
