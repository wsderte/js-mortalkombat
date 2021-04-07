let player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [],
    attack: function () {
      console.log(this.name + ' ' + 'Fight');
    },
  },
  player2 = {
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: [],
    attack: function () {
      console.log(this.name + ' ' + 'Fight');
    },
  };

let createPlayer = function (player, obj) {
  const $div = document.createElement('div');
  $div.classList.add(player);

  const $progressbar = document.createElement('progressbar');

  const $character = document.createElement('character');

  const $life = document.createElement('life');
  $life.innerText = obj.hp;
  $life.style.width = '100%';

  const $name = document.createElement('name');
  $name.innerText = obj.name;

  const $img = document.createElement('img');
  $img.src = obj.img;

  $div.appendChild($progressbar);
  $div.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);

  const $arenas = document.querySelector('.arenas');
  $arenas.appendChild($div);
};

createPlayer('player1', player1);
createPlayer('player2', player2);
