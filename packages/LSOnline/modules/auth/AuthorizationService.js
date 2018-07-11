"use strict";

const logger = require('../auth/AuthorizationLogger');
const forumDb = require('../database/ForumDatabase');
const sprintf = require("sprintf-js").sprintf;
const accountMeta = require('../account/AccountModuleMeta');
const bcrypt = require("bcryptjs");

const IPB_PASS_HASH_COLUMN = "members_pass_hash";

/**
 * Authorization for user registered in IPB System.
 * @param login
 * @param password
 * @return boolean
 */
async function ipbAuth(login, password) {
    return await forumDb.connection.query(sprintf(
        accountMeta.HASH_SELECT_QUERY_PATTERN,
        IPB_PASS_HASH_COLUMN,
        accountMeta.IPB_MEMBERS_TABLE,
        login
    )).spread((results, metadata) => {
            const passHash = results[0].members_pass_hash;
            return authorize(login, bcrypt.compareSync(password, passHash));
        }
    );
}

function authorize(login, authorizeCondition = function () {
}) {
    if (!authorizeCondition) throw `User with login ${login} authorization failed.`;

    logger.info(`User with login ${login} has been authorized.`);
}

exports.ipbAuth = ipbAuth;