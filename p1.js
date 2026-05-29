console.log("Hello, World! This is Ak here");
console.warn("This is a warning message.");
console.error("This is an error message.");
var a=10
let b=20
const c=30

console.log(a)
document.write(a)
var ans = confirm("Are you sure?")
console.log(ans)
var user = prompt("What is your age?")
console.log("Username is",user)
if(user>18){
    console.log("you can vote")
}else{
    console.log("you cannot vote")
}
for(i=0;i<5;i++){
    console.log(i)
}
function hey(){
    console.log("Hey, how are you?")
}
hey()

function multihey(func,n){
    for(i=0;i<n;i++){
        func()
    }
}
multihey(hey,3)