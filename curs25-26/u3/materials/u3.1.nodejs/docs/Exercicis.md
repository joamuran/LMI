---
# Informació general del document
title: Exercicis
subtitle: Llenguatges de marques i sistemes de gestió de la informació (LMSGI)
authors: 
    - José A. Múrcia Andrés
lang: ca
page-background: img/bg.png

# Portada
titlepage: true
titlepage-rule-height: 0
# titlepage-rule-color: AA0000
# titlepage-text-color: AA0000
titlepage-background: img/portada.png
# logo: img/logotext.png

# Taula de continguts
toc: true
toc-own-page: true
toc-title: Continguts

# Capçaleres i peus
header-left: Llenguatges de Marques
header-right: Curs 2024-2025
footer-left: IES Jaume II El Just
footer-right: \thepage/\pageref{LastPage}

# Imatges
float-placement-figure: H
caption-justification: centering

# Llistats de codi
listings-no-page-break: false
listings-disable-line-numbers: false

header-includes:
     - \usepackage{lastpage}
---

## Elements del llenguatge

1. **Declaració de variables i operadors**  
   Declara tres variables amb els teus colors preferits i mostra-les per consola. A continuació, utilitza operadors per a combinar-les en una nova variable i mostra’n el resultat.

2. **Ús de `typeof`**  
   Crea variables de diferents tipus: un número, una cadena de text i un valor lògic. Utilitza `typeof` per mostrar el tipus de cada variable en consola.

3. **Conversió de tipus automàtica**  
   Declara dues variables, una com a número i una altra com a cadena de text. Assigna una expressió que involucre les dues variables a una tercera variable i comprova el resultat i el tipus. Explica per què s’obté aquest resultat.

4. **Vectores i accés a elements**  
   Declara un vector amb els dies de la setmana i mostra en consola el segon i el cinquè element. Modifica l'últim element del vector per indicar “Dia desconegut”.

5. **JSON bàsic**  
   Defineix un objecte JSON amb informació bàsica sobre un llibre (títol, autor i any). Mostra el títol del llibre utilitzant l'objecte JSON i després afegeix una nova propietat `editorial`.

## Programació estructurada

6. **Condicionals simples amb `if/else`**  
   Escriu una funció `verificaHora(hora)` que prenga com a paràmetre un número entre 0 i 23. Si la `hora` està entre 6 i 12, mostra "Bon dia"; si és entre 13 i 20, "Bona vesprada"; i en qualsevol altre cas, "Bona nit".

7. **Condicional `switch`**  
   Crea una funció `determinaDia(numDia)` que mostre el nom del dia en valencià (de “Dilluns” a “Diumenge”) a partir d'un número de 1 a 7 utilitzant un `switch`.

8. **Bucle `for`**  
   Escriu un bucle `for` que mostre els números de l'1 al 10. Després, escriu un altre `for` que mostre només els nombres parells fins al 20.

9. **Bucle `for...of` i vectors**  
   Declara un vector de tres ciutats valencianes i recorre’l amb un `for...of` per a mostrar cada ciutat en consola.

10. **`while` i `do...while`**  
    Escriu un bucle `while` que comence en 10 i vaja restant 1 fins a arribar a 0, mostrant cada valor en consola. A continuació, fes el mateix amb un `do...while`.

## Funcions

11. **Funció que retorna un valor**  
    Crea una funció `doble(num)` que retorne el doble del número proporcionat. Crida-la amb diferents valors i mostra els resultats en consola.

12. **Funció amb paràmetres per defecte**  
    Escriu una funció `salutació(nom = "amic")` que mostre "Hola, [nom]!". Si no es passa cap nom, ha de mostrar "Hola, amic!".




<!--
## **5. Programació Orientada a Objectes amb prototips**

13. **Creació de prototips i instanciació**  
    Crea un prototip `Persona` amb les propietats `nom` i `edat`. Afegeix un mètode `presentació` que mostre un missatge amb el nom i l’edat de la persona. Instancia dues persones i crida al mètode `presentació` per a cada una.

14. **Ús de `this` i `prototype`**  
    Escriu una funció constructora `Cotxe` amb les propietats `marca` i `model`. Afegeix un mètode `mostrarCotxe` al prototip de `Cotxe` que mostre un missatge amb la marca i el model del cotxe. Crea dos cotxes i comprova el mètode.

#### **6. Programació Orientada a Objectes amb classes (ES6)**

15. **Definició de classes i constructors**  
    Crea una classe `Empleat` amb les propietats `nom` i `sou`. Afegeix un constructor que inicialitze aquests valors i un mètode `mostrarInfo` que mostre el nom i el sou. Instancia dos empleats i comprova el mètode `mostrarInfo`.

16. **Ús de `getters` i `setters`**  
    Defineix una classe `Producte` amb una propietat `_preu` i afegeix un getter i un setter per a `preu`, assegurant que no siga menor que zero. Crea un `Producte`, assigna-li un valor negatiu i comprova que el preu no canvia.

#### **7. Herència i polimorfisme**

17. **Herència simple**  
    Defineix una classe `Animal` amb una propietat `nom` i un mètode `ferSoroll`. Crea una subclasse `Gos` que redefinisca `ferSoroll` per a mostrar “bup”. Instancia un gos i crida al seu mètode `ferSoroll`.

18. **Herència amb `super`**  
    Crea una classe `Dispositiu` amb una propietat `marca` i un mètode `encendre`. A continuació, crea una subclasse `Ordinador` que afegisca una propietat `model` i redefineix el mètode `encendre` utilitzant `super`.

