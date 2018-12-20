/* tslint:disable */
import {
  TaskList
} from '../index';

declare var Object: any;
export interface ZevereUserInterface {
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: any;
  "password"?: string;
  accessTokens?: any[];
  taskLists?: TaskList[];
}

export class ZevereUser implements ZevereUserInterface {
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "id": any;
  "password": string;
  accessTokens: any[];
  taskLists: TaskList[];
  constructor(data?: ZevereUserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ZevereUser`.
   */
  public static getModelName() {
    return "ZevereUser";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ZevereUser for dynamic purposes.
  **/
  public static factory(data: ZevereUserInterface): ZevereUser{
    return new ZevereUser(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'ZevereUser',
      plural: 'ZevereUsers',
      path: 'ZevereUsers',
      idName: 'id',
      properties: {
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        taskLists: {
          name: 'taskLists',
          type: 'TaskList[]',
          model: 'TaskList',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'zevereUserId'
        },
      }
    }
  }
}
