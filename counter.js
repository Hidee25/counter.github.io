const buttons = document.querySelectorAll('.btn');

let counter = 0;
const achievements = {
    "plus10" : false,
    "plus20" : false,
    "minus10" : false,
    "minus20" : false
}

const indicator = document.getElementById('indicator');
indicator.innerText = counter;
const body = document.querySelector('.body');
const container = document.querySelector('.container');
const clickSound = new Audio('classic-click.wav');

buttons.forEach(button => {
    const btnAttr = button.getAttribute('id');

    button.addEventListener("click", () => {
        const docu = document.querySelector('.msg-wrapper');
        clickSound.play();
        clickSound.currentTime = 0.02;
        if(btnAttr == 'decrease'){
            counter -= 1;
            if(counter < -30) counter = 0, indicator.style.color = '#FFE5E5';
        }
        else if(btnAttr == 'reset'){
            counter = 0;
            Object.keys(achievements).forEach((i) => {
                return achievements[i] = false;
            })
        }
        else if(btnAttr == 'increase'){
            counter += 1;
            if(counter > 30) counter = 0, indicator.style.color = '#FFE5E5';
        }
        indicator.innerText = counter;

        // set up an element
        const msg = document.createElement('div');
        msg.setAttribute('class', 'msg-wrapper');
        msg.innerHTML = `<h2>Good Job! (${indicator.innerText})</h2><p>Lorem ipsum dolor sit amet consectetur.</p>`;
        const clsBtn = document.createElement('button');
        clsBtn.innerText = 'close';
        clsBtn.setAttribute('onclick', 'closeMsg()');
        clsBtn.setAttribute('class', 'closeBtn');
        msg.appendChild(clsBtn);

        if(indicator.innerText == 0) indicator.style.color = '#FFE5E5';
        if(indicator.innerText > 0) indicator.style.color = '#87FF5E';
        if(indicator.innerText < 0) indicator.style.color = '#FF5E5E';
        if(indicator.innerText == 10 && achievements.plus10 == false){
            if(docu) docu.remove();
            body.insertBefore(msg, container);
            achievements.plus10 = true;
        }
        if(indicator.innerText == 20 && achievements.plus20 == false){
            if(docu) docu.remove();
            body.insertBefore(msg, container); 
            achievements.plus20 = true;
        }
        if(indicator.innerText == -10 && achievements.minus10 == false){
            if(docu) docu.remove();
            body.insertBefore(msg, container); 
            achievements.minus10 = true;
        }
        if(indicator.innerText == -20 && achievements.minus20 == false){
            if(docu) docu.remove();
            body.insertBefore(msg, container); 
            achievements.minus20 = true;
        }
    })
})

function closeMsg(){
    document.querySelector('.msg-wrapper').remove();
}