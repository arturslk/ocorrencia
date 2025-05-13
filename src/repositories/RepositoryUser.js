import pool from '../database/connection.js';
import bcrypt from 'bcrypt'


async function Login(email, senha) {
    let sql = "SELECT * FROM Usuario WHEWRE EMAIL = email";
    const [User] = await pool.query(sql);
    if(User.length == 0){
        bcrypt.compare(await User.senha, senha)
             return User
    }else
        return []

}



export default { Login };