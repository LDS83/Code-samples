// Code to format  and validate phone numbers:

function formatPhoneNumber(phone) {
    let cleaned = ('' +phone).replace(/\D/g, '');

    // Check if phone number has 10 digits

    if (cleaned.length === 10) {
        let area = cleaned.slice(0, 3);
        let middle = cleaned.slice(3, 6);
        let last = cleaned.slice(6);


        return `(${area}) ${middle}-${last}`;


    }

    else if (cleaned.length === 11 && cleaned[0] === '1') {
        let area = cleaned.slice(1,4);
        let middle = cleaned.slice(4, 7);
        let last  = cleaned.slice(7);


        return `+1 (${area}) ${middle}-${last}`;
    }

    else {
        return 'Invalid Phone Number , Please try again.'
    }

   
};// end of function

// Test cases:

console.log(formatPhoneNumber("558792587"));
console.log(formatPhoneNumber("12367590000"));