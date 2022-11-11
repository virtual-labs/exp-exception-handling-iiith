let experiments = ['value-error', 'key-error', 'index-error', 'zero-division-error']
window.onload = () => {
    let curr = localStorage.getItem('currentExperiment')
    if(curr){
        let elements = document.getElementsByClassName('value-error')
        elements[0].style.display = 'none'
        elements[1].style.display = 'none'
        elements = document.getElementsByClassName(curr)
        elements[0].style.display = 'block'
        elements[1].style.display = 'block'
        document.getElementById("exception-name").value = curr
    }
}
function handleSubmitValue() {
    let intOption = document.getElementById("value").value
    let exceptionOption = document.getElementById("exceptionValue").value
    let answer = document.getElementsByClassName("answer-value")[0]
    if (!intOption || !exceptionOption)
        answer.innerHTML = "Select all Options"
    else if (intOption != "int") {
        answer.innerHTML = "Incorrect! Wrong Data Type"
    } else if (intOption === "int" && exceptionOption === "ValueError") {
        answer.innerHTML = "Correct! ValueError Exception will be raised<br> whenever user enters anything but a number"
    } else
        answer.innerHTML = "Incorrect! Try Again"
}

function handleSubmitKey() {
    let keyOption = document.getElementById("key").value
    let exceptionOption = document.getElementById("exceptionKey").value
    let answer = document.getElementsByClassName("answer-key")[0]
    if (!keyOption || !exceptionOption)
        answer.innerHTML = "Select all Options"
    else if (keyOption == 'PratisTha' || keyOption == 'Mohit')
        answer.innerHTML = "Incorrect! Key given to the dictionary is wrong"
    else if (keyOption === "Karthik" && exceptionOption === "KeyError")
        answer.innerHTML = "Correct! KeyError will be raised whenever user enters<br> an employee not in the database"
    else
        answer.innerHTML = "Incorrect! Try Again"
}

function handleSubmitIndex() {
    let exceptionOption = document.getElementById("exception-index").value
    let exceptionOption2 = document.getElementById("exception-index2").value
    let index = document.getElementById("index").value
    let answer = document.getElementsByClassName("answer-index")[0]
    if (!exceptionOption || !exceptionOption2 || !index)
        answer.innerHTML = "Select all Options"
    else if (index == "p")
        answer.innerHTML = "Incorrect! Index has to be a number"
    else if (index == "10")
        answer.innerHTML = "Incorrect! Index cannot be greater than length of array"
    else if (exceptionOption === "IndexError" && exceptionOption2 === "ValueError" && index === "-1")
        answer.innerHTML = "Correct! IndexError will be raised whenever index is out of<br> range and ValueError when index is anything but a number"
    else
        answer.innerHTML = "Incorrect! Try Again"
}

function handleSubmitZero() {
    let exceptionOption = document.getElementById("exception-zero").value
    let people = document.getElementById("people").value
    let answer = document.getElementsByClassName("answer-zero")[0]
    if (!exceptionOption || !people)
        answer.innerHTML = "Select all Options"
    else if (people == "-1")
        answer.innerHTML = "Incorrect! Number of people to split cannot be negative"
    else if (people == "-1")
        answer.innerHTML = "Incorrect! Split cannot be done between 0 people"
    else if (exceptionOption === "ZeroDivisionError" && people === "3")
        answer.innerHTML = "Correct! ZeroDivisionError will be raised whenever<br> number of people is 0"
    else
        answer.innerHTML = "Incorrect! Try Again"
}

function changeExperiment() {
    let experiment = document.getElementById("exception-name").value
    localStorage.setItem('currentExperiment',experiment);
    experiments.forEach(exp => {
        let elements = document.getElementsByClassName(exp)
        if (exp === experiment) {
            elements[0].style.display = 'block'
            elements[1].style.display = 'block'
        } else {
            elements[0].style.display = 'none'
            elements[1].style.display = 'none'
        }
    });
}

function testValueError() {
    let x = document.getElementById("num").value;
    let hap = document.getElementById("hap-value")
    let sho = document.getElementById("sho-value")
    let ok = document.getElementById("ok-value")
    let demo = document.getElementById("demo-value")
    let reward = document.getElementById("reward-value")
    let refresh = document.getElementById("refresh-value")
    refresh.style.display = 'block';
    ok.style.display = 'none'
    event.currentTarget.value = "";
    if (isNaN(x) || isNaN(parseInt(x))) {
        demo.innerHTML = `ValueError: invalid literal for int() with base 10: '${x}'`;
        reward.innerHTML = "You are an exception master!";
        hap.style.display = 'block';
        sho.style.display = 'none';
        animateValue(1)
        return
    }
    x = parseInt(x)
    if (!(x >= 0)) {
        demo.innerHTML = "ValueError: math domain error";
        reward.innerHTML = "You are an exception master!";
        hap.style.display = 'block';
        sho.style.display = 'none';
        animateValue(1)
    }
    else {
        demo.innerHTML = "Square Root of " + x + " is " + Math.sqrt(x);
        reward.innerHTML = "You need a little more rebellion. Try again!";
        sho.style.display = 'block';
        hap.style.display = 'none';
        animateValue(0)
    }
}

