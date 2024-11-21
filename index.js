// Write your solution in this file!
const employee = {
    name : "Adrian",
    address: "1123 Nelva Park Dr"
};
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
function deleteFromEmployeeByKey(obj, key, value) {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value;
    return obj;
}