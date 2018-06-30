# Los Santos Online Gamemode
Los Santos Online is a GTA V Roleplay server based on RAGE Multiplayer.
This repository contains source files of server gamemode.

**This gamemode is currently in development state, you shouldn't run it on production server.**

## Requirements
1. SQL Server, preferred MariaDB
2. Node.js installed on machine

## Server setup
First of all, you should download all of necessary dependencies. Run command described below to download them.

```bash
# With npm
npm install

# With Yarn
yarn install
```

## Environment setup
Setup .env file with variables described below to set environment (for example connection to database).

```dotenv
DATABASE_HOST=localhost
DATABASE_NAME=db
DATABASE_USER=user
DATABASE_PASSWORD=pass
```