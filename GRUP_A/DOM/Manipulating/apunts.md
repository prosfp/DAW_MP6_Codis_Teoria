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

   I can use += to add to the existing textContent!
