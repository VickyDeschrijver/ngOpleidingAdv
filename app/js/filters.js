var o1  =   $scope.students._id;
var o2  =   $scope.opleidingen._id;

function x($scope) {
    $scope.o1 = $scope.students._id;
    $scope.o2 = $scope.opleidingen._id;
    $scope.func = function() {
        alert(angular.equals($scope.o1, $scope.o2));
    }
}

angular.equals(o1, o2){
     if (o1 === o2) console.log('joehoe');
}

/*
function equals(o1, o2) {
    if (o1 === o2) return true;
    if (o1 === null || o2 === null) return false;
    if (o1 !== o1 && o2 !== o2) return true; // NaN === NaN
    var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
    if (t1 == t2) {
        if (t1 == 'object') {
            if (isArray(o1)) {
                if (!isArray(o2)) return false;
                if ((length = o1.length) == o2.length) {
                    for (key = 0; key < length; key++) {
                        if (!equals(o1[key], o2[key])) return false;
                    }
                    return true;
                }
            } else if (isDate(o1)) {
                if (!isDate(o2)) return false;
                return equals(o1.getTime(), o2.getTime());
            } else if (isRegExp(o1)) {
                return isRegExp(o2) ? o1.toString() == o2.toString() : false;
            } else {
                if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2) ||
                    isArray(o2) || isDate(o2) || isRegExp(o2)) return false;
                keySet = createMap();
                for (key in o1) {
                    if (key.charAt(0) === '$' || isFunction(o1[key])) continue;
                    if (!equals(o1[key], o2[key])) return false;
                    keySet[key] = true;
                }
                for (key in o2) {
                    if (!(key in keySet) &&
                        key.charAt(0) !== '$' &&
                        o2[key] !== undefined &&
                        !isFunction(o2[key])) return false;
                }
                return true;
            }
        }
    }
    return false;
}*/
