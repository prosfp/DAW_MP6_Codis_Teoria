# Diferencia entre getElementsByTagName y querySelectorAll

De entrada pot semblar que tots dos mètodes **getElementsBy** i **querySelectorAll** siguin exactament idèntics però no és així.

La diferència és que querySelectorAll retorna un llistat de nodes i getElementsBy retorna una col·lecció HTML.

## NodeList

Un _NodeList_ és un objecte que conté una col·lecció de nodes. Aquests nodes poden ser elements, text, comentaris, etc...

Suposem qu tenim una llista en html:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

Amb `querySelectorAll` obtenim tots els elements `li` dins de la llista:

```javascript
const items = document.querySelectorAll('li')
console.log(items)
```

l'objecte que ens retorna té els següents atributs:

    0: li
    1: li
    2: li
    3: li
    length: 4
    __proto__: NodeList

Provem ara de fer un `for of` per borrar tots els elements de la llista:

```javascript
for (let item of items) {
  item.remove()
}
console.log(items)
```

Els elements desapareixen de la llista però si tornem a mirar el `console.log(items)` veurem que encara hi són tal i com al principi. Això és perquè el `NodeList` és un objecte que fa referència a la llista d'elements que hi havia al principi.

## HTMLCollection

`HTMLCollection` retorna també una llista de nodes. La diferènca és que aquesta llista no és estàtica, és a dir, si eliminem un element de la llista, aquest desapareixerà de la llista.

```javascript
const items = document.getElementsByTagName('li')
console.log(items)
```

Què passa ara si fem un `for of` per eliminar tots els elements de la llista?

```javascript
for (let item of items) {
  item.remove()
}
console.log(items)
```

Aquest cop veurem que la llista conté únicament dos elements:

      0: li
      1: li
      length: 2
      __proto__: HTMLCollection

Què ha passat aquí? Per què solament ha eliminat els elements 0 i 2?

Tal i com he dit abans, una col·lecció HTML és un llistat d'elements viu que muta al mateix temps que el DOM.

Vegem la iteració pas a pas per veure què ha passat:

En la primera iteració del bucle for el primer li ha estat eliminat del DOM. Al mateix temps el valor de `items` ha canviat i ha passat de ser un llistat de 4 elements a un llistat de 3 elements.

```html
<li>0</li>
// Aquest element desapareix i la resta es mantenen
<li>1</li>
<li>2</li>
<li>3</li>
```

Ara el valor de `items` és el següent llistat:

```html
<li>1</li>
<li>2</li>
<li>3</li>
```

No obstant ara és el torn de la segona iteració del bucle for i per això elimina el segon element de `items`.

```html
<li>1</li>
<li>2</li>
// Ara aquest és el segon element i per tant el que s'elimina
<li>3</li>
```

Ara el valor de `items` és el següent llistat:

```html
<li>1</li>
<li>3</li>
```

Al arribar a la tercera iteració del bucle for resulta que `items` ja no té un tercer element així que l'execució es deté donant el resultat que hem vist abans.

## Conclusió

Quan vulguis obtenir un llistat d'elements actualitzat, fes ús de _getElementBy_ i quan volguis una fotografia de l'estat actual d'una llista d'elements fes servir _querySelectorAll_.
