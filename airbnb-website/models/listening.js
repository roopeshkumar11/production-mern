const mongoose=require("mongoose")

const Schemadata=mongoose.Schema({
    title:{
    type:String,
    required:true
          },

    description:String,
    image:{
        type:String,
        default:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
        set:(v)=> v=== ""? "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg":v

    },
    price:Number,
    location:String,
    country:String
})

const Listing=mongoose.model("Listing",Schemadata)

module.exports=Listing 