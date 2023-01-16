'use strict';

goog.provide('Blockly.Blocks.records');

goog.require('Blockly.Blocks');
//goog.require('Blockly.FieldTextbutton');

Blockly.Blocks.records.HUE = 200;
Blockly.Blocks.records.TYPES = ['Boolean', 'Number', 'String', 'Record', 'Array', 'Colour'];

Blockly.Blocks['json_stringify'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.records.HUE);
	this.appendValueInput('JS')
		.setCheck(Blockly.Blocks.records.TYPES)
		.appendField('JSON.stringify');
	this.setOutput(true, 'String');
	this.setTooltip('');
  }
}

Blockly.Blocks['json_parse'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.records.HUE);
	this.appendValueInput('JSON')
		.setCheck('String')
		.appendField('JSON.parse');
	this.setOutput(true, Blockly.Blocks.records.TYPES);
	this.setTooltip('');
  }
}

// Find the last block by nextConnection.
function FindFirstParent(block, type)
{
	while (true)
	{
		block = block.getParent();
		if (!block) break;
		if (block.type == type) break;
	}
	return block;
}

// Find the last block by nextConnection.
function FindLastChild(block)
{
	var nextBlock;
	while (true)
	{
		nextBlock = block.nextConnection && block.nextConnection.targetBlock();
		if (!nextBlock) break;
		block = nextBlock;
	}
	return block;
}

Blockly.Blocks['record'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.records.HUE);
	this.appendDummyInput()
		.appendField('Record')
		.appendField(new Blockly.FieldTextbutton('+', function() {
			var lastChild = FindLastChild(this.sourceBlock_);
			// Append new recordfield:
			var newBlock = Blockly.Block.obtain(this.sourceBlock_.workspace, 'recordfield');
			lastChild.nextConnection.connect(newBlock.previousConnection);
			newBlock.initSvg();
			newBlock.render();
		}));
	this.setOutput(true, 'Record');
	this.setNextStatement(true, 'RecordField');
	this.setTooltip('Record of fields. Field names should be unique inside a redord. Hint: add Record Field blocks to it. Tip: use the "+" button for this.');
  },
  onchange: function() {
	if (!this.workspace) {
	  // Block has been deleted.
	  return;
	}

	var dict = {};
	// Search for duplicate names:
	var block = this, i = 1;
	while (true)
	{
		var block = block.nextConnection && block.nextConnection.targetBlock();
		if (!block) break;
		if (block.disabled) continue;
		var name = block.getFieldValue('FIELDNAME');
		if (name in dict)
			block.setWarningText('Record Field #' + dict[name] + ' has the same name!');
		dict[name] = i;
		i++;
	}
  }
}

Blockly.Blocks['recordfield'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.records.HUE);
	this.appendValueInput('VALUE')
		.setCheck(Blockly.Blocks.records.TYPES)
		.appendField(new Blockly.FieldTextInput(''), 'FIELDNAME')
		.appendField(':');
	this.setPreviousStatement(true, 'RecordField');
	this.setNextStatement(true, 'RecordField');
	this.setTooltip('Record Field. Connect it after a Record (or another Record Field) block.');
  },
  onchange: function() {
	if (!this.workspace) {
	  // Block has been deleted.
	  return;
	}

	var warning = null;

	// Check name:
	if (this.getFieldValue('FIELDNAME') == '')
		warning = 'The Record Field must have a name.';

	// Find 'record' parent:
	var firstParent = FindFirstParent(this, 'record');
	if (!firstParent)
		warning = 'This block must be connected to a Record (or another Record Field) block.';

	this.setWarningText(warning);
  }
}

Blockly.Blocks['array'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.records.HUE);
	this.appendDummyInput()
		.appendField('Array')
		.appendField(new Blockly.FieldTextbutton('+', function() {
			var lastChild = FindLastChild(this.sourceBlock_);
			// Append new arrayelement:
			var newBlock = Blockly.Block.obtain(this.sourceBlock_.workspace, 'arrayelement');
			lastChild.nextConnection.connect(newBlock.previousConnection);
			newBlock.initSvg();
			newBlock.render();
		}));
	this.setOutput(true, 'Array');
	this.setNextStatement(true, 'ArrayElement');
	this.setTooltip('Array of values. Hint: add Array Element blocks to it. Tip: use the "+" button for this.');
  },
  onchange: function() {
	if (!this.workspace) {
	  // Block has been deleted.
	  return;
	}
	// Set indexes of next blocks:
	var block = this, i = 1;
	while (true)
	{
		var block = block.nextConnection && block.nextConnection.targetBlock();
		if (!block) break;
		if (block.disabled) continue;
		block.getField_('ELEMENTINDEX').setText('[' + i + ']');
		i++;
	}
  }
}

Blockly.Blocks['arrayelement'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.records.HUE);
	this.appendValueInput('VALUE')
		.setCheck(Blockly.Blocks.records.TYPES)
		.appendField(new Blockly.FieldLabel('[.]'), 'ELEMENTINDEX');
	this.setPreviousStatement(true, 'ArrayElement');
	this.setNextStatement(true, 'ArrayElement');
	this.setTooltip('Array Element. Connect it after an Array (or another Array Element) block.');
  },
  onchange: function() {
	if (!this.workspace) {
	  // Block has been deleted.
	  return;
	}

	var warning = null;


	// Find 'array' parent:
	var firstParent = FindFirstParent(this, 'array');
	if (!firstParent)
	{
		this.getField_('ELEMENTINDEX').setText('[.]');
		warning = 'This block must be connected to an Array (or another Array Element) block.';
	}

	this.setWarningText(warning);
  }
}