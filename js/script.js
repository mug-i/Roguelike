// je declare le tableau dans javascript

let tableau_du_jeu = [
  [
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
  ],
  [
    "m",
    "",
    "",
    "",
    "",
    "",
    "m",
    "6",
    "",
    "",
    "",
    "m",
    "",
    "t",
    "",
    "",
    "",
    "m",
    "m",
    "",
    "",
    "",
    "m",
    "m",
    "m",
  ],
  [
    "m",
    "",
    "m",
    "m",
    "m",
    "t",
    "",
    "",
    "",
    "m",
    "",
    "",
    "",
    "",
    "",
    "m",
    "",
    "1",
    "",
    "m",
    "",
    "",
    "",
    "",
    "m",
  ],
  [
    "m",
    "",
    "",
    "",
    "",
    "",
    "m",
    "",
    "m",
    "",
    "m",
    "",
    "m",
    "m",
    "",
    "m",
    "",
    "",
    "m",
    "",
    "",
    "m",
    "m",
    "",
    "m",
  ],
  [
    "m",
    "t",
    "",
    "m",
    "",
    "",
    "m",
    "",
    "",
    "",
    "",
    "m",
    "",
    "",
    "",
    "",
    "",
    "",
    "m",
    "",
    "",
    "",
    "m",
    "",
    "m",
  ],
  [
    "m",
    "",
    "",
    "",
    "",
    "",
    "m",
    "m",
    "",
    "",
    "m",
    "m",
    "",
    "t",
    "",
    "",
    "",
    "",
    "",
    "m",
    "",
    "m",
    "",
    "m",
    "m",
  ],
  [
    "m",
    "m",
    "m",
    "m",
    "",
    "",
    "m",
    "",
    "m",
    "",
    "",
    "m",
    "m",
    "m",
    "4",
    "m",
    "m",
    "",
    "",
    "",
    "",
    "m",
    "m",
    "m",
    "m",
  ],
  [
    "m",
    "m",
    "m",
    "m",
    "",
    "",
    "m",
    "",
    "m",
    "m",
    "",
    "",
    "m",
    "",
    "",
    "m",
    "",
    "",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
  ],
  [
    "m",
    "",
    "m",
    "m",
    "",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "",
    "",
    "m",
    "m",
    "m",
    "m",
    "m",
    "",
    "",
    "",
    "m",
    "m",
    "m",
    "m",
  ],
  [
    "m",
    "",
    "",
    "",
    "",
    "",
    "",
    "t",
    "m",
    "m",
    "m",
    "",
    "m",
    "",
    "",
    "",
    "",
    "",
    "",
    "t",
    "m",
    "m",
    "m",
    "m",
    "m",
  ],
  [
    "m",
    "m",
    "",
    "m",
    "",
    "",
    "m",
    "",
    "",
    "",
    "",
    "",
    "m",
    "",
    "",
    "m",
    "m",
    "",
    "",
    "",
    "t",
    "",
    "6",
    "m",
    "m",
  ],
  [
    "m",
    "",
    "m",
    "m",
    "m",
    "",
    "m",
    "",
    "",
    "t",
    "m",
    "",
    "",
    "",
    "m",
    "",
    "m",
    "",
    "",
    "",
    "",
    "",
    "m",
    "m",
    "m",
  ],
  [
    "m",
    "",
    "",
    "m",
    "m",
    "m",
    "",
    "m",
    "",
    "m",
    "m",
    "6",
    "",
    "",
    "m",
    "",
    "m",
    "",
    "",
    "",
    "",
    "m",
    "m",
    "m",
    "m",
  ],
  [
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
    "m",
  ],
];

let main = document.getElementById("main");
// je declare une variable qui va m'aider a calculer le score
let nbrePoint = 0;

let score = document.getElementById("score");

// je cree une fonction qui va m'aider a mettre mon tableau sur le HTML et l'actualiser

function mygrid() {
  main.innerHTML = "";
  for (let i in tableau_du_jeu) {
    let tr = document.createElement("tr");
    for (let j in tableau_du_jeu[i]) {
      let td = document.createElement("td");
      td.textContent = tableau_du_jeu[i][j];
      tr.appendChild(td);

      if (tableau_du_jeu[i][j] == "m") {
        td.style.backgroundColor = "black";
        // td.style.height = "30px";
        // td.style.width = "30px";
      }

      if (tableau_du_jeu[i][j] == 1) {
        td.style.height = "30px";
        td.style.width = "30px";
        td.innerHTML =
          '<img src="./img/CartoonChar.png" alt="coin" width="30px" height="30px">';
      }

      if (tableau_du_jeu[i][j] == 4 || tableau_du_jeu[i][j] == 6) {
        // td.style.height = "30px";
        // td.style.width = "30px";
        td.innerHTML =
          '<img src="./img/ogre.png" alt="coin" width="30px" height="30px">';
      }

      if (tableau_du_jeu[i][j] == "t") {
        // td.style.height = "30px";
        // td.style.width = "30px";
        td.innerHTML =
          '<img src="./img/coin.png" alt="coin" width="30px" height="30px">';
      }
    }

    main.appendChild(tr);
  }
}

