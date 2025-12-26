import { Router } from "express";
import truckModel from "../models/truckModel.js";

const router = Router()

// Get All Data
router.get('/', async (req, res) => {
    console.log('get request')
    const allTruckData = await truckModel.find()
    return res.json(allTruckData)
})

// get Data by ID 
router.get('/:id', async (req, res) => {

    const {id} = req.params
    console.log(req, 'get request')
    const allTruckData = await truckModel.findById(id)
    return res.json(allTruckData)
})
// Post Data
router.post('/', async (req, res) => {
    const { body } = req
    const truckAdded = await truckModel.create(body)
    console.log(truckAdded,'post request')
    return res.json(truckAdded)
})

//update Data by ID
router.put('/:id', async (req, res) => {
    console.log(req,'pu request')
    const { id } = req.params
    const { body } = req
    const truckUpdated = await truckModel.findByIdAndUpdate(id, body, { new: true })
    console.log('put request')
    return res.json(truckUpdated)
})

//delete Data by ID
// router.delete('/:id', async (req, res) => {
//     const { id } = req.params
//     console.log('delete request')
//     const truckDeleted = await truckModel.findByIdAndDelete(id)
//     return res.json(truckDeleted)
// })

export default router