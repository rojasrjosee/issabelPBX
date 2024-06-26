var whitespace = " \t\n\r";
var decimalPointDelimiter = ".";
var defaultEmptyOK = false;
up.fragment.config.runScripts = true;
up.fragment.config.mainTargets.push('.content')
var ispopover=false;

// sprintf
!function(){"use strict";var g={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function y(e){return function(e,t){var r,n,i,s,a,o,p,c,l,u=1,f=e.length,d="";for(n=0;n<f;n++)if("string"==typeof e[n])d+=e[n];else if("object"==typeof e[n]){if((s=e[n]).keys)for(r=t[u],i=0;i<s.keys.length;i++){if(null==r)throw new Error(y('[sprintf] Cannot access property "%s" of undefined value "%s"',s.keys[i],s.keys[i-1]));r=r[s.keys[i]]}else r=s.param_no?t[s.param_no]:t[u++];if(g.not_type.test(s.type)&&g.not_primitive.test(s.type)&&r instanceof Function&&(r=r()),g.numeric_arg.test(s.type)&&"number"!=typeof r&&isNaN(r))throw new TypeError(y("[sprintf] expecting number but found %T",r));switch(g.number.test(s.type)&&(c=0<=r),s.type){case"b":r=parseInt(r,10).toString(2);break;case"c":r=String.fromCharCode(parseInt(r,10));break;case"d":case"i":r=parseInt(r,10);break;case"j":r=JSON.stringify(r,null,s.width?parseInt(s.width):0);break;case"e":r=s.precision?parseFloat(r).toExponential(s.precision):parseFloat(r).toExponential();break;case"f":r=s.precision?parseFloat(r).toFixed(s.precision):parseFloat(r);break;case"g":r=s.precision?String(Number(r.toPrecision(s.precision))):parseFloat(r);break;case"o":r=(parseInt(r,10)>>>0).toString(8);break;case"s":r=String(r),r=s.precision?r.substring(0,s.precision):r;break;case"t":r=String(!!r),r=s.precision?r.substring(0,s.precision):r;break;case"T":r=Object.prototype.toString.call(r).slice(8,-1).toLowerCase(),r=s.precision?r.substring(0,s.precision):r;break;case"u":r=parseInt(r,10)>>>0;break;case"v":r=r.valueOf(),r=s.precision?r.substring(0,s.precision):r;break;case"x":r=(parseInt(r,10)>>>0).toString(16);break;case"X":r=(parseInt(r,10)>>>0).toString(16).toUpperCase()}g.json.test(s.type)?d+=r:(!g.number.test(s.type)||c&&!s.sign?l="":(l=c?"+":"-",r=r.toString().replace(g.sign,"")),o=s.pad_char?"0"===s.pad_char?"0":s.pad_char.charAt(1):" ",p=s.width-(l+r).length,a=s.width&&0<p?o.repeat(p):"",d+=s.align?l+r+a:"0"===o?l+a+r:a+l+r)}return d}(function(e){if(p[e])return p[e];var t,r=e,n=[],i=0;for(;r;){if(null!==(t=g.text.exec(r)))n.push(t[0]);else if(null!==(t=g.modulo.exec(r)))n.push("%");else{if(null===(t=g.placeholder.exec(r)))throw new SyntaxError("[sprintf] unexpected placeholder");if(t[2]){i|=1;var s=[],a=t[2],o=[];if(null===(o=g.key.exec(a)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(s.push(o[1]);""!==(a=a.substring(o[0].length));)if(null!==(o=g.key_access.exec(a)))s.push(o[1]);else{if(null===(o=g.index_access.exec(a)))throw new SyntaxError("[sprintf] failed to parse named argument key");s.push(o[1])}t[2]=s}else i|=2;if(3===i)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");n.push({placeholder:t[0],param_no:t[1],keys:t[2],sign:t[3],pad_char:t[4],align:t[5],width:t[6],precision:t[7],type:t[8]})}r=r.substring(t[0].length)}return p[e]=n}(e),arguments)}function e(e,t){return y.apply(null,[e].concat(t||[]))}var p=Object.create(null);"undefined"!=typeof exports&&(exports.sprintf=y,exports.vsprintf=e),"undefined"!=typeof window&&(window.sprintf=y,window.vsprintf=e,"function"==typeof define&&define.amd&&define(function(){return{sprintf:y,vsprintf:e}}))}();

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(a){var f,b,c,i,j,g,d,h="",e=0;for(a=Base64._utf8_encode(a);e<a.length;)f=a.charCodeAt(e++),b=a.charCodeAt(e++),c=a.charCodeAt(e++),i=f>>2,j=(3&f)<<4|b>>4,g=(15&b)<<2|c>>6,d=63&c,isNaN(b)?g=d=64:isNaN(c)&&(d=64),h=h+this._keyStr.charAt(i)+this._keyStr.charAt(j)+this._keyStr.charAt(g)+this._keyStr.charAt(d);return h},decode:function(a){var g,h,i,j,e,c,f,d="",b=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");b<a.length;)j=this._keyStr.indexOf(a.charAt(b++)),e=this._keyStr.indexOf(a.charAt(b++)),c=this._keyStr.indexOf(a.charAt(b++)),f=this._keyStr.indexOf(a.charAt(b++)),g=j<<2|e>>4,h=(15&e)<<4|c>>2,i=(3&c)<<6|f,d+=String.fromCharCode(g),64!=c&&(d+=String.fromCharCode(h)),64!=f&&(d+=String.fromCharCode(i));return Base64._utf8_decode(d)},_utf8_encode:function(c){c=c.replace(/\r\n/g,"\n");for(var b="",d=0;d<c.length;d++){var a=c.charCodeAt(d);a<128?b+=String.fromCharCode(a):a>127&&a<2048?(b+=String.fromCharCode(a>>6|192),b+=String.fromCharCode(63&a|128)):(b+=String.fromCharCode(a>>12|224),b+=String.fromCharCode(a>>6&63|128),b+=String.fromCharCode(63&a|128))}return b},_utf8_decode:function(c){for(var d="",a=0,b=c1=c2=0;a<c.length;)(b=c.charCodeAt(a))<128?(d+=String.fromCharCode(b),a++):b>191&&b<224?(c2=c.charCodeAt(a+1),d+=String.fromCharCode((31&b)<<6|63&c2),a+=2):(c2=c.charCodeAt(a+1),c3=c.charCodeAt(a+2),d+=String.fromCharCode((15&b)<<12|(63&c2)<<6|63&c3),a+=3);return d}}

jQuery.cookie = function(key, value, options) {
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);
        if (value === null || value === undefined) {
            options.expires = -1;
        }
        if (typeof options.expires === 'number') {
            var days = options.expires,
                t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }
        value = String(value);
        return (document.cookie = [encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
    }
    options = value || {};
    var result, decode = options.raw ? function(s) {
            return s;
        } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};

function hideSelects(b) {
    var allelems = document.all.tags('SELECT');
    if (allelems != null) {
        var i;
        for (i = 0; i < allelems.length; i++) {
            allelems[i].style.visibility = (b ? 'hidden' : 'inherit');
        }
    }
}

function doHideSelects(event) {
    hideSelects(true);
}

function doShowSelects(event) {
    hideSelects(false);
}

function setDestinations(theForm, numForms) {
    for (var formNum = 0; formNum < numForms; formNum++) {
        var whichitem = 0;
        while (whichitem < theForm['goto' + formNum].length) {
            if (theForm['goto' + formNum][whichitem].checked) {
                theForm['goto' + formNum].value = theForm['goto' + formNum][whichitem].value;

            }
            whichitem++;
        }
    }
}

function validateDestinations(theForm, numForms, bRequired) {
    var valid = true;
    for (var formNum = 0; formNum < numForms && valid == true; formNum++) {
        valid = validateSingleDestination(theForm, formNum, bRequired);
    }
    return valid;
}

function warnInvalid(theField, s) {
    if (theField) {
        theField.focus();
        try { theField.select();  } catch(e) {}
    }
    Swal.fire({icon:'warning',text:s,timer:5000});
    return false;
}

function isAlphanumeric(s) {
    var i;
    if (isEmpty(s)) if (isAlphanumeric.arguments.length >= 1) return defaultEmptyOK;
    else return (isAlphanumeric.arguments[1] == true);
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (!(isUnicodeLetter(c) || isDigit(c))) return false;
    }
    return true;
}

function isUnicodeLetter(c) {
    return new RegExp(/[ a-zA-Z'\\\/\&\(\)\-\u3000-\u3002\uFF10-\uFF19\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC-\u002F-\u005c]/).test(c);
}

function isCorrectLengthExtensions(s) {
    return isCorrectLength(s, 50);
}

function isCorrectLength(s, l) {
    var i;
    if (lengthInUtf8Bytes(s) > l) return false;
    else return true;
}

function lengthInUtf8Bytes(str) {
    var m = encodeURIComponent(str).match(/%[89ABab]/g);
    return str.length + (m ? m.length : 0);
}

function isInteger(s) {
    var i;
    if (isEmpty(s)) if (isInteger.arguments.length == 1) return defaultEmptyOK;
    else return (isInteger.arguments[1] == true);
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (!isDigit(c)) {
            return false;
        }
    }
    return true;
}

function isFloat(s) {
    var i;
    var seenDecimalPoint = false;
    if (isEmpty(s)) if (isFloat.arguments.length == 1) return defaultEmptyOK;
    else return (isFloat.arguments[1] == true);
    if (s == decimalPointDelimiter) return false;
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if ((c == decimalPointDelimiter) && !seenDecimalPoint) seenDecimalPoint = true;
        else if (!isDigit(c)) return false;
    }
    return true;
}

function checkNumber(object_value) {
    if (object_value.length == 0) return true;
    var start_format = " .+-0123456789";
    var number_format = " .0123456789";
    var check_char;
    var decimal = false;
    var trailing_blank = false;
    var digits = false;
    check_char = start_format.indexOf(object_value.charAt(0))
    if (check_char == 1) decimal = true;
    else if (check_char < 1) return false;
    for (var i = 1; i < object_value.length; i++) {
        check_char = number_format.indexOf(object_value.charAt(i))
        if (check_char < 0) return false;
        else if (check_char == 1) {
            if (decimal) return false;
            else decimal = true;
        } else if (check_char == 0) {
            if (decimal || digits) trailing_blank = true;
        } else if (trailing_blank) return false;
        else digits = true;
    }
    return true
}

function isEmpty(s) {
    return ((s == null) || (s.length == 0));
}

function isWhitespace(s) {
    var i;
    if (isEmpty(s)) return true;
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (whitespace.indexOf(c) == -1) {
            return false;
        }
    }
    return true;
}

function isURL(s) {
    var i;
    if (isEmpty(s)) if (isURL.arguments.length == 1) return defaultEmptyOK;
    else return (isURL.arguments[1] == true);
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (!(isURLChar(c) || isDigit(c))) return false;
    }
    return true;
}

function isPINList(s) {
    var i;
    if (isEmpty(s)) if (isPINList.arguments.length >= 1) return defaultEmptyOK;
    else return (isPINList.arguments[1] == true);
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (!isDigit(c) && c != ",") return false;
    }
    return true;
}

function isCallerID(s) {
    var i;
    if (isEmpty(s)) if (isCallerID.arguments.length >= 1) return defaultEmptyOK;
    //else return (isCallerID.arguments[1] == true);
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (!(isCallerIDChar(c))) return false;
    }
    return true;
}

function isDialpattern(s) {
    var i;
    if (isEmpty(s)) if (isDialpattern.arguments.length >= 1) return defaultEmptyOK;
    //else return (isDialpattern.arguments[1] == true);
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (!isDialpatternChar(c)) {
            if (c.charCodeAt(0) != 13 && c.charCodeAt(0) != 10) {
                return false;
            }
        }
    }
    return true;
}

function isDialrule(s) {
    var i;
    if (isEmpty(s)) if (isDialrule.arguments.length >= 1) return defaultEmptyOK;
    else return (isDialrule.arguments[1] == true);
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (!isDialruleChar(c)) {
            if (c.charCodeAt(0) != 13 && c.charCodeAt(0) != 10) {
                return false;
            }
        }
    }
    return true;
}

function isDialIdentifier(s) {
    var i;
    if (isEmpty(s)) if (isDialIdentifier.arguments.length >= 1) return defaultEmptyOK;
    else return (isDialIdentifier.arguments[1] == true);
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (!isDialDigitChar(c) && (c != "w") && (c != "W")) return false;
    }
    return true;
}

function isDialDigits(s) {
    var i;
    if (isEmpty(s)) if (isDialDigits.arguments.length >= 1) return defaultEmptyOK;
    else return (isDialDigits.arguments[1] == true);
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (!isDialDigitChar(c)) return false;
    }
    return true;
}

function isIVROption(s) {
    var i;
    if (isEmpty(s)) if (isIVROption.arguments.length >= 1) return defaultEmptyOK;
    else return (isIVROption.arguments[1] == true);
    if (s.length == 1) {
        var c = s.charAt(0);
        if ((!isDialDigitChar(c)) && (c != "i") && (c != "t")) return false;
    } else {
        for (i = 0; i < s.length; i++) {
            var c = s.charAt(i);
            if (!isDialDigitChar(c)) return false;
        }
    }
    return true;
}

function isFilename(s) {
    var i;
    if (isEmpty(s)) if (isFilename.arguments.length >= 1) return defaultEmptyOK;
    else return (isFilename.arguments[1] == true);
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (!isFilenameChar(c)) return false;
    }
    return true;
}

