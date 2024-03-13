const bulbElement = document.getElementById('svg-light-bulb');
const buttonElement = document.getElementById('button');

let isSwitchOn = false;

const switchbulbSVG = () => {

    if (isSwitchOn === false) {
        isSwitchOn = true;
        bulbElement.classList.add('light-on');
        buttonElement.innerHTML = 'switch off';


    } else {
        isSwitchOn = false;
        bulbElement.classList.remove('light-on');
        buttonElement.innerHTML = 'switch on';


    }

}

buttonElement.addEventListener('click', switchbulbSVG);