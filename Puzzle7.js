//Given a string in which a part is in brackets, determine if true: a pair of characters followed by their reverse I.E. abba, xyyx zttz, but this cannot be within the brackets
function verify(strand) {
	var inner = strand.match(/\[\w+\]/g).join('').replace(/\W/g,'!')
	var outer = strand.match(/\w+(?=\[)/g).join('!') + '!' + strand.substr(strand.lastIndexOf(']') + 1)
	console.log(outer)
	for (i = 1; i < (inner.length - 2); i++) {
		if (inner[i] == '!') {continue;}
		var temp = inner[i - 1] + inner[i]
		var temp2 = inner[i + 2] + inner[i + 1]
		if (temp == temp2) {return false}
	}
	for (i = 1; i < (outer.length - 2); i++) {
		if (outer[i] == '!') {continue;}
		if (outer[i - 1].charCodeAt() == outer[i].charCodeAt()) {continue;}
		var temp = outer[i - 1] + outer[i]
		var temp2 = outer[i + 2] + outer[i + 1]
		if (temp == temp2) {return true}
	}
	return false
}
function batchVerify() {
	//replace lol with id name of list
	var list = document.getElementById('lol').innerHTML.split('\n')
	var count = 0
	list.pop()
	for(j = 0; j < list.length; j++) {
		if(verify(list[j])) {
			count++
		}
	}
	return count
}
//Now check for [BAB] ABA type matches.
function verify(strand) {
	var inner = strand.match(/\[\w+\]/g).join('').replace(/\W/g,'!')
	var outer = strand.match(/\w+(?=\[)/g).join('!') + '!' + strand.substr(strand.lastIndexOf(']') + 1)
	var innerA, innerB;
	for (i = 1; i < (inner.length - 1); i++) {
		if (inner[i] == '!' || inner[i - 1] == '!' || inner[i] == inner[i-1] ) {continue;}
		innerB = inner[i - 1]
		if (innerB != inner[i + 1]) {continue;}
		innerA = inner[i]
		var regex = new RegExp(innerA + innerB + innerA)
		if(regex.test(outer)) {return true}
	}
	return false
}
function batchVerify() {
	//replace lol with id name of list
	var list = document.getElementById('lol').innerHTML.split('\n')
	var count = 0
	list.pop()
	for(j = 0; j < list.length; j++) {
		if(verify(list[j])) {
			count++
		}
	}
	return count
}