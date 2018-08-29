
<img align="right" alt="Ajv logo" width="160" src="https://drive.google.com/uc?export=view&id=1HzLZBHfnA4EGwxeCZayRynpff2PE840P"/>

# Finxact JSON Formatter

This is an extension for VSCode to assist with Finxact JSON file writing.

## Screenshot
![](https://drive.google.com/uc?export=view&id=1N4oDMsDjzcSXV0vv6lk0AlxeFSkH7HA4)

## Features
- Formats JSON files using Finxact JSON schema rules.
- New File templates
- Validate JSON file (in dev)


### Contents
- [Installation](#Installation)
    - [Clone or Download](#Clone-or-Download)
- [Using the Extension](#Using-the-Extension)
    - [KeyBindings](#KeyBindings)
    - [Format Commands](#Format-Commands)
    - [JSON Validation](#JSON-Validation)
- [File Templates](#File-Templates)
    - [Included Templates](#Included-Templates)
    - [Boilerplate](#BOILERPLATE.json)
    - [Blank](#BLANK.json)
    - [Adding Templates](#Adding-Templates)
- [Snippets](#Snippets)
- [Special formatting](#Special-formatting)

## Installation

You will need to place this extension in your `.vscode/extensions` directory. It can be found in the following location depending on you platform:
```
Windows %USERPROFILE%\.vscode\extensions
Mac ~/.vscode/extensions
Linux ~/.vscode/extensions
```
> **Hidden folders:** You may need need to change you file explorer's settings to show hidden files before seeing the `.vscode` directory.

### Clone or Download

#### Using Git (terminal)
1. Navigate to `.vscode/extension/` and while in the directory clone the repo.
```
git clone https://USERNAME@bitbucket.org/finxact/vs-code.git
```
2. After cloning a `vs-code` folder is created. Rename the folder to `fin-format`.
```
sudo mv vs-code fin-format
```
3. Relaod VS Code for the extension to be added.

#### Google Drive
You can download a zip file from [Google Drive](https://drive.google.com/drive/folders/13y3dKEXJE0sE4aGEdUZL8Iq0bGY5hopx?usp=sharing).

1. After downloading the zip file cut and past it to `.vscode/extension/`.
2. Unzip the file while still in `extension/` folder.
3. Relaod VS Code for the extension to be added.

## Using the Extension

### KeyBindings
To format a JSON file simply Right click and select "Finxact JSON Format" option or use:

- Windows + Linux: `ctrl+alt+p`
- Mac: `cmd+alt+p`
- Windows + Linux + Mac: `shift-enter`

> **Helpful:** To make it a little easier when editing it really helps to first default format the file so when adding new values the cursor is a little more predictable in its positioning for new lines.

### Commands

Finxat commands can be used through the Command Palette (`F1`).
- To be included

### JSON Validation
- To be included


## File Templates

To help just start writing of a Finxact JSON schema file you can create a new file using templates located in the Finxact JSON Formatter's `/templates` folder. The extension currently has two templates: `BLANK.json` and `BOILERPLAT.json`. YOu can also create your own template and copy it in the `/templates/` to use with the extention.

### Included Templates

#### BOILERPLATE.json

```
    "$schema": "http://json-schema.org/draft-04/schema#",
         "id": "http://finxact.com/.../${FILE}",
      "title": "",
"description": "",
 "x-createDt": "${DATE}",
 "x-createBy": "${AUTHOR}",
 "x-updateDt": "",
 "x-updateBy": ""
```

#### BLANK.json
This file can also be used for a base for create a custom template.

```
    "$schema": "http://json-schema.org/draft-04/schema#",
         "id": "",
      "title": "",
"description": "",
 "x-createDt": "",
 "x-createBy": "",
 "x-updateDt": "",
 "x-updateBy": ""
```

### Adding Templates

#### Predefined variables
The following are predefined template variables currently supported:
- `${AUTHOR}` - System username (Windows 10 returns first name of owners account)
- `${DATE}` - Current system date in ISO Date Format
- `${FILE}` - Name of created file







## Snippets
The follwoing are a list of snippets for assistance with Finxact JSON file writing.
- To be included

## Special formatting
The following array valuesbegin on a newline.

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

## Versions

### 1.5
- New file templates
- New Finxact json schema `key:value` snippets ex. finObj (Object with title and description key:values)

### 1.0
- Indentation now starts at column 20 (better closing bracket alignment)
- Closing bracket alignment equally reduced by tab
- Include Finxact json schema key name snippets
#### Fix
- Values for Objects with key names indented is current level plus 1 