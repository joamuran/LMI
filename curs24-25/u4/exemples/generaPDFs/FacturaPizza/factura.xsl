<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">
    <xsl:output method="xml" indent="yes"/>

    <xsl:template match="/factura">
        <!-- Arrel del document XSL-FO -->
        <fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format">
            <!-- Definir les plantilles de pàgina -->
            <fo:layout-master-set>
                <fo:simple-page-master master-name="simple" page-height="29.7cm" page-width="21cm">
                    <fo:region-body margin="2cm"/>
                </fo:simple-page-master>
            </fo:layout-master-set>

            <!-- Pàgina -->
            <fo:page-sequence master-reference="simple">
                <fo:flow flow-name="xsl-region-body">
                    <!-- Contingut de la factura -->
                    <fo:block font-size="16pt" font-weight="bold">Factura: <xsl:value-of select="id"/></fo:block>
                    <fo:block>Data: <xsl:value-of select="data"/></fo:block>
                    <fo:block>Client: <xsl:value-of select="client/nom"/></fo:block>
                    <fo:block>Adreça: <xsl:value-of select="client/adressa"/></fo:block>

                    <fo:block space-before="1cm" font-weight="bold">Articles:</fo:block>
                    <fo:table width="100%" border="1px solid black">
                        <fo:table-column column-width="30%"/>
                        <fo:table-column column-width="40%"/>
                        <fo:table-column column-width="30%"/>
                        <fo:table-body>
                            <xsl:for-each select="articles/article">
                                <fo:table-row>
                                    <fo:table-cell><fo:block><xsl:value-of select="nom"/></fo:block></fo:table-cell>
                                    <fo:table-cell><fo:block><xsl:value-of select="preu"/></fo:block></fo:table-cell>
                                    <fo:table-cell><fo:block><xsl:value-of select="total"/></fo:block></fo:table-cell>
                                </fo:table-row>
                            </xsl:for-each>
                        </fo:table-body>
                    </fo:table>

                    <fo:block space-before="1cm" font-weight="bold">Total: <xsl:value-of select="total"/></fo:block>
                </fo:flow>
            </fo:page-sequence>
        </fo:root>
    </xsl:template>
</xsl:stylesheet>
