### Hexlet tests and linter status:
[![Actions Status](https://github.com/NastyaSia04/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/NastyaSia04/frontend-project-46/actions)

[![lint and test](https://github.com/NastyaSia04/frontend-project-46/actions/workflows/lint-test.yml/badge.svg)](https://github.com/NastyaSia04/frontend-project-46/actions/workflows/lint-test.yml)

[![Maintainability](https://api.codeclimate.com/v1/badges/d4219790822ebd435721/maintainability)](https://codeclimate.com/github/NastyaSia04/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/d4219790822ebd435721/test_coverage)](https://codeclimate.com/github/NastyaSia04/frontend-project-46/test_coverage)

**Description:**

This is the second eductional project at Hexlet.\
It's called the Difference Calculator.\
This program can compare two files in .json (or .yml/.yaml) format. And also output the comparison result in different formats such as 'stylish', 'plain' and 'json'.

**Requirements:**

version Node.js - v22.12.0;\
version NPM - 11.0.0.

**Instrictions:**

* clone the repository:\
```git clone git@github.com:NastyaSia04/frontend-project-46.git```
* go to the root directory of the project:\
```cd frontend-project-46```
* install the package:\
```npm link```
* start comparing files\
To call the utility, type its name and arguments on the command line.\
The arguments are: the output format ('stylish', 'plain' and 'json') and the paths to the files being compared.\
The default format is 'stylish', meaning if the --format argument is omitted, the program will display the result in the 'stylish' format.\
For example: ```gendiff --format plain __fixtures__/file1.json __fixtures__/file2.json```


**Creating differences between two flat .json files:**
<a href="https://asciinema.org/a/jqLzp12psgIhH0gXDKiLqBXhi" target="_blank"><img src="https://asciinema.org/a/jqLzp12psgIhH0gXDKiLqBXhi.svg" /></a>

**Creating differences between two flat .yml files:**
<a href="https://asciinema.org/a/LeKK95sGNkBvQZsHFhUWjxhHE" target="_blank"><img src="https://asciinema.org/a/LeKK95sGNkBvQZsHFhUWjxhHE.svg" /></a>

**Creating differences between two nested .json files (the default parameter 'stylish'):**
<a href="https://asciinema.org/a/OwFsEVpDS7trzKjKE8vKc72Wt" target="_blank"><img src="https://asciinema.org/a/OwFsEVpDS7trzKjKE8vKc72Wt.svg" /></a>

**Creating differences between two nested .json files (with parameter '--format plain'):**
<a href="https://asciinema.org/a/fgzXVk5S6pCUf0rRPsIAXG9zZ" target="_blank"><img src="https://asciinema.org/a/fgzXVk5S6pCUf0rRPsIAXG9zZ.svg" /></a>

**Creating differences between two nested .json files (with parameter '--format json'):**
<a href="https://asciinema.org/a/M7jaZUYwO4t1asT2rpha7vC9I" target="_blank"><img src="https://asciinema.org/a/M7jaZUYwO4t1asT2rpha7vC9I.svg" /></a>