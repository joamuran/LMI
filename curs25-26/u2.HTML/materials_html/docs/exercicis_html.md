
* **Exercici 1:** Crea un document HTML que incloga un títol "La meua primera pàgina HTML" i, dins del cos, escriu un paràgraf que diga: "Aquesta és la meua primera pàgina creada amb HTML.

<!--
**Solució:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>La meua primera pàgina HTML</title>
</head>
<body>
    <p>Aquesta és la meua primera pàgina creada amb HTML.</p>
</body>
</html>
```
-->

* **Exercici 2: Capçaleres**. Crea un document HTML amb una capçalera `<h1>` que diga "Títol Principal", una capçalera `<h2>` que diga "Secció 1" i una capçalera `<h3>` que diga "Subsecció 1.1". Afegeix després un paràgraf que diga "Contingut de la secció."

<!--
**Solució:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Capçaleres</title>
</head>
<body>
    <h1>Títol Principal</h1>
    <h2>Secció 1</h2>
    <h3>Subsecció 1.1</h3>
    <p>Contingut de la secció.</p>
</body>
</html>
```
-->

* **Exercici 3.** Escriu un document HTML amb dos paràgrafs. El primer paràgraf ha de dir: "Aquest és el primer paràgraf." El segon paràgraf ha de dir: "Aquest és el segon paràgraf." Afegeix un salt de línia dins del segon paràgraf, entre les frases "Aquest és el segon paràgraf." i "Aquest paràgraf conté un salt de línia."

<!--
**Solució:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Paràgrafs i salts de línia</title>
</head>
<body>
    <p>Aquest és el primer paràgraf.</p>
    <p>Aquest és el segon paràgraf.<br>Aquest paràgraf conté un salt de línia.</p>
</body>
</html>
```
-->
* **Exercici 4. Enllaços interns i externs**. Crea un enllaç a la pàgina https://www.google.com que diga "Visita Google". Crea un altre enllaç dins de la mateixa pàgina que dirigisca a una secció amb id "seccio2", i escriu "Ves a la Secció 2". Després, afegeix una capçalera amb id "seccio2" que diga "Secció 2".

<!--**Solució:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Enllaços</title>
</head>
<body>
    <a href="https://www.google.com">Visita Google</a>
    <br>
    <a href="#seccio2">Ves a la Secció 2</a>
    
    <h2 id="seccio2">Secció 2</h2>
    <p>Aquesta és la secció 2 del document.</p>
</body>
</html>
```

-->

* **Exercici 5: Imatges**.Afegeix una imatge anomenada `gat.jpg` al document HTML i inclou un text alternatiu que diga "Una imatge d'un gat."

<!--
**Solució:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Imatge de gat</title>
</head>
<body>
    <img src="gat.jpg" alt="Una imatge d'un gat">
</body>
</html>
```
-->

* **Exercici 6: Atributs d'enllaç**. Crea un enllaç que diga "Obre Google en una nova pestanya" que s'obriga en una pestanya nova quan es faça clic. A més, crea un enllaç de correu electrònic que diga "Envia'm un correu" a l'adreça exemple@gmail.com.

<!--
**Solució:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Atributs d'enllaç</title>
</head>
<body>
    <a href="https://www.google.com" target="_blank">Obre Google en una nova pestanya</a>
    <br>
    <a href="mailto:exemple@gmail.com">Envia'm un correu</a>
</body>
</html>
```
-->

<!-- 
* **Exercici 7: Llistes no ordenades**  
**Instruccions:** Crea una llista no ordenada amb els teus tres llibres favorits.

**Solució:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Llistes no ordenades</title>
</head>
<body>
    <ul>
        <li>El Quixot</li>
        <li>La metamorfosi</li>
        <li>Cien años de soledad</li>
    </ul>
