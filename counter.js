let counter = 0;
const achievements = {
    "plus10" : 0,
    "plus20" : 0,
    "minus10" : 0,
    "minus20" : 0
}
let indicator = document.getElementById('indicator');
indicator.innerText = counter;
const content = document.querySelector('.content');
const header = document.querySelector('#header');

function increment(){
    counter += 1;
    indicator.innerText = counter;
    const docu = document.querySelector('.msg-wrapper');

    if(indicator.innerText == 10 && achievements.plus10 == 0){
        // remove msg first, if there's any msg created
        if(docu) docu.remove();
        // create div element
        const msg = document.createElement('div');
        msg.setAttribute('class', 'msg-wrapper');
        msg.innerHTML = '<h2>Good Job! (10)</h2><p>Lorem ipsum dolor sit amet consectetur.</p>';
        // create close button
        const clsBtn = document.createElement('button');
        clsBtn.innerText = 'close';
        clsBtn.setAttribute('onclick', 'closeMsg()');
        clsBtn.setAttribute('class', 'closeBtn');
        // adding btn to msg
        msg.appendChild(clsBtn);
        // adding msg to div
        content.insertBefore(msg, header);
        achievements.plus10 += 1;
    }
    if(indicator.innerText == 20 && achievements.plus20 == 0){
        // remove msg first, if there's any msg created
        if(docu) docu.remove();
        // create div element
        const msg = document.createElement('div');
        msg.setAttribute('class', 'msg-wrapper');
        msg.innerHTML = '<h2>Good Job! (20)</h2><p>Lorem ipsum dolor sit amet consectetur.</p>';
        // create close button
        const clsBtn = document.createElement('button');
        clsBtn.innerText = 'close';
        clsBtn.setAttribute('onclick', 'closeMsg()');
        clsBtn.setAttribute('class', 'closeBtn');
        // adding btn to msg
        msg.appendChild(clsBtn);
        // adding msg to div
        content.insertBefore(msg, header);
        achievements.plus20 += 1;
    }
    if(indicator.innerText > 30) {
        counter = 0;
        indicator.innerText = counter;
        return counter;
    }
    return counter;
}

function decrement(){
    counter -= 1;
    indicator.innerText = counter;
    const docu = document.querySelector('.msg-wrapper');

    if(indicator.innerText == -10 && achievements.minus10 == 0){
        if(docu) docu.remove();
        const msg = document.createElement('div');
        msg.setAttribute('class', 'msg-wrapper');
        msg.innerHTML = '<h2>Good Job! (-10)</h2><p>Lorem ipsum dolor sit amet consectetur.</p>';
        // create close button
        const clsBtn = document.createElement('button');
        clsBtn.innerText = 'close';
        clsBtn.setAttribute('onclick', 'closeMsg()');
        clsBtn.setAttribute('class', 'closeBtn');
        // adding btn to msg
        msg.appendChild(clsBtn);
        // adding msg to div
        content.insertBefore(msg, header);
        achievements.minus10 += 1;
    }
    if(indicator.innerText == -20 && achievements.minus20 == 0){
        if(docu) docu.remove();
        const msg = document.createElement('div');
        msg.setAttribute('class', 'msg-wrapper');
        msg.innerHTML = '<h2>Good Job! (-20)</h2><p>Lorem ipsum dolor sit amet consectetur.</p>';
        // create close button
        const clsBtn = document.createElement('button');
        clsBtn.innerText = 'close';
        clsBtn.setAttribute('onclick', 'closeMsg()');
        clsBtn.setAttribute('class', 'closeBtn');
        // adding btn to msg
        msg.appendChild(clsBtn);
        // adding msg to div
        content.insertBefore(msg, header);
        achievements.minus20 += 1;
    }
    if(indicator.innerText < -30) {
        counter = 0;
        indicator.innerText = counter;
        return counter;
    }
    return counter;
}

function resetNum(){
    counter = 0;
    indicator.innerText = counter;
    const docu = document.querySelector('.msg-wrapper');
    if(docu) docu.remove();
    return counter;
}

function closeMsg(){
    document.querySelector('.msg-wrapper').remove();
}