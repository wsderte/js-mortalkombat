const $randomButton = document.querySelector('.button');
const $arenas = document.querySelector('.arenas');

let player1 = {
    name: 'Scorpion',
    player: '1',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [],
    attack: function () {
      console.log(this.name + ' ' + 'Fight');
    },
  },
  player2 = {
    name: 'Kitana',
    player: '2',
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
  $progressbar.classList.add('progressbar');

  const $character = document.createElement('character');
  $character.classList.add('character');

  const $life = document.createElement('life');
  $life.classList.add('life');
  $life.style.width = obj.hp + '%';

  const $name = document.createElement('name');
  $name.innerText = obj.name;
  $name.classList.add('name');

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

function winner(name) {
  const $win = document.createElement('div');
  $win.classList.add('win');

  $win.innerText = name + ' ' + 'win';
  return $win;
}

function rnd() {
  let hit = Math.floor(Math.random() * 20);
  return hit;
}

function changeHP(player) {
  let hit = rnd();
  const $playerLife = document.querySelector(
    '.player' + player.player + ' .life'
  );
  if (player.hp >= hit) {
    player.hp -= hit;
    $playerLife.style.width = player.hp + '%';
  } else {
    player.hp = 0;
    let champion = player1.hp === 0 ? player2.name : player1.name;

    $arenas.appendChild(winner(champion));
    $randomButton.disabled = true;
  }
}

$randomButton.addEventListener('click', function () {
  changeHP(player1);
  changeHP(player2);
  // console.log(player1.hp);
  // console.log(player2.hp);
});

createPlayer('player1', player1);
createPlayer('player2', player2);
