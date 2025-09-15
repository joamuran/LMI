function carregaDocuments() {
    // Carreguem el document XML i el document XSLT
    const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
            <pizzes>
                <pizza>
                    <nom>Pizza Margarita</nom>
                    <preu>9.99</preu>
                </pizza>
                <pizza>
                    <nom>Pizza Quattro Formaggi</nom>
                    <preu>12.99</preu>
                </pizza>
            </pizzes>`;

    const xsltString = `<?xml version="1.0" encoding="UTF-8"?>
            <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
                <xsl:output method="html"/>
                <xsl:template match="/pizzes">
                    <html>
                        <body>
                            <h2>Menu de Pizzes</h2>
                            <table border="1">
                                <tr>
                                    <th>Nom</th>
                                    <th>Preu</th>
                                </tr>
                                <xsl:for-each select="pizza">
                                    <tr>
                                        <td><xsl:value-of select="nom"/></td>
                                        <td><xsl:value-of select="preu"/></td>
                                    </tr>
                                </xsl:for-each>
                            </table>
                        </body>
                    </html>
                </xsl:template>
            </xsl:stylesheet>`;

    //Retornem les dues cadenes com un objecte estructurat
    return { xmlString, xsltString };

}

addEventListener("DOMContentLoaded", () => {

    // Carreguem les dues cadenes, amb desestructuració
    let { xmlString, xsltString } = carregaDocuments();

    // Creem els objectes XML i XSL a partir de les cadenes
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");
    const xslDoc = parser.parseFromString(xsltString, "application/xml");

    // Creem un processador XSLT
    const xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xslDoc);

    // Apliquem la transformació i obtenim el resultat
    const resultDocument = xsltProcessor.transformToFragment(xmlDoc, document);
    // Inserim el resultat en el DOM
    document.getElementById("result").appendChild(resultDocument);

})


    