// DO WHATEVER YOU WANT HERE
// DO WHATEVER YOU WANT HERE
const object = {};

const createEnumerableProperty = (propertyName) => {
  object.property = 'value';
};
const createNotEnumerableProperty = (propertyName) => {
  delete object.property;
  return Symbol(propertyName);

};
const createProtoMagicObject = () => {
let F = new Function();
F.prototype = Function.prototype;
 return F;


};
const incrementor = () => {
  incrementor.count = incrementor.count ? incrementor.count: 1;
    function Counter() {
        incrementor.count++;
        return Counter;
    }

    Counter.valueOf = function() {
        return incrementor.count++;
    }
    return Counter;

};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
  return new Promise(resolve => {
        setTimeout(() => {
            return resolve(param)
        }, 1000);

})
};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {
  return new String();
};
const toBuffer = () => {};
const sortByProto = (array) => {
  return array.sort();
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
