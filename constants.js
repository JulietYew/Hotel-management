const constants = {
    DATABASE_URI: process.env.DATABASE_URI,

    MESSAGES: {
       FETCHED: "Resource fetched successfully",
       UPDATED: "Resource updated successfully",
       CREATED: "Resource created successfully",
       ERROR: "Resource error",
       DELETED: "Resource deleted successfully"
    }
};
module.exports = constants;