lexer grammar DiagramLexer;

GLOBAL: 'global:';
SECTION: 'section:';

ARROW
    : '-->'
    | '<--'
    | '<->'
    | '==>'
    | '<=='
    | '<=>'
    ;

SYMBOL
    : [A-Z0-9_]+
    ;

ATTR
    : [a-z0-9_]+
    ;

CURL_OPEN
    : '{' -> pushMode(IN_DESCRIPTION)
    ;

CURL_CLOSE
    : '}' -> popMode
    ;

OPEN_PARENTHESES: '(';
CLOSE_PARENTHESES: ')';

OPEN_BRACKET: '[';
CLOSE_BRACKET: ']';

EQUALS: '=' ;


COMMENT
    : '/*' .*? '*/' -> skip
    ;

LINE_COMMENT
    : '//' ~[\r\n]* -> skip
    ;

WS
   : [ \t\r\n]+ -> skip
   ;



mode IN_DESCRIPTION;

TEXT: ~[}]+ ;
DQUOTE_IN_STRING: '}' -> type(CURL_CLOSE), popMode;







