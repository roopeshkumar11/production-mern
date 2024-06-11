const {mongoose } = require("mongoose")
const ThoughtSchemaModel=require("../model/Schema.js")
const initdata=require("./data.js")


mongoose.connect("mongodb://127.0.0.1:27017/Thoughtdata")



const initDB=async ()=>{
    await ThoughtSchemaModel.deleteMany({})
   let aaa= await ThoughtSchemaModel.insertMany(initdata.data)
    console.log("data was initalise")
    console.log(aaa)
}
initDB()