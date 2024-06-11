const mongoose=require("mongoose")


const ThoughtSchema=new mongoose.Schema({
    title:String,
    thought:String
})


const ThoughtSchemaModel=mongoose.model("Thoughtdata",ThoughtSchema)
module.exports=ThoughtSchemaModel