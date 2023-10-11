const express = require('express');
const Model = require('../models/ceo_model');
const router = express.Router();

router.use(express.json());



//Post Method
router.post('/postCEOMESSAGE', async (req, res) => {
    const data = new Model({
        TITLE: req.body.TITLE,
        DESCRIPTION: req.body.DESCRIPTION,
        isACTIVE:req.body.isACTIVE,
        DESIGNATION:req.body.DESIGNATION,
        Name:req.body.Name,
        Blog:req.body.Blog
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all data Method
router.get('/getCEOMESSAGE', async (req, res) => {
    
        try{
            const data = await Model.find();
            res.json(data)
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    })


// //Get by ID Method
// router.get('/getOne/:id', (req, res) => {
//     res.send(req.params.id)
// })

// //Update by ID Method
// router.patch('/update/:id', (req, res) => {
//     res.send('Update by ID API')
// })

// //Delete by ID Method
// router.delete('/delete/:id', (req, res) => {
//     res.send('Delete by ID API')
// })

module.exports = router;