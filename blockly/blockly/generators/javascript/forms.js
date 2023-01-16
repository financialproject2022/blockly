'use strict';

goog.provide('Blockly.JavaScript.forms');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['ready_event'] = function(block) {
	var STATEMENTS = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
	var code = '$(document).ready(function(eventObject, extraParameter){\n' + STATEMENTS + '});';
	return code;
}

//-------------------------------------
Blockly.JavaScript['button_event'] = function(block) {
	var ELEMENT = block.getFieldValue('ELEMENT');
	var dropdown_event = block.getFieldValue('EVENT');
	var STATEMENTS = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
	//jquery-2:  var code = '$("#' + ELEMENT + '").on("' + dropdown_event
	var code = '$("#' + ELEMENT + '").bind("' + dropdown_event
		+ '", function(eventObject, extraParameter){\n' + STATEMENTS + '});';
	return code;
}

Blockly.JavaScript['get_button_caption'] = function(block) {
	var ELEMENT = block.getFieldValue('ELEMENT');
	//RIB:  var code = '$("#' + ELEMENT + ' > span > span").html()';
	var code = '$("#' + ELEMENT + '").html()';
	return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['set_button_caption'] = function(block) {
	var ELEMENT = block.getFieldValue('ELEMENT');
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
	//RIB:  var code = '$("#' + ELEMENT + ' > span > span").html(' + value_name + ');';
	var code = '$("#' + ELEMENT + '").html(' + value_name + ');';
	return code;
}

//-------------------------------------
Blockly.JavaScript['textfield_event'] = function(block) {
	var ELEMENT = block.getFieldValue('ELEMENT');
	var dropdown_event = block.getFieldValue('EVENT');
	var STATEMENTS = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
	//jquery-2:  var code = '$("#' + ELEMENT + '").on("' + dropdown_event
	var code = '$("#' + ELEMENT + '").bind("' + dropdown_event
		+ '", function(eventObject, extraParameter){\n' + STATEMENTS + '});';
	return code;
}

Blockly.JavaScript['get_textfield_value'] = function(block) {
  var ELEMENT = block.getFieldValue('ELEMENT');
  var code = '$("#' + ELEMENT + '").val()';
  return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['set_textfield_value'] = function(block) {
  var ELEMENT = block.getFieldValue('ELEMENT');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '$("#' + ELEMENT + '").val(' + value_name + ');';
  return code;
}

//-------------------------------------
Blockly.JavaScript['dropdown_event'] = function(block) {
	var ELEMENT = block.getFieldValue('ELEMENT');
	var dropdown_event = block.getFieldValue('EVENT');
	var STATEMENTS = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
	//jquery-2:  var code = '$("#' + ELEMENT + '").on("' + dropdown_event
	var code = '$("#' + ELEMENT + '").bind("' + dropdown_event
		+ '", function(eventObject, extraParameter){\n' + STATEMENTS + '});';
	return code;
}

Blockly.JavaScript['get_dropdown_value'] = function(block) {
  var ELEMENT = block.getFieldValue('ELEMENT');
  var code = '$("#' + ELEMENT + '").val()';
  return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['set_dropdown_value'] = function(block) {
  var ELEMENT = block.getFieldValue('ELEMENT');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '$("#' + ELEMENT + '").val(' + value_name + ');';
  return code;
}

//-------------------------------------
Blockly.JavaScript['get_label_value'] = function(block) {
  var ELEMENT = block.getFieldValue('ELEMENT');
  var code = '$("#' + ELEMENT + '").html()';
  return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['set_label_value'] = function(block) {
  var ELEMENT = block.getFieldValue('ELEMENT');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '$("#' + ELEMENT + '").html(' + value_name + ');';
  return code;
}

/*
Blockly.JavaScript['form_event'] = function(block) {
  var ELEMENT = block.getFieldValue('ELEMENT');
  var dropdown_event = block.getFieldValue('EVENT');
  var STATEMENTS = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
//jquery-2:  var code = '$("#' + ELEMENT + '").on("' + dropdown_event
  var code = '$("#' + ELEMENT + '").bind("' + dropdown_event
	+ '", function(eventObject, extraParameter){\n' + STATEMENTS + '});';
  return code;
}

Blockly.JavaScript['get_property'] = function(block) {
  var ELEMENT = block.getFieldValue('ELEMENT');
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code = '...';
  return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['set_property'] = function(block) {
  var ELEMENT = block.getFieldValue('ELEMENT');
  var dropdown_property = block.getFieldValue('PROPERTY');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '...';
  return code;
}

Blockly.JavaScript['get_value'] = function(block) {
  var ELEMENT = block.getFieldValue('ELEMENT');
  var code = '$("#' + ELEMENT + '").val()';
  return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.JavaScript['set_value'] = function(block) {
  var ELEMENT = block.getFieldValue('ELEMENT');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '$("#' + ELEMENT + '").val(' + value_name + ');';
  return code;
}

Blockly.JavaScript['form_event'] = function(block) {
  // Variable getter.
  var code = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + ';\n';
}
*/

function RandomID() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
}

Blockly.JavaScript['jquery_by_id'] = function(block) {
	var ELEMENT_ID = block.getFieldValue('ELEMENT_ID');
	var chain = Blockly.JavaScript.statementToCode(block, 'CHAIN');
	//  var v = RandomID();
	//  var code = 'var ' + v + '=$("#' + ELEMENT_ID + '");\n'
	//	+ v + (chain != '' ? /*'.' +*/ chain : '') + ';';
	var code = '$("#' + ELEMENT_ID + '")' + (chain != '' ? /*'.' +*/ chain : '') + ';';
	return code;
}

Blockly.JavaScript['jquery_by_selector'] = function(block) {
	var selector = block.getFieldValue('SELECTOR');
	var chain = Blockly.JavaScript.statementToCode(block, 'CHAIN');
	var code = '$("' + selector + '")'
		+ (chain != '' ? '\n.' + chain : '') + ';';
	return code;
}

Blockly.JavaScript['dom_create'] = function(block) {
	var ELEMENT = block.getFieldValue('ELEMENT');
	var ELEMENT_ID = JSON.stringify(block.getFieldValue('ELEMENT_ID'));
	var chain = Blockly.JavaScript.statementToCode(block, 'CHAIN');
	var code = '$(\'' + ELEMENT.replace('%1', ELEMENT_ID != '' ? ' id=' + ELEMENT_ID : '') + '\')' + chain
	/*+ (chain != '' ? '.' + chain : '') + ';'*/;
	return code;
}

Blockly.JavaScript['jquery_append'] = function(block) {
	var chain = Blockly.JavaScript.statementToCode(block, 'CHAIN');
	return '\n.append(' + chain + ')';
}

Blockly.JavaScript['jquery_text'] = function(block) {
	var TEXTKIND = block.getFieldValue('TEXTKIND');
	var argument0 = Blockly.JavaScript.valueToCode(block, 'TXT',
		Blockly.JavaScript.ORDER_NONE) || '\'\'';
	switch (TEXTKIND)
	{
		case 'text':	return '.text(' + argument0 + ')';
		case 'R12':		return '.html(R12ToHtml(' + argument0 + '))';
		case 'html':	return '.html(' + argument0 + ')';
	}
}

Blockly.JavaScript['jquery_button'] = function(block) {
	var CAPTION = Blockly.JavaScript.valueToCode(block, 'CAPTION',
		Blockly.JavaScript.ORDER_NONE) || '\'\'';
	var HINT = Blockly.JavaScript.valueToCode(block, 'HINT',
		Blockly.JavaScript.ORDER_NONE) || '\'\'';
	var ONCLICK = Blockly.JavaScript.statementToCode(block, 'ONCLICK');
	var code = '$(\'<button class="ui-btn ui-corner-all ui-btn-inline show-page-loading-msg ui-icon-check ui-btn-icon-left"'
		+ ' data-textonly="false" data-theme="b" data-textvisible="true" data-msgtext=\' + JSON.stringify(' + HINT + ') + \''
		+ ' data-inline="true" data-role="button" id=' + JSON.stringify(block.getFieldValue('ELEMENT_ID')) + '>\' + ' + CAPTION + ' + \'</button>\')';
	if (ONCLICK)
		code += '\n.bind("click", function(eventObject, extraParameter){\n' + ONCLICK + '})';
	return code;
}

Blockly.JavaScript['jquery_slide'] = function(block) {
	var argument0 = Blockly.JavaScript.valueToCode(block, 'OPTIONS',
		Blockly.JavaScript.ORDER_NONE) || '\'\'';
	var direction = block.getFieldValue('DIRECTION');
	return '.slide' + direction + '(' + argument0 + ')';
}
