/* tslint:disable */
import { Injectable } from '@angular/core';
import { TaskItem } from '../../models/TaskItem';
import { TaskList } from '../../models/TaskList';
import { ZevereUser } from '../../models/ZevereUser';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    TaskItem: TaskItem,
    TaskList: TaskList,
    ZevereUser: ZevereUser,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
