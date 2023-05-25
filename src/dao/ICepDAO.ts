import { Cep } from './../models/Cep';
import { IGenericDAO } from './IGenericDAO';

export interface ICepDAO extends IGenericDAO<Cep> {
  truncate(): Promise<boolean>;
}