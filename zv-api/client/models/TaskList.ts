/* tslint:disable */
import {
  TaskItem
} from '../index';

declare var Object: any;
export interface TaskListInterface {
  "name": string;
  "id"?: any;
  "zevereUserId"?: any;
  taskItems?: TaskItem[];
}

export class TaskList implements TaskListInterface {
  "name": string;
  "id": any;
  "zevereUserId": any;
  taskItems: TaskItem[];
  constructor(data?: TaskListInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TaskList`.
   */
  public static getModelName() {
    return "TaskList";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TaskList for dynamic purposes.
  **/
  public static factory(data: TaskListInterface): TaskList{
    return new TaskList(data);
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
      name: 'TaskList',
      plural: 'TaskLists',
      path: 'TaskLists',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "zevereUserId": {
          name: 'zevereUserId',
          type: 'any'
        },
      },
      relations: {
        taskItems: {
          name: 'taskItems',
          type: 'TaskItem[]',
          model: 'TaskItem',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'taskListId'
        },
      }
    }
  }
}
