// Decrypts a Caesar - shifted string by a given shift value;

// Preserve case and numbers
// eslint-disable-next-line no-undef
function caesarDecrypt(cipherText, shift) {
    const aCode = 'a'.charCodeAt(0);
    const zCode = 'z'.charCodeAt(0);
    const ACODE = 'A'.charCodeAt(0);
    const ZCODE = 'Z'.charCodeAt(0);

    const normalize = (code , base ) => {
        const offSet = (code - base - (shift % 26) + 26) % 26;
        return base + offSet;
    };

    let result = '';
    for (const ch of cipherText) {
        const code = ch.charCodeAt(0);
        if (code >= aCode && code <= zCode) {
            result += String.fromCharCode(normalize(code, aCode));
        } else if (code >= ACODE && code <= ZCODE) {
            result += String.fromCharCode(normalize(code, ACODE));
        } else {
            result += ch;
        }
    }

    return result;
}

// eslint-disable-next-line spellcheck/spell-checker
const EncryptedMessage = "Khoor Zruog!, 3";
const shiftedValue = 3;
console.log(caesarDecrypt(EncryptedMessage, shiftedValue));

