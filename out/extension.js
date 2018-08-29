'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
//Include Finxact formatter library
var finJSONSchema = require('finxact-json');
//Global prop
var currentWindow = vscode.window;
var currentTextEditor = currentWindow.activeTextEditor;
//File Untils
const newFileFromTemplate = require('../utils/newfilefromtemplate');
//var Ajv = require('ajv');
//var ajv = new Ajv({allErrors: true});
function activate(context) {
    if (currentWindow && currentTextEditor.document.languageId === 'json') {
        //Condition not used
    }
    //Lets create a keybinding function
    let format = vscode.commands.registerCommand('extension.finxactFormat', () => {
        finFormat();
    });
    // Don't really need this but I thought I would try some added fromating features
    let quickFormat = vscode.commands.registerCommand('extension.finxactQuickFormat', () => {
        //vscode.commands.executeCommand('editor.action.insertLineAfter')
        finFormat();
    });
    let finValidate = vscode.commands.registerCommand('extension.finxactValidate', () => {
        //jsonValidate(currentTextEditor.document.getText());
        //vscode.commands.executeCommand("workbench.debug.action.toggleRepl");
        console.info("This feature is in development");
        //currentWindow.showInformationMessage("Avtive from Foo");
    });
    let finxactNewFile = vscode.commands.registerCommand('extension.finxactJSONTemplate', newFileFromTemplate); // Create file from template
    context.subscriptions.push(format, quickFormat, finValidate, finxactNewFile);
}
exports.activate = activate;
// Combine everything into one func Works for now
// THIS!!! All Night Long!!!! I had to create a new referance to the TextEditor
function finFormat() {
    let editor = vscode.window.activeTextEditor;
    var builder;
    const position = editor.selection.active;
    var newPosition = position.with(position.line, position.character);
    var newSelection = new vscode.Selection(newPosition, newPosition);
    var text = editor.document.getText(); //Format everything
    var processedText = finJSONSchema(text); //Bad coding all mashed together 
    builder = replaceAllContent(text, processedText);
    /*Can be used to text selection formatting*/
    //if (editor.selection.isEmpty) {
    //    var text = editor.document.getText();
    //    var processedText = finJSONSchema(text);
    //    builder = replaceAllContent(text, processedText);
    //}else{
    //    editor.selection = newSelection;
    //    var text = editor.document.getText(editor.selection);
    //    var processedText = finJSONSchema(text);
    //    builder = replaceSectionContent(text, processedText, editor.selection.start, editor.selection.end); 
    //}
    //Replace editor with formatted text
    if (processedText != false) {
        vscode.window.activeTextEditor.edit(builder);
    }
    editor.selection = newSelection; //Reset the position after insert
}
function jsonValidate(data) {
    //var validate = ajv.compile(require('./schema/v1.0.json'));
    //var data = {"foo": 1, "bar": 2}
    //var valid = validate(JSON.parse(data));
    //if (valid) console.log('Valid!');
    //else console.log('Invalid: ' + ajv.errorsText(validate.errors));
}
//Check for current window and if the file type is JSON
function formatOption(currentWindow, currentTextEditor) {
    if (currentWindow && currentTextEditor.document.languageId === 'json') {
        vscode.window.showInformationMessage('Do you want to first default format this JSON?', { modal: null }, 'Yes', 'No', 'Hide').then(selection => {
            console.log(selection);
            if (selection == 'Yes') {
                currentWindow.showInformationMessage('Finxact JSON Formater v2.0.0');
                finFormat();
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