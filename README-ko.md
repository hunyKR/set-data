[English](https://github.com/hunyKR/set-data/blob/stable/README.md) | 한국어
# set-data
## 기본 문법

set-data란 데이터 저장방식입니다.
확장자는 .sd를 사용합니다.

### 키-값
set-data는 다음과 같이 키-값 쌍으로 이루어져 있습니다.

```
KEY=VALUE
```

> `{ KEY: 'VALUE' }`

### 주석
set-data에서는 주석을 사용할 때 #을 사용합니다.

```
# 이것은 주석입니다.
KEY=VALUE
```

> `{ KEY: 'VALUE' }`

### 띄어쓰기
set-data에서는 값에 띄어쓰기를 사용할 때 다음과 같이 $S를 사용합니다.

```
KEY=띄어쓰기$S입니다
```

> `{ KEY: '띄어쓰기 입니다' }`

### = 문자
1.2.0 업데이트로 더 이상 값에 = 문자를 쓸 때 $E를 사용하지 않아도 됩니다.

### 값 여러개
set-data에서는 값을 여러개 저장할 때 다음과 같이 쉼표를 사용하지 않습니다. (단, 반드시 줄바꿈을 해주어야 합니다.)

```
KEY1=VALUE1
KEY2=VALUE2
```

> `{ KEY1: 'VALUE1', KEY2: 'VALUE2' }`

### 배열
set-data에서는 배열을 사용할 때 다음과 같이 키에 &를 붙이며, 값에 쉼표로 요소를 구분합니다.

```
&KEY=VALUE1,VALUE2
```

> `{ KEY: ['VALUE1', 'VALUE2'] }`

### 배열에서 쉼표
배열의 요소에서 쉼표를 사용하고 싶을 때는 다음과 같이 $C를 사용합니다.

```
&KEY=쉼표$C입니다,VALUE2
```

> `{ KEY: ['쉼표,입니다', 'VALUE2'] }`

### boolean
set-data에서는 boolean을 사용할 때 다음과 같이 키에 !를 붙입니다.

```
!KEY=true
```

>`{ KEY: true }`

## 라이브러리 함수
### 다운로드/불러오기
라이브러리를 다운로드하려면 `npm i set-data`를 콘솔에 입력하세요.
라이브러리를 불러오려면 다음과 같이 `require`를 사용하세요.

```js
const setData = require('set-data')
```

### parse(text)
parse는 다음과 같이 set-data 문자열을 객체로 리턴해줍니다.

```js
setData.parse(`
    KEY=VALUE
`)
```

> `{ KEY: 'VALUE' }`

### parseFile(fileName, fileEncoding)
parseFile은 다음과 같이 set-data 파일을 객체로 리턴해줍니다.
```js
setData.parseFile('./setting.sd', 'utf-8')
setData.parseFile('./setting.sd') // 인코딩을 생략할 수 있습니다.
```

### stringfy(object)
stringfy는 다음과 같이 객체를 set-data 문자열로 리턴해줍니다.
```js
setData.stringfy({
    key: 'value'
})
```

> `key=value`

### stringfyFile(fileName, object)
stringfyFile은 다음과 같이 객체로 set-data 파일을 작성합니다.
```js
setData.stringfyFile('./setting.sd', {
    key: 'value'
})
```
이렇게 하면 `./setting.sd`파일에 `key=value`라는 내용이 작성됩니다.

**이미 존재하는 파일의 경로를 `fileName` 매개변수로 전달하면 파일을 덮어쓰게 되므로 주의하세요.**