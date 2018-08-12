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
	differenceBy: function(array, ...values) {
		if (Array.isArray(values[values.length-1])) {
			var itera = this.identity
		} else {
			var itera = values[values.length - 1]
			itera = this.iteratee(itera)
			values.pop()
		}
		var ary1 = [].concat(...values).map(itera)
		var ary2 = array.map(itera)
		var res = []
		for (var i = 0; i < ary2.length; i++) {
			if (ary1.indexOf(ary2[i]) === -1) {
				res.push(array[i])
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
	dropRightWhile: function(ary, predicate = this.identity) {
		var func = this.iteratee(predicate)
		for (var i = ary.length - 1; i >= 0; i--) {
			if (!func(ary[i])) {
				var res = ary.slice(0,i+1)
				break
			}
		}
		return res
	},
	dropWhile: function(ary, predicate = this.identity) {
		var func = this.iteratee(predicate)
		for (var i = 0; i < this.length; i++) {
			if (!func(ary[i])) {
				var res = ary.slice(i)
				break
			}
		}
		return res
	},
	iteratee: function(shorthand = this.identity) {
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
	 		for (var   key in src) {
	 			if (src[key] !== obj[key]) {
	 				return false
	 			}
	 		} 
	 		return true
	 	}
	 },
	 matchesProperty: function(path, srcValue) {
	 	return function (obj) {
	 		if (arguments.length === 1) {
	 			if (obj[path[0]] === path[1])
	 				return true
	 			return false
	 		} else {
	 			if(obj[path] === srcValue) {
		 			return true
		 		} else {
		 			return false
		 		}
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
	 flatten: function(ary) {
	 	return [].concat(...ary)
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
	//判断是否为原始类型
	isPrimitive: function(val) {
		var type = typeof val
		if (val === null) {
			return true
		}
		switch (type) {
			case 'number':
			case 'string':
			case 'boolean':
			case 'undefined':
			return true
		}
		return false
	},
	merge: function(object, ...source) {
		for (var obj of source) {
			for (var key in obj) {
				if (this.isPrimitive(obj[key])) {
					object[key] = obj[key]
				} else {
					//如果Object中有key属性
					if (key in object) {
						this.merge(object[key], obj[key])
					} else {
						object[key] = {}
						this.merge(object, [key], obj[key])
					}
				}
			}
		}
		return object
	},
	cloneDeep: function(values) {

	},
	//
	forOwn: function(object, iteratee=this.identity) {
		var hasOwn = object.prototype.hasOwnProperty
		for (var key in object) {
			if(iteratee(object[key], key, object) === false) {
				return object
			} else	{
				if (hasOwn.call(object, key))
					iteratee(object[key], key, object)
			}
		}
		return object
	},
	forOwnRight: function(object, iteratee=this.identity) {
		var keys = object.keys(object).reverse()
		var hasOwn = object.prototype.hasOwnProperty
		for (var key of keys) {
			if (iteratee(object[key], key, object) === false) {
				return object
			} else {
				if (hasOwn.call(object, key)) {
					iteratee(object[key], key, object)
				}
			}
		}
		return object
	},
	fill: function(ary, value, start = 0, end = ary.length) {
		for (var i = start; i < end; i++) {
			ary[i] = value
		}
		return ary
	},
	findIndex: function(ary, predicate = this.identity, fromIndex = 0) {
		var func = this.iteratee(predicate) 
		for (var i = fromIndex; i < ary.length; i++) {
			if (func(ary[i])) {
				return i
			}
		}
		return -1
	},
	findLastIndex: function(ary, predicate = this.identity, fromIndex = ary.length-1) {
		var func = this.iteratee(predicate)
		for (var i = fromIndex; i >= 0; i--) {
			if (func(ary[i])) {
				return i
			}
		}
		return -1
	},
	fromParirs: function(pairs) {
		var res = {}
		for (var value of pairs) {
			res[value[0]] = value[1]
		}
		return res
	},
	toPairs: function(obj) {
		var res = []
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				var tmp = [key, obj[key]]
				res.push(tmp)
			}
		}
		return res
	},
	head: function(ary) {
		return ary[0]
	},
}