# Finxact JSON Extension

This is an extension for VSCode to assist with Finxact JSON file writing.

## Screenshot
![](https://drive.google.com/uc?export=view&id=1N4oDMsDjzcSXV0vv6lk0AlxeFSkH7HA4)

## Features
- Formats JSON files using Finxact schema rules.
- New File templates
- Validate JSON file (in dev)


### Contents
- [Installation](#installation)
    - [Clone or Download](#clone-or-download)
- [Using the Extension](#using-the-extension)
    - [Menu and KeyBindings](#menu-and-keybindings)
    - [Format Commands](#format-commands)
    - [JSON Validation (in-dev)](#json-validation)
        - [Schema (in-dev)](#)
- [File Templates](#file-templates)
    - [Included Templates](#included-templates)
        - [Boilerplate](#boilerplate.json)
        - [Blank](#blank.json)
    - [New File From Template](#new-file-from-template)
    - [Adding Templates](#adding-templates)
    - [File naming](#file-naming)
    - [Template variables](#template-variables)
- [Snippets](#snippets)
- [Special formatting](#special-formatting)

## Installation

You will need to place this extension in your `.vscode/extensions` directory. It can be found in the following location depending on you platform:
```
Windows %USERPROFILE%\.vscode\extensions
Mac ~/.vscode/extensions
Linux ~/.vscode/extensions
```

> **Hidden folders:** You may need need to change your file explorer's settings to show hidden files before seeing the `.vscode` directory.

### Clone or Download

#### Using BitBucket (terminal)

1. Navigate to `.vscode/extension` and while in the directory clone the repo. `git clone https://USERNAME@bitbucket.org/finxact/vs-code.git`.

2. After cloning a `vs-code` folder is created. Rename the folder to `finxact-formatter` using the command `sudo mv vs-code finxact-formatter`.

3. Relaod VS Code for the extension to be added.


#### Using GitHub (terminal)

1. Navigate to `.vscode/extension` and while in the directory clone the repo. `git clone https://github.com/n-genesis/finxact-json-vscode.git`.

2. Relaod VS Code for the extension to be added.

#### Google Drive
You can download a zip file from [Google Drive](https://drive.google.com/file/d/1BJUsxy6nX6W_dyxLRud2n1HjqCDc3tji/view?usp=sharing).

1. After downloading the zip file cut and past it to `.vscode/extension`.
2. Unzip the file while still in `extension/` folder.
3. Relaod VS Code for the extension to be added.

## Using the Extension

### Menu and KeyBindings
To format a JSON file you can either right click and select "Finxact JSON Format" or use:

- Windows + Linux: `ctrl+alt+p`
- Mac: `cmd+alt+p`
- Windows + Linux + Mac: `shift-enter`

> **Helpful:** To make it a little easier when editing it really helps to first default format the file so when adding new values the cursor is a little more predictable in its positioning for new lines.

### Commands

Finxat commands can be used through the Command Palette (`F1`). Type `Fin` and you will see the following selectable options

- Finxact JSON Format - format current file
- Finxact shcema validation - (in-dev)
- New File (Finxact) - Create a new file from template

### JSON Validation
- To be included

## File Templates

To help jump start writing a Finxact JSON schema file you can create a new file from templates stored in the Finxact JSON Formatter's `/templates` folder.

### Included Templates
The extension currently has two templates: `BLANK.json` and `BOILERPLAT.json`. Using predefined variables, general values can be added to newly created file. See [Template variables](#template-variables).


#### BOILERPLATE.json
```
    "$schema": "${SCHEMA_URL}",
         "id": "${FILE_URL}",
      "title": "${TITLE}",
"description": "${DESCRIPTION}",
 "x-createDt": "${DATE}",
 "x-createBy": "${AUTHOR}",
 "x-updateDt": "",
 "x-updateBy": ""
```

#### BLANK.json
This file can also be used as a base for create a new template.
```
    "$schema": "${SCHEMA_URL}",
         "id": "",
      "title": "",
"description": "",
 "x-createDt": "",
 "x-createBy": "",
 "x-updateDt": "",
 "x-updateBy": ""
```

### New File From Template
To create a new file using a template, right click on the Explorer and select **"New File (Finxact)"**. The command pallete will then display a list of templates to choose from. Select the template then enter the file name. **Please note the `.json` does not need to be included.**

![context menu](https://drive.google.com/uc?export=view&id=1fYKiZXcOc2-GmSAI5fSDLUZYG3zrDLaS)

### Adding Templates
You can create your own template files and copy it in the `/templates` to use with the extention. Any type of text file can be used as a template but it's recommened to use the file extention for the type of template file you are wanted to create. 

#### File naming
Template file name should use either an underscore or dash separate parts of the name or CamelCase. This help insure the file change be listed as a template.

#### Template variables
The following are predefined template variables currently supported:

- `${AUTHOR}` - System username (Windows 10 returns first name of owners account)
- `${DATE}` - Current system date in ISO Date Format
- `${FILE}` - Name of created file

- `${TITLE}` - `title` value defaults to `"${FILE} Object"`

The following variables can be set in your Workspace Settings. 


- `${SCHEMA_URL}` - `$schema` URL value defaults to `"http://json-schema.org/draft-04/schema#"` if not set
- `${FILE_URL}` - `id` URL value defaults to `http://finxact.com/...` with name of created file if not set
- `${DESCRIPTION}` - `description` value defaults to `"Description for object"` if not set


![settings](https://drive.google.com/uc?export=view&id=1NnBU0CwN8q4RPVlW6MM2MT45HmzmyX5K)


To learn how to edit your setting see visit [User and Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings) on the Visual Studio Code website.

## Snippets
The follwoing are a list of snippets for assistance with Finxact JSON file writing.

- Snippet list to be included

## Special formatting
The following array valuesbegin on a newline.

- allOf
- choices
- x-choices
- foreignKeys
- serialize
- indexes
- contextValues
- computeds
- oneOf


## Rules
Key:Value combinations

\* **Common key**

\+ **Required**

\- **Not required**


Type:
- Integer
  - minimum/maximum: int -
  - minLength/maxLength:int -
  - format: string -
    - rate/tguid
      - default:int - *
      - decimal:int - *
- array
  - Item:{} +
  - minItems: int +
- string
  - minLength/maxLength:int -
  - format: string -
    - date, time, date-time, tguid, dur, freq, text, text-area
- string Array
  - [string,integer,number,boolean,array,object]
  - maxLegth:int -
- number
  - minimum/maximum:int -
  - minLength/maxLength:int -
  - format: string +
  - rate/currency
  - decimal:int - *
- object
  - $ref: string + * (file name)
  - property:{} -
  - allOf: [] -
- boolean
  - default:int - *
- required: [] *
- indexKey: [string] or {} *


## Versions

### 1.0
- New file templates
- New Finxact json schema `key:value` snippets ex. finObj (Object with title and description key:values)
- Indentation now starts at column 20 (better closing bracket alignment)
- Closing bracket alignment equally reduced by tab
- Include Finxact json schema key name snippets

### Fixes
- Formatting of empty objects will cause the closing bracket to be removed 