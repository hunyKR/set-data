English | [한국어](https://github.com/hunyKR/set-data/blob/stable/README-ko.md)
# set-data
## Basic Syntax

set-data is a data storage method.
It uses the extension .sd.

### Key-Value
set-data consists of key-value pairs as follows.

```
KEY=VALUE
```

> `{ KEY: 'VALUE' }`

### Comments
In set-data, use the # symbol for comments.

```
# This is a comment.
KEY=VALUE
```

> `{ KEY: 'VALUE' }`

### Spacing
In set-data, when using spacing in values, use $S as follows.

```
KEY=spacing$Sexample
```

> `{ KEY: 'spacing example' }`

### = Character
Starting from version 1.2.0, you no longer need to use $E when using the = character in values.

### Multiple Values
In set-data, when storing multiple values, do not use commas. (However, make sure to use line breaks.)

```
KEY1=VALUE1
KEY2=VALUE2
```

> `{ KEY1: 'VALUE1', KEY2: 'VALUE2' }`

### Arrays
In set-data, when using arrays, append & to the key and separate elements with commas in the value.

```
&KEY=VALUE1,VALUE2
```

> `{ KEY: ['VALUE1', 'VALUE2'] }`

### Commas in Arrays
When you want to use commas in elements of an array, use $C as follows.

```
&KEY=comma$Cexample,VALUE2
```

> `{ KEY: ['comma,example', 'VALUE2'] }`

### Boolean
In set-data, when using boolean values, append ! to the key.

```
!KEY=true
```

> `{ KEY: true }`

## Library Functions
### Download/Import
To download the library, type `npm i set-data` in the console.
To import the library, use `require` as follows.

```js
const setData = require('set-data')
```

### parse(text)
parse returns the set-data string as an object.

```js
setData.parse(`
    KEY=VALUE
`)
```

> `{ KEY: 'VALUE' }`

### parseFile(fileName, fileEncoding)
parseFile returns the set-data file as an object.
```js
setData.parseFile('./setting.sd', 'utf-8')
setData.parseFile('./setting.sd') // Encoding can be omitted.
```

### stringfy(object)
stringfy returns an object as a set-data string as follows.
```js
setData.stringfy({
    key: 'value'
})
```

> `key=value`

### stringfyFile(fileName, object)
stringfyFile writes a set-data file with an object as follows.
```js
setData.stringfyFile('./setting.sd', {
    key: 'value'
})
```
This will write `key=value` content to the `./setting.sd` file.

**Be careful when passing the path of an existing file as the `fileName` parameter, as it will overwrite the file.**