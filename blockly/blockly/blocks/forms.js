'use strict';

goog.provide('Blockly.Blocks.forms');

goog.require('Blockly.Blocks');


Blockly.Blocks.forms.headHUE = 0;
Blockly.Blocks.forms.tailHUE = 30;
Blockly.Blocks.forms.HUE = 60;

// Unbind control event handlers.
// Do the same cases as in ParseDOM.
function Unbind_All(a_node)
{
	if (!a_node) return;
	if ($(a_node).attr('data-role') == 'button') $(a_node).unbind('click');
	if (a_node.nodeName == 'INPUT') $(a_node).unbind('change');
	var i = 0, len = a_node.children.length;
	for(; i < len; i++)
		Unbind_All(a_node.children[i]);
}

// Collect DOM node id-s into options:
function ParseDOM(a_node, a_filter, options)
{
	if (!a_node) return;
	if ((a_node.id || '') != '')
		if (a_filter == 'button' ? $(a_node).attr('data-role') == 'button'
		  : a_filter == 'textfield' ? a_node.nodeName == 'INPUT'
		  : a_filter == 'label' ? a_node.nodeName == 'LABEL'
		  : a_filter == 'dropdown' ? a_node.nodeName == 'SELECT'
		  : a_filter == 'all' ? true
		  : false)
			options.push([a_node.id, a_node.id]);
	var i = 0, len = a_node.children.length;
	for(; i < len; i++)
		ParseDOM(a_node.children[i], a_filter, options);
}

function List_Buttons()
{
	var options = [];
	ParseDOM($('#form')[0], 'button', options);
	if (options.length == 0)
		options.push(['<?>', '?']);
	return options;
}

function List_Textfields()
{
	var options = [];
	ParseDOM($('#form')[0], 'textfield', options);
	if (options.length == 0)
		options.push(['<?>', '?']);
	return options;
}

function List_Labels()
{
	var options = [];
	ParseDOM($('#form')[0], 'label', options);
	if (options.length == 0)
		options.push(['<?>', '?']);
	return options;
}

function List_Dropdowns()
{
	var options = [];
	ParseDOM($('#form')[0], 'dropdown', options);
	if (options.length == 0)
		options.push(['<?>', '?']);
	return options;
}

function List_All()
{
	var options = [];
	ParseDOM($('#form')[0], 'all', options);
	if (options.length == 0)
		options.push(['<?>', '?']);
	return options;
}

Blockly.Blocks['ready_event'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.HUE);
	this.appendDummyInput()
		.appendField('when the form is loaded');
	this.appendStatementInput('STATEMENTS');
	this.setInputsInline(true);
	this.setTooltip('');
  }
};

//-------------------------------------
Blockly.Blocks['button_event'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.HUE);
	this.appendDummyInput()
		.appendField('when the');
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(List_Buttons), 'ELEMENT');
	this.appendDummyInput()
		.appendField('button');
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([['is clicked', 'click']]), 'EVENT');
	this.appendStatementInput('STATEMENTS');
	this.setInputsInline(true);
	this.setTooltip('');
  }
};

Blockly.Blocks['get_button_caption'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.HUE);
	this.appendDummyInput()
		.appendField('the caption of the')
		.appendField(new Blockly.FieldDropdown(List_Buttons), 'ELEMENT')
		.appendField('button');
	this.setOutput(true);
	this.setTooltip('');
  }
};

Blockly.Blocks['set_button_caption'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.HUE);
	this.appendDummyInput()
		.appendField('set the caption of the')
		.appendField(new Blockly.FieldDropdown(List_Buttons), 'ELEMENT')
		.appendField('button to');
	this.appendValueInput('NAME');
	this.setInputsInline(true);
	this.setPreviousStatement(true, 'Statement');
	this.setNextStatement(true, 'Statement');
	this.setTooltip('');
  }
};

//-------------------------------------
Blockly.Blocks['textfield_event'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.HUE);
	this.appendDummyInput()
		.appendField('when the value of the');
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(List_Textfields), 'ELEMENT');
	this.appendDummyInput()
		.appendField('field');
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([['changes', 'change']]), 'EVENT');
	this.appendStatementInput('STATEMENTS');
	this.setInputsInline(true);
	this.setTooltip('');
  }
};

Blockly.Blocks['get_textfield_value'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.HUE);
	this.appendDummyInput()
		.appendField('the value of the')
		.appendField(new Blockly.FieldDropdown(List_Textfields), 'ELEMENT')
		.appendField('field');
	this.setOutput(true);
	this.setTooltip('');
  }
};

