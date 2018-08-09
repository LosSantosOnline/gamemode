"use strict";

const bcrypt = require("bcryptjs");
const sprintf = require("sprintf-js").sprintf;
const forumDb = require('../database/forumDatabase');
const logger = require('../auth/authorizationLogger');
const accountMeta = require('../account/accountModuleMeta');

const IPB_PASS_HASH_COLUMN = "members_pass_hash";

/**
 * Authorization for user registered in IPB System.
 * @param login
 * @param password
 * @return boolean
 */
async function ipbAuth (login, password) {
  await forumDb.connection.query(sprintf(
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

function authorize (login, authorizeCondition = function () {
}) {
  if (!authorizeCondition) throw new Error(`User with login ${login} authorization failed.`);

  logger.info(`User with login ${login} has been authorized.`);
}

exports.ipbAuth = ipbAuth;
