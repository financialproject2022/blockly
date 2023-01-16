'use strict';

goog.provide('Blockly.Blocks.trys');

goog.require('Blockly.Blocks');


Blockly.Blocks.trys.HUE = 120;

Blockly.Blocks['try_catch'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.trys.HUE);
    this.appendStatementInput('try')
        .setCheck('Statement')
        .appendField('try');
    this.appendStatementInput('catch')
        .appendField('catch')
        .setCheck('Statement')
        .appendField(new Blockly.FieldTextInput('err'), 'ERR');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setPreviousStatement(true, 'Statement');
    this.setNextStatement(true, 'Statement');
    this.setTooltip('Try to execute statements; catch errors in the specified variable.');
  }
}

Blockly.Blocks['try_finally'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.trys.HUE);
    this.appendStatementInput('try')
        .setCheck('Statement')
        .appendField('try');
    this.appendStatementInput('finally')
        .setCheck('Statement')
        .appendField('finally');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setPreviousStatement(true, 'Statement');
    this.setNextStatement(true, 'Statement');
    this.setTooltip('');
  }
}
