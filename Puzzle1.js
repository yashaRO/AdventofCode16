//Determine shortest route
var arr = 'R2, L3, R2, R4, L2, L1, R2, R4, R1, L4, L5, R5, R5, R2, R2, R1, L2, L3, L2, L1, R3, L5, R187, R1, R4, L1, R5, L3, L4, R50, L4, R2, R70, L3, L2, R4, R3, R194, L3, L4, L4, L3, L4, R4, R5, L1, L5, L4, R1, L2, R4, L5, L3, R4, L5, L5, R5, R3, R5, L2, L4, R4, L1, R3, R1, L1, L2, R2, R2, L3, R3, R2, R5, R2, R5, L3, R2, L5, R1, R2, R2, L4, L5, L1, L4, R4, R3, R1, R2, L1, L2, R4, R5, L2, R3, L4, L5, L5, L4, R4, L2, R1, R1, L2, L3, L2, R2, L4, R3, R2, L1, L3, L2, L4, L4, R2, L3, L3, R2, L4, L3, R4, R3, L2, L1, L4, R4, R2, L4, L4, L5, L1, R2, L5, L2, L3, R2, L2'.split(', ')
var north = south = west = east = 0;
var waze = function(directions) {
	var map = [west,south,east,north]
	var newMap = []
	var pos = 0 
	for (i = 0; i < directions.length; i++) {
		if (i == 0 && directions[i][0] == 'R') {
			pos = 2
		}
		if (i > 0 && directions[i][0] == 'R') {
			pos-- 
			if (pos == -1) {pos = 3}
		} 
		else if (i > 0) {
			pos++
			if (pos == 4) {pos = 0}
		}
		map[pos] += parseInt(directions[i].match(/[0-9]/g).join(''))
	}
	if (map[0] > map[2]) {
		newMap.push('West-' + (map[0] - map[2]))
	} else {
		newMap.push('East-' + (map[2] - map[0]))
	}
	if (map[1] > map[3]) {
		newMap.push('South-' + (map[1] - map[3]))
	} else {
		newMap.push('North-' + (map[3] - map[1]))
	}
	return newMap
}

//While I can refactor code, I'd like to show what I used for each. Underneath is how I solved part 2
//Determine if I cross a spot on the map twice. NOTE SAME VAR NAMES MAY BE DIFFERENT VALUES

var arr = 'R2, L3, R2, R4, L2, L1, R2, R4, R1, L4, L5, R5, R5, R2, R2, R1, L2, L3, L2, L1, R3, L5, R187, R1, R4, L1, R5, L3, L4, R50, L4, R2, R70, L3, L2, R4, R3, R194, L3, L4, L4, L3, L4, R4, R5, L1, L5, L4, R1, L2, R4, L5, L3, R4, L5, L5, R5, R3, R5, L2, L4, R4, L1, R3, R1, L1, L2, R2, R2, L3, R3, R2, R5, R2, R5, L3, R2, L5, R1, R2, R2, L4, L5, L1, L4, R4, R3, R1, R2, L1, L2, R4, R5, L2, R3, L4, L5, L5, L4, R4, L2, R1, R1, L2, L3, L2, R2, L4, R3, R2, L1, L3, L2, L4, L4, R2, L3, L3, R2, L4, L3, R4, R3, L2, L1, L4, R4, R2, L4, L4, L5, L1, R2, L5, L2, L3, R2, L2'.split(', ')
var north = south = west = east = 0;
var waze = function(directions) {
	var map = ['west','south','east','north']
	var coordinates = [0,0]
	var path = ['0, 0']
	var pos = 0 
	if (directions[0][0] == 'R') {
			pos = 2
		}
	for (i = 0; i < directions.length; i++) {
		if (i > 0 && directions[i][0] == 'R') {
			pos-- 
			if (pos == -1) {pos = 3}
		} 
		else if (i > 0) {
			pos++
			if (pos == 4) {pos = 0}
		}
		switch(map[pos]) {
			case 'west':
				for (j = 0; j < parseInt(directions[i].match(/[0-9]/g).join('')); j++) {
					coordinates[1] -= 1
					if (path.indexOf(coordinates.join(', ').toString()) > -1) {
						return coordinates.join(', ').toString()
					}
					path.push(coordinates.join(', ').toString())
				}
				break;
			case 'east':
				for (j = 0; j < parseInt(directions[i].match(/[0-9]/g).join('')); j++) {
					coordinates[1] += 1
					if (path.indexOf(coordinates.join(', ').toString()) > -1) {
						return coordinates.join(', ').toString()
					}
					path.push(coordinates.join(', ').toString())
				}
				break;
			case 'north':
				for (j = 0; j < parseInt(directions[i].match(/[0-9]/g).join('')); j++) {
					coordinates[0] += 1
					if (path.indexOf(coordinates.join(', ').toString()) > -1) {
						return coordinates.join(', ').toString()
					}
					path.push(coordinates.join(', ').toString())
				}
				break;
			case 'south':
				for (j = 0; j < parseInt(directions[i].match(/[0-9]/g).join('')); j++) {
					coordinates[0] -= 1
					if (path.indexOf(coordinates.join(', ').toString()) > -1) {
						return coordinates.join(', ').toString()
					}
					path.push(coordinates.join(', ').toString())
				}
				break;
		}
	}
	return path
}