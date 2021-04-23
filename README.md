# create-my-app
> MongoDB, Express, Node.js, React.js 를 이용한 boilerplate 입니다.

[![npm](https://img.shields.io/npm/v/npm)](https://github.com/gparkkii/create-my-app)
[![license](https://img.shields.io/github/license/gparkkii/create-my-app)](https://github.com/gparkkii/create-my-app)
[![LastCommit](https://img.shields.io/github/last-commit/gparkkii/create-my-app)](https://github.com/gparkkii/create-my-app)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fgparkkii%2Fcreate-my-app&count_bg=%23FF8500&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://github.com/gparkkii/create-my-app)

<br/>

react-webpack-template에 더 많은 기능들과 스타일을 develop한 M.E.R.N stack boilerplate입니다.

<br/>

---

<br/>

## 🚀 Quick Start

- 애플리케이션 설치

```bash
$> git clone https://github.com/gparkkii/create-my-app.git
$> npm i
$> cd client
$> npm i
```

- 서버 연결
  1. `server/config` 폴더안에 `dev.js` 파일 생성
  2. 밑의 코드를 복사한 후 `{password}`, `{dbname}` 에 개설한 몽고디비 비밀번호와 db명칭을 입력합니다. 
  3. `client`의 `webpack.config.js`에도 서버 주소를 연결해줍니다.

```
$> config/dev.js

module.exports = {
  mongoURI : "mongodb+srv://user:{password}@boilerplate.7cib8.mongodb.net/{dbname}?retryWrites=true&w=majority"
  // ------> {password}, {dbname} 입력
}
```

```
$> client/webpack.config.js

devServer: {
  ...
  proxy: {
    '/api': {
      target: '서버 주소 연결',   // -------> 본인의 서버 주소를 연결해주세요
    },
  },
  ...
},
```


- 애플리케이션 실행

```bash
$> npm start
```

<br/>

---

## 📍 Todo ... 

---
