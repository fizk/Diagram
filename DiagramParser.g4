parser grammar DiagramParser;

options {
	tokenVocab = DiagramLexer;
}

program
    : definitions connections* EOF
    ;

definitions
    : GLOBAL attributes? definition_list
    ;

connections
    : SECTION attributes? connection_list
    ;

definition_list
    :  definition+
    ;

definition
    : SYMBOL attributes? description?
    ;

connection_list
    : connection+
    ;

connection
    : connector attributes? description?
    | wrapper attributes? description?
    | single attributes? description?
    ;

connector
    : SYMBOL ARROW SYMBOL
    ;

wrapper
    : SYMBOL OPEN_PARENTHESES inner_wrapper CLOSE_PARENTHESES
    ;

inner_wrapper: SYMBOL* ;

single
    : SYMBOL
    ;

attributes
    : OPEN_BRACKET attribute* CLOSE_BRACKET
    ;

attribute
    : ATTR (EQUALS ATTR)?
    ;

description
    : CURL_OPEN description_string CURL_CLOSE
    ;

description_string
    : TEXT
    ;






