
function spinalCase(str) {

    // matches whitespace or underscare
    var regex = /\s+|_+/g;
    
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2') 
    return str.replace(regex, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap and the Andy_griffith_show');
