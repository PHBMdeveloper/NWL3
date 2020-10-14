from typing import NamedTuple, Sequence

class Address(NamedTuple):
    city: str
    state: int

class User(NamedTuple):
    name: str
    email: str
    address: Sequence[Address]


def mostraDadosUsuario(user: User) -> str:
    return f"{user['name']} \
{user['email']} - \
{user['address']['city']} - \
{user['address']['state']}"

usuario = {
    'name': 'Paulo',
    'email': 'phbm@hotmail.com',
    'address': {
        'city': 'SP',
        'state': 'UF'
    }
}

mostraDadosUsuario(usuario)