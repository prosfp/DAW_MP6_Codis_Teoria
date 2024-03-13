# Events

Normalment quan parlem de events, ens referim a les accions que l'usuari fa a la pàgina web. Exemples d'events són:

- Clicar un botó
- Moure el ratolí
- Fer scroll
- Escriure a un input
- ...

El nom de "l'event" representa l'acció que l'usuari fa, i el "handler" és la funció que s'executa quan es produeix l'event. També podríem considerar el "target" que seria l'objecte on succedeix l'event.

## OnClick

L'event més comú és el `onClick`. Aquest event s'executa quan l'usuari clica a un element de la pàgina web. Per exemple, si volem que s'executi una funció quan l'usuari clica a un botó, podem fer-ho de la següent manera:

```html
<button onclick="myFunction()">Click me</button>
```

Però no és recomanable utilitzar aquesta manera de fer-ho, ja que estem fent servir codi HTML per a fer una funció de JavaScript. Per això, és millor fer-ho de la següent manera:

O també:

```javascript
var buttonElement = document.querySelector('button')

function handler1() {
  /* ... */
}
function handler2() {
  /* ... */
}

buttonElement.onclick = handler1
buttonElement.onclick = handler2
```

Però aquí el _handler2_ sobreescriu el _handler1_.

Com ho fem doncs?

## addEventListener

html:

```html
<button id="myButton">Click me</button>
```

js:

```javascript
document.getElementById('myButton').addEventListener('click', myFunction)
```

Ens ho fa més fàcil per a poder fer canvis i aplicar-ho a diferents elements (loop)

Si fem _consol.dir(button)_ veurem algunes coses interessants:

- onclick o onmousenter, si hem aplicat algun event, es veurà el que tenen assignat.

No únicament a botons! Of course... Prova sobre l'H1 per exemple.

Aquesta funció ens permet afegir un event a un element. El primer paràmetre és el tipus d'event que volem afegir, i el segon és la funció que volem que s'executi quan es produeixi l'event.

```javascript
document.getElementById('myButton').addEventListener('click', myFunction)
```

Per què el vodria utilitzar?

- Perquè puc afegir tants events com vulgui a un element
- Perquè puc afegir un event a un element que encara no existeix (per exemple, si el creo amb JavaScript)

https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener

## 2 EventAndThis --> Part 2 (veure codi)

## 3 KeywordEvents --> TheEventObject

Es veuen events relacionats amb el tecleig, i com podem utilitzar l'objecte event per a obtenir informació sobre l'event que s'ha produït.

## 4 FormEvents

El "default behaviour" d'una form és que quan fem submit, la pàgina es recarrega. Per a evitar això, podem utilitzar l'objecte event per a prevenir aquest comportament.

Com ho podem fer per evitar que directament marxi?

--> app_submit (preventDefault)

Anem a veure com extreure la informació dels inputs.

## 5 ChangeAndInputEvents

Aquests events s'executen quan l'usuari escriu en un input. La diferència entre ells és que l'event `change` s'executa quan l'usuari escriu i surt de l'input, mentre que l'event `input` s'executa cada cop que l'usuari escriu una lletra.

## 6 EventBubbling (pendent)

Quan un event s'executa en un element, aquest event es propaga a tots els elements pare. Això es coneix com a event bubbling.

```html
<div id="parent">
  <div id="child"></div>
</div>
```

```javascript
document.getElementById('child').addEventListener('click', myFunction)
```

Quan cliquem a l'element amb id `child`, l'event s'executarà primer en l'element `child`, i després en l'element `parent`.

Per a evitar això, podem utilitzar l'objecte event per a parar la propagació de l'event.

```javascript
function myFunction(event) {
  event.stopPropagation()
}
```

## 7 Delegation (pendent)

Quan tenim molts elements que necessiten el mateix event, podem utilitzar event delegation per a evitar afegir l'event a cada element.

```html
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```javascript
document.getElementById('myList').addEventListener('click', myFunction)
```

Quan cliquem a un element de la llista, l'event s'executarà en l'element `myList`, i després haurem de comprovar quin element ha estat clicat.

```javascript
function myFunction(event) {
  if (event.target.tagName === 'LI') {
    // Do something
  }
}
```
