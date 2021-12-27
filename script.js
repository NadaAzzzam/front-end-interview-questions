function headerElem(val){
// document.write(val)
console.log(val);
document.getElementById('header').innerText=val
}
headerElem('HELLO NADA')
// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tal


const marksMass=78;
const marksHeight=1.69;
const johnsMass=92
const johnsHeight=1.95

// marksMass=95;
// marksHeight=1.88;
// johnsMass=85
// johnsHeight=1.76

const marksBMI = marksMass / marksHeight  ** 2
const johnsBMI = johnsMass / (johnsHeight * johnsHeight)
const marksHeigherBMI= marksBMI  > johnsMass

console.log(marksBMI,johnsBMI, marksHeigherBMI);
let x=10
console.log(Number(x)+12);
console.log(String(x)+12);
console.log(Boolean(x));
console.log(Boolean({}));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));