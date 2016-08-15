
function convertHTML(str) {

    //Note: This is a super hacky solution and I'm
    //      totally not a fan. This requires a rewrite
    //      using an object or a more elegant solution.

    var newstring;

    newstring = str.replace(/&/g, '&amp;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;')
                   .replace(/"/g, '&quot;')
                   .replace(/'/g, "&apos;")

    return newstring
}

convertHTML("Dolce & Gabbana is < than great");
