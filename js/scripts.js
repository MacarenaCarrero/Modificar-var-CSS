const rootStyles = document.documentElement.style;

const mouseElement = document.getElementById('mouse');

const redBoxElement = document.getElementById('redBox');
const pixelsElement = document.getElementById('pixels');
const buttonHexaElement = document.getElementById('buttonHexa');
const buttonRgbElement = document.getElementById('buttonRgb');
//

// unir la barrita al scroll
const modifyRedBar = event => {
  const totalScroll = document.body.scrollHeight;
  const windowHeight = window.innerHeight;
  const cuantityScroll = window.scrollY;
};

const followMouse = event => {
  rootStyles.setProperty('--box-x', event.clientX + 'px');
  rootStyles.setProperty('--box-y', event.clientY + 'px');
};

const changeColorHexa = () => {
  const lettersYnumbers = 'abcdef0123456789';
  let newColor = '#';

  for (let i = 0; i < 6; i++) {
    const randomCharcter = Math.floor(Math.random() * lettersYnumbers.length);
    const hexaContent = lettersYnumbers.charAt(randomCharcter);
    newColor = newColor + hexaContent;
  }

  rootStyles.setProperty('--bg-color', newColor);
};

const changeColorRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const finalyColor = `rgb(${red},${green},${blue})`;
  rootStyles.setProperty('--bg-color', finalyColor);
};

buttonRgbElement.addEventListener('click', changeColorRgb);
buttonHexaElement.addEventListener('click', changeColorHexa);
document.addEventListener('mousemove', followMouse);
