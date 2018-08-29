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
    - [Menu and KeyBindings](#Menu-and-KeyBindings)
    - [Format Commands](#Format-Commands)
    - [JSON Validation (in-dev)](#JSON-Validation)
        - [Schema (in-dev)](#)
- [File Templates](#File-Templates)
    - [Included Templates](#Included-Templates)
        - [Boilerplate](#BOILERPLATE.json)
        - [Blank](#BLANK.json)
    - [New File From Template](#New-File-From-Template)
    - [Adding Templates](#Adding-Templates)
    - [File naming](#File-naming)
    - [Template variables](#Template-variables)
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

### Menu and KeyBindings
To format a JSON file you can either right click and select "Finxact JSON Format" or use:

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

To help just start writing of a Finxact JSON schema file you can create a new file using templates located in the Finxact JSON Formatter's `/templates` folder.

### Included Templates
The extension currently has two templates: `BLANK.json` and `BOILERPLAT.json`. Using predefined variables, general values are added the newly created file. See [Template variables](#Template-variables).


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
To create a new file using a template, right click on the Explorer and select **"New File (Finxact)"**.

![context menu](https://drive.google.com/uc?export=view&id=13O0mmVNQsXlsFxayNSKoYAItrHmN_JwB)

### Adding Templates
You can create your own template files and copy it in the `/templates/` to use with the extention. Any type of text file can be used as a template but it's recommened to use the file extention for the type of template file you are wanted to create. 

#### File naming
Template file name should use either an underscore or dash separate parts of the name or CamelCase. This help insure the file change be listed as a template.

#### Template variables
The following are predefined template variables currently supported:

- `${AUTHOR}` - System username (Windows 10 returns first name of owners account) or Workspace Setting value if not set
- `${DATE}` - Current system date in ISO Date Format
- `${FILE}` - Name of created file
- `${FILE_URL}` - `id` URL value with name of created file
- `${TITLE}` - `title` value defaults to `"${FILE} Object"` if not set

The following variables can be set in your Workspace Settings. To learn how to edit your setting see visit [User and Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings) on the Visual Studio Code website.

- `${SCHEMA_URL}` - `$schema` URL value defaults to `"http://json-schema.org/draft-04/schema#"` if not set
- `${ID_URL}` - `id` URL value defaults to `"http://finxact.com/.../{FILE}"` if not set
- `${DESCRIPTION}` - `description` value defaults to `"Description for object"` if not set

![settings](https://drive.google.com/uc?export=view&id=1NnBU0CwN8q4RPVlW6MM2MT45HmzmyX5K)

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