function isInside(s, c) {
    var i;
    if (isEmpty(s)) {
        return false;
    }
    for (i = 0; i < s.length; i++) {
        var t = s.charAt(i);
        if (t == c) return true;
    }
    return false;
}

function isEmail(s) {
    if (isEmpty(s)) {
        if (isEmail.arguments.length >= 1) {
            return defaultEmptyOK;
        }
    }
    var emailAddresses = s.split(",");
    var pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
    var emailCount = 0;
    for (e in emailAddresses) {
        emailCount += (pattern.test(emailAddresses[e]) === true) ? 1 : 0;
    }
    if (emailAddresses.length == emailCount) {
        return true;
    }
    return false;
}

function isDigit(c) {
    return new RegExp(/[0-9]/).test(c);
}

function isLetter(c) {
    return new RegExp(/[ a-zA-Z'\&\(\)\-\/]/).test(c);
}

function isURLChar(c) {
    return new RegExp(/[a-zA-Z=:,%#\.\-\/\?\&]/).test(c);
}

function isCallerIDChar(c) {
    return new RegExp(/[ a-zA-Z0-9:_,-<>\(\)\"&@\.\+]/).test(c);
}

function isDialpatternChar(c) {
    return new RegExp(/[-0-9\[\]\+\.\|ZzXxNn\*\#_!\/]/).test(c);
}

function isDialruleChar(c) {
    return new RegExp(/[0-9\[\]\+\.\|ZzXxNnWw\*\#\_\/]/).test(c);
}

function isDialDigitChar(c) {
    return new RegExp(/[0-9\*#]/).test(c);
}

function isFilenameChar(c) {
    return new RegExp(/[-0-9a-zA-Z\_]/).test(c);
}

function validateSingleDestination(theForm, formNum, bRequired) {
    var gotoType = theForm.elements['goto' + formNum].value;
    if (bRequired && gotoType == '') {
        Swal.fire({icon:'warning',text:ipbx.msg.framework.validateSingleDestination.required, timer:5000});
        return false;
    } else {
        if (gotoType == 'custom') {
            var gotoFld = theForm.elements['custom' + formNum];
            var gotoVal = gotoFld.value;
            if (gotoVal.indexOf('custom-') == -1) {
                Swal.fire({icon:'warning',text:ipbx.msg.framework.validateSingleDestination.error, timer:5000});
                gotoFld.focus();
                return false;
            }
        }
    }
    return true;
}

function weakSecret() {
    var password = document.getElementById('devinfo_secret').value;
    var origional_password = document.getElementById('devinfo_secret_origional').value;
    if (password == origional_password) {
        return false;
    }
    if (password.length <= 5) {
        Swal.fire({icon:'warning',text:ipbx.msg.framework.weakSecret.length, timer:5000});
        return true;
    }
    if (password.match(/[a-z].*[a-z]/i) == null || password.match(/\d\D*\d/) == null) {
        Swal.fire({icon:'warning',text:ipbx.msg.framework.weakSecret.types, timer:5000});
        return true;
    }
    return false;
}
$.urlParam = function(name) {
    var match = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var popover_box;
var popover_box_class;
var popover_box_mod;
var popover_select_id;

function bind_close_alerts() {
  (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
    const $notification = $delete.parentNode;

    $delete.addEventListener('click', () => {
      $notification.parentNode.removeChild($notification);
    });
  });
}

function bind_dests_double_selects() {

    //$('.destdropdown:not(".haschosen")').unbind().bind('change', function(e) {
    $('.destdropdown:not(".haschosen")').off('change').on('change', function(e) {
        $(this).next('div').removeClass('error');
        var id = $(this).data('id');
        var id = typeof id == 'undefined' ? '' : id;
        var dest = $(this).val();
        $('.destdropdown2.goto'+id).addClass('is-hidden');
        if(dest!='') { 
            dd1 = $('#' + dest + '.destdropdown2');
            dd2 = $('#' + dest + '_chosen.destdropdown2.goto'+id);
            dd2.removeClass('is-hidden');
            cur_val = dd1.val();
            if (dd1.children().length > 1 && cur_val == 'popover') {
                dd1.val('');
                cur_val = '';
            }
            if (cur_val == 'popover') {
                $('#' + dest + '.destdropdown2').trigger('change');
            }
        }
    });

    //$('.destdropdown2:not(".haschosen")').unbind().bind('change', function() {
    $('.destdropdown2:not(".haschosen")').off('change').on('change', function() {
        var dest = $(this).val();
        if (dest == "popover") {
            var urlStr = $(this).data('url') + '&fw_popover=1';
            var id = $(this).data('id');
            popover_select_id = this.id;
            popover_box_class = $(this).data('class');
            popover_box_mod = $(this).data('mod');

            Swal.fire({
                html: '<iframe data-popover-class="' + popover_box_class + '" id="popover-frame" frameBorder="0" src="' + urlStr + '" width="100%" height="95%" onload="popOverDisplay(this)"></iframe>',
                focusConfirm: false,
                confirmButtonText: ipbx.msg.framework.save,
                cancelButtonText: ipbx.msg.framework.cancel,
                showConfirmButton: true,
                showCancelButton: true,
                heightAuto: false,
                preConfirm: (value) => {
                    pform = $('#popover-frame').contents().find('.popover-form').first();
                    if (pform.length == 0) {
                        pform = $('#popover-frame').contents().find('form').first();
                    }
                    pform.trigger('submit');
                    return false;
                },
                customClass: {'popup':'swal-popover','actions':'popover_actions'},
            });

        } else {
            var last = $.data(this, 'last', dest);
        }
    });

}

function closePopOver(drawselects) {
    var options = $('select.' + popover_box_class + ' option', $('<div>' + drawselects + '</div>'));
    $('select.' + popover_box_class).each(function() {
        if (this.id == popover_select_id) {
            $(this).empty().append(options.clone());
        } else {
            dv = $(this).val();
            $(this).empty().append(options.clone()).val(dv);
        }
    });
    if (popover_box_class != popover_box_mod) {
        var options = {};
        $('select.' + popover_box_mod).each(function() {
            var data_class = $(this).data('class');
            if (data_class != popover_box_class) {
                if (typeof options[data_class] == 'undefined') {
                    options[data_class] = $('select.' + data_class + ' option', $('<div>' + drawselects + '</div>'));
                }
                dv = $(this).val();
                $(this).empty().append(options[data_class].clone()).val(dv);
            }
        });
    }
    $("body").css({
        overflow: 'inherit'
    });
    $('#popover-box-id').html('');
    Swal.close();
    $('select.destdropdown2').trigger('chosen:updated');
}

function popOverDisplay(iframe) {
    iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
    $("#popover-frame").contents().find('form:first').find('input').filter(':visible:first').trigger('focus');
    return;
}

function ipbx_reload_confirm() {
    if (!ipbx.conf.RELOADCONFIRM) {
        ipbx_reload();
    }
    sweet_confirm(ipbx.msg.framework.confirmreload).then( response => { 
        if(response==1) {  
            ipbx_reload();
        } 
    })
}

function ipbx_reload() {

    $('body').css('pointerEvents','none');
    $('#button_reload').addClass('is-loading');

    $.ajax({
        type: 'POST',
        url: document.location.pathname,
        data: "handler=reload",
        dataType: 'json',
        success: function(data) {

            ipbx.conf.reload_needed=false;
            $('body').css('pointerEvents','');
            $('#button_reload').removeClass('is-loading');

            if (!data.status) {
                var r = '<h3>' + data.message + '</h3>' + '<a href="#" id="error_more_info">'+ipbx.msg.framework.click_here_for_more_info+'</a>' + '<div class="box" style="display:none; width:99%; overflow: scroll; max-height:200px;">' + data.retrieve_conf + "<\/pre>";
                if (data.num_errors) {
                    r += '<div>' + data.num_errors + ipbx.msg.framework.reload_unidentified_error + "</div>";
                }
                issabelpbx_reload_error(r);
            } else {
                if (ipbx.conf.DEVELRELOAD != 'true') {
                    toggle_reload_button('hide');
                }
            }
        },
        error: function(reqObj, status) {
            $('body').css('pointerEvents','');
            $('#button_reload').removeClass('is-loading');
            var moreinfo = '<a href="#" id="error_more_info">'+ipbx.msg.framework.xhr_response_text+'</a><div class="box" style="display:none; width:99%; overflow: scroll; max-height:200px;">' + reqObj.responseText + '</div>';
            var r = '<div class="my-2">' + ipbx.msg.framework.invalid_response + '</div><div class="my-2">' + ipbx.msg.framework.xhr_response_code + ": " + reqObj.status + '</div>'+moreinfo+'<div class="my-2">' + ipbx.msg.framework.jquery_status + ': ' + status + '</div>';
            issabelpbx_reload_error(r);
        }
    });
}

function issabelpbx_reload_error(txt) {
    Swal.fire({
        title: ipbx.msg.framework.error,
        html: txt,
        customClass: 'swal-wide',
      })
}

function toggle_reload_button(action) {
    switch (action) {
        case 'show':
            $('#button_reload').show().css('display', 'inline-block');
            break;
        case 'hide':
            $('#button_reload').addClass('animate__zoomOut');
            setTimeout(function(){
                  $('#button_reload').removeClass('animate__zoomOut');
                  $('#button_reload').hide();
            },600)
            break;
    }
}

$(function() {

    // Language menu
    $('body').on('click','.onelang',function(evt) {
        $.cookie('lang', $(this).data('lang'));
        window.location.reload();
    });

    $('body').on('click','#mainformsubmit',function(evt) {
        
        if(typeof $(evt.target).data('target') != 'undefined') {
            frm = $(evt.target).data('target');
            $('#'+frm).trigger('submit');
        } else {
            $('#mainform').trigger('submit');
        }
    });

    $('body').on('click','#error_more_info',function() {
        $(this).next('div').toggle();
        return false;
    })

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

    $('body').on('click','#login_admin',function() {
        Swal.fire({
          imageUrl: './images/issabelpbx_small.png',
          imageWidth: 244,
          imageHeight: 81,
          imageAlt: 'Issabel Logo',
          html: `<div>${ipbx.msg.framework.enter_crendentials}</div><input type="text" id="login" class="swal2-input" placeholder="${ipbx.msg.framework.username}">
          <input type="password" id="password" class="swal2-input" placeholder="${ipbx.msg.framework.password}">`,
          confirmButtonText: ipbx.msg.framework.continuemsg,
          focusConfirm: false,
          preConfirm: () => {
            const login = Swal.getPopup().querySelector('#login').value
            const password = Swal.getPopup().querySelector('#password').value
            if (!login || !password) {
              Swal.showValidationMessage('Please fill all the fields')
            }
            return { login: login, password: password }
          },
          didOpen: () => {
                $('.swal2-container').find('#password').on('keypress',function(event) { 
                    if(event.keyCode==13) {
                        $('.swal2-actions button:first').trigger('click');
                    } else if(event.keyCode==27) {
                        $('.swal2-container').find('#password').val('');
                    }
                });
            }
        }).then((result) => {
          var form = $('#loginform');
          $("input[name=username]").val(result.value.login);
          $("input[name=password]").val(result.value.password);
          $(form).trigger('submit');
        });
    });

});

function sweet_toast(icon,msg,timer=3000) {
    Toast.fire({
        icon: icon,
        title: msg,
        timer: timer,
        didDestroy: function() {
            fetch(window.location.href+'&quietmode=1&action=resetnotifications').then(response=>{ });
        }
    });
}

function sweet_alert(msg) {
    Swal.fire({icon:'error',text:msg});
    return false;
}

function sweet_prompt(title,html,field,regexvalidation='',validationmsg='Invalid Data') {
    return new Promise(function(resolve) {
        Swal.fire({
            title: title,
            html: html,
            focusConfirm: false,
            preConfirm: () => {
                const value = Swal.getPopup().querySelector('#'+field).value
                if (!value) {
                    Swal.showValidationMessage(`Please fill`)
                }
                if(regexvalidation!='') {
                    if(!value.match(regexvalidation)) {
                        Swal.showValidationMessage(validationmsg)
                    }
                }
                return { value: value }
            }
        }).then((result) => {
            resolve(`${result.value.value}`)
        });
    });
}

function sweet_confirm(msg) {
    return new Promise(function(resolve) {
            Swal.fire({
                title: ipbx.msg.framework.areyousure,
                text: msg,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: ipbx.msg.framework.yes,
                cancelButtonText: ipbx.msg.framework.cancel
            }).then((result) => {
                if (result.isConfirmed) {
                    resolve(1);
                } else {
                    //return false;
                    resolve(0);
                }
            });
    });
}

function doready() {

    bind_dests_double_selects();

    bind_close_alerts();

    $('#menusearch').on('search',function() { searchMenu($(this).val());});
    $('#menusearch').on('keyup',function() { searchMenu($(this).val());});

    // Help info tooltips
    $("a.info").each(function() {
        $(this).after('<span class="infohelp">?<span>' + $(this).find('span').html() + '</span></span>');
        $(this).find('span').remove();
        $(this).replaceWith($(this).html())
    });

    $(document).on('mouseenter', '.infohelp', function() {

        side = ipbx.conf.text_dir == 'lrt' ? 'left' : 'right';
        var pos = $(this).offset();
        var offset = (200 - pos.side) + "px";
        bulma_fixed_bar = 0;
        if($('html')[0].className=='has-navbar-fixed-top') {
            bulma_fixed_bar = '3.5rem';
        }
        val = 'calc('+pos.top+'-'+bulma_fixed_bar+')';
        $(this).find("span").css(side, offset).css('top',val).stop(true, true).delay(500).animate({ opacity: "show" }, 750);

    }).on('mouseleave', '.infohelp', function() {
        $(this).find("span").stop(true, true).animate({
            opacity: "hide"
        }, "fast");
    });

    $('.guielToggle').on('click',function() {
        var txt = $(this).find('.guielToggleBut');
        var el = $(this).data('toggle_class');
        var section = $.urlParam('display') + '#' + el;
        var btcon = txt.html().replace(/ $/g, '');
        switch (btcon.indexOf('minus')) {
            case -1:
                txt.html('<i class="fa fa-minus-square-o"></i>  ');
                $('.' + el).show();
                guielToggle = $.parseJSON($.cookie('guielToggle')) || {};
                if (guielToggle.hasOwnProperty(section)) {
                    guielToggle[section] = true;
                    $.cookie('guielToggle', JSON.stringify(guielToggle));
                }
                break;
           default:
                txt.html('<i class="fa fa-plus-square-o"></i> ');
                $('.' + el).hide();
                guielToggle = $.parseJSON($.cookie('guielToggle')) || {};
                guielToggle[section] = false;
                $.cookie('guielToggle', JSON.stringify(guielToggle));
                break;

        }
    });

    // set initial right nav menu scroll position
    initial_rnav();

    $('.module_menu_button').on('hover',function() {
        $(this).trigger('click');
        var sh = $(window).height();
        $('.menubar.ui-menu').each(function() {
            if ($(this).css('display') == 'block') {
                $(this).css('max-height', '');
                if ($(this).height() > sh) {
                    $(this).css('max-height', sh - 50 + 'px');
                }
            }
        });
    });
    if (ipbx.conf.reload_needed) {
        toggle_reload_button('show');
    }

    $('.sortable li').on('click',function(event) {
        if ($(event.target).is(':checkbox')) {
            return true;
        }
        var checkbox = $(this).find('input');
        checkbox.prop('checked', !checkbox[0].checked);
        return false;
    });
    $('.audio-codecs').on('click',function(event) {
        event.stopPropagation();
    });
    $('.ui-menu-item').on('click',function() {
        go = $(this).find('a').attr('href');
        if (go && !$(this).find('a').hasClass('ui-state-disabled')) {
            document.location.href = go;
        }
    })
    $('#button_reload').on('click',function() {
        if (ipbx.conf.RELOADCONFIRM === true) {
            ipbx_reload_confirm();
        } else {
            ipbx_reload();
        }
    });

    $('#MENU_BRAND_IMAGE_TANGO_LEFT').on('click',function() {
        window.open($(this).data('brand_image_issabelpbx_link_left'), '_newtab');
    });

    var extselector = $('input.extdisplay,input[type=text][name=extension],input[type=text][name=extdisplay],input[type=text][name=account]').not('input.noextmap');
    if (extselector.length > 0) {
        extselector.after(" <p class='help is-hidden is-danger'></p>").on('keyup',function() {
            if (typeof extmap[this.value] == "undefined" || $(this).data('extdisplay') == this.value) {
                $(this).removeClass('is-danger').next('p').addClass('is-hidden');
            } else {
                parent_width = $(this).width() - 50;
                var valtext = sprintf(ipbx.msg.framework.validation.duplicate, this.value, extmap[this.value]);
                $(this).addClass('is-danger').next('p').html(valtext).removeClass('is-hidden').css('max-width',parent_width);
                positionActionBar(); // page will get higher, possible scroll, position action bar then
            }
        }).each(function() {
            if (typeof $(this).data('extdisplay') == "undefined") {
                $(this).data('extdisplay', this.value);
            } else if (typeof extmap[this.value] != "undefined") {
                this.value++;
                while (typeof extmap[this.value] != "undefined") {
                    this.value++;
                }
            }
        }).parents('form').on('submit',function(e) {
            if (e.isDefaultPrevented()) {
                return false;
            }
            exten = $('.duplicate-exten', this);
            if (exten.length > 0) {
                extnum = exten.val();
                var valtext = sprintf(ipbx.msg.framework.validation.duplicate, extnum, extmap[extnum]);
                Swal.fire({icon:'warning',text:valtext, timer:5000});
                return false;
            }
            return true;
        });
    }
    $(document).on('keydown', 'meta+shift+a', function() {
        $('#modules_button').trigger('click');
    });
    $(document).on('keydown', 'ctrl+shift+s', function() {
        $('input[type=submit][name=Submit]').trigger('click');
    });
    $(document).on('keydown', 'ctrl+shift+a', function() {
        ipbx_reload();
    });
    $('#user_logout').on('click',function() {
        url = window.location.pathname;
        $.get(url + '?logout=true', function() {
            $.cookie('PHPSESSID', null);
            window.location = url;
        });
    });

    $(".input_checkbox_toggle_true, .input_checkbox_toggle_false").on('click',function() {
        checked = $(this).hasClass('input_checkbox_toggle_true') ? this.checked : !this.checked;
        $(this).prev().prop('disabled', checked);
        if (checked) {
            $(this).data('saved', $(this).prev().val());
            $(this).prev().val($(this).data('disabled'));
        } else {
            $(this).prev().val($(this).data('saved'))
        }
    });

    $('.componentSelect').chosen({width:'100%', disable_search: true, placeholder_text_single: ipbx.msg.framework.selectoption, placeholder_text_multiple: ipbx.msg.framework.selectoptions});
    $('.componentSelect100').chosen({width:'100px', disable_search: true, placeholder_text_single: ipbx.msg.framework.selectoption, placeholder_text_multiple: ipbx.msg.framework.selectoptions});
    $('.componentSelect200').chosen({width:'200px', disable_search: true, placeholder_text_single: ipbx.msg.framework.selectoption, placeholder_text_multiple: ipbx.msg.framework.selectoptions});
    $('.componentSelectSearch').chosen({width:'100%', disable_search: false, placeholder_text_single: ipbx.msg.framework.selectoption, placeholder_text_multiple: ipbx.msg.framework.selectoptions});
    $('.componentSelectAutoWidth').chosen({disable_search: false, width: 'auto', placeholder_text_single: ipbx.msg.framework.selectoption, placeholder_text_multiple: ipbx.msg.framework.selectoptions});
    $('.componentSelectAutoWidthNoSearch').chosen({disable_search: true, width: 'auto', placeholder_text_single: ipbx.msg.framework.selectoption, placeholder_text_multiple: ipbx.msg.framework.selectoptions});

    $('input[type=search]').on('search', function (uno,dos) {
        filter_rnav();
    });

    /* horizontal text scroll too wide submenu options */
    $('.scroll-container').on('mouseenter',function () {
        $(this).stop();
        var boxWidth = $(this).width();
        var textWidth = $('.scroll', $(this)).width() + 22;
        if (textWidth > boxWidth) {
            $(this).css('background','#4b0884');
            var animSpeed = textWidth * 5;
            $(this).animate({
                scrollLeft: (textWidth - boxWidth)
            }, animSpeed, function () {
                $(this).animate({
                    scrollLeft: 0
                }, animSpeed, function () {
                    $(this).trigger('mouseenter');
                });
            });
        }
    }).on('mouseleave',function () {
        $(this).css('background','transparent');
        var animSpeed = $(this).scrollLeft() * 5;
        $(this).stop().animate({
            scrollLeft: 0
        }, animSpeed);
    });

    $('.destdropdown:not(".haschosen")').addClass('haschosen').chosen({disable_search: false, inherit_select_classes: true, width: '100%'});
    $('.destdropdown2:not(".haschosen")').addClass('haschosen').chosen({disable_search: false, inherit_select_classes: true, width: '100%'});
}

(function(jQuery) {
    jQuery.hotkeys = {
        version: "0.8",
        specialKeys: {
            8: "backspace",
            9: "tab",
            13: "return",
            16: "shift",
            17: "ctrl",
            18: "alt",
            19: "pause",
            20: "capslock",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "insert",
            46: "del",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9",
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            112: "f1",
            113: "f2",
            114: "f3",
            115: "f4",
            116: "f5",
            117: "f6",
            118: "f7",
            119: "f8",
            120: "f9",
            121: "f10",
            122: "f11",
            123: "f12",
            144: "numlock",
            145: "scroll",
            191: "/",
            224: "meta"
        },
        shiftNums: {
            "`": "~",
            "1": "!",
            "2": "@",
            "3": "#",
            "4": "$",
            "5": "%",
            "6": "^",
            "7": "&",
            "8": "*",
            "9": "(",
            "0": ")",
            "-": "_",
            "=": "+",
            ";": ": ",
            "'": "\"",
            ",": "<",
            ".": ">",
            "/": "?",
            "\\": "|"
        }
    };

    function keyHandler(handleObj) {
        if (typeof handleObj.data !== "string") {
            return;
        }
        var origHandler = handleObj.handler,
            keys = handleObj.data.toLowerCase().split(" ");
        handleObj.handler = function(event) {
            if (this !== event.target && (/textarea|select/i.test(event.target.nodeName) || event.target.type === "text")) {
                return;
            }
            var special = event.type !== "keypress" && jQuery.hotkeys.specialKeys[event.which],
                character = String.fromCharCode(event.which).toLowerCase(),
                key, modif = "",
                possible = {};
            if (event.altKey && special !== "alt") {
                modif += "alt+";
            }
            if (event.ctrlKey && special !== "ctrl") {
                modif += "ctrl+";
            }
            if (event.metaKey && !event.ctrlKey && special !== "meta") {
                modif += "meta+";
            }
            if (event.shiftKey && special !== "shift") {
                modif += "shift+";
            }
            if (special) {
                possible[modif + special] = true;
            } else {
                possible[modif + character] = true;
                possible[modif + jQuery.hotkeys.shiftNums[character]] = true;
                if (modif === "shift+") {
                    possible[jQuery.hotkeys.shiftNums[character]] = true;
                }
            }
            for (var i = 0, l = keys.length; i < l; i++) {
                if (possible[keys[i]]) {
                    return origHandler.apply(this, arguments);
                }
            }
        };
    }
    jQuery.each(["keydown", "keyup", "keypress"], function() {
        jQuery.event.special[this] = {
            add: keyHandler
        };
    });
})(jQuery);

(function($) {
    $.fn.toggleVal = function(theOptions) {
        if (!theOptions || typeof theOptions == 'object') {
            theOptions = $.extend({}, $.fn.toggleVal.defaults, theOptions);
        } else if (typeof theOptions == 'string' && theOptions.toLowerCase() == 'destroy') {
            var destroy = true;
        }
        return this.each(function() {
            if (destroy) {
                $(this).on('focus.toggleval').off('blur.toggleval').removeData('defText');
                return false;
            }
            var defText = '';
            switch (theOptions.populateFrom) {
                case 'title':
                    if ($(this).attr('title')) {
                        defText = $(this).attr('title');
                        $(this).val(defText);
                    }
                    break;
                case 'label':
                    if ($(this).attr('id')) {
                        defText = $('label[for="' + $(this).attr('id') + '"]').text();
                        $(this).val(defText);
                    }
                    break;
                case 'custom':
                    defText = theOptions.text;
                    $(this).val(defText);
                    break;
                default:
                    defText = $(this).val();
            }
            $(this).addClass('toggleval').data('defText', defText);
            if (theOptions.removeLabels == true && $(this).attr('id')) {
                $('label[for="' + $(this).attr('id') + '"]').remove();
            }
            //$(this).bind('focus.toggleval', function() {
            $(this).on('focus.toggleval', function() {
                if ($(this).val() == $(this).data('defText')) {
                    $(this).val('');
                }
                $(this).addClass(theOptions.focusClass);
            //}).bind('blur.toggleval', function() {
            }).on('blur.toggleval', function() {
                if ($(this).val() == '' && !theOptions.sticky) {
                    $(this).val($(this).data('defText'));
                }
                $(this).removeClass(theOptions.focusClass);
                if ($(this).val() != '' && $(this).val() != $(this).data('defText')) {
                    $(this).addClass(theOptions.changedClass);
                } else {
                    $(this).removeClass(theOptions.changedClass);
                }
            });
        });
    };
    $.fn.toggleVal.defaults = {
        focusClass: 'tv-focused',
        changedClass: 'tv-changed',
        populateFrom: 'default',
        text: null,
        removeLabels: false,
        sticky: false
    };
    $.extend($.expr.pseudos[':'], {
        toggleval: function(elem) {
            return $(elem).data('defText') || false;
        },
        changed: function(elem) {
            if ($(elem).data('defText') && $(elem).val() != $(elem).data('defText')) {
                return true;
            }
            return false;
        }
    });
})(jQuery);

function tabberObj(argsObj) {
    var arg;
    this.div = null;
    this.classMain = "tabber";
    this.classMainLive = "tabberlive";
    this.classTab = "tabbertab";
    this.classTabDefault = "tabbertabdefault";
    this.classNav = "tabbernav";
    this.classTabHide = "tabbertabhide";
    this.classNavActive = "tabberactive";
    this.titleElements = ['h2', 'h3', 'h4', 'h5', 'h6'];
    this.titleElementsStripHTML = true;
    this.removeTitle = true;
    this.addLinkId = false;
    this.linkIdFormat = '<tabberid>nav<tabnumberone>';
    for (arg in argsObj) {
        this[arg] = argsObj[arg];
    }
    this.REclassMain = new RegExp('\\b' + this.classMain + '\\b', 'gi');
    this.REclassMainLive = new RegExp('\\b' + this.classMainLive + '\\b', 'gi');
    this.REclassTab = new RegExp('\\b' + this.classTab + '\\b', 'gi');
    this.REclassTabDefault = new RegExp('\\b' + this.classTabDefault + '\\b', 'gi');
    this.REclassTabHide = new RegExp('\\b' + this.classTabHide + '\\b', 'gi');
    this.tabs = new Array();
    if (this.div) {
        this.init(this.div);
        this.div = null;
    }
}
tabberObj.prototype.init = function(e) {
    var
    childNodes, i, i2, t, defaultTab = 0,
        DOM_ul, DOM_li, DOM_a, aId, headingElement;
    if (!document.getElementsByTagName) {
        return false;
    }
    if (e.id) {
        this.id = e.id;
    }
    this.tabs.length = 0;
    childNodes = e.childNodes;
    for (i = 0; i < childNodes.length; i++) {
        if (childNodes[i].className && childNodes[i].className.match(this.REclassTab)) {
            t = new Object();
            t.div = childNodes[i];
            this.tabs[this.tabs.length] = t;
            if (childNodes[i].className.match(this.REclassTabDefault)) {
                defaultTab = this.tabs.length - 1;
            }
        }
    }
    DOM_ul = document.createElement("ul");
    DOM_ul.className = this.classNav;
    for (i = 0; i < this.tabs.length; i++) {
        t = this.tabs[i];
        t.headingText = t.div.title;
        if (this.removeTitle) {
            t.div.title = '';
        }
        if (!t.headingText) {
            for (i2 = 0; i2 < this.titleElements.length; i2++) {
                headingElement = t.div.getElementsByTagName(this.titleElements[i2])[0];
                if (headingElement) {
                    t.headingText = headingElement.innerHTML;
                    if (this.titleElementsStripHTML) {
                        t.headingText.replace(/<br>/gi, " ");
                        t.headingText = t.headingText.replace(/<[^>]+>/g, "");
                    }
                    break;
                }
            }
        }
        if (!t.headingText) {
            t.headingText = i + 1;
        }
        DOM_li = document.createElement("li");
        t.li = DOM_li;
        DOM_a = document.createElement("a");
        DOM_a.appendChild(document.createTextNode(t.headingText));
        DOM_a.href = "javascript:void(null);";
        DOM_a.title = t.headingText;
        DOM_a.onclick = this.navClick;
        DOM_a.tabber = this;
        DOM_a.tabberIndex = i;
        if (this.addLinkId && this.linkIdFormat) {
            aId = this.linkIdFormat;
            aId = aId.replace(/<tabberid>/gi, this.id);
            aId = aId.replace(/<tabnumberzero>/gi, i);
            aId = aId.replace(/<tabnumberone>/gi, i + 1);
            aId = aId.replace(/<tabtitle>/gi, t.headingText.replace(/[^a-zA-Z0-9\-]/gi, ''));
            DOM_a.id = aId;
        }
        DOM_li.appendChild(DOM_a);
        DOM_ul.appendChild(DOM_li);
    }
    e.insertBefore(DOM_ul, e.firstChild);
    e.className = e.className.replace(this.REclassMain, this.classMainLive);
    this.tabShow(defaultTab);
    if (typeof this.onLoad == 'function') {
        this.onLoad({
            tabber: this
        });
    }
    return this;
};
tabberObj.prototype.navClick = function(event) {
    var
    rVal, a, self, tabberIndex, onClickArgs;
    a = this;
    if (!a.tabber) {
        return false;
    }
    self = a.tabber;
    tabberIndex = a.tabberIndex;
    a.blur();
    if (typeof self.onClick == 'function') {
        onClickArgs = {
            'tabber': self,
            'index': tabberIndex,
            'event': event
        };
        if (!event) {
            onClickArgs.event = window.event;
        }
        rVal = self.onClick(onClickArgs);
        if (rVal === false) {
            return false;
        }
    }
    self.tabShow(tabberIndex);
    return false;
};
tabberObj.prototype.tabHideAll = function() {
    var i;
    for (i = 0; i < this.tabs.length; i++) {
        this.tabHide(i);
    }
};
tabberObj.prototype.tabHide = function(tabberIndex) {
    var div;
    if (!this.tabs[tabberIndex]) {
        return false;
    }
    div = this.tabs[tabberIndex].div;
    if (!div.className.match(this.REclassTabHide)) {
        div.className += ' ' + this.classTabHide;
    }
    this.navClearActive(tabberIndex);
    return this;
};
tabberObj.prototype.tabShow = function(tabberIndex) {
    var div;
    if (!this.tabs[tabberIndex]) {
        return false;
    }
    this.tabHideAll();
    div = this.tabs[tabberIndex].div;
    div.className = div.className.replace(this.REclassTabHide, '');
    this.navSetActive(tabberIndex);
    if (typeof this.onTabDisplay == 'function') {
        this.onTabDisplay({
            'tabber': this,
            'index': tabberIndex
        });
    }
    return this;
};
tabberObj.prototype.navSetActive = function(tabberIndex) {
    this.tabs[tabberIndex].li.className = this.classNavActive;
    return this;
};
tabberObj.prototype.navClearActive = function(tabberIndex) {
    this.tabs[tabberIndex].li.className = '';
    return this;
};

function tabberAutomatic(tabberArgs) {
    var
    tempObj, divs, i;
    if (!tabberArgs) {
        tabberArgs = {};
    }
    tempObj = new tabberObj(tabberArgs);
    divs = document.getElementsByTagName("div");
    for (i = 0; i < divs.length; i++) {
        if (divs[i].className && divs[i].className.match(tempObj.REclassMain)) {
            tabberArgs.div = divs[i];
            divs[i].tabber = new tabberObj(tabberArgs);
        }
    }
    return this;
}

function tabberAutomaticOnLoad(tabberArgs) {
    var oldOnLoad;
    if (!tabberArgs) {
        tabberArgs = {};
    }
    oldOnLoad = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = function() {
            tabberAutomatic(tabberArgs);
        };
    } else {
        window.onload = function() {
            oldOnLoad();
            tabberAutomatic(tabberArgs);
        };
    }
}

if (typeof tabberOptions == 'undefined') {
    tabberAutomaticOnLoad();
} else {
    if (!tabberOptions['manualStartup']) {
        tabberAutomaticOnLoad(tabberOptions);
    }
}

Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
        popup: 'colored-toast'
    },
    showConfirmButton: false,
    timerProgressBar: true
});

function toggle_rnav() {
  if(localStorage.getItem('rnav')=='open') {
    $('.menu_icon').css('right',0);
    $('.rnav').css('right','-275px');
    localStorage.setItem('rnav','closed');
    $('#collapsemenuicon').html("<i class='fa fa-angle-double-left'></i>");
  } else {
    $('.menu_icon').css('right','275px');
    $('.rnav').css('right','0');
    localStorage.setItem('rnav','open');
    $('#collapsemenuicon').html("<i class='fa fa-angle-double-right'></i>");
  }
}

function toggle_action_bar() {
  current_x = $('#action-bar').css('right');
  if(current_x == '0px' ) {
    $('#action-bar').css('right',($('#action-bar').width()*-1)+19);
    localStorage.setItem('actionbar','closed');
    $('#collapseactionmenuicon').html('<i class="fa fa-angle-double-left"></i>');
  } else {
    $('#action-bar').css('right',0);
    localStorage.setItem('actionbar','open');
    $('#collapseactionmenuicon').html('<i class="fa fa-angle-double-right"></i>');
  }
}


async function initial_rnav() {

    if(ispopover==true) { 
        // handle popover form modifications
        $('#action-bar').remove(); 
        $('.rnav').hide(); 
        pform = $('.popover-form').first();
        if (pform.length == 0) {
            pform = $('form').first();
        }
        $('<input>').attr({
            type: 'hidden',
            name: 'fw_popover_process'
        }).val(parent.$('#popover-frame').data('popover-class')).appendTo(pform);
        return;
    }

    if($('#collapsemenuicon').length==0) {
        $("<a id='collapsemenuicon' class='menu_icon'><i class='fa fa-angle-double-right'></i></a>").insertBefore(".rnav");
    }
    paint_rnav();

    $('.rnav').show();

    add_rnav_tooltips();

    if(localStorage.getItem('rnav')==null) {
        localStorage.setItem('rnav','open');
    }

    //await new Promise(r => setTimeout(r, 100));

    filter = localStorage.getItem('rnavfilter');
    if(filter!="") {
        $('#rnavsearch').val(filter);
        filter_rnav();
    }

    if(localStorage.getItem('rnav')=='open') {
        $('.menu_icon').css('right','275px');
        $('.rnav').css('right','0');
    } else {
        $('.menu_icon').css('right',0);
        original_transition = $('.rnav').css('transition');
        $('.rnav').css('transition','none 0s ease 0s');
        $('#collapsemenuicon').css('transition','none 0s ease 0s');
        $('.rnav').css('right','-275px');
        $('#collapsemenuicon').html("<i class='fa fa-angle-double-left'></i>");
        setTimeout(function() {
           $('.rnav').css('transition',original_transition);
           $('#collapsemenuicon').css('transition',original_transition);
        },500)
    }
    rnavSelected();
    $('#collapsemenuicon:not(.bound)').addClass('bound').on('click', toggle_rnav);
    positionActionBar();
}

up.compiler('.rnav', function(element,data) {
    if($('.rnav').length>0) {
        mitop = localStorage.getItem('rnav_scroll');
        $('.rnav ul:first').scrollTop(mitop);
        up.on($('.rnav')[0], 'click', 'a', function(event, element) {
            mitop = $('.rnav ul:first').scrollTop();
            localStorage.setItem('rnav_scroll',mitop);
            if(typeof $(element).data('href')=='string') {
                if($(element).attr('disabled')!='disabled') {
                    window.location.href = $(element).data('href');
                }
            }
        });
    }
});

function rnavSelected() {
    if($('.rnav').length>0) {
        let params = new URLSearchParams(window.location.search);
        selected_rnav_option = params.get('extdisplay');
        selected_rnav_option_extension = 'axxxxxxxxxxxz';
        display = params.get('display');
        if(display=='did') {
            // Inbound Routes special case where selected option is a combination of two request parameters
            selected_rnav_option_extension = params.get('extension')+"/"+params.get('cidnum');
        }
        let original_href = $('#rnavadd').attr('href');
        $('#rnavadd').attr('disabled',true);
        $('#rnavadd').attr('href','javascript:void(0)');

        if(selected_rnav_option !== null) {
            $('.rnav').find('li > a').each(function(idx,ele) {
                $(ele).removeClass('current');
                let params = new URLSearchParams($(ele).attr('href'));
                current_rnav_option = params.get('extdisplay');
                if(selected_rnav_option == current_rnav_option || selected_rnav_option_extension == current_rnav_option) {
                    $(ele).addClass('current');
                    $('#rnavadd').attr('disabled',false);
                    $('#rnavadd').attr('href',original_href);
                }
            });
        }
    }
}

function confirm_delete(form,mytext,deletevalue) {

    Swal.fire({
        title: ipbx.msg.framework.areyousure,
        text: mytext,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: ipbx.msg.framework.yes,
        cancelButtonText: ipbx.msg.framework.cancel
    }).then((result) => {
        if (result.isConfirmed) {
            $.LoadingOverlay('show');
            $("input[name=action]").val(deletevalue);
            form.trigger('submit');
        }
    });

}

up.compiler('#action-bar', function(element,data) {

    // Confirm on Delete
    $(":submit").on('click',function(evt) {
        var form = $('#mainform');
        if(typeof $(evt.target).data('target') != 'undefined') {
            form = $('#'+$(evt.target).data('target'));
        }
        if($(evt.target).attr('name')=='delete') {
            evt.preventDefault();
            if(typeof $(evt.target).data('text') != 'undefined') {
                mytext = Base64.decode($(evt.target).data('text'));
            } else {
                mytext = ipbx.msg.framework.wontrevert;
            }
            confirm_delete(form,mytext,'delete');

        } else if($(evt.target).attr('name')=='reset'){
            form[0].reset();
        }
    });

    $('#collapseactionmenuicon:not(.bound)').addClass('bound').on('click', toggle_action_bar);
    positionActionBar();

});

up.compiler('.content', function(element,data) {

    doready();

    // checks if form has been modified and prevent leaving in that case
    if($('#mainform').length>0) {
//        $('#mainform').dirty({preventLeaving:true});
    }

    // adds bulma table classes to tables that lacks the table class
    $('table:not(".table")').addClass('table').addClass('is-borderless').addClass('is-narrow');

});

function add_rnav_tooltips() {
    // if rnav entries are hidden/overflow, add tooltip
    $('#rnavul > li > a').each(function() {
        if(isOverflown(this)) {
            $(this).attr('data-tooltip',$(this).data('title'));
        }
    });
}

function paint_rnav() {
    flag=0;
    $( "#rnavul > li" ).each(function(){
        if($(this).css('display') != 'none'){ 
            if(flag%2 == 0) {
                $(this).addClass('secondRnav'); 
            }else {
                $(this).removeClass('secondRnav'); 
            }
            flag++;
        } else {
            $(this).removeClass('secondRnav'); 
        }
    });
}

function filter_rnav() {
    if($('#rnavsearch').length==0) return;

    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('rnavsearch');
    filter = input.value.toUpperCase();
    ul = document.getElementById("rnavul");
    li = ul.getElementsByTagName('li');

    localStorage.setItem('rnavfilter',input.value);
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

    paint_rnav();
}

$(window).on('scroll',function(event){
    positionActionBar();
});
$(window).on('resize',function(event){
    positionActionBar();
});

function positionActionBar(){
     if($("#action-bar").length>0){ 
         if(window.location.search.indexOf('fw_popover')<=0) {

         $("#action-bar").removeClass("locked");
         var css={},
             pageHeight=parseInt($("#page").innerHeight()),
             actionBarOffset=parseInt($("#action-bar").offset().top)+parseInt($("#action-bar").innerHeight())+parseInt($("#footer").innerHeight())+parseInt($("#action-bar").css("padding-top"));
             actionBarOffset-=60;
             if(pageHeight-actionBarOffset<=0){
                 $("#action-bar").addClass("locked");
             }
         }
     }
}

/* to check if element contents are hidden/overflown, used to activate tooltips if they are on rnav */
function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

/* generic error for fetch operations */
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function cleanMenu() {
  const $dropdownItems = $('.navbar-dropdown .navbar-item');
  $dropdownItems.each(function() {
    const $item = $(this);
    const $parentMenuItem = $item.closest('.navbar-item.has-dropdown');
    const $container = $item.parent();
    $item.removeClass('is-active');
    $parentMenuItem.removeClass('show-dropdown');
    $parentMenuItem.removeClass('is-active');
    $('.singlecolumn').addClass('multicolumn').removeClass('singlecolumn');
  });
}

function searchMenu(search) {
  cleanMenu();
  if(search.length < 3) { return;}
  $('.multicolumn').addClass('singlecolumn').removeClass('multicolumn');
  const $dropdownItems = $('.navbar-dropdown .navbar-item');
  $dropdownItems.each(function() {
    const $item = $(this);
    const $parentMenuItem = $item.closest('.navbar-item.has-dropdown');
    const $container = $item.parent();
    const text = $item.text();
    if ($item.text().toLowerCase().includes(search)) {
      $item.addClass('is-active');
      $parentMenuItem.addClass('show-dropdown');
      $parentMenuItem.addClass('is-active');
      $container.removeClass('multicolumn');
    } else {
      $item.removeClass('is-active');
    }
  })
}