mygrid();

// la fonction qui va deplacer le joueur et les monstres a gauches

function deplacerLeftJoueur() {
  let { i, j, z } = rechercherj();
  deplacerLeft(i, j, z);
  deplacerMonstreUn();
  deplacerMonstreDeux();
}

// la fonction qui va deplacer le joueur et les monstres a droites

function deplacerRightJoueur() {
  let { i, j, z } = rechercherj();
  deplacerRight(i, j, z);
  deplacerMonstreUn();
  deplacerMonstreDeux();
}

// la fonction qui va deplacer le joueur et les monstres en haut

function deplacerUpJoueur() {
  let { i, j, z } = rechercherj();
  deplacerUp(i, j, z);
  deplacerMonstreUn();
  deplacerMonstreDeux();
}

// la fonction qui va deplacer le joueur et les monstres en bas

function deplacerDownJoueur() {
  let { i, j, z } = rechercherj();
  deplacerDown(i, j, z);
  deplacerMonstreUn();
  deplacerMonstreDeux();
}

// la fonction qui cherche le joueurs dans le tableau

function rechercherj() {
  let z = 1;

  for (let i in tableau_du_jeu) {
    for (let j in tableau_du_jeu[i]) {
      if (tableau_du_jeu[i][j] == z) {
        return { i: parseInt(i), j: parseInt(j), z };
      }
    }
  }
}

//la fonction qui deplace le premier monstre

function deplacerMonstreUn() {
  let { i, j, z } = rechercherMonstreUn();

  // je declare une variable qui va prendre 4 nombres aleatoires
  let nombreAleatoire = Math.floor(Math.random() * 4);

  //j'utilise switch pour changer de direction en fonctions du nombre aleatoire genere

  switch (nombreAleatoire) {
    case 0:
      deplacerLeft(i, j, z);
      break;
    case 1:
      deplacerRight(i, j, z);
      break;
    case 2:
      deplacerUp(i, j, z);
      break;
    case 3:
      deplacerDown(i, j, z);
      break;
  }
}

//la fonction qui deplace le premier monstre

function deplacerMonstreDeux() {
  let { i, j, z } = rechercherMonstreDeux();

  // je declare une variable qui va prendre 4 nombres aleatoires

  let nombreAleatoire = Math.floor(Math.random() * 4);

  //j'utilise switch pour changer de direction en fonctions du nombre aleatoire genere

  switch (nombreAleatoire) {
    case 0:
      deplacerLeft(i, j, z);
      break;
    case 1:
      deplacerRight(i, j, z);
      break;
    case 2:
      deplacerUp(i, j, z);
      break;
    case 3:
      deplacerDown(i, j, z);
      break;
  }
}

// fonction qui cherche le premier monstre dans le tableau

function rechercherMonstreUn() {
  let z = 4;

  for (let i in tableau_du_jeu) {
    for (let j in tableau_du_jeu[i]) {
      if (tableau_du_jeu[i][j] == z) {
        return { i: parseInt(i), j: parseInt(j), z };
      }
    }
  }
}

// fonction qui cherche le deuxieme monstre dans le tableau

function rechercherMonstreDeux() {
  let z = 6;

  for (let i in tableau_du_jeu) {
    for (let j in tableau_du_jeu[i]) {
      if (tableau_du_jeu[i][j] == z) {
        return { i: parseInt(i), j: parseInt(j), z };
      }
    }
  }
}

// la foinction qui deplace les joueurs et les monstres a gauches

function deplacerLeft(i, j, z) {
  if (tableau_du_jeu[i][j - 1] != "m") {
    if (tableau_du_jeu[i][j - 1] == "") {
      tableau_du_jeu[i][j - 1] = z;
      tableau_du_jeu[i][j] = "";
    } else if (tableau_du_jeu[i][j - 1] == "t" && z == 1) {
      tableau_du_jeu[i][j - 1] = z;
      tableau_du_jeu[i][j] = "";

      nbrePoint = nbrePoint + 1;
      score.innerText = "score: " + nbrePoint;

      if (nbrePoint == 8) {
        tableau_du_jeu[i][j - 1] = z;
        tableau_du_jeu[i][j] = "";

        document.getElementById("gagner").style.display = "block";
        return;
      }
    } else if (
      tableau_du_jeu[i][j - 1] == 4 ||
      (tableau_du_jeu[i][j - 1] == 6 && z == 1)
    ) {
      tableau_du_jeu[i][j] = "";
      document.getElementById("gameOverMessage").style.display = "block";
      return;
    }

    mygrid();
  }
}

