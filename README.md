# Chat App

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c08e6a879d464024b28be47c60b17a3a)](https://www.codacy.com/app/csantiago132/chat-app?utm_source=github.com&utm_medium=referral&utm_content=csantiago132/chat-app&utm_campaign=Badge_Grade)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

---

<p align="center"><img src="https://raw.githubusercontent.com/csantiago132/chat-app/develop/preview.png" alt="slack-chat preview"/></p>

A CRUD (Create, Read, Update, Delete) chat application built with Typescript,
React, Firebase and Immutable.JS.

<a href="https://csantiago-slack-chat-docs.netlify.com/" target="_blank">Read the documentation here</a>

## Prerequisites

> - Yarn >= 1.5.x
> - Node >=8.x

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. See deployment for notes on
how to deploy the project on a live system.

1. Clone this repo using
   `git clone https://github.com/csantiago132/chat-app.git`
2. Move to the appropriate directory: `cd chat-app`
3. Register a database with
   [Firebase](https://firebase.google.com/docs/database/)
4. Write a `.env` file in the root of the project and put your configuration

```bash
  REACT_APP_FIREBASE_API_KEY=your_api_key

  REACT_APP_FIREBASE_DOMAIN=your_auth_domain

  REACT_APP_FIREBASE_DB_URL=your_firebase_url

  REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_project_id

  REACT_APP_FIREBASE_PROJECT_ID=your_storage_bucket

  REACT_APP_FIREBASE_STORAGE_BUCKET=your_messaging_id
```

(This is used on the main state of the `App/index` container)

5. Run `yarn install` or `npm install` in order to install dependencies
6. Run `yarn start` or `npm start`
7. The project will be available on `http://localhost:4000`

## Features

- [x] Typescript
- [x] Google authentication
- [x] Public rooms
- [x] Realtime sending and receiving of messages
- [x] Able to delete messages (as long as the user was the one that sent it)
- [x] Able to delete chat rooms (as long as the user was the one that created it
      it)
- [ ] Private rooms
- [ ] Update previously created messages
- [ ] Rich media attachments (drag and drop)
- [ ] Typing and presence indicators
- [ ] Read message cursors

### Sidenote:

> UI and UX improvements are in the works, the main priority on my end has been
> creating the logic, incorporate Typescript, setting up state with Immutable.JS
> and making sure that the CRUD concepts are covered before moving on.

## TODO List

In the near future, I want to add:

- [ ] Redux
- [ ] Reselect
- [ ] React Native or Electron version
- [ ] Eject from create-react-app v2.1 and customize webpack configuration

## Built With

- [Typescript](https://github.com/Microsoft/TypeScript) - A superset of
  JavaScript
- [ReactJS](https://reactjs.org/) - A JavaScript library for building user
  interfaces
- [Firebase](https://firebase.google.com/) - Firebase is a Backend as a Service
  (BaaS) provided by Google.
- [Immutable](http://facebook.github.io/immutable-js/) - Immutable collections
  for JavaScript

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available,
see the
[tags on this repository](https://github.com/csantiago132/chat-app/releases).

## Authors

- **Carlos Santiago** - _Initial work_ -
  [csantiago132](https://github.com/csantiago132)

## License

This project is licensed under the MIT License - see the
[LICENSE.md](https://github.com/csantiago132/chat-app/blob/develop/LICENSE.md)
file for details

## Acknowledgments

- **Kenneth Liu** - _for motivation_ - [github](https://github.com/ksliu25)
- **Andy Babbitt** - _for motivation_ -
  [linkedin](https://www.linkedin.com/in/andy-babbitt-ba142319/)
- **Cory Trimm** - _for mentoring_ - [github](https://github.com/ctrimm)
