
const caesarChiper = (str, key) => {
    let encryption = '';
    let strCharacters = str.split("");

    strCharacters.forEach(char => {
        const charCode = char.charCodeAt(0);
        
        if (charCode >= 97 && charCode <= 122) {
            let code = charCode + key;

            if (code <= 122) {
                encryption += String.fromCharCode(code);
            } else {
                code = ( (code - 122) - 1 ) + 97;
                encryption += String.fromCharCode(code);
            }

        } else if ( charCode >= 65 && charCode <= 90 ) {

            let code = charCode + key;

            if (code <= 90) {
                encryption += String.fromCharCode(code);
            } else {
                code = ( (code - 90) - 1 ) + 65;
                encryption += String.fromCharCode(code);
            }

        } else {
            encryption += char;
        }
    });
    console.log(encryption);

    return encryption;

}

export { caesarChiper };