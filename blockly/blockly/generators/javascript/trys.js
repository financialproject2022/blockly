'use strict';

goog.provide('Blockly.JavaScript.trys');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['try_catch'] = function(block) {
  var statements_try = Blockly.JavaScript.statementToCode(block, 'try');
  var statements_catch = Blockly.JavaScript.statementToCode(block, 'catch');
  var text_err = block.getFieldValue('ERR');
  var code = 'try {' + statements_try + '} catch(' + text_err + ') {' + statements_catch + '}';
  return code;
}

Blockly.JavaScript['try_finally'] = function(block) {
  var statements_try = Blockly.JavaScript.statementToCode(block, 'try');
  var statements_finally = Blockly.JavaScript.statementToCode(block, 'finally');
  var code = 'try {' + statements_try + '} finally {' + statements_catch + '}';
  return code;
}

