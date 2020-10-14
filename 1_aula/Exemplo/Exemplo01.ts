interface User {
    name: string;
    email: string;
    address: {
        city: string;
        state: Number;
    }
}


function mostraDadosUsuario(user: User) {
    return `${user.name} ${user.email} - ${user.address.city} - ${user.address.state}`;
}

const usuario = {
    name: 'Paulo',
    email: 'phbm@hotmail.com',
    address: {
        city: 'SP',
        state: 1
    }
}

console.log(mostraDadosUsuario(usuario))