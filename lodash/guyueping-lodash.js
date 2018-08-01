var guyueping = {
  chunk: function(arr, size = 1) {
  		var res = []
  		for (var i = 0; i < arr.length; i += size) {
  			res.push(arr.slice(i, i+size))
  		}
  		return res
  },
  compact: function(arr) {
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
				return !comparator(item, values[i])
			}
		})
	},
	isEqual: function(value, other) {
		var value_str = JSON.stringify(value)
		var other_str = JSON.stringify(other)
		if (value_str ===  other_str) 
			return true
		return false
	},
	drop: function (ary, n=1) {
		var len = n < ary.length ? n : ary.length
		for (var i = 0; i < len; i++) {
			ary.shift()
		}
		return ary
	},
	dropRight: function(ary, n=1) {
		var len = n < ary.length ? n : ary.length
		for (var i = 0; i < len; i++) {
			ary.pop()
		}
		return ary
	},
	dropRightWhile: function(ary, predicate = guyueping.identity) {
		var func = guyueping.iteratee(predicate)
		for (var i = 0; i < ary.length; i++) {
			if (!func(ary[i])) {
				var res = ary.slice(0,i)
			}
		}
		return res
	},
	//该函数返回的函数，可以返回不同对象的propName属性
	property: function(propName){
		return function(obj) {
			return obj[propName]
		}
	},
	sumBy: function(ary, iteratee = guyueping.identity) {
		var sum = 0
		for (var tmp of ary) {
			sum += iteratee(tmp)
		}
		return sum
	},
	sum: function(ary) {
		return guyueping.sumBy(ary, guyueping.identity)
	},
	 identity: function(value) {
	 	return value
	 },
	 matches: function(src) {
	 	return function(obj) {
	 		for (var key in src) {
	 			if (src[key] !== obj[key]) {
	 				return false
	 			}
	 		} 
	 		return true
	 	}
	 },
	 matchesProperty: function(path, src) {
	 	return function (obj) {
	 		if(obj[path] === src) {
	 			return ture
	 		} else {
	 			return false
	 		}
	 	}
	 },
	 flatten: function(ary) {
	 	// var res = []
	 	// for (var i = 0; i < ary.length; i++) {
	 	// 	if (Array.isArray(ary[i])) {
	 	// 		res = [...res,...ary[i]]
	 	// 	} else {
	 	// 		res = [...res,ary[i]]
	 	// 	}
	 	// }
	 	
	 	return ary.reduce((res, item) => {
	 		if (Array.isArray(item)) {
	 			res = [...res,...item]
	 		} else {
	 			res = [...res,item]
	 		}
	 		return res
	 	}, [])
	 	// return [].concat(...ary)  
	 	// return this.flattenDepth(ary)
	 },
	 flattenDeep: function(ary) {
	 	return ary.reduce((res, item) => {
	 		if (Array.isArray(item)) {
	 			var tmp = this.flattenDeep(item)
	 			res = [...res,...tmp]
	 		} else {
	 			res = [...res, item]
	 		}
	 		return res
	 	}, [])
	 	// return this.flattenDepth(ary, Infinity)
	 },
	 flattenDepth: function(ary, depth = 1) {
	 	if (depth === 0) {
	 		return ary
	 	}
	 	return ary.reduce((res, item) => {
	 		if (Array.isArray(item)) {
	 			var tmp = this.flattenDepth(item, depth-1)
	 			res = [...res, ...tmp]
	 		} else {
	 			res = [...res, item]
	 		}
	 		return res
	 	}, [])
	 },
	 keyBy: function(ary, iteratee = this.identity) {
	    var res = []
	    if (typeof iteratee === 'function') {
	        for (var item of ary) {
	            var tmp = {}
	             tmp[iteratee(item)] = item
	            res.push(tmp)
	        }
	    } else {
	        ary.reduce((res, item) => {
	            var tmp = {}
	            tmp[item[iteratee]] = item
	            res.push(tmp)
	            return res
	        }, res)
	    }
	    return res
	},
	groupBy: function(ary, iteratee = this.identity) {
		var res = {}
		if (typeof iteratee === 'function') {
			for (var item of ary) {
				if (iteratee(item) in res) {
					res[iteratee(item)].push(item)
				} else {
					res[iteratee(item)] = [item]
				}
			}
		} else {
			itera = this.property(iteratee)
			ary.reduce((res, item) => {
				if (itera(item) in res) {
					res[itera(item)].push(item)
				} else {
					res[itera(item)] = [item]
				}
				return res
			}, res)
		}
		return res
	},
	after: function(n, func) {
		var c = 0
		return function(...args) {
			c++
			if (c > n) {
				return func(...args)
			}
		}
	},
	before: function(n, func) {
		var c = 0
		return function(...args) {
			c++
			if (c < n) {
				return func(...args)
			}
		}
	},
	ary: function(func, n = func.length) {
		return function(...args) {
			return func (...args.slice(0,n))
		}
	},
	unary: function(func) {
		return function(...args) {
			return func(args[0])
		}
	},
	flip: function(func) {
		return function(...args) {
			return func(...args.reverse())
		}
	},
	negate: function(func) {
		return function(...args) {
			return !func(...args)
		} 
	},
	spread: function(func) {
		return function(ary) {
			return func.apply(null, ary)
		}
	},
	assign: function(object, ...source) {
		for (var obj of source) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key))
					object[key] = obj[key]
			}
		}
		return object
	},
	// merge: function(object, ...source) {
	// 	for (var obj of source) {
	// 		for (var key in obj) {
	// 			if (obj.hasOwnProperty(key)) {
	// 				for (var i = 0; i < obj[key].length; i++) {
	// 					for (var oj in obj[key]) {
	// 						object[key][i][oj] = obj[key][oj]
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// 	return object
	// }
	forOwn: function(object, iteratee=_.identity) {
		for (var key in object) {
			if(iteratee(object[key], key, object) === false) {
				return
			} else	{
				if (object.hasOwnProperty(key))
					iteratee(object[key], key, object)
			}
		}
	},
	iteratee: function(shorthand) {
		if (typeof shorthand === 'function') {
			return shorthand
		}
		if (typeof shorthand === 'string') {
			return guyueping.property(shorthand)
		}
		if (Array.isArray(shorthand)) {
			return guyueping.matchesProperty(shorthand)
		}
		if (typeof shorthand === 'object') {
			return guyueping.matches(shorthand)
		}
	},
}