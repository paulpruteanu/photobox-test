module.exports = {
    "development": {
        "dialect": "sqlite",
        "storage": '/tmp/photobox-dev.db.sqlite'
    },
    "test": {
        "dialect": "sqlite",
        "storage": '/tmp/photobox-test.db.sqlite'
    },
    "production": {
        "use_env_variable": process.env.DB_HOST
    }
};