// la fonction qui deplace les joueurs et les monstres a droites

function deplacerRight(i, j, z) {
  if (tableau_du_jeu[i][j + 1] != "m") {
    if (tableau_du_jeu[i][j + 1] == "") {
      tableau_du_jeu[i][j + 1] = z;
      tableau_du_jeu[i][j] = "";
    } else if (tableau_du_jeu[i][j + 1] == "t" && z == 1) {
      nbrePoint = nbrePoint + 1;

      tableau_du_jeu[i][j + 1] = z;
      tableau_du_jeu[i][j] = "";

      score.innerText = "score: " + nbrePoint;

      if (nbrePoint == 8) {
        tableau_du_jeu[i][j + 1] = z;
        tableau_du_jeu[i][j] = "";

        document.getElementById("gagner").style.display = "block";
        return;
      }
    } else if (
      tableau_du_jeu[i][j + 1] == 4 ||
      (tableau_du_jeu[i][j + 1] == 6 && z == 1)
    ) {
      tableau_du_jeu[i][j] = "";
      document.getElementById("gameOverMessage").style.display = "block";
      return;
    }

    mygrid();
  }
}

// la fonction qui deplace les joueurs et les monstres en bas

function deplacerUp(i, j, z) {
  if (tableau_du_jeu[i - 1][j] != "m") {
    if (tableau_du_jeu[i - 1][j] == "") {
      tableau_du_jeu[i - 1][j] = z;
      tableau_du_jeu[i][j] = "";
    } else if (tableau_du_jeu[i - 1][j] == "t" && z == 1) {
      tableau_du_jeu[i - 1][j] = z;
      tableau_du_jeu[i][j] = "";

      nbrePoint = nbrePoint + 1;
      score.innerText = "score: " + nbrePoint;

      if (nbrePoint == 8) {
        tableau_du_jeu[i - 1][j] = z;
        tableau_du_jeu[i][j] = "";

        document.getElementById("gagner").style.display = "block";
        return;
      }
    } else if (
      tableau_du_jeu[i - 1][j] == 4 ||
      (tableau_du_jeu[i - 1][j] == 6 && z == 1)
    ) {
      tableau_du_jeu[i][j] = "";
      document.getElementById("gameOverMessage").style.display = "block";
      return;
    }

    mygrid();
  }
}

// la fonction qui deplace les joueurs et les monstres en bas

function deplacerDown(i, j, z) {
  if (tableau_du_jeu[i + 1][j] != "m") {
    if (tableau_du_jeu[i + 1][j] == "") {
      tableau_du_jeu[i + 1][j] = z;
      tableau_du_jeu[i][j] = "";
    } else if (tableau_du_jeu[i + 1][j] == "t" && z == 1) {
      tableau_du_jeu[i + 1][j] = z;
      tableau_du_jeu[i][j] = "";

      nbrePoint = nbrePoint + 1;
      score.innerText = "score: " + nbrePoint;

      if (nbrePoint == 8) {
        tableau_du_jeu[i + 1][j] = z;
        tableau_du_jeu[i][j] = "";

        document.getElementById("gagner").style.display = "block";
        return;
      }
    } else if (
      tableau_du_jeu[i + 1][j] == 4 ||
      (tableau_du_jeu[i + 1][j] == 6 && z == 1)
    ) {
      tableau_du_jeu[i][j] = "";
      document.getElementById("gameOverMessage").style.display = "block";
      return;
    }

    mygrid();
  }
}

//je declare les variables qui vont prendres les boutons : left, right, up, down

let left = document.getElementById("left");

let right = document.getElementById("right");

let up = document.getElementById("up");

let down = document.getElementById("down");

// je lie les actions avec les cliques des boutons

left.addEventListener("click", deplacerLeftJoueur);

right.addEventListener("click", deplacerRightJoueur);

up.addEventListener("click", deplacerUpJoueur);

down.addEventListener("click", deplacerDownJoueur);

// je declare un bouton qui va m'aider a recommencer le jeux

let recommencer = document.getElementById("recommencer");

// la fonction qui fait recommencer le jeux

function restart() {
  location.reload();
}
// je lie le bouton avec l'action

recommencer.addEventListener("click", restart);

const ensembleJson = [
  { id: 1, nom: "Objet 1" },
  { id: 2, nom: "Objet 2" },
  { id: 3, nom: "Objet 3" },
  // ... Ajoutez d'autres objets au besoin
];

for (let i = 0; i < ensembleJson.length; i++) {
  const objet = ensembleJson[i];
  console.log(ensembleJson[0].id);
}
