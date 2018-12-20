/* tslint:disable */

declare var Object: any;
export interface TaskItemInterface {
  "name": string;
  "body": string;
  "id"?: any;
  "taskListId"?: any;
}

export class TaskItem implements TaskItemInterface {
  "name": string;
  "body": string;
  "id": any;
  "taskListId": any;
  constructor(data?: TaskItemInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TaskItem`.
   */
  public static getModelName() {
    return "TaskItem";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TaskItem for dynamic purposes.
  **/
  public static factory(data: TaskItemInterface): TaskItem{
    return new TaskItem(data);
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
      name: 'TaskItem',
      plural: 'TaskItems',
      path: 'TaskItems',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "body": {
          name: 'body',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "taskListId": {
          name: 'taskListId',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
