function parseLink(markdown) {
    const openBracket = markdown.indexOf('[');
    const closeBracket = markdown.indexOf(']');
    const openParen = markdown.indexOf('(');
    const closeParen = markdown.indexOf(')');

 

    if (
      openBracket === -1 ||
      closeBracket === -1 ||
      openParen === -1 ||
      closeParen === -1
    ) {
      return markdown;
    }

const text = markdown.slice(openBracket + 1, closeBracket );
const url = markdown.slice(openParen + 1, closeParen  );

return `<a href="${url}">${text}</a>`
}


console.log(parseLink("[games] (https://games.com"));
console.log(parseLink("[booksellers] (https://booksellers.com"));