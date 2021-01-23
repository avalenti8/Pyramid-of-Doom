const fs = require("fs")
let stringa = ""

fs.readFile("./1.txt", function(error, data) {
    if (error) {
        handleError(error);
    }
    const dati = data
    stringa += dati
    stringa += " "

    fs.readFile("./2.txt", function(error, data) {
        if (error) {
            handleError(error);
        }
        const dati = data
        stringa += dati
        stringa += " "

        fs.readFile("./3.txt", function(error, data) {
            if (error) {
                handleError(error);
            }
            const dati = data
            stringa += dati

            fs.writeFile("./4.txt", stringa, function(error) {
                if (error) {
                    handleError(error);
                }
            });
        });
    });
});
