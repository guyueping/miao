var guyueping = {
  chunk: function(arr, size = 1) {
  		var res = []
  		for (var i = 0; i < arr.length; i += size) {
  			res.push(arr.slice(i, i+size))
  		}
  		return res
  },
  compat: function(arr) {
  // 	var res = []
  // 	for (var i = 0; i < arr.length; i++) {
  // 		if(arr[i]) {
  // 			res.push(arr[i])
  // 		}
  // 	}
  // 	return res
  		return arr.filter(item => item)	
	},

	difference: function(arr, ...arrs) {
		var array = []
		var res = []
		for (var i = 0; i < arrs.length; i++) {
			array = array.concat(arrs[i])
		}
		for (var j = 0; j < arr.length; j++) {
			if (array.indexOf(arr[j]) === -1) {
				res.push(arr[j])
			}
		}
		return res
	},
	differenceBy: function(array, values, iteratee) {
		var res = []
		if (typeof iteratee === 'function') {
			var new_values = []
			for (var i = 0; i < values.length; i++) {
				new_values.push(iteratee(values[i]))
			}
			for (var i = 0; i < array.length; i++) {
				if (new_values.indexOf(iteratee(array[i])) === -1)
					res.push(array[i])
			}
		} else {
			var new_values = []
			for (var tmp of values) {
				new_values.push(tmp[iteratee])
			}
			for (var tmp of array) {
				if (new_values.indexOf(tmp[iteratee]) === -1)
					res.push(tmp)
			}
		}
		return res
	},
	differenceWith: function(ary, values, comparator) {
		return ary.filter(function(item) {
			for (var i = 0; i < values.length; i++) {
				return comparator(item, values[i])
			}
		})
	},

}