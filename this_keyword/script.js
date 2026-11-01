// ! this keyword changes its nature according to where it is used 
console.log(this);

function abc(){
    console.log(this);
}

abc();



let obj = {
    name : "rishi",
    nick: "rahul",
    surname : function (){
        console.log(this);
    },
};

obj.surname();


document.querySelector("h1").addEventListener("click",function(){
    // alert("clicl");
    // console.log(this); //! here this means the query which is selected 
    // console.log((this.style.color = "red"));
    this.style.color = "red";
})