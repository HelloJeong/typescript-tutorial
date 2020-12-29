# Typescript Tutorial

## Nomadcoders - Typescript Tutorial

<br>

- `yarn global add typescript`
- 컴파일 : wsl2의 경우는 `yarn add typescript --dev` -> `yarn tsc`
- `yarn add tsc-watch --dev`
  - node로 치면 nodemon

## Note

- Node.js는 TS를 모르기 때문에 JS로 컴파일 해야 함
- 파라미터에 ?를 붙이면 해당 파라미터 값은 옵션이 됨(name, age, gender?)
  - gender는 안 넣어도 됨(안 넣을 시 undefined)
- `types` : 파라미터, 함수의 반환값의 타입을 지정
- `interface` : typescript에서만 사용되는 문법, 파라미터로 객체를 넘길 때 유용
