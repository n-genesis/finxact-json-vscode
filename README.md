# finxact-json-formatter README

This is the README for the extension "finxact-json-formatter".

### Features
- Formats JSON files using Finxact JSON schema rules.
- Validate JSON file (in dev)
- New File templates (in dev) 

## Screenshot
![](https://drive.google.com/uc?export=view&id=1N4oDMsDjzcSXV0vv6lk0AlxeFSkH7HA4)

## Installation

> **Zip Download:** If you don't want to use git you can download files from [Google Drive](https://drive.google.com/drive/folders/13y3dKEXJE0sE4aGEdUZL8Iq0bGY5hopx?usp=sharing)

For different platform you should find the `.vscode/extensions` directory it in the following locations:
```
Windows %USERPROFILE%\.vscode\extensions
Mac ~/.vscode/extensions
Linux ~/.vscode/extensions
```

### Using Git (terminal)
1. Navigate to `.vscode/extension/` and while in the directory clone the repo.
```
git clone https://USERNAME@bitbucket.org/finxact/vs-code.git
```
2. After cloning a `vs-code` folder is created. Rename the folder to `fin-format`.
```
sudo mv vs-code fin-format
```
3. Relaod VS Code for the extension to be added.


### Download
1. After downloading the zip file cut and past it to `.vscode/extension/`.
2. Unzip the file and rename it to `fin-format`.
3. Relaod VS Code for the extension to be added.

### Google Drive
1. After downloading the zip file cut and past it to `.vscode/extension/`.
2. Unzip the file while still in `extension/` folder.
3. Relaod VS Code for the extension to be added.

## Using the Extension

### Format KeyBindings
To format a JSON file simply Right click and select "Finxact JSON Format" option or use:

- Windows + Linux: `ctrl+alt+p`
- Mac: `cmd+alt+p`
- Windows + Linux + Mac: `shift-enter`

> **Recommended:** To make it a little easier when editing it really helps to first default format the file so when adding new values the cursor is a little more predictable in its positioning for new lines.

### Format Commands
- To be included


### JSON Validation
- To be included

### File Template

Finxat commands can be used through the Command Palette (`F1`).

![IntelliSense](https://drive.google.com/uc?export=view&id=1zG2ezmvYBd9r4ikbdaM12Vzv6V1IloG1)


## Snippets
The follwoing are a list of snippets included with the extension for assistance with Finxact JSON file creation

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
- Indentation now starts at column 20 (better closing bracket alignment)
- Closing bracket alignment equally reduced by tab
- Include Finxact json schema key name snippets
#### Fix
- Values for Objects with key names indented is current level plus 1 