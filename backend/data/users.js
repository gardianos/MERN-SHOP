import bcrypt from 'bcryptjs'

const users = [
    {
        name:'Admin User',
        email:'admin@cubek.de',
        password: bcrypt.hashSync('123456', 10),
        isAdmin:true
    },

    {
        name:'Gardian Memeti',
        email:'gardian@cubek.de',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name:'Leon Asani',
        email:'leon@cubek.de',
        password: bcrypt.hashSync('123456', 10),
    },

]

export default users