import { Action as NgRxActions } from "@ngrx/store"
export interface Action extends NgRxActions{
payload?:any;
 
}