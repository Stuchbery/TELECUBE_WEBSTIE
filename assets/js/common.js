function looksLikeMail(str) {
    var lastAtPos = str.lastIndexOf('@');
    var lastDotPos = str.lastIndexOf('.');
    return (lastAtPos < lastDotPos && lastAtPos > 0 && str.indexOf('@@') == -1 && lastDotPos > 2 && (str.length - lastDotPos) > 2);
}

function lstore(csid){try{localStorage.setItem('tcLoggedIn', csid);}catch(e){}}

function lstoreget(csid){try{var logdVal = localStorage.getItem('tcLoggedIn', csid);}catch(e){var logdVal = ''} return logdVal;}

