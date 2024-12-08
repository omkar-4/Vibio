const TruncateText = ({ text, maxLength = 100 }) => {
  if (typeof text !== "string" || typeof maxLength !== "number") {
    throw new Error("Invalid arguments: 'text' must be a string and 'maxLength' a number.");
  }

  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

TruncateText( "Hello, world!", 2 );

module.exports = TruncateText;
