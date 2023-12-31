const Migrations = artifacts.require("Migrations");

module.exports = function(developer) {
    developer.deploy(Migrations);
};