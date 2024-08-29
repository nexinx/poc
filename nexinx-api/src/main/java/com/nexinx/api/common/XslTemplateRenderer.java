/*
 * Copyright (c) 2024 flixscan. All rights reserved.
 */
package com.nexinx.api.common;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;

import jakarta.enterprise.context.ApplicationScoped;
import org.apache.fop.apps.FOUserAgent;
import org.apache.fop.apps.Fop;
import org.apache.fop.apps.FopFactory;
import org.apache.xmlgraphics.util.MimeConstants;

import org.jboss.logging.Logger;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.StringReader;

import javax.xml.transform.Result;
import javax.xml.transform.Source;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.sax.SAXResult;

import javax.xml.transform.stream.StreamSource;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@ApplicationScoped
public class XslTemplateRenderer {
    private static final Logger LOGGER = Logger.getLogger(XslTemplateRenderer.class.getName());

    /**
     * Render image and template parameters
     * @param template
     * @return
     */
    public CompletableFuture<Map<String, String>> extractTemplateAttribute(String template) {
        return CompletableFuture.supplyAsync(() -> {
            String base64String = null;
            Map<String, String> templateParams = new HashMap<>();
            try {
                String initialJson = "{\"default\": \"default\"}";
                ObjectMapper objMap = new ObjectMapper();
                JsonNode jsonNode = objMap.readTree(initialJson);

                // Write XML
                XmlMapper xmlMap = new XmlMapper();
                String xml = xmlMap.writeValueAsString(jsonNode);
                String xmlContent = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" + "<articles page=\"1\">" + xml
                        + "</articles>";

                // Configure fopFactory as desired
                final FopFactory fopFactory = FopFactory.newInstance(new File(".").toURI());
                FOUserAgent foUserAgent = fopFactory.newFOUserAgent();
                ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
                try {
                    // Create FOP instance
                    Fop fop = fopFactory.newFop(MimeConstants.MIME_PNG, foUserAgent, byteArrayOutputStream);
                    // Create transformer with XSLT stylesheet
                    TransformerFactory factory = TransformerFactory.newInstance();
                    Transformer transformer = factory.newTransformer(new StreamSource(new StringReader((template))));
                    Source src = new StreamSource(new StringReader(xmlContent));
                    Result res = new SAXResult(fop.getDefaultHandler());
                    transformer.transform(src, res);

                    byteArrayOutputStream.flush(); // Flush the output stream
                    byte[] resultBytes = byteArrayOutputStream.toByteArray();
                    base64String = Base64.getEncoder().encodeToString(resultBytes);

                    templateParams.put("Base64Image", base64String);
                    templateParams.put("Template", template);
                    getAttribute(template, templateParams);
                    getWidthHeight(template, templateParams);
                } finally {
                    byteArrayOutputStream.close();
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
            return templateParams;
        });
    }

    /**
     * Extract template variables
     * @param xslt
     * @param props
     */
    private void getAttribute(String xslt, Map<String, String> props) {
        String regex = "<xsl:value-of\\s+select\\s*=\\s*\"\\$(.*?)\"\\s*/>";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(xslt);
        // Iterate over matches and extract the select expressions
        while (matcher.find()) {
            String valueOfSelect = matcher.group(1);
            props.put(valueOfSelect, "");
        }
    }

    /**
     *  Extract template width and height from xsl
     * @param xslt
     * @param props
     */
    private void getWidthHeight(String xslt, Map<String, String> props) {

        String regex = "<fo:simple-page-master\\s+.*?page-width\\s*=\\s*\"([^\"]+)\".*?page-height\\s*=\\s*\"([^\"]+)\".*?>";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(xslt);

        // Iterate over matches and extract the select expressions
        if (matcher.find()) {
            String pageWidth = matcher.group(1);
            String pageHeight = matcher.group(2);
            props.put("WidthHeight", pageWidth + "(W)X" + pageHeight + "(H)");
        } else {
            LOGGER.error("Page attributes not found in the XML string.");
        }
    }

    /**
     *  Extract image from json
     * @param template
     * @return
     */
    public CompletableFuture<String> buildTemplateFromJson(String template, String json) {
        return CompletableFuture.supplyAsync(() -> {
            String base64String = null;
            try {
                ObjectMapper mapper = new ObjectMapper();
                JsonNode jsonNode = mapper.readTree(json);

                XmlMapper xmlMap = new XmlMapper();
                String xml = xmlMap.writeValueAsString(jsonNode);

                String xmlContent = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" + "<articles page=\"1\">" + xml
                        + "</articles>";

                // configure fopFactory as desired
                final FopFactory fopFactory = FopFactory.newInstance(new File(".").toURI());
                FOUserAgent foUserAgent = fopFactory.newFOUserAgent();
                ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
                try {
                    // Create FOP instance
                    Fop fop = fopFactory.newFop(MimeConstants.MIME_PNG, foUserAgent, byteArrayOutputStream);
                    // Create transformer with XSLT stylesheet
                    TransformerFactory factory = TransformerFactory.newInstance();
                    Transformer transformer = factory.newTransformer(new StreamSource(new StringReader((template))));
                    Source src = new StreamSource(new StringReader(xmlContent));
                    Result res = new SAXResult(fop.getDefaultHandler());
                    transformer.transform(src, res);

                    byteArrayOutputStream.flush(); // Flush the output stream
                    byte[] resultBytes = byteArrayOutputStream.toByteArray();
                    base64String = Base64.getEncoder().encodeToString(resultBytes);

                } finally {
                    byteArrayOutputStream.close();
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
            return base64String ;
        });
    }


}