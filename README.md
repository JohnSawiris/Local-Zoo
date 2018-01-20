# Local Zoo

This application helps user to track animals their likes, dislikes, caretakers. Also it allows the user to add new animals to the animals list and filter the animals based on their age.

### User Story

#### User can view a list of all logged animals
* Output: A list of displayed on the screen

#### User enters new admitted animal
* Input: species, name, age, diet, location, number of caretakers, sex, likes, and dislikes.
* Output: A new animal added to the list of animals

#### User will be able to filter the animals based of the age
* Input: Select animal's age from a dropdown
* Output: A list of animals the match the criteria

#### User is able to edit animals information
* Input: Click Edit Animal Info button
* Output: A form with the click animal info allowing the user to edit the info

## Setup
### Instructions:
In order for this project to work. First make sure you have **NodeJS** installed on your machine.

To install NodeJS visit [this link](https://nodejs.org/en/) and follow the installation step.

Secondly, after **NodeJS** is installed you will have to install Angular cli golbal on your machine

#### In Terminal
```
$ npm install -g @angular/cli
```
Then to make sure it's installed globally run this command

```
$ npm list -g depth=0
```
This will show you a list of all the dependencies which are installed globally at the root level in node, after you run this command you should see something similar to this
```
+-- @angular/cli@1.6.5
```
Then run this
```
$ cd Desktop
$ git clone https://github.com/JohnSawiris/Local-Zoo.git
$ cd Local-Zoo
$ npm install
$ ng serve --open
```
Now you should see a browser window open and the application is running on it.

### Bugs
_There's no known bugs_

### Improvements
* Filter animals based on their diet.
* Add a feature to differentiate between animals species.

### Technologies Used
* HTML
* Sass
* TypeScript
* Angular 2
* bootstrap

### License
Copyright (c) 2018 **John Sawiris** All Rights Reserved.

_This software is licensed under the MIT license._
