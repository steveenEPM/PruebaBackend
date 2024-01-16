const { firebase } = require("../connection/firebase")
const { getBooksId } = require("./getBookId")


const deleteBooks = (bookID) => {
    return new Promise(async (resolve, reject) => {
        try {

            let isExist = await getBooksId(bookID)
            if (isExist === null) {
                resolve("Elemento no existente")
            }

            let procces = await firebase.collection('Libros').doc(bookID).delete()

            resolve("operacion exitosa")


        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    deleteBooks
}