# HACK THAT STARTUP VOL.2 Reto Individual

## RETO

Se debe construir una API Rest que devuelva información básica sobre estos asteroides. El API será un microservicio conectado a MongoDB
y se utilizará para guardar nueva información y consultar información ya guardada.

1. MODELO DEL ASTEROIDE(NEA) y User

2. findAll & addList
   Implementar el método (findAll) que permite recuperar todos los
   modelos tanto de User como de Neas.
   Añadir el método addList que permita crear autmática modelos a
   través de enviar un array de datos (para Users y Neas)

3. CRUD
   Crear un CRUD para los modelos de User y NEAs.

4. AUTH
   Implementar un método de autentificación (puedes utilizar páquetes
   o hacer el authToken / session tu mismo)

Debe poder permitirte registrarte y hacer login con username y
password.

5. TESTING
   Testing automáticos y con Postman / Insomnia

6. CSV to JSON
   Implementa un método que convierta un csv en un json e incorpora
   la información de los asteroides del csv ‘OrbitalParameters_PHAs.csv’.
   en tu DB

## DOCUMENTACIÓN

### MODELOS

#### USER

**idUser** String, unique, required
**userName** String, unique, required
**password** String, required

#### NEA

**idNea** String, unique, required
**fullName**: String, unique, true
**a** Number, required
**b** Number, required
**i** Number, required
**om** Number, required
**w** Number, required
**ma** Number, required

### ENDPOINTS

#### USER

**/user/** _POST_ CREA nuevo usuario. Recibe objeto _userName_ y _password_ **o** array de objetos de ese tipo.
**/user/** _GET_ DEVUELVE todos los usuarios.

**/user/:id/** _GET_ DEVUELVE el usuario pasado en _req.params_.
**/user/:id/** _PATCH_ MODIFICA el usuario pasado en _req.params_. Puede recibir _userName_ y/o _password_
**/user/:id/** _DELETE_ BORRA el usuario pasado en _req.params_.
