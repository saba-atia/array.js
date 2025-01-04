let array=[1,2,3,4,5];
let x='';
for (let index in array){
    x+= array[index] +',';
}
document.writeln(x);