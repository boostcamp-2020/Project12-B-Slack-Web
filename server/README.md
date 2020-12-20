# How to Start
## env
> /ormconfig.env
```
TYPEORM_SEEDING_FACTORIES=src/factories/**/*{.ts,.js}
TYPEORM_SEEDING_SEEDS=src/seeds/**/*{.ts,.js}
TYPEORM_ENTITIES = src/model/**/*.ts
TYPEORM_CONNECTION = 
TYPEORM_HOST = 
TYPEORM_USERNAME = 
TYPEORM_PASSWORD = 
TYPEORM_DATABASE = 
TYPEORM_PORT = 
TYPEORM_SYNCHRONIZE = true
TYPEORM_LOGGING = false
```
> /production.env
```
# PORT
PORT =
# DB
DB_HOST =
DB_PORT =
DB_USERNAME =
DB_PASSWORD =
DB_DATABASE =
# REDIS
REDIS_PORT =
REDIS_HOST =
# PASSPORT
CLIENT_ID =
CLIENT_SECRET =
CALLBACK_URL =
# JWT
JWT_SECRET =
# SESSION
SESSION_SECRET =
# CLIENT
CLIENT_ADDRESS =
```
### DB
```
docker-compose --env-file development.env up -d
```
### seed
```
npm run seed
```
### start
> install
```
npm install
```
> start
```
npm run start
```
