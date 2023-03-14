function rot13(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    // Get the character code of the current character
    const charCode = str.charCodeAt(i);
    let decodedCharCode;
    if (charCode >= 65 && charCode <= 90) {
      // Shift the character code by 13
      decodedCharCode = ((charCode - 65 + 13) % 26) + 65;
    } else {
      // Keep non-alphabetic characters as-is
      decodedCharCode = charCode;
    }
    // Convert the character code back to a character and add it to the result string
    result += String.fromCharCode(decodedCharCode);
  }
  return result;
}
