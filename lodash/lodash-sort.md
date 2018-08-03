			isNaN: isNaN, // <----------------
			isNull: isNull,
			isUndefined: isUndefined,
			isNil: isNil,
			//const xxxTag
			//getTypeTag()
			isFunction: isFunction,
			isNumber: isNumber,
			isBoolean: isBoolean,
			isString: isString,
			isRegExp: isRegExp,
			isSet: isSet,
			isWeakSet: isWeakSet,
			isMap: isMap,
			isWeakMap: isWeakMap,
			isSymbol: isSymbol,
			isDate: isDate,

			isArguments: isArguments, // <----------------
			isArray: isArray, // <----------------
			isArrayBuffer: isArrayBuffer,
			isTypedArray: isTypedArray,
			isLength: isLength,
			isArrayLike: isArrayLike, // <----------------
			isObject: isObject , // <----------------
			isArrayLikeObject: isArrayLikeObject,
			isPlainObject: isPlainObject, // <----------------
			isObjectLike: isObjectLike,
			isElement: isElement, // <----------------
			toNumber: toNumber,
			toFinite: toFinite,  // <----------------
			isFinite: isFinite,
			isNegativeZero: isNegativeZero, //<------------- lodash源码中没有，我自己加的
			toInteger: toInteger,
			toSafeInteger: toSafeInteger,
			isInteger: isInteger,
			isSafeInteger: isSafeInteger,
			isEmpty: isEmpty,
			isError: isError,
			isNative: isNative, // <----------------
			
			//baseIsEqual
			isEqual: isEqual, // <----------------
			isEqualWith: isEqualWith, // <----------------
			isMatch: isMatch, // <----------------
			isMatchWith: isMatchWith,

			toLength: toLength,
			toArray: toArray,
			toString: toString,


			toPath: toPath,

			castArray: castArray,

			clone: clone,
			cloneDeep: cloneDeep, // <----------------
			cloneInDeep: cloneInDeep, // <---------------- 我自己加的
			copyInDeep: copyInDeep, // <---------------- 我自己加的

			lt: lt,
			lte: lte,
			gt: gt,
			gte: gte,
			eq: eq,

  		/*--------------------------------------@category Util------------------------------------*/

			noop: noop,
			identity: identity,
			iteratee: iteratee,
			nthArg: nthArg,
			uniqueId: uniqueId,
			times: times,
			mixin: mixin,
			constant: constant,
			matches: matches,
			conforms: conforms,
			conformsTo: conformsTo,
			defaultTo: defaultTo,
			flow: flow,
			flowRight: flowRight,
 
  		/*--------------------------------------@category Math------------------------------------*/
			add: add,
			subtract: subtract,
			multiply: multiply,
			divide: divide,
			ceil: ceil,
			floor: floor,
			round: round,
			//baseMax
			max: max,
			maxBy: maxBy,
			//baseMin
			min: min,
			minBy: minBy,
			//baseSum
			sum: sum,
			sumBy: sumBy,
			//baseMean
			mean: mean,
			meanBy: meanBy,
		
  		/*--------------------------------------@category Array------------------------------------*/

			chunk: chunk,

			compact: compact,

			fromPairs: fromPairs, //参考： toPairs, toPairsIn

			head: head,
			last: last,
			nth: nth,
			initial: initial,
			tail: tail,
			take: take,
			takeRight: takeRight,
			takeWhile: takeWhile,
			takeRightWhile: takeRightWhile,

			//baseFindIndex
			findIndex: findIndex,
			findLastIndex: findLastIndex,
			indexOf: indexOf,
			lastIndexOf: lastIndexOf,
			sortedIndexOf: sortedIndexOf, // <--- baseSortedIndexBy 
			sortedLastIndexOf: sortedLastIndexOf, // <--- baseSortedIndexBy 
			
			//baseSortedIndexBy
			sortedIndex: sortedIndex,
			sortedLastIndex: sortedLastIndex,
			sortedIndexBy: sortedIndexBy,
			sortedLastIndexBy: sortedLastIndexBy,

			//baseSortedUniq
			sortedUniq: sortedUniq,
			sortedUniqBy: sortedUniqBy,

			//baseUniq
			uniq: uniq,
			uniqBy: uniqBy,
			uniqWith: uniqWith,
			union: union,
			unionBy: unionBy,
			unionWith: unionWith,

			//baseIntersection
			intersection: intersection,
			intersectionBy: intersectionBy,
			intersectionWith: intersectionWith,

			//baseXor
			xor: xor,
			xorBy: xorBy,
			xorWith: xorWith,

			//baseDifference
			difference: difference,
			differenceBy: differenceBy,
			differenceWith: differenceWith,

			without: without,

			pull: pull,
			pullAll: pullAll,
			pullAllBy: pullAllBy,
			pullAllWith: pullAllWith,
			pullAt: pullAt,

			drop: drop,
			dropRight: dropRight,
			dropWhile: dropWhile,
			dropRightWhile: dropRightWhile,

			//baseFlatten
			flatten: flatten,
			flattenDepth: flattenDepth,
			flattenDeep: flattenDeep,

			//baseUnzip
			zip: zip,
			zipWith: zipWith,
			zipObject: zipObject,
			zipObjectDeep: zipObjectDeep,
			unzip: unzip,
			unzipWith: unzipWith,

			keyBy: keyBy,
			groupBy: groupBy,
			countBy: countBy,

			//baseOrderBy
			orderBy: orderBy,
			sortBy: sortBy,

			/*--------------------------------------@category Object------------------------------------*/

			toPairs: toPairs, //参考： fromPairs
			toPairsIn: toPairsIn,
			keys: keys,
			keysIn: keysIn,
			values: values,
			valuesIn: valuesIn,
			//baseMap
			mapKeys: mapKeys,
			mapValues: mapValues,
			invert: invert,
			invertBy: invertBy,
			
			get: get,
			result: result,
			at: at,
			//baseHas
			has: has,
			hasIn: hasIn,
			pick: pick,
			pickBy: pickBy,
			omit: omit,
			omitBy: omitBy,
			invoke: invoke,
			
			create: create,
			assign: assign,
			assignIn: assignIn,
			merge: merge,
			mergeWith: mergeWith,
			defaults: defaults,
			defaultsDeep: defaultsDeep,
			//baseSet
			set: set,
			setWith: setWith,
			unset, unset,
			update: update,
			updateWith: updateWith,

			forIn: forIn,
			forInRight: forInRight,
			forOwn: forOwn,
			forOwnRight: forOwnRight,
			functions: functions,
			functionsIn: functionsIn,

			findKey: findKey,
			findLastKey: findLastKey,

			transform: transform,