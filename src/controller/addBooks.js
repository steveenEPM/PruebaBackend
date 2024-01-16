const { firebase } = require('../connection/firebase');


const agregarLibro = (libro, autor, año, genero, descripcion) => {
    return new Promise(async (resolve, reject) => {
        try {
            const docRef = await firebase.collection('Libros').add({
                libro, autor, año, genero, descripcion
            })

            let json = {
                id: docRef.id,
                data: {
                    libro, autor, año, genero, descripcion
                }
            }

            resolve(json)

        } catch (error) {
            reject(error);
        }

    })
}

module.exports = {
    agregarLibro
}