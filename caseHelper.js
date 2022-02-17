function startingUpperCase(string) {
    return string[0].toUpperCase() + string.substring(1);
}

// lastVariableInArray => last variable in array

function splitCamelCase(string) {
    let output = ""
    for (const char of string) {
        if (char === char.toUpperCase()) {
            output += (" " + char.toLowerCase());
        } else{
            output += char;
        }
    }
    return output.trim();
}

module.exports = {startingUpperCase, splitCamelCase}