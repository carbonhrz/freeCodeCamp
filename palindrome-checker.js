function palindrome(str) {
  let status = false;
  let word = str.toLowerCase();
  let ourRegex = /[a-z, 0-9][\s]*/gi;
  let trimmedWord = word.match(ourRegex).join('').replace(/\s+/g, '');
  let counterFront = 0;
  let counterEnd = trimmedWord.length - 1;
  if (trimmedWord.length % 2 != 0) {
    for (let i = 0; i < trimmedWord.length; i++) {
      if (trimmedWord[counterFront] != trimmedWord[counterEnd]) {
        status = false;
      } else {
        status = true;
      }
      counterFront++;
      counterEnd--;
    }
    }
    if (trimmedWord.length % 2 == 0) {
    for (let i = 0; i < (trimmedWord.length / 2); i++) {
      if (trimmedWord[counterFront] != trimmedWord[counterEnd]) {
        status = false;
        break;
      } else {
        status = true;
      }
      counterFront++;
      counterEnd--;
    }
    }

  return status;
}

palindrome("eye");
