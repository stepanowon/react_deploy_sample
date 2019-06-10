# vue_deploy_sample
* node + express의 특정 디렉토리에  react app을 배포하는 예제입니다.
* subdir에 react 앱을 배포할 때의 설정을 살펴봅니다.

### 예제 구조
* backend 
  - 백엔드 애플리케이션 node + express 
  - /react 경로에 react작성하고 빌드한 앱을 배포함.
* routertest 
  - react-router을 이용한 간단한 TodoList App 예제
  
### 핵심 설정 
* package.json의 내용 검토(가장 마지막의 homepage 속성 검토: 최종적인 배포 경로를 지정
~~~
  "homepage": "http://localhost/react"
~~~

* package.json의 scripts를 검토(build -> delete target -> copy output)
~~~
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "cp:build": "rimraf ../backend/react && move-cli build ../backend/react",
    "deploy": "npm run build && npm run cp:build"
  },
~~~

* App.js의 Router 컴포넌트의 basename 속성 검토
~~~
import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
export default class App extends Component {
  render() {

    return (
      <div className="card-body">
        <h3>My Todo</h3>
        <Router basename="/react">
          <Switch>
            <Route path="/" component={TodoList} exact={true} />
            <Route path="/todos/add" component={TodoForm} />
          </Switch>
        </Router>
      </div>
    )
  }
}
~~~
  
## 실행 방법
1. backend 구동
- npm install -g nodemon yarn
- cd backend
- yarn
- nodemon src/server.js

2. frontend 구동여부 테스트
- cd TodoList05
- yarn
- yarn start

3. frontend app을 backend에 배포
- cd TodoList05
- yarn deploy
- http://localhost로 접속하여 backend 쪽으로 접속(실제로는 rest api 기능은 없음)
- http://localhost/react 로 접속하여 기능 작동 여부 
