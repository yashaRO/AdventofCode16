//Given a grid of 50x6, You'll turn on spots in rectangular shapes, and then shift those in columns or rows.
//Second part is you simply mapping it and being able to read the letter shape it makes. The letters are 5 by 6

function createBlank() {
	var rowTemp = [[],[],[],[],[],[]]
	for (i = 0; i < 50; i++) {
		for (j = 0; j < 6; j++) {
			rowTemp[j][i] = '.'
		}
	}
	return rowTemp
}
var screen = createBlank()
function massInterpretation() {
	var list = document.getElementById('lol').innerHTML.split('\n')
	list.pop()
	for (k = 0; k < list.length; k++) {
		interpret(list[k])
	}
}
function interpret(instruction) {
	if (/rect/.test(instruction)) {
		row = parseInt(instruction.match(/\d+/)[0])
		column = parseInt(instruction.match(/\d+/g)[1])
		
		for (i = 0; i < row; i++) {
			for (j = 0; j < column; j++) {
				screen[j][i] = '#'
			}
		}
		
	}
	else if (/column/.test(instruction)) {
		row = parseInt(instruction.match(/\d+/g)[1])
		column = parseInt(instruction.match(/\d+/)[0])
		for (j = 0; j < row ; j++) {
			shiftCol(screen, column)
		}
	} else {
		column = parseInt(instruction.match(/\d+/g)[1])
		row = parseInt(instruction.match(/\d+/)[0])
		for (j = 0; j < column; j++) {
			shiftRow(screen, row)
		}
		
	}
	
}
function shiftRow(arr,row) {
	temp = arr[row][arr[row].length - 1]
	for(i = 1; i < arr[row].length; i++) {
		arr[row][arr[row].length - i] = arr[row][arr[row].length - (i + 1)]
	}
	arr[row][0] = temp
}
function shiftCol(arr,col) {
	temp = arr[arr.length - 1][col]
	for(i = 1; i < arr.length; i++) {
		arr[arr.length - i][col] = arr[arr.length - (i + 1)][col]
	}
	arr[0][col] = temp
}