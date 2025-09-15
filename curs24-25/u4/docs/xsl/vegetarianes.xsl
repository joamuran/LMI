<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" />
    <xsl:template match="/pizzes">
        <html>
            <body>
                <h2>Pizzes Vegetarianes</h2>
                <ul>
                    <!-- Seleccionar només les pizzes vegetarianes -->
                    <xsl:for-each select="pizza[vegetariana='true']">
                        <li><xsl:value-of select="nom" /> - <xsl:value-of select="preu" /></li>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>