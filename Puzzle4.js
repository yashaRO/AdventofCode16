//Given a string, an ID and checksum, check if letters in checksum are in most used letters in string
//Followed by alphabetically. If so add #'s
var parsedArray = []
function parser(arr) {
	arr = arr.replace(/\W+/g,'')
    var string = arr.match(/\D+/)[0]
    var num = arr.match(/\d+/)[0]
    var checksum = arr.match(/\D+/g)[1].split('').sort(function(a,b){return a.charCodeAt() - b.charCodeAt()}).join('')
	parsedArray.push([string,num,checksum])
}
function check(strAng,chksum) {
        var arr = []
        var obj = {}
        var common = ''
        while (strAng.length) {
            var regex = new RegExp(strAng[0],'g')
            obj[strAng[0]] = strAng.match(regex).length
            arr.push(obj)
            obj = {}
            strAng = strAng.replace(regex,'')
        }
        arr = arr.sort(function(a,b) {
			n = parseInt(Object.values(b).toString()) - parseInt(Object.values(a).toString())
			if (!n){
				return Object.keys(a).toString().charCodeAt() - Object.keys(b).toString().charCodeAt()
			}
           return n
        })
        for (i = 0; i < 5; i++) {
            common += Object.keys(arr[i]).toString()
        }
	common = common.split('').sort(function(a,b){return a.charCodeAt() - b.charCodeAt()}).join('')
    return common == chksum
}
function validSum() {
    var instructions = document.getElementById('lol').innerHTML.replace(/\-/g,'').split('\n') //.pop() if last in array is ''
    instructions.pop()
    var value = 0
	for (i = 0; i < instructions.length; i++) {
    	parser(instructions[i])
	}
    for (l = 0; l < parsedArray.length; l++) {
        if (check(parsedArray[l][0],parsedArray[l][2])) {
            value += parseInt(parsedArray[l][1])
        }
    }
    return value
}

//Perform Shift Cipher on each string to the ID number. Determine which string contains "North" and "Pole"
var parsedArray = []
function parser(arr) {
    var string = arr.match(/\D+/)[0]
    var num = arr.match(/\d+/)[0]
	parsedArray.push([string,num])
}
function shifter(letter,number) {
	if(!/\w/.test(letter)){return letter}
	alpha =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	pos = parseInt(number) + alpha.indexOf(letter)
	if (pos > 26) {return alpha[pos % 26]}
	return alpha[pos]	
}
function massShifter(strAng, number) {
	temp = strAng.split('')
        for (i = 0; i < temp.length; i++) {
			temp[i] = shifter(temp[i], number)
		}
	return temp.join('')
}
function shiftCheck() {
    var instructions = document.getElementById('lol').innerHTML.split('\n') //.pop() if last in array is ''
    instructions.pop()
	for (i = 0; i < instructions.length; i++) {
    	parser(instructions[i])
	}
    for (l = 0; l < parsedArray.length; l++) {
		shifted = massShifter(parsedArray[l][0],parsedArray[l][1])
		if (/north/.test(shifted)) {return parsedArray[l][1]}
    }
	return false
}