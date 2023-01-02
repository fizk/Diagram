// Generated from DiagramParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DiagramParserListener from './DiagramParserListener.js';
import DiagramParserVisitor from './DiagramParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0012\u0083\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0003\u0002\u0003\u0002\u0007\u0002#\n\u0002\f\u0002\u000e",
    "\u0002&\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0005\u0003,\n\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0005\u00042\n\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0006\u0005",
    "7\n\u0005\r\u0005\u000e\u00058\u0003\u0006\u0003\u0006\u0005\u0006=",
    "\n\u0006\u0003\u0006\u0005\u0006@\n\u0006\u0003\u0007\u0006\u0007C\n",
    "\u0007\r\u0007\u000e\u0007D\u0003\b\u0003\b\u0005\bI\n\b\u0003\b\u0005",
    "\bL\n\b\u0003\b\u0003\b\u0005\bP\n\b\u0003\b\u0005\bS\n\b\u0003\b\u0003",
    "\b\u0005\bW\n\b\u0003\b\u0005\bZ\n\b\u0005\b\\\n\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0007",
    "\u000bh\n\u000b\f\u000b\u000e\u000bk\u000b\u000b\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0007\rq\n\r\f\r\u000e\rt\u000b\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0005\u000e{\n\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0002\u0002",
    "\u0011\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e\u0002\u0002\u0002\u0085\u0002 \u0003\u0002\u0002\u0002",
    "\u0004)\u0003\u0002\u0002\u0002\u0006/\u0003\u0002\u0002\u0002\b6\u0003",
    "\u0002\u0002\u0002\n:\u0003\u0002\u0002\u0002\fB\u0003\u0002\u0002\u0002",
    "\u000e[\u0003\u0002\u0002\u0002\u0010]\u0003\u0002\u0002\u0002\u0012",
    "a\u0003\u0002\u0002\u0002\u0014i\u0003\u0002\u0002\u0002\u0016l\u0003",
    "\u0002\u0002\u0002\u0018n\u0003\u0002\u0002\u0002\u001aw\u0003\u0002",
    "\u0002\u0002\u001c|\u0003\u0002\u0002\u0002\u001e\u0080\u0003\u0002",
    "\u0002\u0002 $\u0005\u0004\u0003\u0002!#\u0005\u0006\u0004\u0002\"!",
    "\u0003\u0002\u0002\u0002#&\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002",
    "\u0002$%\u0003\u0002\u0002\u0002%\'\u0003\u0002\u0002\u0002&$\u0003",
    "\u0002\u0002\u0002\'(\u0007\u0002\u0002\u0003(\u0003\u0003\u0002\u0002",
    "\u0002)+\u0007\u0003\u0002\u0002*,\u0005\u0018\r\u0002+*\u0003\u0002",
    "\u0002\u0002+,\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-.\u0005",
    "\b\u0005\u0002.\u0005\u0003\u0002\u0002\u0002/1\u0007\u0004\u0002\u0002",
    "02\u0005\u0018\r\u000210\u0003\u0002\u0002\u000212\u0003\u0002\u0002",
    "\u000223\u0003\u0002\u0002\u000234\u0005\f\u0007\u00024\u0007\u0003",
    "\u0002\u0002\u000257\u0005\n\u0006\u000265\u0003\u0002\u0002\u00027",
    "8\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u000289\u0003\u0002\u0002",
    "\u00029\t\u0003\u0002\u0002\u0002:<\u0007\u0006\u0002\u0002;=\u0005",
    "\u0018\r\u0002<;\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=",
    "?\u0003\u0002\u0002\u0002>@\u0005\u001c\u000f\u0002?>\u0003\u0002\u0002",
    "\u0002?@\u0003\u0002\u0002\u0002@\u000b\u0003\u0002\u0002\u0002AC\u0005",
    "\u000e\b\u0002BA\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002D",
    "B\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002E\r\u0003\u0002\u0002",
    "\u0002FH\u0005\u0010\t\u0002GI\u0005\u0018\r\u0002HG\u0003\u0002\u0002",
    "\u0002HI\u0003\u0002\u0002\u0002IK\u0003\u0002\u0002\u0002JL\u0005\u001c",
    "\u000f\u0002KJ\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002L\\",
    "\u0003\u0002\u0002\u0002MO\u0005\u0012\n\u0002NP\u0005\u0018\r\u0002",
    "ON\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002PR\u0003\u0002\u0002",
    "\u0002QS\u0005\u001c\u000f\u0002RQ\u0003\u0002\u0002\u0002RS\u0003\u0002",
    "\u0002\u0002S\\\u0003\u0002\u0002\u0002TV\u0005\u0016\f\u0002UW\u0005",
    "\u0018\r\u0002VU\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002W",
    "Y\u0003\u0002\u0002\u0002XZ\u0005\u001c\u000f\u0002YX\u0003\u0002\u0002",
    "\u0002YZ\u0003\u0002\u0002\u0002Z\\\u0003\u0002\u0002\u0002[F\u0003",
    "\u0002\u0002\u0002[M\u0003\u0002\u0002\u0002[T\u0003\u0002\u0002\u0002",
    "\\\u000f\u0003\u0002\u0002\u0002]^\u0007\u0006\u0002\u0002^_\u0007\u0005",
    "\u0002\u0002_`\u0007\u0006\u0002\u0002`\u0011\u0003\u0002\u0002\u0002",
    "ab\u0007\u0006\u0002\u0002bc\u0007\n\u0002\u0002cd\u0005\u0014\u000b",
    "\u0002de\u0007\u000b\u0002\u0002e\u0013\u0003\u0002\u0002\u0002fh\u0007",
    "\u0006\u0002\u0002gf\u0003\u0002\u0002\u0002hk\u0003\u0002\u0002\u0002",
    "ig\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002j\u0015\u0003\u0002",
    "\u0002\u0002ki\u0003\u0002\u0002\u0002lm\u0007\u0006\u0002\u0002m\u0017",
    "\u0003\u0002\u0002\u0002nr\u0007\f\u0002\u0002oq\u0005\u001a\u000e\u0002",
    "po\u0003\u0002\u0002\u0002qt\u0003\u0002\u0002\u0002rp\u0003\u0002\u0002",
    "\u0002rs\u0003\u0002\u0002\u0002su\u0003\u0002\u0002\u0002tr\u0003\u0002",
    "\u0002\u0002uv\u0007\r\u0002\u0002v\u0019\u0003\u0002\u0002\u0002wz",
    "\u0007\u0007\u0002\u0002xy\u0007\u000e\u0002\u0002y{\u0007\u0007\u0002",
    "\u0002zx\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{\u001b\u0003",
    "\u0002\u0002\u0002|}\u0007\b\u0002\u0002}~\u0005\u001e\u0010\u0002~",
    "\u007f\u0007\t\u0002\u0002\u007f\u001d\u0003\u0002\u0002\u0002\u0080",
    "\u0081\u0007\u0012\u0002\u0002\u0081\u001f\u0003\u0002\u0002\u0002\u0013",
    "$+18<?DHKORVY[irz"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class DiagramParser extends antlr4.Parser {

    static grammarFileName = "DiagramParser.g4";
    static literalNames = [ null, "'global:'", "'section:'", null, null, 
                            null, "'{'", null, "'('", "')'", "'['", "']'", 
                            "'='" ];
    static symbolicNames = [ null, "GLOBAL", "SECTION", "ARROW", "SYMBOL", 
                             "ATTR", "CURL_OPEN", "CURL_CLOSE", "OPEN_PARENTHESES", 
                             "CLOSE_PARENTHESES", "OPEN_BRACKET", "CLOSE_BRACKET", 
                             "EQUALS", "COMMENT", "LINE_COMMENT", "WS", 
                             "TEXT" ];
    static ruleNames = [ "program", "definitions", "connections", "definition_list", 
                         "definition", "connection_list", "connection", 
                         "connector", "wrapper", "inner_wrapper", "single", 
                         "attributes", "attribute", "description", "description_string" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DiagramParser.ruleNames;
        this.literalNames = DiagramParser.literalNames;
        this.symbolicNames = DiagramParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DiagramParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.definitions();
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DiagramParser.SECTION) {
	            this.state = 31;
	            this.connections();
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 37;
	        this.match(DiagramParser.EOF);
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
	    this.enterRule(localctx, 2, DiagramParser.RULE_definitions);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(DiagramParser.GLOBAL);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DiagramParser.OPEN_BRACKET) {
	            this.state = 40;
	            this.attributes();
	        }

	        this.state = 43;
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
	    this.enterRule(localctx, 4, DiagramParser.RULE_connections);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(DiagramParser.SECTION);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DiagramParser.OPEN_BRACKET) {
	            this.state = 46;
	            this.attributes();
	        }

	        this.state = 49;
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
	    this.enterRule(localctx, 6, DiagramParser.RULE_definition_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 51;
	            this.definition();
	            this.state = 54; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DiagramParser.SYMBOL);
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
	    this.enterRule(localctx, 8, DiagramParser.RULE_definition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(DiagramParser.SYMBOL);
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DiagramParser.OPEN_BRACKET) {
	            this.state = 57;
	            this.attributes();
	        }

	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DiagramParser.CURL_OPEN) {
	            this.state = 60;
	            this.description();
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
	    this.enterRule(localctx, 10, DiagramParser.RULE_connection_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 63;
	            this.connection();
	            this.state = 66; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DiagramParser.SYMBOL);
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
	    this.enterRule(localctx, 12, DiagramParser.RULE_connection);
	    var _la = 0; // Token type
	    try {
	        this.state = 89;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 68;
	            this.connector();
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DiagramParser.OPEN_BRACKET) {
	                this.state = 69;
	                this.attributes();
	            }

	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DiagramParser.CURL_OPEN) {
	                this.state = 72;
	                this.description();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 75;
	            this.wrapper();
	            this.state = 77;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DiagramParser.OPEN_BRACKET) {
	                this.state = 76;
	                this.attributes();
	            }

	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DiagramParser.CURL_OPEN) {
	                this.state = 79;
	                this.description();
	            }

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 82;
	            this.single();
	            this.state = 84;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DiagramParser.OPEN_BRACKET) {
	                this.state = 83;
	                this.attributes();
	            }

	            this.state = 87;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DiagramParser.CURL_OPEN) {
	                this.state = 86;
	                this.description();
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
	    this.enterRule(localctx, 14, DiagramParser.RULE_connector);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(DiagramParser.SYMBOL);
	        this.state = 92;
	        this.match(DiagramParser.ARROW);
	        this.state = 93;
	        this.match(DiagramParser.SYMBOL);
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
	    this.enterRule(localctx, 16, DiagramParser.RULE_wrapper);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(DiagramParser.SYMBOL);
	        this.state = 96;
	        this.match(DiagramParser.OPEN_PARENTHESES);
	        this.state = 97;
	        this.inner_wrapper();
	        this.state = 98;
	        this.match(DiagramParser.CLOSE_PARENTHESES);
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
	    this.enterRule(localctx, 18, DiagramParser.RULE_inner_wrapper);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DiagramParser.SYMBOL) {
	            this.state = 100;
	            this.match(DiagramParser.SYMBOL);
	            this.state = 105;
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
	    this.enterRule(localctx, 20, DiagramParser.RULE_single);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.match(DiagramParser.SYMBOL);
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
	    this.enterRule(localctx, 22, DiagramParser.RULE_attributes);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(DiagramParser.OPEN_BRACKET);
	        this.state = 112;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DiagramParser.ATTR) {
	            this.state = 109;
	            this.attribute();
	            this.state = 114;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 115;
	        this.match(DiagramParser.CLOSE_BRACKET);
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
	    this.enterRule(localctx, 24, DiagramParser.RULE_attribute);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(DiagramParser.ATTR);
	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DiagramParser.EQUALS) {
	            this.state = 118;
	            this.match(DiagramParser.EQUALS);
	            this.state = 119;
	            this.match(DiagramParser.ATTR);
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



	description() {
	    let localctx = new DescriptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, DiagramParser.RULE_description);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(DiagramParser.CURL_OPEN);
	        this.state = 123;
	        this.description_string();
	        this.state = 124;
	        this.match(DiagramParser.CURL_CLOSE);
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



	description_string() {
	    let localctx = new Description_stringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, DiagramParser.RULE_description_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(DiagramParser.TEXT);
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

DiagramParser.EOF = antlr4.Token.EOF;
DiagramParser.GLOBAL = 1;
DiagramParser.SECTION = 2;
DiagramParser.ARROW = 3;
DiagramParser.SYMBOL = 4;
DiagramParser.ATTR = 5;
DiagramParser.CURL_OPEN = 6;
DiagramParser.CURL_CLOSE = 7;
DiagramParser.OPEN_PARENTHESES = 8;
DiagramParser.CLOSE_PARENTHESES = 9;
DiagramParser.OPEN_BRACKET = 10;
DiagramParser.CLOSE_BRACKET = 11;
DiagramParser.EQUALS = 12;
DiagramParser.COMMENT = 13;
DiagramParser.LINE_COMMENT = 14;
DiagramParser.WS = 15;
DiagramParser.TEXT = 16;

DiagramParser.RULE_program = 0;
DiagramParser.RULE_definitions = 1;
DiagramParser.RULE_connections = 2;
DiagramParser.RULE_definition_list = 3;
DiagramParser.RULE_definition = 4;
DiagramParser.RULE_connection_list = 5;
DiagramParser.RULE_connection = 6;
DiagramParser.RULE_connector = 7;
DiagramParser.RULE_wrapper = 8;
DiagramParser.RULE_inner_wrapper = 9;
DiagramParser.RULE_single = 10;
DiagramParser.RULE_attributes = 11;
DiagramParser.RULE_attribute = 12;
DiagramParser.RULE_description = 13;
DiagramParser.RULE_description_string = 14;

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
        this.ruleIndex = DiagramParser.RULE_program;
    }

	definitions() {
	    return this.getTypedRuleContext(DefinitionsContext,0);
	};

	EOF() {
	    return this.getToken(DiagramParser.EOF, 0);
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
	    if(listener instanceof DiagramParserListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiagramParserVisitor ) {
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
        this.ruleIndex = DiagramParser.RULE_definitions;
    }

	GLOBAL() {
	    return this.getToken(DiagramParser.GLOBAL, 0);
	};

	definition_list() {
	    return this.getTypedRuleContext(Definition_listContext,0);
	};

	attributes() {
	    return this.getTypedRuleContext(AttributesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.enterDefinitions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.exitDefinitions(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiagramParserVisitor ) {
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
        this.ruleIndex = DiagramParser.RULE_connections;
    }

	SECTION() {
	    return this.getToken(DiagramParser.SECTION, 0);
	};

	connection_list() {
	    return this.getTypedRuleContext(Connection_listContext,0);
	};

	attributes() {
	    return this.getTypedRuleContext(AttributesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.enterConnections(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.exitConnections(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiagramParserVisitor ) {
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
        this.ruleIndex = DiagramParser.RULE_definition_list;
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
	    if(listener instanceof DiagramParserListener ) {
	        listener.enterDefinition_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.exitDefinition_list(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiagramParserVisitor ) {
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
        this.ruleIndex = DiagramParser.RULE_definition;
    }

	SYMBOL() {
	    return this.getToken(DiagramParser.SYMBOL, 0);
	};

	attributes() {
	    return this.getTypedRuleContext(AttributesContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.exitDefinition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiagramParserVisitor ) {
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
        this.ruleIndex = DiagramParser.RULE_connection_list;
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
	    if(listener instanceof DiagramParserListener ) {
	        listener.enterConnection_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.exitConnection_list(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiagramParserVisitor ) {
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
        this.ruleIndex = DiagramParser.RULE_connection;
    }

	connector() {
	    return this.getTypedRuleContext(ConnectorContext,0);
	};

	attributes() {
	    return this.getTypedRuleContext(AttributesContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	wrapper() {
	    return this.getTypedRuleContext(WrapperContext,0);
	};

	single() {
	    return this.getTypedRuleContext(SingleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.enterConnection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.exitConnection(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiagramParserVisitor ) {
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
        this.ruleIndex = DiagramParser.RULE_connector;
    }

	SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DiagramParser.SYMBOL);
	    } else {
	        return this.getToken(DiagramParser.SYMBOL, i);
	    }
	};


	ARROW() {
	    return this.getToken(DiagramParser.ARROW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.enterConnector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.exitConnector(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiagramParserVisitor ) {
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
        this.ruleIndex = DiagramParser.RULE_wrapper;
    }

	SYMBOL() {
	    return this.getToken(DiagramParser.SYMBOL, 0);
	};

	OPEN_PARENTHESES() {
	    return this.getToken(DiagramParser.OPEN_PARENTHESES, 0);
	};

	inner_wrapper() {
	    return this.getTypedRuleContext(Inner_wrapperContext,0);
	};

	CLOSE_PARENTHESES() {
	    return this.getToken(DiagramParser.CLOSE_PARENTHESES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.enterWrapper(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.exitWrapper(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiagramParserVisitor ) {
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
        this.ruleIndex = DiagramParser.RULE_inner_wrapper;
    }

	SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DiagramParser.SYMBOL);
	    } else {
	        return this.getToken(DiagramParser.SYMBOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.enterInner_wrapper(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.exitInner_wrapper(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiagramParserVisitor ) {
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
        this.ruleIndex = DiagramParser.RULE_single;
    }

	SYMBOL() {
	    return this.getToken(DiagramParser.SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.enterSingle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.exitSingle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiagramParserVisitor ) {
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
        this.ruleIndex = DiagramParser.RULE_attributes;
    }

	OPEN_BRACKET() {
	    return this.getToken(DiagramParser.OPEN_BRACKET, 0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(DiagramParser.CLOSE_BRACKET, 0);
	};

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
	    if(listener instanceof DiagramParserListener ) {
	        listener.enterAttributes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.exitAttributes(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiagramParserVisitor ) {
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
        this.ruleIndex = DiagramParser.RULE_attribute;
    }

	ATTR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DiagramParser.ATTR);
	    } else {
	        return this.getToken(DiagramParser.ATTR, i);
	    }
	};


	EQUALS() {
	    return this.getToken(DiagramParser.EQUALS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.enterAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.exitAttribute(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiagramParserVisitor ) {
	        return visitor.visitAttribute(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DescriptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiagramParser.RULE_description;
    }

	CURL_OPEN() {
	    return this.getToken(DiagramParser.CURL_OPEN, 0);
	};

	description_string() {
	    return this.getTypedRuleContext(Description_stringContext,0);
	};

	CURL_CLOSE() {
	    return this.getToken(DiagramParser.CURL_CLOSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.enterDescription(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.exitDescription(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiagramParserVisitor ) {
	        return visitor.visitDescription(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Description_stringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiagramParser.RULE_description_string;
    }

	TEXT() {
	    return this.getToken(DiagramParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.enterDescription_string(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiagramParserListener ) {
	        listener.exitDescription_string(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiagramParserVisitor ) {
	        return visitor.visitDescription_string(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




DiagramParser.ProgramContext = ProgramContext; 
DiagramParser.DefinitionsContext = DefinitionsContext; 
DiagramParser.ConnectionsContext = ConnectionsContext; 
DiagramParser.Definition_listContext = Definition_listContext; 
DiagramParser.DefinitionContext = DefinitionContext; 
DiagramParser.Connection_listContext = Connection_listContext; 
DiagramParser.ConnectionContext = ConnectionContext; 
DiagramParser.ConnectorContext = ConnectorContext; 
DiagramParser.WrapperContext = WrapperContext; 
DiagramParser.Inner_wrapperContext = Inner_wrapperContext; 
DiagramParser.SingleContext = SingleContext; 
DiagramParser.AttributesContext = AttributesContext; 
DiagramParser.AttributeContext = AttributeContext; 
DiagramParser.DescriptionContext = DescriptionContext; 
DiagramParser.Description_stringContext = Description_stringContext; 
