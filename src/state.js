const user = {
    name: 'Петр',
    lastname: 'Петров',
    email: '667@mail.ru',
    id: '1',
    about:'Мой рассказ о своих увлечениях.',
    avatar: 'https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg'
};

const users = {
0: {name:'Нина', lastname:'Петрова', id: 4},
1: {name:'Маша', lastname:'Сидорова', id: 6},
2: {name:'Гена', lastname:'Букин', id: 8},
3: {name:'Вова', lastname:'Платов', id: 12},
4: {name:'Дима', lastname:'Якин', id: 16},

};



export function getUser(userId) {
    for (let i = 0; i < Object.keys(users).length; i++){
        if (users[i].id == userId) return users[i];
    }
    return user;
}
export function getUsers() {
    return users;
}