let timerId;

function startAnimationsLogo() {
  console.log('.........startAnimationsLogo..........');

  const logo = document.querySelector('.logo');

  console.log('startAnimationsLogo --> logo --> ');
  console.log(logo);

  const itemRotate = logo.querySelector('.logo__rotate');
  const rightUp = logo.querySelector('.right-x__up');
  const rightBottom = logo.querySelector('.right-x__bottom');
  const leftUp = logo.querySelector('.left-x__up');
  const leftBottom = logo.querySelector('.left-x__bottom');

  let ang = 0.45;
  // let delay = 10000;
  let delay = 3000;
  let count = 0;
  const FIRST_COLOR = '#00d8ff';
  const SECOND_COLOR = '#ffffff';
  const BG_COLOR = '#131313';

  const step = (ang, c1, c2, c3, c4) => {
    itemRotate.style.transform = `rotate(${ang * 100}deg)`;
    leftUp.style.backgroundColor = c1;
    rightUp.style.backgroundColor = c2;
    leftBottom.style.backgroundColor = c3;
    rightBottom.style.backgroundColor = c4;
  }

  //рекурсивный вызов setTimeout
  timerId = setTimeout(function rotate() {

    ang += 0.90;
    count += 1;

    count === 1 && step(ang, SECOND_COLOR, SECOND_COLOR, FIRST_COLOR, FIRST_COLOR);
    count === 2 && step(ang, FIRST_COLOR, FIRST_COLOR, SECOND_COLOR, SECOND_COLOR);
    count === 3 && step(ang, FIRST_COLOR, SECOND_COLOR, SECOND_COLOR, FIRST_COLOR);
    count === 4 && step(ang, SECOND_COLOR, FIRST_COLOR, FIRST_COLOR, SECOND_COLOR);
    count === 5 && step(ang, FIRST_COLOR, SECOND_COLOR, FIRST_COLOR, SECOND_COLOR);


    if (count >= 6 && count <= 9) {
      ang -= 0.90;
      itemRotate.style.borderTopColor = BG_COLOR;
      itemRotate.style.borderLeftColor = BG_COLOR;
      rightUp.style.backgroundColor = BG_COLOR;
      rightBottom.style.backgroundColor = BG_COLOR;
    }

    if (count === 10) {
      ang -= 0.90;
      itemRotate.style.borderTopColor = SECOND_COLOR;
      itemRotate.style.borderLeftColor = SECOND_COLOR;
      rightUp.style.backgroundColor = SECOND_COLOR;
      rightBottom.style.backgroundColor = SECOND_COLOR;
    }

    count === 11 && step(ang, SECOND_COLOR, SECOND_COLOR, FIRST_COLOR, FIRST_COLOR);
    count === 12 && step(ang, FIRST_COLOR, SECOND_COLOR, FIRST_COLOR, SECOND_COLOR);
    count === 13 && step(ang, FIRST_COLOR, SECOND_COLOR, SECOND_COLOR, FIRST_COLOR);
    count === 14 && step(ang, SECOND_COLOR, FIRST_COLOR, FIRST_COLOR, SECOND_COLOR);
    count === 15 && step(ang, FIRST_COLOR, FIRST_COLOR, SECOND_COLOR, SECOND_COLOR);

    if (count >= 16 && count <= 19) {
      ang -= 0.90;
      itemRotate.style.borderRightColor = BG_COLOR;
      itemRotate.style.borderBottomColor = BG_COLOR;
      rightUp.style.backgroundColor = BG_COLOR;
      leftUp.style.backgroundColor = BG_COLOR;
    }

    if (count === 20) {
      ang -= 0.90;
      itemRotate.style.borderRightColor = FIRST_COLOR;
      itemRotate.style.borderBottomColor = FIRST_COLOR;
      rightUp.style.backgroundColor = FIRST_COLOR;
      leftUp.style.backgroundColor = FIRST_COLOR;
    }

    count === 21 && step(ang, SECOND_COLOR, SECOND_COLOR, FIRST_COLOR, FIRST_COLOR);
    count === 22 && step(ang, FIRST_COLOR, FIRST_COLOR, SECOND_COLOR, SECOND_COLOR);

    console.log(`${count}-step ---`);

    if (count === 22) {
      count = 0;
    }

    timerId = setTimeout(rotate, delay);

  }, delay)

}

window.addEventListener('unload', function() {
  clearTimeout(timerId);
});
