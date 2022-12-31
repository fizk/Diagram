grammar diagram;

program
    : definitions connections* EOF
    ;

definitions
    : 'global:' attributes? definition_list
    ;

connections
    : 'section:' attributes? connection_list
    ;

definition_list
    :  definition+
    ;

definition
    : SYMBOL attributes?
    ;

connection_list
    : connection+
    ;

connection
    : connector attributes?
    | wrapper attributes?
    | single attributes?
    ;

connector
    : SYMBOL ARROW SYMBOL
    ;

wrapper
    : SYMBOL '(' inner_wrapper ')'
    ;

inner_wrapper: SYMBOL* ;

single
    : SYMBOL
    ;

attributes
    : '[' attribute* ']'
    ;

attribute
    : ATTR ('=' ATTR)?
    ;

ARROW
    : '-->'
    | '<--'
    | '<->'
    | '==>'
    | '<=='
    | '<=>'
    ;

SYMBOL: [A-Z][A-Z0-9_]*;
ATTR: [a-zA-Z0-9_-]+ ;


WS
   : [ \t\r\n]+ -> skip
   ;

COMMENT
    : '/*' .*? '*/' -> skip
    ;

LINE_COMMENT
    : '//' ~[\r\n]* -> skip
    ;

