// Generated from diagram.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import diagramListener from './diagramListener.js';
import diagramVisitor from './diagramVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u000fm\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0007\u0002",
    "\u001f\n\u0002\f\u0002\u000e\u0002\"\u000b\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0005\u0003(\n\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0005\u0004.\n\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0006\u00053\n\u0005\r\u0005\u000e\u00054\u0003\u0006\u0003",
    "\u0006\u0005\u00069\n\u0006\u0003\u0007\u0006\u0007<\n\u0007\r\u0007",
    "\u000e\u0007=\u0003\b\u0003\b\u0005\bB\n\b\u0003\b\u0003\b\u0005\bF",
    "\n\b\u0003\b\u0003\b\u0005\bJ\n\b\u0005\bL\n\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0007",
    "\u000bX\n\u000b\f\u000b\u000e\u000b[\u000b\u000b\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0007\ra\n\r\f\r\u000e\rd\u000b\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0005\u000ek\n\u000e\u0003\u000e\u0002\u0002",
    "\u000f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u0002\u0002\u0002m\u0002\u001c\u0003\u0002\u0002\u0002\u0004%\u0003",
    "\u0002\u0002\u0002\u0006+\u0003\u0002\u0002\u0002\b2\u0003\u0002\u0002",
    "\u0002\n6\u0003\u0002\u0002\u0002\f;\u0003\u0002\u0002\u0002\u000eK",
    "\u0003\u0002\u0002\u0002\u0010M\u0003\u0002\u0002\u0002\u0012Q\u0003",
    "\u0002\u0002\u0002\u0014Y\u0003\u0002\u0002\u0002\u0016\\\u0003\u0002",
    "\u0002\u0002\u0018^\u0003\u0002\u0002\u0002\u001ag\u0003\u0002\u0002",
    "\u0002\u001c \u0005\u0004\u0003\u0002\u001d\u001f\u0005\u0006\u0004",
    "\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001f\"\u0003\u0002\u0002",
    "\u0002 \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!#\u0003",
    "\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002#$\u0007\u0002\u0002\u0003",
    "$\u0003\u0003\u0002\u0002\u0002%\'\u0007\u0003\u0002\u0002&(\u0005\u0018",
    "\r\u0002\'&\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002()\u0003",
    "\u0002\u0002\u0002)*\u0005\b\u0005\u0002*\u0005\u0003\u0002\u0002\u0002",
    "+-\u0007\u0004\u0002\u0002,.\u0005\u0018\r\u0002-,\u0003\u0002\u0002",
    "\u0002-.\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/0\u0005\f",
    "\u0007\u00020\u0007\u0003\u0002\u0002\u000213\u0005\n\u0006\u000221",
    "\u0003\u0002\u0002\u000234\u0003\u0002\u0002\u000242\u0003\u0002\u0002",
    "\u000245\u0003\u0002\u0002\u00025\t\u0003\u0002\u0002\u000268\u0007",
    "\u000b\u0002\u000279\u0005\u0018\r\u000287\u0003\u0002\u0002\u00028",
    "9\u0003\u0002\u0002\u00029\u000b\u0003\u0002\u0002\u0002:<\u0005\u000e",
    "\b\u0002;:\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=;\u0003",
    "\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002>\r\u0003\u0002\u0002\u0002",
    "?A\u0005\u0010\t\u0002@B\u0005\u0018\r\u0002A@\u0003\u0002\u0002\u0002",
    "AB\u0003\u0002\u0002\u0002BL\u0003\u0002\u0002\u0002CE\u0005\u0012\n",
    "\u0002DF\u0005\u0018\r\u0002ED\u0003\u0002\u0002\u0002EF\u0003\u0002",
    "\u0002\u0002FL\u0003\u0002\u0002\u0002GI\u0005\u0016\f\u0002HJ\u0005",
    "\u0018\r\u0002IH\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002J",
    "L\u0003\u0002\u0002\u0002K?\u0003\u0002\u0002\u0002KC\u0003\u0002\u0002",
    "\u0002KG\u0003\u0002\u0002\u0002L\u000f\u0003\u0002\u0002\u0002MN\u0007",
    "\u000b\u0002\u0002NO\u0007\n\u0002\u0002OP\u0007\u000b\u0002\u0002P",
    "\u0011\u0003\u0002\u0002\u0002QR\u0007\u000b\u0002\u0002RS\u0007\u0005",
    "\u0002\u0002ST\u0005\u0014\u000b\u0002TU\u0007\u0006\u0002\u0002U\u0013",
    "\u0003\u0002\u0002\u0002VX\u0007\u000b\u0002\u0002WV\u0003\u0002\u0002",
    "\u0002X[\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002YZ\u0003\u0002",
    "\u0002\u0002Z\u0015\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002",
    "\\]\u0007\u000b\u0002\u0002]\u0017\u0003\u0002\u0002\u0002^b\u0007\u0007",
    "\u0002\u0002_a\u0005\u001a\u000e\u0002`_\u0003\u0002\u0002\u0002ad\u0003",
    "\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002",
    "ce\u0003\u0002\u0002\u0002db\u0003\u0002\u0002\u0002ef\u0007\b\u0002",
    "\u0002f\u0019\u0003\u0002\u0002\u0002gj\u0007\f\u0002\u0002hi\u0007",
    "\t\u0002\u0002ik\u0007\f\u0002\u0002jh\u0003\u0002\u0002\u0002jk\u0003",
    "\u0002\u0002\u0002k\u001b\u0003\u0002\u0002\u0002\u000f \'-48=AEIKY",
    "bj"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class diagramParser extends antlr4.Parser {

    static grammarFileName = "diagram.g4";
    static literalNames = [ null, "'global:'", "'section:'", "'('", "')'", 
                            "'['", "']'", "'='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "ARROW", "SYMBOL", "ATTR", "WS", "COMMENT", 
                             "LINE_COMMENT" ];
    static ruleNames = [ "program", "definitions", "connections", "definition_list", 
                         "definition", "connection_list", "connection", 
                         "connector", "wrapper", "inner_wrapper", "single", 
                         "attributes", "attribute" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = diagramParser.ruleNames;
        this.literalNames = diagramParser.literalNames;
        this.symbolicNames = diagramParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, diagramParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.definitions();
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===diagramParser.T__1) {
	            this.state = 27;
	            this.connections();
	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 33;
	        this.match(diagramParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	definitions() {
	    let localctx = new DefinitionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, diagramParser.RULE_definitions);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(diagramParser.T__0);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===diagramParser.T__4) {
	            this.state = 36;
	            this.attributes();
	        }

	        this.state = 39;
	        this.definition_list();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	connections() {
	    let localctx = new ConnectionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, diagramParser.RULE_connections);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(diagramParser.T__1);
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===diagramParser.T__4) {
	            this.state = 42;
	            this.attributes();
	        }

	        this.state = 45;
	        this.connection_list();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	definition_list() {
	    let localctx = new Definition_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, diagramParser.RULE_definition_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 47;
	            this.definition();
	            this.state = 50; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===diagramParser.SYMBOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, diagramParser.RULE_definition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(diagramParser.SYMBOL);
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===diagramParser.T__4) {
	            this.state = 53;
	            this.attributes();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	connection_list() {
	    let localctx = new Connection_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, diagramParser.RULE_connection_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 56;
	            this.connection();
	            this.state = 59; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===diagramParser.SYMBOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	connection() {
	    let localctx = new ConnectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, diagramParser.RULE_connection);
	    var _la = 0; // Token type
	    try {
	        this.state = 73;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 61;
	            this.connector();
	            this.state = 63;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===diagramParser.T__4) {
	                this.state = 62;
	                this.attributes();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.wrapper();
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===diagramParser.T__4) {
	                this.state = 66;
	                this.attributes();
	            }

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 69;
	            this.single();
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===diagramParser.T__4) {
	                this.state = 70;
	                this.attributes();
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	connector() {
	    let localctx = new ConnectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, diagramParser.RULE_connector);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(diagramParser.SYMBOL);
	        this.state = 76;
	        this.match(diagramParser.ARROW);
	        this.state = 77;
	        this.match(diagramParser.SYMBOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wrapper() {
	    let localctx = new WrapperContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, diagramParser.RULE_wrapper);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(diagramParser.SYMBOL);
	        this.state = 80;
	        this.match(diagramParser.T__2);
	        this.state = 81;
	        this.inner_wrapper();
	        this.state = 82;
	        this.match(diagramParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inner_wrapper() {
	    let localctx = new Inner_wrapperContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, diagramParser.RULE_inner_wrapper);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===diagramParser.SYMBOL) {
	            this.state = 84;
	            this.match(diagramParser.SYMBOL);
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	single() {
	    let localctx = new SingleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, diagramParser.RULE_single);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(diagramParser.SYMBOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attributes() {
	    let localctx = new AttributesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, diagramParser.RULE_attributes);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(diagramParser.T__4);
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===diagramParser.ATTR) {
	            this.state = 93;
	            this.attribute();
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 99;
	        this.match(diagramParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attribute() {
	    let localctx = new AttributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, diagramParser.RULE_attribute);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(diagramParser.ATTR);
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===diagramParser.T__6) {
	            this.state = 102;
	            this.match(diagramParser.T__6);
	            this.state = 103;
	            this.match(diagramParser.ATTR);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

diagramParser.EOF = antlr4.Token.EOF;
diagramParser.T__0 = 1;
diagramParser.T__1 = 2;
diagramParser.T__2 = 3;
diagramParser.T__3 = 4;
diagramParser.T__4 = 5;
diagramParser.T__5 = 6;
diagramParser.T__6 = 7;
diagramParser.ARROW = 8;
diagramParser.SYMBOL = 9;
diagramParser.ATTR = 10;
diagramParser.WS = 11;
diagramParser.COMMENT = 12;
diagramParser.LINE_COMMENT = 13;

diagramParser.RULE_program = 0;
diagramParser.RULE_definitions = 1;
diagramParser.RULE_connections = 2;
diagramParser.RULE_definition_list = 3;
diagramParser.RULE_definition = 4;
diagramParser.RULE_connection_list = 5;
diagramParser.RULE_connection = 6;
diagramParser.RULE_connector = 7;
diagramParser.RULE_wrapper = 8;
diagramParser.RULE_inner_wrapper = 9;
diagramParser.RULE_single = 10;
diagramParser.RULE_attributes = 11;
diagramParser.RULE_attribute = 12;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = diagramParser.RULE_program;
    }

	definitions() {
	    return this.getTypedRuleContext(DefinitionsContext,0);
	};

	EOF() {
	    return this.getToken(diagramParser.EOF, 0);
	};

	connections = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConnectionsContext);
	    } else {
	        return this.getTypedRuleContext(ConnectionsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof diagramVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DefinitionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = diagramParser.RULE_definitions;
    }

	definition_list() {
	    return this.getTypedRuleContext(Definition_listContext,0);
	};

	attributes() {
	    return this.getTypedRuleContext(AttributesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.enterDefinitions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.exitDefinitions(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof diagramVisitor ) {
	        return visitor.visitDefinitions(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConnectionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = diagramParser.RULE_connections;
    }

	connection_list() {
	    return this.getTypedRuleContext(Connection_listContext,0);
	};

	attributes() {
	    return this.getTypedRuleContext(AttributesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.enterConnections(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.exitConnections(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof diagramVisitor ) {
	        return visitor.visitConnections(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Definition_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = diagramParser.RULE_definition_list;
    }

	definition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefinitionContext);
	    } else {
	        return this.getTypedRuleContext(DefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.enterDefinition_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.exitDefinition_list(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof diagramVisitor ) {
	        return visitor.visitDefinition_list(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = diagramParser.RULE_definition;
    }

	SYMBOL() {
	    return this.getToken(diagramParser.SYMBOL, 0);
	};

	attributes() {
	    return this.getTypedRuleContext(AttributesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.exitDefinition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof diagramVisitor ) {
	        return visitor.visitDefinition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Connection_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = diagramParser.RULE_connection_list;
    }

	connection = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConnectionContext);
	    } else {
	        return this.getTypedRuleContext(ConnectionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.enterConnection_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.exitConnection_list(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof diagramVisitor ) {
	        return visitor.visitConnection_list(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConnectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = diagramParser.RULE_connection;
    }

	connector() {
	    return this.getTypedRuleContext(ConnectorContext,0);
	};

	attributes() {
	    return this.getTypedRuleContext(AttributesContext,0);
	};

	wrapper() {
	    return this.getTypedRuleContext(WrapperContext,0);
	};

	single() {
	    return this.getTypedRuleContext(SingleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.enterConnection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.exitConnection(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof diagramVisitor ) {
	        return visitor.visitConnection(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConnectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = diagramParser.RULE_connector;
    }

	SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(diagramParser.SYMBOL);
	    } else {
	        return this.getToken(diagramParser.SYMBOL, i);
	    }
	};


	ARROW() {
	    return this.getToken(diagramParser.ARROW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.enterConnector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.exitConnector(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof diagramVisitor ) {
	        return visitor.visitConnector(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WrapperContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = diagramParser.RULE_wrapper;
    }

	SYMBOL() {
	    return this.getToken(diagramParser.SYMBOL, 0);
	};

	inner_wrapper() {
	    return this.getTypedRuleContext(Inner_wrapperContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.enterWrapper(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.exitWrapper(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof diagramVisitor ) {
	        return visitor.visitWrapper(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Inner_wrapperContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = diagramParser.RULE_inner_wrapper;
    }

	SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(diagramParser.SYMBOL);
	    } else {
	        return this.getToken(diagramParser.SYMBOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.enterInner_wrapper(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.exitInner_wrapper(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof diagramVisitor ) {
	        return visitor.visitInner_wrapper(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SingleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = diagramParser.RULE_single;
    }

	SYMBOL() {
	    return this.getToken(diagramParser.SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.enterSingle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.exitSingle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof diagramVisitor ) {
	        return visitor.visitSingle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AttributesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = diagramParser.RULE_attributes;
    }

	attribute = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttributeContext);
	    } else {
	        return this.getTypedRuleContext(AttributeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.enterAttributes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.exitAttributes(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof diagramVisitor ) {
	        return visitor.visitAttributes(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AttributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = diagramParser.RULE_attribute;
    }

	ATTR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(diagramParser.ATTR);
	    } else {
	        return this.getToken(diagramParser.ATTR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.enterAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof diagramListener ) {
	        listener.exitAttribute(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof diagramVisitor ) {
	        return visitor.visitAttribute(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




diagramParser.ProgramContext = ProgramContext; 
diagramParser.DefinitionsContext = DefinitionsContext; 
diagramParser.ConnectionsContext = ConnectionsContext; 
diagramParser.Definition_listContext = Definition_listContext; 
diagramParser.DefinitionContext = DefinitionContext; 
diagramParser.Connection_listContext = Connection_listContext; 
diagramParser.ConnectionContext = ConnectionContext; 
diagramParser.ConnectorContext = ConnectorContext; 
diagramParser.WrapperContext = WrapperContext; 
diagramParser.Inner_wrapperContext = Inner_wrapperContext; 
diagramParser.SingleContext = SingleContext; 
diagramParser.AttributesContext = AttributesContext; 
diagramParser.AttributeContext = AttributeContext; 
