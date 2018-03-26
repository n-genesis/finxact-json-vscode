# finxact-json-formatter README

This is the README for the extension "finxact-json-formatter".

### Features
Formats JSON files using Finxact JSON schema rules.

## Screenshot
![](https://drive.google.com/uc?export=view&id=19r86_PTE2WxSEK1qLeotJYutsj207tbd)

## Installation

> **Zip Download:** If you don't want to use git you can download this extension as a zip file from [Google Drive](https://drive.google.com/drive/folders/1uR_OLwiFLV3LTDQOQz-qIwsMHLhNEpWy?usp=sharing)

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
To format a JSON file simply Right click and select “Finxact JSON Schema” or press (Ctrl+Alt+P).

> **Recommended:** To make it a little easier when editing it really helps to first default format the file so when adding new values the cursor is a little more predictable in its positioning for new lines.

## Known Issues

Depending on the the length of the keyname in a level blocks the current colon alignment maybe calculated (added spaces) to less then the previous level block. 

Empty objects will remove following brackets and child properties and only return the keyname. Ex:
```
"properties": { 
	"channel": {
	...... 
	}
}
```
Will become:
```
"properties": 
	"channel":
```

## Release Notes

### (2.5.1)

Special formatting for the following arrays:

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

### General Tags

Key value pairs found in Block Level 1.

|Keyname         |Prefix            |Snippet                 						|
|---------------|-------------------|-----------------------------------------------|
|id				|`id`         		|`"id": value`  								|
|title			|`title`         	|`"title": value`            					|
|type          	|`type`         	|`"type": value`                    			|
|type array     |`type array`       |`"type": [`  &nbsp;&nbsp;&nbsp;`value\]`|
|description	|`description`      |`"description": value`                   		|
|array		 	|`array`         	|`"id": value`                    				|
|x-createDt		|`'createDt`        |`"x-createDt": value`                    		|
|x-createBy		|`createBy`         |`"x-createBy": value`                   		|
|x-updateDt		|`updateDt`         |`"x-updateDt": value`                    		|
|x-updateBy		|`updateBy`         |`"x-updateBy": value`                     		|

### Block Tags

Key values pairs found in Block Level 2+. Many general tags are child key:values for the tags.

|Keyname         |Prefix            |Snippet                 										|
|---------------|-------------------|---------------------------------------------------------------|
|properties		|`properties`		|`"properties": value`  										|
|choices	 	|`choices`         	|`"choices": value`            									|
|minimum     	|`minimum`         	|`"minimum": value`                    							|
|maximum     	|`maximum`       	|`"maximum": value`												|
|maxLength		|`maxLength`      	|`"maxLength": value`                   						|
|_Id		 	|`_Id`         		|`"_Id": {`<br>&nbsp;&nbsp;&nbsp;`key: value`<br>`}`			|
|logRef			|`logRef`			|`"logRef": {`<br>&nbsp;&nbsp;&nbsp;`key: value`<br>`}`			|
|logRef blank	|`logRef blank`		|`"logRef": {`<br>&nbsp;&nbsp;&nbsp;`value`<br>`}`				|
|orderType		|`orderType`		|`"orderType": {`<br>&nbsp;&nbsp;&nbsp;`key: value`<br>`}`		|
|orderSource	|`orderSource`		|`"orderSource": {`<br>&nbsp;&nbsp;&nbsp;`key: value`<br>`}`	|
|originSource	|`originSource`		|`"originSource": {`<br>&nbsp;&nbsp;&nbsp;`key: value`<br>`}`	|

## Fixed issue #
### 2.5.1
- Short keyname alignment now is push passed open bracket

### 2.5.0
- Better closing bracket alignment
- Resrtucture of extension classes *
- Special keyname formatting for array and objects

### 2.0.0
- JSON no longer breaks with special array syntax.
- Now shows error notice for invalid syntax.
- No longer need to first use Default Formatter.

### 1.0.0
- No longer have to first select editors JSON text.
- No longer adding new line breaks as end of file.
- Basic key name value snippets.

### 0.1.0
- Nothing but spaghetti.