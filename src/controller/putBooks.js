const { firebase } = require("../connection/firebase");
const { getBooksId } = require("./getBookId")

const putBooks = (bookID, json) => {

    return new Promise(async (resolve, reject) => {
        try {

            const { libro, autor, año, genero, descripcion } = json;

            let isExist = await getBooksId(bookID)
            if (isExist === null) {
                resolve("Elemento no existente")
            }

            let procces = await firebase.collection('Libros').doc(bookID).update({
                libro, autor, año, genero, descripcion
            })
            resolve("operacion exitosa")

        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    putBooks
}