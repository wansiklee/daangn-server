# daangn-server

당근마켓 클론 프로젝트

## Histroy

프로젝트 진행 과정은 트렐로에서 확인하실 수 있습니다. => [Trello](https://trello.com/b/XGdPEru6/%EB%8B%B9%EA%B7%BC%EB%A7%88%EC%BC%93-%ED%81%B4%EB%A1%A0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8)

### 1일차

- 프로젝트 생성 및 Route 구조 잡음

### 2일차

- 기존 Route에 같이 있던 콜백 함수들을 Controllers로 새로 만듬

### 3일차

- MongoDB 세팅, ODM으로 mongoose 사용
- User Model 생성
- 검증 라이브러리 joi를 사용하기로 함
- 각 route들 경로 재설정
- bcrypt로 password 암호화
- 회원가입 파트 - 계정 생성 Postman으로 테스트 완료
- MongoDB GUI인 robomongo 다운로드

### 4일차

- 회원가입 성공 후 클라이언트에 보낼 정보에 필요없는 password 삭제
- 인증된 유저에게 jsonwebtoken 생성

## Issues

- 회원가입에서 닉네임/이메일 중복을 피하기 위해 findOne 함수를 썼는데 findOne이 undefined로 나타남
  > mongoose statics 함수의 this를 사용할 때는 화살표 함수가 아닌 일반 함수 선언을 해야한다.
