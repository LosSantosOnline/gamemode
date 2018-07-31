# Los Santos Online Gamemode

Los Santos Online is a GTA V Roleplay server based on RAGE Multiplayer.
This repository contains source files of server gamemode.

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

:warning: **This gamemode is currently in development state, you shouldn't run it on production server.** :warning:

## Requirements

1.  SQL Server, preferred MariaDB
2.  Node.js installed on machine

## Server setup

1.  Download or clone the repository.
2.  Extract the files to your RAGE-MP server-files folder.
3.  Using a command prompt window execute steps below.
    - Run the command prompt as administrator.
    - Switch into your server directory
    - `npm install`
    - Configure your environment variables in `.env` file
    - Setup database `./node_modules/.bin/sequelize db:create` & `./node_modules/.bin/sequelize db:migrate`
    - Build client files `npm run dev` or `npm run production`
4.  Run the server

## Environment setup

Setup .env file with variables described below to set environment (for example connection to database).

```dotenv
DATABASE_HOST=localhost
DATABASE_NAME=db
DATABASE_USER=user
DATABASE_PASSWORD=pass
```

## Building client files

- `npm run hot`: runs `webpack-dev-server` with hot reload. Open `localhost:8080/dist/[view_name]/` to access

- `npm run dev`: builds files for once with development mode

- `npm run production`: will clear `dist/` as well `src/` :exclamation: directories & build files with minification

## Contributing

Before contibuting, please make sure your code is formatted along with [JavaScript Standard Style](http://standardjs.com) or use eslint config included in the package.
