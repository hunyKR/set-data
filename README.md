# set-data

set-data란 데이터 저장방식입니다.
set-data는 다음과 같이 키-값 쌍으로 이루어져 있습니다.

```
KEY=VALUE
```

> `{ KEY: 'VALUE' }`

set-data에서는 주석을 사용할 때 #을 사용합니다.

```
# 이것은 주석입니다.
KEY=VALUE
```

> `{ KEY: 'VALUE' }`

set-data에서는 값에 띄어쓰기를 사용할 때 다음과 같이 $S를 사용합니다.

```
KEY=띄어쓰기$S입니다
```

> `{ KEY: '띄어쓰기 입니다' }`

set-data에서는 값에 =을 사용할 때 다음과 같이 $E를 사용합니다.

```
KEY=1+1$E2
```

> `{ KEY: '1+1=2' }`

set-data에서는 값을 여러개 저장할 때 다음과 같이 쉼표를 사용하지 않습니다. (단, 반드시 줄바꿈을 해주어야 합니다.)

```
KEY1=VALUE1
KEY2=VALUE2
```

> `{ KEY1: 'VALUE1', KEY2: 'VALUE2' }`