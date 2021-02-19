Blockly.Blocks['package_declaration'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("package")
            .appendField(new Blockly.FieldTextInput("default"), "PACKAGE");
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