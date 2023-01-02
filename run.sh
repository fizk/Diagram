#!/bin/sh

java -Xmx500M -cp "./bin/antlr-4.9.2-complete.jar" org.antlr.v4.Tool -Dlanguage=JavaScript -visitor -o src/diagram DiagramParser.g4 DiagramLexer.g4