</body>
</html>
```

---

### **Exercici 8: Llistes ordenades**  
**Instruccions:** Crea una llista ordenada que descriga els passos per fer un pastís de xocolata.

**Solució:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Llista de passos</title>
</head>
<body>
    <ol>
        <li>Mescla la farina i el sucre.</li>
        <li>Afegeix els ous i la llet.</li>
        <li>Afegeix la xocolata fosa.</li>
        <li>Forn al 180°C durant 30 minuts.</li>
    </ol>
</body>
</html>
```


### **Exercici 9: Comentaris**  
**Instruccions:** Crea un document HTML que continga comentaris en el codi que expliquen cada part de l'estructura.

**Solució:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Comentaris</title>
    <!-- Aquesta és la capçalera del document -- >
</head>
<body>
    <!-- Aquest és el contingut principal -- >
    <h1>Títol de la pàgina</h1>
    <p>Aquest és un paràgraf de text.</p>
    <!-- Fi del contingut -- >
</body>
</html>
```

--->

* **Exercici 7: Text en negreta i cursiva**. Crea un paràgraf que diga: "Aquest és un text important en negreta i aquest és un text emfatitzat en cursiva."

<!--
**Solució:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Text en negreta i cursiva</title>
</head>
<body>
    <p>Aquest és un text <b>important</b> en negreta i aquest és un text <i>emfatitzat</i> en cursiva.</p>
</body>
</html>
```
-->

<!--
* **Exercici 11: Taules**  
**Instruccions:** Crea una taula que mostre un horari de classes amb tres files i dues columnes: una columna per al dia i una altra per a la classe.

**Solució:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Horari de classes</title>
</head>
<body>
    <table border="1">
        <tr>
            <th>Dia</th>
            <th>Classe</th>
        </tr>
        <tr>
            <td>Dilluns</td>
            <td>Matemàtiques</td>
        </tr>
        <tr>
            <td>Dimarts</td>
            <td>Ciències</td>
        </tr>
        <tr>
            <td>Dimecres</td>
            <td>Història</td>
        </tr>
    </table>
</body>
</html>
```

---

### **Exercici 12: Formulari bàsic**  
**Instruccions:** Crea un formulari que continga un camp de text per al nom, botons de selecció per al gènere, una casella de verificació per acceptar els termes i un botó d'enviament.

**Solució:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Formulari bàsic</title>
</head>
<body>
    <form>
        Nom: <input type="text" name="nom"><br>
        Gènere: 
        <input type="radio" name="genere" value="Home">Home
        <input type="radio" name="genere" value="Dona">Dona<br>
        <input type="checkbox" name="acceptar" value="Sí">Acceptar els termes i condicions<br>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>
```

---

-->

* **Exercici 8: Superíndex i subíndex**. Escriu un paràgraf que continga la fórmula química de l'aigua oxigenada i una expressió matemàtica amb superíndex (e.g. H₂O₂ i 2³).

<!--
**Solució:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Superíndex i Subíndex</title>
</head>
<body>
    <p>La fórmula de l'aigua és H<sub>2</sub>O.</p>
    <p>2<sup>3</sup> és igual a 8.</p>
</body>
</html>
```
-->


* **Exercici 9: Ressaltat de text**. Crea un paràgraf que continga la frase "El sol brilla intensament avui" i ressalta la paraula "intensament" utilitzant l'etiqueta `<mark>`.

<!--
**Solució:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Ressaltat de text</title>
</head>
<body>
    <p>El sol brilla <mark>intensament</mark> avui.</p>
</body>
</html>
```

---
-->

* **Exercici 10: Entitats HTML** . Escriu un paràgraf que continga una frase utilitzant els caràcters `<`, `>`, `&` i cometes dobles `"`, utilitzant les entitats HTML corresponents.

<!--
**Solució:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Entitats HTML</title>
</head>
<body>
    <p>Els caràcters especials com &lt;, &gt;, &amp; i &quot; s'han d'escapar en HTML.</p>
</body>
</html>
```

-->