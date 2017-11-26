
/*
	Password Validator 0.1
	(c) 2007 Steven Levithan <stevenlevithan.com>
	MIT License
*/

function validateId (id, options) {
	// default options (allows any password)
	var o = {
		lower:    0,
		upper:    0,
		alpha:    0, /* lower + upper */
		numeric:  0,
		special:  0,
		length:   [0, Infinity],
		custom:   [ /* regexes and/or functions */ ],
		badWords: ["password", "admin", "administrator", "manager", "master", "guest", "test", "scott", "tomcat", "root", "user", "operator", "anonymous"],
		badSequenceLength: 0,
		noQwertySequences: false,
		noSequential:      false
	};

	for (var property in options)
		o[property] = options[property];

	var	re = {
			lower:   /[a-z]/g,
			upper:   /[A-Z]/g,
			alpha:   /[A-Z]/gi,
			numeric: /[0-9]/g,
			special: /[\W_]/g
		},
		rule, i;
	
	
	if(id.indexOf(" ") > -1){
		alert("아이디에 공백이 들어 갈 수 없습니다");
		return false;
	}
	
	if(!(/^[a-zA-Z0-9]+$/.test(id))){
		alert("아이디는 영문 또는 영문/숫자를 조합하여야 합니다.");
		return false;
	}

	// enforce min/max length
	if (id.length < o.length[0] || id.length > o.length[1]){
		//alert("아이디는 6~16 자리여야 합니다.");
		alert("아이디는 영문 또는 영문/숫자\n조합하여 6~16자리까지\n사용 가능합니다.");
		return false;
	}

	// enforce lower/upper/alpha/numeric/special rules
	for (rule in re) {
		if ((id.match(re[rule]) || []).length < o[rule]){
			alert("아이디는 영문 또는 영문/숫자를 조합하여야 합니다.");
			return false;
		}
	}

	// enforce word ban (case insensitive)
	for (i = 0; i < o.badWords.length; i++) {
		if (id.toLowerCase().indexOf(o.badWords[i].toLowerCase()) > -1){
			alert("아이디에 사용할 수 없는 문자 또는 숫자가 있습니다.");
			return false;
		}		
	}

	// enforce the no sequential, identical characters rule
	if (o.noSequential && /([\S\s])\1/.test(id))
		return false;

	// enforce alphanumeric/qwerty sequence ban rules
	if (o.badSequenceLength) {
		var	lower   = "abcdefghijklmnopqrstuvwxyz",
			upper   = lower.toUpperCase(),
			numbers = "0123456789",
			qwerty  = "qwertyuiopasdfghjklzxcvbnm",
			start   = o.badSequenceLength - 1,
			seq     = "_" + id.slice(0, start);
		for (i = start; i < id.length; i++) {
			seq = seq.slice(1) + id.charAt(i);
			if (
				lower.indexOf(seq)   > -1 ||
				upper.indexOf(seq)   > -1 ||
				numbers.indexOf(seq) > -1 ||
				(o.noQwertySequences && qwerty.indexOf(seq) > -1)
			) {
				alert("아이디에 연속된 문자열은 사용하실 수 없습니다.")
				return false;
			}
		}
	}

	// enforce custom regex/function rules
	for (i = 0; i < o.custom.length; i++) {
		rule = o.custom[i];
		if (rule instanceof RegExp) {
			if (!rule.test(id))
				return false;
		} else if (rule instanceof Function) {
			if (!rule(id))
				return false;
		}
	}

	// great success!
	return true;
}

