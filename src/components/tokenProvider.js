import { createContext } from 'react'
import { descript } from './functions/index'
import cookies from 'universal-cookie'

const cookie = new cookies();

const data = cookie.get('auth');
export const defaultValue = descript(data)

export const Token = createContext(defaultValue);

export default Token.Provider;