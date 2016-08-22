/*
 * migrations/2_deploy_contract.js
 */

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.autolink();
  deployer.deploy(MetaCoin);
  // line added
  deployer.deploy(ProofOfExistence2);
};
