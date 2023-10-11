const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    TITLE: {
        required: true,
        type: String
    },
    DESCRIPTION: {
        required: true,
        type: String
    },
    isACTIVE:{
        required:false,
        type:String
    },
    DESIGNATION:{
        required:true,
        type:String
    },
    Name:{
        required:true,
        type:String
    },
    Blog:{
        required:true,
        type:String
    }
})

module.exports = mongoose.model('Ceo', dataSchema)