'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
//Include Finxact formatter library
var finJSONSchema = require('json-finxact');
//var showFormatNotice = true;
function activate(context) {
    //create variables for cutting down on chain
    var currentWindow = vscode.window;
    var currentTextEditor = currentWindow.activeTextEditor;
    //Lets create a keybinding function
    let disposable = vscode.commands.registerCommand('extension.finxactFormat', () => {
        var editor = vscode.window.activeTextEditor;
        var builder;
        //Check to see if editor text is selected
        //If not first select text
        if (editor.selection.isEmpty) {
            var text = editor.document.getText();
            var processedText = finJSONSchema(text);
            builder = replaceAllContent(text, processedText);
        }
        else {
            var text = editor.document.getText(editor.selection);
            var processedText = finJSONSchema(text);
            builder = replaceSectionContent(text, processedText, editor.selection.start, editor.selection.end);
        }
        //Replace editor with formatted text
        if (processedText != false) {
            vscode.window.activeTextEditor.edit(builder);
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
//Check for current window and if the file type is JSON
function formatOption(currentWindow, currentTextEditor) {
    if (currentWindow && currentTextEditor.document.languageId === 'json') {
        vscode.window.showInformationMessage('Do you want to first default format this JSON?', { modal: null }, 'Yes', 'No', 'Hide').then(selection => {
            if (selection == 'Yes') {
                vscode.commands.executeCommand('editor.action.formatDocument');
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