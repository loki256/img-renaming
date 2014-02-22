# img-renaming

This simple utility to rename image files. As a result we have files with names in numerical order and json file with mapping between new and old names


## Installation

Install with npm:

```
npm install --save img-renaming
```

## Usage

```
node index.js --help
node index.js -s src -d dest
```


## Result

```
$ ls src
name1.jpg name2.jpg
```

```
$ ls dest
0.jpg 1.jpg output.json
```

```
$ cat dest/output.json
```
```json
[
    {"description":"name1","url":"0.jpg"},
    {"description":"name2","url":"1.jpg"}
]
```

## License

(The MIT License)

Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
