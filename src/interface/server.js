import axios from 'axios';
import './http';
import { api } from './api';

export const post = (path, param) => {console.log(param); axios.post(api[path], param)};

export const get = (path, param) => axios.get(api[path], { params: param });