// Objectes (no prio ara)

// const client = "Anass";
// const estalvis = 200;
// const disponible = true;

const usuari = {
  client: "Anass",
  estalvis: 300,
  disponible: true,
};

//console.log(usuari);
//console.table(usuari);

//Com accedeixo a un dels camps?
//console.log(usuari.client);

//DESTRUCTURING
const { client, estalvis, disponible } = usuari;

console.log(client);
