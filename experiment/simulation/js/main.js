let experiments = ['ValueError','KeyError','IndexError','ZeroDivisionError']
function animate(i) {
    if(i==1){
    } else {
    }
}
function handleSubmit(){
    console.log("yes")
    let intOption = document.getElementById("int").value
    let exceptionOption = document.getElementById("exception").value
    let answer = document.getElementsByClassName("Answer")[0]
    if(!intOption || !exceptionOption)
        answer.innerHTML = "Select all Options"
    else if(intOption === "int" && exceptionOption === "ValueError")
        answer.innerHTML = "Correct! ValueError Exception will be raised\n whenever user enters anything but a number"
    else
        answer.innerHTML = "Incorrect! Try Again"
    }
function Refresh() {
    location.reload();
}
function changeExperiment() {
    let experiment = document.getElementById("exception-name").value
    experiments.forEach(exp => {
        let elements = document.getElementsByClassName(exp)
        if(exp === experiment){
            elements[0].style.display = 'block'
            elements[1].style.display = 'block'
        }else{
            elements[0].style.display = 'none'
            elements[1].style.display = 'none'
        }
    });
    
}
function TestValueError() {
    var x = document.getElementById("num").value;
    if (!(x>=0)) {
        document.getElementById("demo").innerHTML = "ValueError: math domain error";
        document.getElementById("reward").innerHTML = "You are an exception master!";
    }
    else {
        document.getElementById("demo").innerHTML = "Square Root of " + x + " is "+ Math.sqrt(x);
        document.getElementById("reward").innerHTML = "You need a little more rebelion. Try again!";
        document.getElementById("refresh").style.display='block';
    }
    event.currentTarget.value = "";

}
function TestKeyError(){
    let name = document.getElementById("name").value
    let age = -1
    if(name == 'John')
        age = 30
    else if(name == 'Adam')
        age = 28
    else if(name == 'Jack')
        age = 37
    console.log(age)
    if(age == -1){
        document.getElementById("demoKey").innerHTML = "KeyError: '" + name+"'";
        document.getElementById("rewardKey").innerHTML = "You are an exception master!";
    }else{
        document.getElementById("demoKey").innerHTML = "Age of " + name + " is " + age;
        document.getElementById("rewardKey").innerHTML = "You need a little more rebelion. Try again!";
        document.getElementById("refreshKey").style.display='block';
        event.currentTarget.value = "";
    }
}