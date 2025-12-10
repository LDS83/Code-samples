function textToBinary(str) {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(str);
    return Array.from (bytes)
    .map(b => b.toString(2).padStart(8, '0'))
    .join(' ');
}// Function to convert text to Binary------ 

// Function to binary to Text----- follows---
function binaryToText(binaryStr) {
    const bytes = binaryStr.trim().split(/\s+/)
    .map(bin => parseInt(bin, 2));
    const decoder = new TextDecoder();
    return decoder.decode(new Uint8Array(bytes));
}


/// Example Usage:

const text = "Help";
const bin = textToBinary(text);
console.log("Binary:", bin);

const back = binaryToText(bin);
console.log("Text:", back);


