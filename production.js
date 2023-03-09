"use strict";
import {
    BaseException,
    InvalidAccessConstructorException,
    EmptyValueException,
    ParameterValidationException,
    InvalidValueException,
    AbstractClassException
} from './BaseException.js';
class Person {
    name;
    lastname1;
    lastname2;
    born;
    picture;

    constructor(name, lastname1, lastname2, born, picture) {
        if (!name) throw new InvalidValueException("name", name);
        if (!lastname1) throw new InvalidValueException("lastname1", lastname1);
        if (!born) throw new InvalidValueException("born", born);
        if (!/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/.test(born)) throw InvalidValueException("born", born);
        this.name = name;
        this.lastname1 = lastname1;
        this.lastname2 = lastname2;
        this.born = born;
        this.picture = picture;
    }
    toString() {
        return this.constructor.name + " " + this.lastname1 + " nacido en " + this.born + " " + this.picture;
    }
}
class User {
    #username;
    email;
    #password;
    constructor(username, email, password) {
        if (!username) throw new InvalidValueException("username", username);
        if (!email) throw new InvalidValueException("email", email);
        if (!/[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?/.test(email)) 
        throw new InvalidValueException("email", email);
        if (!password) throw new InvalidValueException("password", password);
        if (!/[a-zA-Z0-9]{8}/.test(password)) throw new InvalidValueException("password", password);
        this.#username = username;
        this.email = email;
        this.#password = password;

    }
}