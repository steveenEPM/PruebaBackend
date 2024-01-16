const { firebase } = require("../connection/firebase");

const getBooks = async () => {
    return new Promise(async (resolve, reject) => {
        try {

            const libros = (await firebase.collection('Libros').get()).docs.map(doc => ({
                id:doc.id,
                data:doc.data()
            }))

            resolve(libros);
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    getBooks
}