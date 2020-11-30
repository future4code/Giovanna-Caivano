## Exercício 1
a) O `rounds` é o fator `cost`. Quanto maior o valor que damos ao cost, maior será o custo computacional para decriptar a mensagem e, portanto, mais lento será esse processo. O `salt` é um dado aleatório gerado pelo bcrypt para ser um input adicional à mensagem que será encriptada. 
Idealmente, quanto maior o cost, melhor será por motivos de segurança. No entanto, para efeitos deste exercício, usei 12.

b)
```
export const hash = async (
    plainText:string
    ): Promise<string> => {

        const rounds = Number(process.env.BCRYPTS_COST)
        const salt = await bcrypt.genSalt(rounds)
        return bcrypt.hash(plainText, salt)
}
```

c)
```
export const compare = async (
    plainText:string, 
    cypherText: string
    ): Promise<boolean> => {
    
        return bcrypt.compare(plainText, cypherText)
}
```

## Exercício 2

A) O cadastro deve ser modificado primeiro, para que a senha criada possa ser encriptada e depois fazermos o login comparando as senhas encriptadas (a salva no banco e a fornecida no login).

b)
```
export const createUser = async (
    req:Request, 
    res: Response
    ) => {
    
    const { email, password, role } = req.body
    let message = 'Token has been generated by jwt.'
    
    try {
        if(!email || !password || !email.includes('@')) {
            res.statusCode = 406
            message = 'Missing "name" and/or "password" or "email" and/or "password" are not valid.'
            throw new Error(message);
        }
        if(password.lenght < 6){
            message = 'Password should be at least 6-character long.'
            throw new Error(message);    
        }
        
        const id: string = generateId()
        const passwordHash: string = await hash(password)
        
        await insertUser(
            id,
            email,
            passwordHash,
            role
        )

        const token: string = generateToken({
            id,
            role,
        })
            
        res.status(201).send({
            message: message,
            token: token
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
```

c)
```
export const login = async (
    req: Request,
    res:Response
    ) => {
    
    const { email, password } = req.body
    let message: string = 'User is loged.'

    try {
        if(!email || !email.includes('@')){
            res.statusCode = 400
            message = 'Invalid email.'
            throw new Error(message);
        }
        
        const user: User | undefined = await selectUserByEmail(email)
        
        if(!user){
            res.statusCode = 404
            message = "User not found or wrong password."
            throw new Error(message);
        }

        const passwordIsCorrect: boolean = await compare(password, user.password)
        
        if(!passwordIsCorrect){
            res.statusCode = 401
            message = "User not found or wrong password."
            throw new Error(message);
        }

        const token: string = generateToken({
            id: user.id,
            role: user.role
        })

        res.send({
            message,
            token: token
        })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
``` 

d) Caso o endpoint `user/profile` seja restrito aos usuários administradores, é preciso atualizar o código.
Na função que cria o endpoint, precisaremos adicionar uma validação do `role` do usuário.
```
if(userData.role !== USER_ROLE.ADMIN){
    res.statusCode = 401
    message = 'Unauthorized!'
    throw new Error(message);
}
```


## Exercício 3

a)
```
ALTER TABLE users_aula50
ADD role ENUM("NORMAL", "ADMIN") DEFAULT("NORMAL")
```

b)
```
export type AuthenticationData = {
    id: string,
    role: USER_ROLE
}
```

c)
```
export const createUser = async (
    req:Request, 
    res: Response
    ) => {
    
    const { email, password, role } = req.body
    let message = 'Token has been generated by jwt.'
    
    try {
        if(!email || !password || !email.includes('@')) {
            res.statusCode = 406
            message = 'Missing "name" and/or "password" or "email" and/or "password" are not valid.'
            throw new Error(message);
        }
        if(password.lenght < 6){
            message = 'Password should be at least 6-character long.'
            throw new Error(message);    
        }
        
        const id: string = generateId()
        const passwordHash: string = await hash(password)
        
        await insertUser(
            id,
            email,
            passwordHash,
            role
        )

        const token: string = generateToken({
            id,
            role,
        })
[...]
```

d)
```
const token: string = generateToken({
            id: user.id,
            role: user.role
        })
```

## Exercício 4

a)
```
if(tokenData.role !== USER_ROLE.NORMAL){
            res.statusCode = 401
            message = 'Unauthorized!'
            throw new Error(message);
        }
```

## Exercício 5

Query SQL:
```
export const deleteUser = async (
    id:string
    ): Promise<void> => {
    
        try {
            await connection('users_aula50')
            .where('id', id)
            .del()
        } catch (error) {
            throw new Error(error.message || error.sqlMessage);
        }
}
```
endpoint:
```
export const delUser = async (
    req:Request, 
    res:Response
    ) => {
    
        const id: string = req.params.id as string
        const token: string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)
        let message = 'User successfully deleted.'

        try {
            console.log(tokenData)

            const userData = await selectUserById(tokenData.id)
            const targetUserData = await selectUserById(id)
            
            if(tokenData.role !== USER_ROLE.ADMIN){
                res.statusCode = 401
                message = 'Unauthorized!'
                throw new Error(message);
            }
            
            if(!userData || !targetUserData){
                res.statusCode = 404
                message = 'User not found!'
                throw new Error(message);
            }
            
            await deleteUser(id)

            res.send({
                message
            })
        } catch (error) {
            res.status(400).send(error.message || error.sqlMessage)
        }
}
```

## Exercício 6

Query SQL:
```
export const selectUserById = async (
    id: string
): Promise<User> => {
    try {
    const result = await connection('users_aula50')
    .select('*')
    .where({
        id
    })

    return {
        id: result[0].id,
        email: result[0].email,
        password: result[0].password,
        role: result[0].role
    }

    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
```

Endpoint:
```
export const getUserProfile = async (
    req: Request, 
    res: Response
    ) => {
    
    let message = 'User found!'
    const token: string = req.headers.authorization as string
    const tokenData: AuthenticationData = getTokenData(token)

    try {
    
        const userData = await selectUserById(tokenData.id)

        if(!userData){
            res.statusCode = 404
            message = 'User not found!'
            throw new Error(message);
        }

        res.status(200).send({
            message: {
                id: userData.id,
                email: userData.email,
                role: userData.role
            }
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })    
    }
}
```