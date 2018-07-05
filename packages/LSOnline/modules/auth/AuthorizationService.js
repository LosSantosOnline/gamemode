"use strict";

const logger = require('../auth/AuthorizationLogger');
const forumDb = require('../database/ForumDatabase');
const sprintf = require("sprintf-js").sprintf;
const bcrypt = require("bcryptjs");

const IPB_PASS_HASH_COLUMN = "members_pass_hash";
const IPB_MEMBERS_TABLE = "core_members";
const HASH_SELECT_QUERY_PATTERN = "SELECT %s FROM %s WHERE name LIKE '%s' LIMIT 1";

/**
 * Authorization for user registered in IPB System.
 * @param login
 * @param password
 * @return boolean
 */
async function ipbAuth(login, password) {
    return await forumDb.connection.query(sprintf(HASH_SELECT_QUERY_PATTERN, IPB_PASS_HASH_COLUMN, IPB_MEMBERS_TABLE, login)).spread(
        (results, metadata) => {
            const passHash = results[0].members_pass_hash;
            if (bcrypt.compareSync(password, passHash)) {
                logger.info(`User with login ${login} has been authorized.`);
                return true;
            }
            logger.info(`User with login ${login} authorization failed.`);
            return false;
        }
    );
}

exports.ipbAuth = ipbAuth;