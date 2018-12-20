'use strict';

module.exports = function(User) {
  User.disableRemoteMethodByName('upsert');                               // disables PATCH /MyUsers
  User.disableRemoteMethodByName('find');                                 // disables GET /MyUsers
  User.disableRemoteMethodByName('replaceOrCreate');                      // disables PUT /MyUsers
  // User.disableRemoteMethodByName('create');                               // disables POST /MyUsers
  User.disableRemoteMethodByName('prototype.updateAttributes');           // disables PATCH /MyUsers/{id}
  User.disableRemoteMethodByName('findById');                             // disables GET /MyUsers/{id}
  // User.disableRemoteMethodByName('exists');                               // disables HEAD /MyUsers/{id}
  User.disableRemoteMethodByName('replaceById');                          // disables PUT /MyUsers/{id}
  User.disableRemoteMethodByName('deleteById');                           // disables DELETE /MyUsers/{id}
  User.disableRemoteMethodByName('prototype.__get__accessTokens');        // disable GET /MyUsers/{id}/accessTokens
  User.disableRemoteMethodByName('prototype.__create__accessTokens');     // disable POST /MyUsers/{id}/accessTokens
  User.disableRemoteMethodByName('prototype.__delete__accessTokens');     // disable DELETE /MyUsers/{id}/accessTokens
  User.disableRemoteMethodByName('prototype.__findById__accessTokens');   // disable GET /MyUsers/{id}/accessTokens/{fk}
  User.disableRemoteMethodByName('prototype.__updateById__accessTokens'); // disable PUT /MyUsers/{id}/accessTokens/{fk}
  User.disableRemoteMethodByName('prototype.__destroyById__accessTokens');// disable DELETE /MyUsers/{id}/accessTokens/{fk}
  User.disableRemoteMethodByName('prototype.__count__accessTokens');      // disable  GET /MyUsers/{id}/accessTokens/count
  User.disableRemoteMethodByName('prototype.verify');                     // disable POST /MyUsers/{id}/verify
  // User.disableRemoteMethodByName('changePassword');                       // disable POST /MyUsers/change-password
  User.disableRemoteMethodByName('createChangeStream');                   // disable GET and POST /MyUsers/change-stream
  User.disableRemoteMethodByName('confirm');                              // disables GET /MyUsers/confirm
  User.disableRemoteMethodByName('count');                                // disables GET /MyUsers/count
  User.disableRemoteMethodByName('findOne');                              // disables GET /MyUsers/findOne
  User.disableRemoteMethodByName('resetPassword');                        // disables POST /MyUsers/reset
  User.disableRemoteMethodByName('setPassword');                          // disables POST /MyUsers/reset-password
  User.disableRemoteMethodByName('update');                               // disables POST /MyUsers/update
  User.disableRemoteMethodByName('upsertWithWhere');                      // disables POST /MyUsers/upsertWithWhere
  User.disableRemoteMethodByName('upsertWithWhere');                      // disables POST /MyUsers/upsertWithWhere
};
