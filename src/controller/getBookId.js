const { firebase } = require("../connection/firebase");

const getBooksId = async (bookID) => {
    return new Promise(async (resolve, reject) => {
        try {


            const bookDoc = await firebase.collection('Libros').doc(bookID).get()

            if (bookDoc.exists) {
                let json = {
                    id: bookDoc.id,
                    data: bookDoc.data()
                }
                resolve(json)
            }
            resolve(null)
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    getBooksId
}

