'use strict';

goog.provide('Blockly.JavaScript.records');

goog.require('Blockly.JavaScript');
goog.require('Blockly.Names');


/*
Blockly.JSON = new Blockly.Generator('JSON');


Blockly.JSON.generalBlockToObj = function(block) {

    if(block) {
console.log('generalBlockToObj', block.id, block.type);
            // dispatcher:
        var func = this[block.type];
        if(func) {
            return func.call(this, block);
        } else {
            console.log("Don't know how to generate JSON code for a '"+block.type+"'");
        }
    } else {
        return null;
    }
}

Blockly.JSON['logic_boolean'] = function(block) {
    return block.getFieldValue('BOOL') == 'TRUE';
}

Blockly.JSON['logic_null'] = function(block) {
    return null;
}

Blockly.JSON['text'] = function(block) {
    return block.getFieldValue( 'TEXT' );
}

Blockly.JSON['math_number'] = function(block) {
    return Number(block.getFieldValue( 'NUM' ));
}


Blockly.JSON['record'] = function(block) {

    var result = {};

    for(var i = 0; i<block.length; i++) {
        var pair_key    = block.getFieldValue( 'key_field_'+i );
        var pair_value  = this.generalBlockToObj( block.getInputTargetBlock( 'element_'+i ) );

        result[pair_key] = pair_value;
    }

    return result;
}


Blockly.JSON['array'] = function(block) {
    var result = [];
	var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
	if (nextBlock)
		result = result.concat(this.generalBlockToObj(nextBlock));
    return result;
}

Blockly.JSON['arrayelement'] = function(block) {
    var result = [this.generalBlockToObj(block.getInput('VALUE').connection.targetBlock())];
	var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
	if (nextBlock)
		result = result.concat(this.generalBlockToObj(nextBlock));
    return result;
}


//Blockly.JavaScript['json_stringify'] = function(block) {
//  var targetBlock = block.getInputTargetBlock('JS');
//  var js_obj = Blockly.JSON.generalBlockToObj(targetBlock);
//  return [JSON.stringify(js_obj), Blockly.JavaScript.ORDER_ATOMIC];
//}
//
*/
Blockly.JavaScript['json_stringify'] = function(block) {
	var argument0 = Blockly.JavaScript.valueToCode(block, 'JS', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
	var code = 'JSON.stringify(' + argument0 + ')';
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
}


Blockly.JavaScript['json_parse'] = function(block) {
	return '?';
}


Blockly.JavaScript['record'] = function(block) {
	var codes = [];
	while (true)
	{
		var block = block.nextConnection && block.nextConnection.targetBlock();
		if (!block) break;
		if (block.disabled) continue;
		var fieldname = JSON.stringify(block.getFieldValue('FIELDNAME'));
		var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
		codes.push(fieldname + ':' + value);
	}
	var code = '{' + codes.join(',') + '}';
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['recordfield'] = function(block) {
	// Standalone 'recordfield' has no code.
	return '';
}

Blockly.JavaScript['array'] = function(block) {
	var codes = [];
	while (true)
	{
		var block = block.nextConnection && block.nextConnection.targetBlock();
		if (!block) break;
		if (block.disabled) continue;
		var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
		codes.push(value);
	}
	var code = '[' + codes.join(',') + ']';
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['arrayelement'] = function(block) {
	// Standalone 'arrayelement' has no code.
	return '';
}
