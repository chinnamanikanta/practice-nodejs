const nameArray = [1,2,3,4,5];
const getname = (num) => {
return nameArray.find((name) => name === num)

}

console.log(getname(4))