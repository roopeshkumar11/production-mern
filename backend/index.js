const express=require("express")
const {mongoose } = require("mongoose")
const ThoughtSchemaModel=require("./model/Schema")
const cors=require("cors")
const User = require("./model/user")
const dotenv =require("dotenv")

dotenv.config()
const app=express()
app.use(express.json())
app.use(cors()); 
const PORT=process.env.PORT || 4001
const URI=process.env.MonogoDBURI






mongoose.connect(URI)
console.log(URI)

app.post("/create",(req,res)=>{
    ThoughtSchemaModel.create(req.body)
    .then((reponse)=>{
        console.log(reponse)
    })
    
    
    
})

app.get("/show",async (req,res)=>{
    let data= await  ThoughtSchemaModel.find()
    
    res.json(data)
})


app.get("/change/:id", async (req, res) => {
  try {
    const post = await ThoughtSchemaModel.findById(req.params.id); // Use req.params.id
    if (!post) {
      return res.status(404).send('Post not found');
    }
    res.send(post);
    console.log(`Found data: ${post}`);
  } catch (error) {
    console.error('Error finding post:', error);
    res.status(500).send('Server error');
  }
});

app.put('/change/:id', async (req, res) => {
  try {
    const post = await ThoughtSchemaModel.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Use req.params.id
    if (!post) {
      return res.status(404).send('Post not found');
    }
    res.send(post);
    console.log(`Updated post: ${post}`);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).send('Server error'); // Include this line to send a response in case of error
  }
});

app.get("/see/:id", async (req,res)=>{
  let {id}=req.params
  let data= await  ThoughtSchemaModel.findById(id)
   
    res.json(data)
    // console.log("find for delete",data)

})
app.delete("/see/:id",async (req,res)=>{
  let {id}=req.params
  console.log(id)
 let post= await ThoughtSchemaModel.findByIdAndDelete(id)
//  console.log("delete",post)
})

app.post("/user", async (req,res)=>{
  let user=await User.create(req.body)
  console.log("userr",user)
})
app.post("/loginuser", async (req,res)=>{
let {email,password}=req.body
const founddata= await User.findOne({email:email})
.then((reponse)=>{
  console.log(reponse)
  
    if(reponse){
      if(reponse.password===password){
        res.json("success")
       
      }
      else{
        res.json("incorrect password")
      }
    }

    else{
      res.json("not record")
      console.log("not find")
    }
})

})

app.listen(PORT,()=>{
    console.log("port is listen ",PORT)
})