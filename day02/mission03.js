const formatName = (name,callback)=>{
    return callback(name);
}

const upperCase = name => name.toUpperCase();
const greeting = name => name.toLowerCase();


console.log(formatName("wdy", upperCase));
console.log(formatName("wdy", greeting)); 