"use strict";

const sprintf = require("sprintf-js").sprintf;
const logger = require('../account/AccountLogger');
const forumDb = require('../database/ForumDatabase');
const accountModel = require('../../models/Account');
const accountMeta = require('../account/AccountModuleMeta');

exports.test = (accountName) => {
    console.log(sprintf(
        accountMeta.HASH_SELECT_QUERY_PATTERN,
        "member_id, member_group_id",
        accountMeta.IPB_MEMBERS_TABLE,
        accountName
    ));
};

exports.loadAccountData = async function loadAccountData (player, accountName) {
    await forumDb.connection.query(sprintf(
        accountMeta.HASH_SELECT_QUERY_PATTERN,
        "member_id, member_group_id",
        accountMeta.IPB_MEMBERS_TABLE,
        accountName
    )).spread((results, metadata) => {
            let data = results[0];
            data.name = accountName;

            player.account = hydrateAccount(accountModel.create(), data);
            logger.info("Account data saved into player entity.");
            return player;
        }
    );
};

function hydrateAccount (account, data) {
    account.id = data.member_id;
    account.name = data.name;
    account.groupId = data.member_group_id;
    return account;
}
