Blockly.Blocks['package_declaration'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("package")
            .appendField(new Blockly.FieldTextInput("default"), "PACKAGE");
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Rego['package_declaration'] = function (block) {
    var text_package = block.getFieldValue('PACKAGE');
    var code = `package ${text_package}\n\n`;
    return code;
};

Blockly.Blocks['rule'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("rule")
            .appendField(new Blockly.FieldTextInput("name"), "NAME");
        this.appendStatementInput("CONDITIONS")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Rego['rule'] = function (block) {
    var text_name = block.getFieldValue('NAME');
    var statements_conditions = Blockly.Rego.statementToCode(block, 'CONDITIONS');
    // TODO: Assemble Rego into code variable.
    var code = `${text_name} {
        ${statements_conditions}
    }\n`;
    return code;
};

Blockly.Blocks['statement'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("statement");
        this.appendValueInput("NAME")
            .setCheck("Boolean");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Rego['statement'] = function (block) {
    var value_name = Blockly.Rego.valueToCode(block, 'NAME', Blockly.Rego.ORDER_NONE);
    var code = `${value_name}\n`;
    return code;
};

Blockly.Blocks['input'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("input")
            .appendField(new Blockly.FieldVariable("variable"), "VARIABLE");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Rego['input'] = function (block) {
    var variable_variable = Blockly.Rego.variableDB_.getName(block.getFieldValue('VARIABLE'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Rego into code variable.
    var code = `input.${variable_variable}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Rego.ORDER_ATOMIC];
};

Blockly.Blocks['variable_field'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("field")
            .appendField(new Blockly.FieldVariable("variable"), "VARIABLE")
            .appendField(new Blockly.FieldTextInput("field"), "FIELD");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Rego['variable_field'] = function (block) {
    var variable_variable = Blockly.Rego.variableDB_.getName(block.getFieldValue('VARIABLE'), Blockly.Variables.NAME_TYPE);
    var text_field = block.getFieldValue('FIELD');
    var code = `${variable_variable}.${text_field}`;
    return [code, Blockly.Rego.ORDER_ATOMIC];
};

Blockly.Blocks['input_value'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("input");
        this.appendValueInput("NAME")
            .setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Rego['input_value'] = function (block) {
    var value_name = Blockly.Rego.valueToCode(block, 'NAME', Blockly.Rego.ORDER_ATOMIC);
    // TODO: Assemble Rego into code variable.
    var code = `input.${value_name}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Rego.ORDER_ATOMIC];
};

Blockly.Blocks['variable_field_value'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("field")
            .appendField(new Blockly.FieldTextInput("field"), "FIELD")
            .appendField("of");
        this.appendValueInput("VARIABLE")
            .setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Rego['variable_field_value'] = function (block) {
    var text_field = block.getFieldValue('FIELD');
    var value_variable = Blockly.Rego.valueToCode(block, 'VARIABLE', Blockly.Rego.ORDER_ATOMIC);
    var code = `${value_variable}.${text_field}`;
    return [code, Blockly.Rego.ORDER_ATOMIC];
};


Blockly.Blocks['for_any_member_of'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("for any member of");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Rego['for_any_member_of'] = function (block) {
    var value_name = Blockly.Rego.valueToCode(block, 'NAME', Blockly.Rego.ORDER_ATOMIC);
    var code = `${value_name}[_]`;
    return [code, Blockly.Rego.ORDER_ATOMIC];
};

Blockly.Blocks['json_object'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("object");
        this.appendStatementInput("BODY")
            .setCheck(null);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Rego['json_object'] = function (block) {
    var statements_body = Blockly.Rego.statementToCode(block, 'BODY');
    var code = `{${statements_body.trim().replace("\n", ",")}}`;
    return [code, Blockly.Rego.ORDER_ATOMIC];
};

Blockly.Blocks['json_field'] = {
    init: function () {
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("field")
            .appendField(new Blockly.FieldTextInput("fieldname"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Rego['json_field'] = function (block) {
    var text_name = block.getFieldValue('NAME');
    var value_value = Blockly.Rego.valueToCode(block, 'VALUE', Blockly.Rego.ORDER_ATOMIC);
    var code = `"${text_name}": ${value_value}\n`;
    return code;
};

Blockly.Blocks['json_array'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("array");
        this.appendStatementInput("BODY")
            .setCheck(null);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Rego['json_array'] = function (block) {
    var statements_body = Blockly.Rego.statementToCode(block, 'BODY');
    var code = `[${statements_body.trim().replace("\n", ",")}]`;
    return [code, Blockly.Rego.ORDER_ATOMIC];
};

Blockly.Blocks['json_array_item'] = {
    init: function () {
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("item");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Rego['json_array_item'] = function (block) {
    var value_value = Blockly.Rego.valueToCode(block, 'VALUE', Blockly.Rego.ORDER_ATOMIC);
    var code = `${value_value}\n`;
    return code;
};

Blockly.Blocks['rego_test'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("test")
            .appendField(new Blockly.FieldTextInput("something"), "TESTNAME");
        this.appendDummyInput()
            .appendField("expect")
            .appendField(new Blockly.FieldVariable("allow"), "VARIABLE")
            .appendField("to be")
            .appendField(new Blockly.FieldDropdown([["true", "true"], ["false", "false"]]), "EXPECTED");
        this.appendValueInput("INPUT")
            .setCheck(null)
            .appendField("with input");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Rego['rego_test'] = function (block) {
    var text_testname = block.getFieldValue('TESTNAME');
    var variable_variable = Blockly.Rego.variableDB_.getName(block.getFieldValue('VARIABLE'), Blockly.Variables.NAME_TYPE);
    var dropdown_expected = block.getFieldValue('EXPECTED');
    var value_input = Blockly.Rego.valueToCode(block, 'INPUT', Blockly.Rego.ORDER_ATOMIC);
    var code = `test_${text_testname} {
        ${dropdown_expected == "false" ? "not " : ""}${variable_variable} with input as ${value_input}
    }\n`;
    return code;
};