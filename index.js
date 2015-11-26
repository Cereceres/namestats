'use strict'
var numbers = require('numbers');
var str ='abcdefghijklmnñopqrstuvwxyz'
var Upstr = str.toUpperCase()
var indexOf = function (letter) {
  var pos = str.indexOf(letter)
  if (pos>=0) {
    return pos
  }
  pos = Upstr.indexOf(letter)
  if (pos>=0) {
    return pos
  }
}
function nameTonumber(name) {
  var sum = 0
  var l,val
  name = name.replace(/\s+/g, '').split('')
  name.forEach(function (letter,index,str) {
    l = str.length-1-index
    val = indexOf(letter)
    sum = sum + val*Math.pow(28,l)
  })
  return [sum,name.length]
}

  var number = Math.floor(_number)
  number = (_number-number)<0.5 ? number : number+1
  var ABC = str.split(''), res = number,n;
  var name=''
  var length = Math.floor(Math.log(number)/Math.log(28))+1
  for (var i =length-1 ; i >=0; i--) {
    n = Math.floor(res/Math.pow(28,i))
    res = res - Math.pow(28,i)*n
    name = name.concat(ABC[n])
  }
    while (name.length < _length){name = 'a' + name;}
    return name;
}
function nameAverage(names) {
  var nums = [], num
  names.forEach(function function_name(name) {
    num = nameTonumber(name)
    nums.push(num)
  })
  var p = numbers.statistic.mean(nums)
  var edes = numbers.statistic.standardDev(nums)
  return [ numberToname(p),
    numberToname(edes)]


}
module.exports = {nameTonumber:nameTonumber,
                  numberToname:numberToname,
                  nameAverage:nameAverage  }
