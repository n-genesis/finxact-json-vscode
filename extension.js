'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
//Include Finxact formatter library
var finJSONSchema = require('finxact-json');
//var showFormatNotice = true;
//Global prop
var currentWindow = vscode.window;
var currentTextEditor = currentWindow.activeTextEditor;
var Ajv = require('ajv');
var ajv = new Ajv({ allErrors: true });
function activate(context) {
    // Check to see if is json file
    if (currentWindow && currentTextEditor.document.languageId === 'json') {
        //Condition not used
    }
    //Lets create a keybinding function
    let disposable = vscode.commands.registerCommand('extension.finxactFormat', () => {
        finxactIt(currentTextEditor);
    });
    let disposable2 = vscode.commands.registerCommand('extension.finxactQuickFormat', () => {
        //vscode.commands.executeCommand('editor.action.insertLineAfter')
        //currentWindow.showInformationMessage("Just for testing");
        finxactIt(currentTextEditor);
    });
    let finValidate = vscode.commands.registerCommand('extension.finValidate', () => {
        //jsonValidate(currentTextEditor.document.getText());console.log("Active From Foo")
        //currentWindow.showInformationMessage("Avtive from Foo");
    });
    context.subscriptions.push(disposable, disposable2, finValidate);
}
exports.activate = activate;
//Combine everything into one thing Works for now
function finxactIt(editor) {
    var builder;
    const position = editor.selection.active;
    var newPosition = position.with(position.line, position.character);
    var newSelection = new vscode.Selection(newPosition, newPosition);
    var text = editor.document.getText(); //Format everything
    var processedText = finJSONSchema(text); //Bad coding all mashed together 
    builder = replaceAllContent(text, processedText);
    /*Can be used to text selection formatting
    if (editor.selection.isEmpty) {
        var text = editor.document.getText();
        var processedText = finJSONSchema(text);
        builder = replaceAllContent(text, processedText);
    }else{
        editor.selection = newSelection;
        var text = editor.document.getText(editor.selection);
        var processedText = finJSONSchema(text);
        builder = replaceSectionContent(text, processedText, editor.selection.start, editor.selection.end);
        
    }
    */
    //Replace editor with formatted text
    if (processedText != false) {
        vscode.window.activeTextEditor.edit(builder);
    }
    editor.selection = newSelection; //Reset the position after insert
}
function jsonValidate(data) {
    var validate = ajv.compile(require('./schema/v1.0.json'));
    //var data = {"foo": 1, "bar": 2}
    var valid = validate(JSON.parse(data));
    if (valid)
        console.log('Valid!');
    else
        console.log('Invalid: ' + ajv.errorsText(validate.errors));
}
//Check for current window and if the file type is JSON
function formatOption(currentWindow, currentTextEditor) {
    if (currentWindow && currentTextEditor.document.languageId === 'json') {
        vscode.window.showInformationMessage('Do you want to first default format this JSON?', { modal: null }, 'Yes', 'No', 'Hide').then(selection => {
            console.log(selection);
            if (selection == 'Yes') {
                currentWindow.showInformationMessage('Finxact JSON Formater v2.0.0');
                finxactIt(currentTextEditor);
            }
        });
    }
}
//Check for line seperators
var LINE_SEPERATOR = /\n|\r\n/;
//Select editor content
function replaceSectionContent(raw, replacement, start, end) {
    return function (builder) {
        var lines = raw.split(LINE_SEPERATOR);
        var range = new vscode.Range(start, end);
        builder.replace(range, replacement);
    };
}
;
function replaceAllContent(raw, replacement) {
    return function (builder) {
        var start = new vscode.Position(0, 0);
        var lines = raw.split(LINE_SEPERATOR);
        var end = new vscode.Position(lines.length - 1, lines[lines.length - 1].length);
        var allRange = new vscode.Range(start, end);
        builder.delete(allRange);
        builder.insert(start, replacement);
    };
}
;
//Function not used at this time
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map