19. **Polimorfisme amb funcions de prototip**  
    Defineix un prototip `Figura` amb un mètode `area` que retorne 0. Crea dos funcions constructores `Rectangle` i `Cercle` que hereten de `Figura` i redefineixen `area` per a calcular l'àrea específica de cada forma. 





### **Bateria d’exercicis sobre Programació Orientada a Objectes en JavaScript**

#### **1. Conceptes bàsics**

1. **Definició d’una classe bàsica**  
   Crea una classe `Cotxe` amb les propietats `marca`, `model` i `any`. Afegeix un mètode `descripció` que retorne una cadena amb tots els detalls del cotxe. Instancia dos objectes de `Cotxe` amb diferents valors i crida el mètode `descripció` per a cada un.

2. **Instanciació d’objectes**  
   Utilitza la classe `Persona` dels exemples. Crea una nova propietat `edat` i afegeix un mètode `presentació` que mostre el nom i l’edat de la persona. Instancia dos persones amb noms i edats diferents i comprova que el mètode `presentació` funciona correctament.

#### **2. Orientació a Objectes basada en prototips**

3. **Ús del prototip `prototype`**  
   Crea un constructor `Llibre` amb propietats `títol`, `autor` i `anyPublicació`. Afegeix un mètode `resum` al prototip `Llibre.prototype` que mostre una cadena amb el títol i l’autor del llibre. Crea tres llibres i comprova que el mètode `resum` funcione correctament en cada instància.

4. **Espais de noms**  
   Defineix un espai de noms `aplicació` i afegeix dues propietats `nomApp` i `versió`, juntament amb un mètode `info` que mostre el nom de l’aplicació i la versió. Crida al mètode `info` per a mostrar la informació de l’aplicació.

5. **Objectes prototip per a crear instàncies**  
   Crea una funció constructora `Producte` amb les propietats `nom` i `preu`. Afegeix un mètode `preuAmbIVA` al prototip, que calcule el preu del producte amb un IVA del 21%. Crea diferents instàncies de `Producte` i comprova el mètode `preuAmbIVA`.

#### **3. Espais de Noms i Encapsulament**

6. **Encapsulament de dades amb clousure**  
   Defineix una funció constructora `CompteBancari` amb una propietat `saldo`. Afegeix mètodes per a ingressar diners i per a retirar-ne, assegurant que el saldo mai pot ser menor que zero. Utilitza una variable interna per a guardar el saldo, de manera que aquest no siga accessible des de fora dels mètodes de la classe.

7. **Espais de noms en aplicacions grans**  
   Simula una aplicació amb tres espais de noms: `calculadora`, `gestióUsuaris` i `producte`. Cada espai de noms ha de tenir almenys una propietat i un mètode (com per exemple, un càlcul simple per a `calculadora` o una funció per afegir un usuari en `gestióUsuaris`).

#### **4. Creació de Classes i Ús d’Herència amb la sintaxi ES6**

8. **Classes i constructor amb paràmetres per defecte**  
   Defineix una classe `Empleat` amb propietats `nom`, `càrrec` i `sou`. Assegura que el `càrrec` per defecte siga "Operari". Crea instàncies amb diferents valors per a comprovar el funcionament del constructor i els valors per defecte.

9. **Herència i ús de `super`**  
   Crea una classe `Vehicle` amb una propietat `velocitat`. Defineix un mètode `accelerar` que augmente la velocitat. A continuació, crea una subclasse `Moto` que herete de `Vehicle` i afegeix una propietat `marca`. Comprova que la subclasse hereta correctament la funcionalitat del mètode `accelerar`.

10. **Redefinició de mètodes a subclasses**  
    Crea una classe `Animal` amb un mètode `ferSoroll` que mostre "L'animal fa soroll". Crea dues subclasses, `Gat` i `Gos`, que redefinisquen el mètode per a mostrar sons específics (per exemple, "miau" i "bup").

11. **Ús de mètodes estàtics**  
    Defineix una classe `Matemàtiques` amb un mètode estàtic `sumar` que accepte dos números i retorne el resultat. Comprova que pots cridar a `Matemàtiques.sumar` sense haver de crear una instància de la classe.

12. **Encapsulament amb getters i setters**  
    Crea una classe `Producte` amb una propietat `_preu`. Afegeix un getter i un setter per a `preu`, assegurant que el preu mai puga ser negatiu. Crea una instància de `Producte`, intenta assignar-li un valor negatiu i comprova que el preu no es modifica.

#### **5. Exercicis avançats de Polimorfisme i Prototipus**

13. **Polimorfisme amb prototips**  
    Crea una funció constructora `Forma` amb un mètode `area` que retorne 0. Defineix altres funcions constructores `Rectangle` i `Cercle` que hereten de `Forma`. Redefineix el mètode `area` per a calcular l’àrea específica segons la forma.

14. **Ús de `instanceof` per comprovar tipus d’instàncies**  
    Crea les classes `Persona` i `Estudiant`, on `Estudiant` hereta de `Persona`. Defineix un mètode en `Estudiant` que verifique si una instància és de la classe `Estudiant` o `Persona` mitjançant `instanceof`.

15. **Creació de classes amb atributs privats (solució alternativa)**  
    Utilitza una funció de tancament (`closure`) per crear una classe `Client` que tinga una propietat `saldo` a la qual només es puga accedir a través de mètodes públics. Inclou mètodes per a ingressar diners i consultar el saldo, però assegura que el saldo no siga directament modificable des de fora.

-->