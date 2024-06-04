const express=require('express')
const app=express()

const mongoose=require("mongoose")
const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust"
const Listing=require("./models/listening.js")
const path=require("path")

app.set("views engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.urlencoded({extended:true}))
const methodOverride=require("method-override")
const ejsmate=require("ejs-mate")


const wrapAsync=require("./untils/wrapAsync.js")
const ExpressError=require("./untils/Express.js")
const {listingschema}=require("./Scehma.js")


app.use(methodOverride("_method"))
app.use(express.static(path.join(__dirname,"/public")))


app.engine("ejs",ejsmate) 
main()
.then(()=>{
    console.log("connect to DB")
})
.catch((err)=>{
    console.log(err)
})

async function main(){
await mongoose.connect(MONGO_URL)
}

app.get("/",(req,res)=>{
    res.send("Hey ! i am root")
})


const validateListing=(req,res,next)=>{
    let {error}=listingschema.validate(req.body)
    if(error){
        let errmsg=error.details.map((el)=>el.message).join(",")
        throw new ExpressError(404,result.errmsg)
    }
    else{
        next()
    }
}

// app.get("/testlisting", async (req,res)=>{
//     let smpaleListing = new Listing({
//         title:"my new villa",
//         description:"by the beach",
//         price:200,
//         location:"mumbai",
//         country:"india"
//     })
//   let data= await  smpaleListing.save().then(()=>{})
//     res.send("succefully")
//     console.log(data)
// })

//index route
app.get("/listings", async (req,res)=>{
 const alllist=await Listing.find({})
 res.render("listing/index.ejs",{alllist})


})
  // new route create list

  app.get("/listings/new",(req,res)=>{
    res.render("listing/new.ejs")
 })
 
 



  
 app.get("/listings/:id",async (req,res)=>{
    let  {id}=req.params
    let listing=await Listing.findById(id)
    res.render("listing/show.ejs",{listing})
   
 })

// create route
app.post("/listings" ,validateListing,wrapAsync(async (req,res,next)=>{
  const newlist=new Listing(req.body.listing)
       await newlist.save()
        console.log(newlist)
       
         res.redirect("/listings")
}
)
)

// edit
app.get("/listings/:id/edit",async (req,res)=>{
    let  {id}=req.params
    let listing=await Listing.findById(id)
 res.render("listing/edit.ejs",{listing})
})
//upadte

app.put("/listings/:id",validateListing, wrapAsync(async (req,res)=>{
  let  {id}=req.params
    await Listing.findByIdAndUpdate(id,{...req.body.listing})
    res.redirect("/listings");

}))


app.delete("/listings/:id", async (req,res)=>{
    let  {id}=req.params
    let deletelisted= await Listing.findByIdAndDelete(id)
    res.redirect("/listings")
    console.log(deletelisted)

})
app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page not Found"))
})

app.use((err,req,res,next)=>{  //handle error / middleware
   let {statusCode,message}=err
    res.render("error.ejs",{message})
    // res.status(statusCode).send(message)
})
let port= 8080
app.listen(port,()=>{{
console.log(`server is listening to port ${port}`)
}})