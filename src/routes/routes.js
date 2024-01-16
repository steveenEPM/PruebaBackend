const { agregarLibro } = require('../controller/addBooks')
const { deleteBooks } = require('../controller/deleteBooks')
const { getBooksId } = require('../controller/getBookId')
const { getBooks } = require('../controller/getBooks')
const { putBooks } = require('../controller/putBooks')


const routes = require('express').Router()


routes.post('/books', async (req, res) => {
    try {

        const { libro, autor, año, genero, descripcion } = req.body
        let confirm = await agregarLibro(libro, autor, año, genero, descripcion)

        return res.status(200).json({
            confirm
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json("bad request")
    }
})


routes.get('/books', async (req, res) => {
    try {

        const libros = await getBooks()

        return res.status(200).json({ libros })

    } catch (error) {
        console.log(error);
        return res.status(400).json("bad request")
    }
})


routes.get('/books/:id', async (req, res) => {
    try {

        let { id } = req.params
        const libro = await getBooksId(id)

        return res.status(200).json({ libro })

    } catch (error) {
        console.log(error);
        return res.status(400).json("bad request")
    }
})

routes.delete('/books/:id', async (req, res) => {
    try {

        let { id } = req.params
        const libro = await deleteBooks(id)

        return res.status(200).json(libro)

    } catch (error) {
        console.log(error);
        return res.status(400).json("bad request")
    }
})

routes.put('/books/:id', async (req, res) => {
    try {

        let { id } = req.params
        const libro = await putBooks(id,req.body)

        return res.status(200).json(libro)

    } catch (error) {
        console.log(error);
        return res.status(400).json("bad request")
    }
})





module.exports = {
    routes
}