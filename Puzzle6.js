//Given repetition code,  solve
function separator(text) {
	var strands = []
	for(i = 0; i < text.indexOf('\n'); i++){
		var letters = ''
		for (j = i; j < text.length; j += text.indexOf('\n') + 1) {
			letters += text[j]
		}
		strands.push(letters)
	}
	return strands
}
//Pass string, and true if highest number or false if lowest number
function strand(strand,high) {
	var arrOfCounts = []
	var count = {}
	for(i = 0; i < strand.length; i++) {
		if(count[strand[i]]) {
			count[strand[i]]++
		} else {count[strand[i]] = 1}
	}
	for(i = 0; i < Object.keys(count).length; i++) {
		var a = Object.keys(count)[i]
		var b = count[a]
		arrOfCounts.push({[a]:b})
	}
	if (high) {
		arrOfCounts = arrOfCounts.sort(function(a,b) {return Object.values(b)[0] - Object.values(a)[0]})
	} else {
		arrOfCounts = arrOfCounts.sort(function(a,b) {return Object.values(a)[0] - Object.values(b)[0]})
	}
	return Object.keys(arrOfCounts[0])[0]
}
function getCode(high){
	var repCode = document.getElementById('lol').innerHTML
	var strands = separator(repCode)
	var code = ''
	for(z = 0; z < strands.length; z++) {
		code += strand(strands[z],high)
	}
	return code
}