import { descript } from './index'
import cookies from 'universal-cookie'

const cookie = new cookies();

export const Token = () => {
    const token = cookie.get('auth')
    const data = descript(token)

    return data;
}