Blockly.Blocks['set_textfield_value'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.HUE);
	this.appendDummyInput()
		.appendField('set the value of the')
		.appendField(new Blockly.FieldDropdown(List_Textfields), 'ELEMENT')
		.appendField('field to');
	this.appendValueInput('NAME');
	this.setInputsInline(true);
	this.setPreviousStatement(true, 'Statement');
	this.setNextStatement(true, 'Statement');
	this.setTooltip('');
  }
};

//-------------------------------------
Blockly.Blocks['dropdown_event'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.HUE);
	this.appendDummyInput()
		.appendField('when the value of the');
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(List_Dropdowns), 'ELEMENT');
	this.appendDummyInput()
		.appendField('dropdown');
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([['changes', 'change']]), 'EVENT');
	this.appendStatementInput('STATEMENTS');
	this.setInputsInline(true);
	this.setTooltip('');
  }
};

Blockly.Blocks['get_dropdown_value'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.HUE);
	this.appendDummyInput()
		.appendField('the value of the')
		.appendField(new Blockly.FieldDropdown(List_Dropdowns), 'ELEMENT')
		.appendField('dropdown');
	this.setOutput(true);
	this.setTooltip('');
  }
};

Blockly.Blocks['set_dropdown_value'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.HUE);
	this.appendDummyInput()
		.appendField('set the value of the')
		.appendField(new Blockly.FieldDropdown(List_Dropdowns), 'ELEMENT')
		.appendField('dropdown to');
	this.appendValueInput('NAME');
	this.setInputsInline(true);
	this.setPreviousStatement(true, 'Statement');
	this.setNextStatement(true, 'Statement');
	this.setTooltip('');
  }
};

//-------------------------------------
Blockly.Blocks['get_label_value'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.HUE);
	this.appendDummyInput()
		.appendField('the text of the')
		.appendField(new Blockly.FieldDropdown(List_Labels), 'ELEMENT')
		.appendField('label');
	this.setOutput(true);
	this.setTooltip('');
  }
};

Blockly.Blocks['set_label_value'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.HUE);
	this.appendDummyInput()
		.appendField('set the text of the')
		.appendField(new Blockly.FieldDropdown(List_Labels), 'ELEMENT')
		.appendField('label to');
	this.appendValueInput('NAME');
	this.setInputsInline(true);
	this.setPreviousStatement(true, 'Statement');
	this.setNextStatement(true, 'Statement');
	this.setTooltip('');
  }
};

//-------------------------------------
/*
function FindELEMENT(a_arr)
{
	var i = 0, len = a_arr.length;
	for(; i < len; i++)
	{
		var fr = a_arr[i].fieldRow[0];
		if (fr && 'name' in fr && fr.name == 'ELEMENT')
			return fr;
	}
	return undefined;
}

function EventOptions()
{
	var options = [];
	if ('inputList' in this)
	{
		var e = FindELEMENT(this.inputList);
		if (e)
		{
			var DOMELEMENT = $('#' + e.value_)[0];
			var DATAROLE = $('#' + e.value_).attr('data-role');
//			console.log(DOMELEMENT, DOMELEMENT.nodeName, DATAROLE);
			if (DATAROLE == 'button')
				options.push(['is clicked', 'click']);
			else if (DOMELEMENT.nodeName == 'INPUT')
				options.push(['changes', 'change']);
		}
	}
	if (options.length == 0)
		options.push(['<?>', '?']);
	return options;
}

function ElementOptions()
{
	var options = [];
	ParseDOM($('#form')[0], '', options);
	if (options.length == 0)
		options.push(['<?>', '?']);
	return options;
}

Blockly.Blocks['form_event'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.HUE);
	this.appendDummyInput()
		.appendField('when');
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(ElementOptions), 'ELEMENT');
	this.appendDummyInput()
		.appendField(' ');
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(EventOptions.bind(this)), 'EVENT');
	this.appendStatementInput('STATEMENTS');
	this.setInputsInline(true);
	this.setTooltip('');
  }
};

function PropertyOptions()
{
	var options = [];
	if ('inputList' in this)
	{
		console.log(FindELEMENT(this.inputList));
		options.push([String(new Date()).substring(0, 3), 'DAY' + i]);
	}
	if (options.length == 0)
		options.push(['<?>', '?']);
	return options;
}

Blockly.Blocks['get_property'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.HUE);
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(ElementOptions), 'ELEMENT');
	this.appendDummyInput()
		.appendField('.');
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(PropertyOptions.bind(this)), 'PROPERTY');
	this.setInputsInline(true);
	this.setOutput(true);
	this.setTooltip('');
  }
};

Blockly.Blocks['set_property'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.HUE);
	this.appendDummyInput()
		.appendField('set');
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(ElementOptions), 'ELEMENT');
	this.appendDummyInput()
		.appendField('.');
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(PropertyOptions.bind(this)), 'PROPERTY');
	this.appendValueInput('NAME')
		.appendField('to');
	this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setTooltip('');
  }
};

Blockly.Blocks['get_value'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.HUE);
	this.appendDummyInput()
		.appendField('get value of');
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(ElementOptions), 'ELEMENT');
	this.setInputsInline(true);
	this.setOutput(true);
	this.setTooltip('');
  }
};

Blockly.Blocks['set_value'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.HUE);
	this.appendDummyInput()
		.appendField('set value of');
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(ElementOptions), 'ELEMENT');
	this.appendValueInput('NAME')
		.appendField('to');
	this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setTooltip('');
  }
};
*/