function testIndexError() {
    let x = document.getElementById("bucket").value;
    let hap = document.getElementById("hap-index")
    let sho = document.getElementById("sho-index")
    let ok = document.getElementById("ok-index")
    let demo = document.getElementById("demo-index")
    let reward = document.getElementById("reward-index")
    let refresh = document.getElementById("refresh-index")
    refresh.style.display = 'block';
    if (isNaN(x) || isNaN(parseInt(x))) {
        demo.innerHTML = `ValueError: invalid literal for int() with base 10: '${x}'`;
        reward.innerHTML = "You generated a ValueError. Try Again!";
        sho.style.display = 'block';
        hap.style.display = 'none';
    } else {
        x = parseInt(x)
        if (x >= 3 || x < -3) {
            demo.innerHTML = "IndexError: list index out of range";
            hap.style.display = "block";
            reward.innerHTML = "You are an exception master!";
            animateIndex(0);
        }
        else {
            demo.innerHTML = "";
            reward.innerHTML = "You need a little more rebellion. Try again!";
            sho.style.display = 'block';
            hap.style.display = 'none';
            if (x >= 0)
                animateIndex(x + 1)
            else
                animateIndex(x + 4);
        }
    }
    event.currentTarget.value = "";
}

function testKeyError() {
    let x = document.getElementById("gen-key").value;
    document.getElementById("ok-key").style.display = 'none';
    document.getElementById("refresh-key").style.display = 'block';
    if (!(x === 'blue' || x === 'green' || x === 'red')) {
        document.getElementById("demo-key").innerHTML = "KeyError: " + x;
        document.getElementById("reward-key").innerHTML = "You are an exception master!";
        document.getElementById("hap-key").style.display = 'block';
        animateKey(0)
    }
    else {
        document.getElementById("reward-key").innerHTML = "You need a little more rebelion. Try again!";
        document.getElementById("demo-key").innerHTML = '';
        document.getElementById("sho-key").style.display = 'block';
        document.getElementById("hap-key").style.display = 'none';
        animateKey(x)
    }
    event.currentTarget.value = "";
}

function testZeroError() {
    var x = document.getElementById("zero").value;
    document.getElementById("division").innerHTML = "" + x;
    document.getElementById("division").style.display = 'block';
    document.getElementById("refresh-zero").style.display = 'block';
    if (x == 0) {
        document.getElementById("demo-zero").innerHTML = "ZeroDivisionError";
        document.getElementById("reward-zero").innerHTML = "You are an exception master!";
        animateZero(0)
    }
    else {
        document.getElementById("reward-zero").innerHTML = "You need a little more rebelion. Try again!";
        animateZero(x)
        if (Number(x) > 10) { document.getElementById("dividend").innerHTML = 10; }
        else { document.getElementById("dividend").innerHTML = 10 % x; }
    }
    event.currentTarget.value = "";
}

function animateValue(i) {
    if (i == 1) {
        anime({
            targets: '#ball-value',
            translateY: -100,
            rotate: '2turn',
            loop: 6,
            direction: 'alternate',
            duration: 500,
            easing: 'easeInOutSine',
        })
    } else {
        anime({
            targets: '#pivot-value, #ball-value',
            rotate: [0, 180],
            duration: 3000,
            easing: 'easeInOutSine',
        })
    }
}

function animateKey(i) {
    if (i == 0) {
        anime({
            targets: '#pivot-key, #ball-key',
            translateY: -100,
            loop: 6,
            direction: 'alternate',
            duration: 500,
            easing: 'easeInOutSine',
        })
    } else {
        if (i == 'blue') {
            document.getElementById("pivot-key").style.width = '28%';
            anime({
                targets: '#pivot-key, #ball-key',
                rotate: [0, 180],
                duration: 3000,
                easing: 'easeInOutSine',
            })
        } else if (i == 'green') {
            document.getElementById("pivot-key").style.width = '57%';
            anime({
                targets: '#pivot-key, #ball-key',
                rotate: [0, 180],
                duration: 3000,
                easing: 'easeInOutSine',
            })
        } else {
            document.getElementById("pivot-key").style.width = '85%';
            anime({
                targets: '#pivot-key, #ball-key',
                rotate: [0, 180],
                duration: 3000,
                easing: 'easeInOutSine',
            })
        }
    }
}

function animateIndex(i) {
    if (i == 0) {
        anime({
            targets: '#piv-index, #ball-index',
            translateY: -100,
            loop: 6,
            direction: 'alternate',
            duration: 500,
            easing: 'easeInOutSine',
        })
    } else {
        if (i == 1) {
            document.getElementById("piv-index").style.width = '28%';
            anime({
                targets: '#piv-index, #ball-index',
                rotate: [0, 180],
                duration: 3000,
                easing: 'easeInOutSine',
            })
        } else if (i == 2) {
            document.getElementById("piv-index").style.width = '57%';
            anime({
                targets: '#piv-index, #ball-index',
                rotate: [0, 180],
                duration: 3000,
                easing: 'easeInOutSine',
            })
        } else {
            document.getElementById("piv-index").style.width = '85%';
            anime({
                targets: '#piv-index, #ball-index',
                rotate: [0, 180],
                duration: 3000,
                easing: 'easeInOutSine',
            })
        }
    }
}

function animateZero(i) {
    if (i == 0) {
        anime({
            targets: '#pivot-zero, #ball-zero',
            translateY: -100,
            loop: 6,
            direction: 'alternate',
            duration: 500,
            easing: 'easeInOutSine',
        })
    } else {
        anime({
            targets: '#pivot-zero, #ball-zero',
            translateX: '120%',
            duration: 500,
            easing: 'easeInOutSine',
        })
    }
}