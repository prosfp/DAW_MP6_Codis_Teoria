# Manipulació del DOM

1. Explicar què és el DOM i perquè és important.
2. Veure amb l'exemple de la Wikipedia ("manipulating") de quina manera s'accedeix al DOM per entendre que es genera un arbre d'objectes. --> console.dir(document)ç
   - Moltes propietats i sub-objectes que no ens han d'impressionar. Molts d'ells segurament mai els utilitzem. Els anirem veient!
3. Ex: document.all[10].innerText="SILKIE"

## 1: Seleccionant Elements

Podem aplicar les nostres funcions o accions de manera selectiva. Ho seleccionem fen ús de JS.

1.  getElementById()
    - Seleccionem per id de l'element HTML.
    - Ens retorna l'element com a tal!
    - const banner = document.getElementById('banner')
    - const toc = document.getElementById('toc');
      - Podem veure el childNodes
2.  getElementsByTagName()
    - Seleccionem per etiqueta HTML.
    - Ens retorna un Array-like object amb tots els elements que coincideixen amb la etiqueta.
    - const images = document.getElementsByTagName('img');
      ```javascript
      for (let img of allImages) {
        console.log(img.src)
      }
      ```
    - Compte!!! No és un array! No es poden aplicar els mètodes d'array.
    - divs, ps,
3.  getElementsByClassName()
    - Seleccionem per classes HTML.
    - Ens retorna un Array-like object amb tots els elements que coincideixen amb la classe.
    - document.getElementsByClassName('square')
      ```javascript
      for (let img of squareImages) {
        img.src =
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
      }
      ```

### QuerySelector

1. querySelector()

- Una opció més moderna per seleccionar un sol element.
- Amb uns sol mètodo podem seleccionar un element, un id, una classe, etc...
- Podem també afegir atributs per seleccionar un element més específic.

Exemples:

- document.querySelector('p')
- document.querySelector('img:nth-of-type(2)')
- document.querySelector('a') --> document.querySelector('a[title="Java"]')

2. querySelectorAll()

Mateixa idea, però retorna UNA COL·LECCIÓ de tots els elements que coincideixen amb el selector.

Recorda que el que retorna és un Objecte de JavaScript. No és un array!

- document.querySelectorAll('p')
- document.querySelectorAll('p a')
- document.querySelectorAll('h2 .mw-headline')

## 2: Manipulem Elements

Un cop hem dedicit sobre quin elment volem actuar, podem manipular-lo.

Hi ha MOOOOLTS aspectes qeu podem modificar, podem centrar-nos en els principals.

Ex

1. innerText vs innerHTML vs textContent
   // Example using innerText
   const heading = document.querySelector('h1');
   heading.innerText = 'Hello, world!';

   // Example using innerHTML
   const paragraph = document.querySelector('p');
   paragraph.innerHTML = '<strong>This text is bold!</strong>';

   h1.innerText = "<i>Hola!<i>" --> No es veurà el text en cursiva, sinó que es veurà el text tal qual, amb les etiquetes HTML.
   h1.innerHTML = "<i>Hola!<i>" --> Sí que es veurà el text en cursiva, perquè estem dient que el text és HTML.

   // Example using textContent
   Si hi ha algun element que no s'està mostrant per un display: none, no el veurem amb innerText, però si amb textContent! InnerText es sensible al que s'està dient que s'ha de mostrar a la pantalla.

   documents.querySelector('p')
   hide for example first <b>
   p.textContent vs p.innerText

   I can use += to add to the existing textContent!

2. getAttribute() i setAttribute()

- Ja hem vist que podem accedir als atributs directament amb el punt. Ex:
  ```javascript
  const firstLink = document.querySelector('a')
  firstLink.href // "https://en.wikipedia.org/wiki/Java_(programming_language)"
  ```
- firstLink.getAttribute('href')
- firstLink.getAttribute('title')

// Example using setAttribute

- firstLink.setAttribute('href', 'https://www.google.com')

3. Styles

   - A JS tots els estils passen a ser camelCase. Ex: font-size --> fontSize
     - h1.style.fontSize ='3em'
   - L'objecte de JS no conté els estils que s'han definit a CSS, únicament pot accedir als estils aplicats en línia.

   - Normalment el que fem és afegir una classe a l'element HTML i definir els estils a CSS. Així, el JS només ha de fer servir la classe (HO VEUREM))

   - Exemple de allLinks (link.style.color, text, etc...)

   - Si volem veure els estils aplicats a través de CSS, podem fer servir el mètode getComputedStyle()

     - const h1 = document.querySelector('h1')
     - const compStyles = getComputedStyle(h1)
     - compStyles.color
     - compStyles.fontSize

     - Això únicament ens permet veure els estils que s'han definit a l'element HTML.

4. ClassList

   - Podem afegir, eliminar, modificar, toogle classes d'un element HTML.
   - Exemple de allLinks (link.classList.add('highlight'), link.classList.remove('highlight'), link.classList.toggle('highlight'))

   - Creem dues classes a CSS: .purple i .border

     - h2.setAttribute("class", "border");
     - h2.setAttribute("class", "purple");
     - Problema: només es quedarà amb la classe que s'ha definit en segon lloc. Per tant, només es quedarà amb la classe purple.
     - Podem fer servir el mètode classList.add() per afegir una classe a un element HTML sense perdre les classes que ja hi ha definides.
       - h2.classList.add("purple");
     - Podem eliminar una classe amb el mètode classList.remove()
       - h2.classList.remove("border");
     - Podem fer servir el mètode classList.toggle() per afegir o eliminar una classe.
       - h2.classList.toggle("border");

5. Parent, Children, Siblings

   - Podem accedir als elements HTML que són parents, children o siblings d'un element HTML.
   - Exemple de allLinks (link.parentElement, link.children, link.previousElementSibling, link.nextElementSibling)
   - Ex:

     - const firstBold = document.querySelector('b')
     - firstBold.parentElement
     - const paragraph = firstBold.parentElement
     - paragraph.children[0].innerText = 'I am the child!'

   - Ex de Siblings:
     - compte! nextSibiling != nextElementSibling (el primer és un node, el segon és un element HTML)
     - const squareImg = document.querySelector('.square')
     - squareImg.nextElementSibling
     - squareImg.previousElementSibling

6- Append i AppendChild

- Com creem un nou element HTML i l'afegim a la pàgina?
  /// appendChild

  - createElement()

    - const newImg = document.createElement('img')
    - newImg.src = 'https://images.ecestaticos.com/F-TN2CAB0c5Fldhz_ohhij7Mx08=/0x0:2000x1500/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F66c%2F610%2F55c%2F66c61055c27f77bdbdefa3be537336cd.jpg'
    - appendChild() --> Afegim un element com a fill d'un altre element

      - newImg.classList.add('square')

    - const newH3 = document.createElement('h3')
      - newH3.innerText = 'I am a new h3!'
      - document.body.appendChild(newH3)

  /// append --> més d'un element a la vegada i text

  - append() --> Afegeix un element al final de l'element. També em pot anar bé per afegir text.

    - document.body.append(newImg)
    - document.p.body('Hello World')

  - O prepend() --> Afegeix un element al principi.

    - document.body.prepend(newImg)

  - Alguna manera més --> insertAdjacentElement https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentHTML

7- RemoveChild i Remove

- removeChild() --> Eliminem un element fill d'un altre element
  - const ul = document.querySelector('ul')
  - const removeMe = ul.querySelector('.special')
  - ul.removeChild(removeMe)
- remove() --> Eliminem un element
  - const removeMe = document.querySelector('.special')
  - removeMe.remove()