//-------------------------------------
Blockly.Blocks['jquery_by_id'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.headHUE);
	this.appendDummyInput()
		.appendField('with')
		.appendField(new Blockly.FieldDropdown(List_All), 'ELEMENT_ID');
	this.appendStatementInput('CHAIN')
		.setCheck('jquery_chain');
	this.setPreviousStatement(true, 'Statement');
	this.setNextStatement(true, 'Statement');
	this.setTooltip('');
  }
};

Blockly.Blocks['jquery_by_selector'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.headHUE);
	this.appendDummyInput()
		.appendField('with')
		.appendField(new Blockly.FieldTextInput(''), 'SELECTOR');
	this.appendStatementInput('CHAIN')
		.setCheck('jquery_chain');
	this.setPreviousStatement(true, 'jquery_create');
	this.setNextStatement(true, 'jquery_create');
	this.setTooltip('');
  }
};

Blockly.Blocks['dom_create'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.headHUE);
	this.appendDummyInput()
		.appendField('create')
		.appendField(new Blockly.FieldDropdown([
			['DIV', '<DIV%1 />'],
			['SPAN', '<SPAN%1 />'],
			['Paragraph', '<P%1 />'],
			['Header 1', '<H1%1 />'],
			['Header 2', '<H2%1 />'],
			['Header 3', '<H3%1 />'],
			['Single line field', '<input type="text"%1 />'],
			['Password field', '<input type="password"%1 />'],
			['Multiline field', '<TEXTAREA%1 />'],
			['Horizontal line', '<HR%1>'],
			]), 'ELEMENT')
		.appendField('ID')
		.appendField(new Blockly.FieldTextInput(''), 'ELEMENT_ID');
	this.appendStatementInput('CHAIN')
		.setCheck('jquery_chain');
	this.setPreviousStatement(true, 'jquery_create');
	this.setNextStatement(true, 'jquery_create');
	this.setTooltip('');
  }
};

Blockly.Blocks['jquery_append'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.tailHUE);
	this.appendDummyInput()
		.appendField('append');
	this.appendStatementInput('CHAIN')
		.setCheck('jquery_create');
	this.setPreviousStatement(true, 'jquery_chain');
	this.setNextStatement(true, 'jquery_chain');
	this.setTooltip('');
  }
};

Blockly.Blocks['jquery_text'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.tailHUE);
	this.appendValueInput('TXT')
		.appendField(new Blockly.FieldDropdown([
			['plain text', 'text'],
			['formatted text', 'R12'],
			['html', 'html']
			]), 'TEXTKIND');
	this.setPreviousStatement(true, 'jquery_chain');
	this.setNextStatement(true, 'jquery_chain');
	this.setTooltip('');
  }
};

Blockly.Blocks['jquery_button'] = {
  init: function() {
	this.setHelpUrl('');
	this.setColour(Blockly.Blocks.forms.headHUE);
	this.appendDummyInput()
		.appendField('button')
		.appendField('ID').setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldTextInput(''), 'ELEMENT_ID');
	this.appendValueInput('CAPTION')
		.appendField('caption').setAlign(Blockly.ALIGN_RIGHT);
	this.appendValueInput('HINT')
		.appendField('hint').setAlign(Blockly.ALIGN_RIGHT);
    this.appendStatementInput('ONCLICK')
        .appendField('when clicked')
        .setCheck('Statement');
	this.setPreviousStatement(true, 'jquery_create');
	this.setNextStatement(true, 'jquery_create');
	this.setTooltip('');
  }
};

Blockly.Blocks['jquery_slide'] = {
  init: function() {
	this.setHelpUrl('http://api.jquery.com/category/effects/sliding/');
	this.setColour(Blockly.Blocks.forms.tailHUE);
	this.appendValueInput('OPTIONS')
		.appendField('slide')
		.appendField(new Blockly.FieldDropdown([
			['Down', 'Down'],
			['Toggle', 'Toggle'],
			['Up', 'Up']
			]), 'DIRECTION');
	this.setPreviousStatement(true, 'jquery_chain');
	this.setNextStatement(true, 'jquery_chain');
	this.setTooltip('Display or hide the matched elements with a sliding motion.');
  }
};

