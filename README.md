# finxact-json-formatter README

This is the README for the extension "finxact-json-formatter".

### Features
Formats JSON files using Finxact JSON schema rules.

## Screenshot
![](https://drive.google.com/uc?export=view&id=19r86_PTE2WxSEK1qLeotJYutsj207tbd)

## Installation

> **Zip Download:** If you don't want to use git you can download this extension as a zip file from [Google Drive](https://drive.google.com/file/d/1laAUSxdogWW5P29-79-bVcvyfsSsHC63/view?usp=sharing)

For different platform you should find the `.vscode/extensions` directory it in the following locations:
```
Windows %USERPROFILE%\.vscode\extensions
Mac ~/.vscode/extensions
Linux ~/.vscode/extensions
```

### Using Git (terminal)
1. Navigate to your `.vscode/extension/` directory and create a new new folder name `finxact-json-formatter`.
2. Under the newly created `finxact-formatter/` clone this repo.
3. After cloning you can choose to rename the `vs-code` folder to `finxact-formatter/` but this is optional.
4. Make sure to restart VS Code for the extension to be added.

## Using Formatter
To format a JSON file simply Right click and select "Finxact JSON Format" option or press (Ctrl+Alt+P).

> **Recommended:** To make it a little easier when editing it really helps to first default format the file so when adding new values the cursor is a little more predictable in its positioning for new lines.


## Special formatting for the following arrays:

- allOf
- choices
- choice (is used in some json files)
- x-choices
- foreignKeys
- serialize
- indexes
- allof
- contextValues
- computeds
- oneOf

The following are a list of available `key:value` snippets for the Finxact Formatter extension.


### 1.0
- Indentation now starts at column 19 -20 (better closing bracket alignment)
- Closing bracket alignment equally reduced by tab
- Include Finxact json schema key name snippets