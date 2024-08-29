<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:fo="http://www.w3.org/1999/XSL/Format" exclude-result-prefixes="fo">
    <xsl:output method="xml" version="1.0" omit-xml-declaration="no" indent="yes"/>
    <xsl:param name="versionParam" select="'1.0'"/>
    <xsl:template match="articles[@page=1]/ObjectNode">
	
	    <xsl:variable name="ProductName">
            <xsl:value-of select="concat(ProductName,'')"/>
        </xsl:variable>
		
		<xsl:variable name="Description">
            <xsl:value-of select="concat(Description,'')"/>
        </xsl:variable>

        <xsl:variable name="Price">
            <xsl:value-of select="concat(Price,'')"/>
        </xsl:variable>
        <xsl:variable name="OfferPrice">
            <xsl:value-of select="concat(OfferPrice,'')"/>
        </xsl:variable>

        <xsl:variable name="ProductDetail">
            <xsl:value-of select="concat(ProductDetail,'')"/>
        </xsl:variable>

        <fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format">
            <fo:layout-master-set>
                <fo:simple-page-master master-name="simpleA4" page-width="296px" page-height="152px">
                    <fo:region-body/>
                </fo:simple-page-master>
            </fo:layout-master-set>

            <fo:page-sequence master-reference="simpleA4">
                <fo:flow flow-name="xsl-region-body">
                    <fo:block-container
                            position="absolute"
                            display-align="center"
                            width="270px"
                            height="10px"
                            top="5px"
							left="5px">
                        <fo:block font-family="sans-serif" font-weight="bold"  font-size="25pt" text-align="left">
						<xsl:value-of select="$ProductName"/>
                            American Soft Ice
						 <xsl:text> </xsl:text>
						<fo:inline font-size="16pt">
							<xsl:value-of select="$Description"/>
                            verschiendene Sorten 3x 140 ml
						</fo:inline>
                        </fo:block>
                    </fo:block-container>

                    <fo:block-container
                            position="absolute"
                            display-align="center"
                            width="170px"
                            height="20px"
                            top="130px"
							left="5px">
                        <fo:block font-family="sans-serif" font-weight="bold"  font-size="20pt"  margin-left="5" text-align="left">
                            <xsl:value-of select="$ProductDetail"/>
                            4,47/Liter
                        </fo:block>
                    </fo:block-container>

                    <fo:block-container
                            position="absolute"
                            display-align="center"
                            width="280px"
                            height="20px"
                            top="65px">
                        <fo:block font-family="sans-serif" font-weight="bold" color="red" font-size="60pt"   text-align="right">
                            <xsl:value-of select="$OfferPrice"/>
                            1,99€
                        </fo:block>
                    </fo:block-container>

                      <fo:block-container
                            position="absolute"
                            display-align="center"
                            width="240px"
                            height="20px"
                            top="128px">
                        <fo:block font-family="sans-serif" font-weight="bold"  font-size="20pt"   text-align="right">
                            <xsl:value-of select="$Price"/>
                            3,99€
                        </fo:block>
                    </fo:block-container>
                </fo:flow>
            </fo:page-sequence>
        </fo:root>
    </xsl:template>
</xsl:stylesheet>
