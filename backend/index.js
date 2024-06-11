const express=require("express")
const {mongoose } = require("mongoose")
const ThoughtSchemaModel=require("./model/Schema")
const cors=require("cors")

const app=express()
app.use(express.json())
app.use(cors()); 
const PORT=process.env.PORT || 8080





mongoose.connect("mongodb://127.0.0.1:27017/Thoughtdata")

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
 console.log("delete",post)
})


app.listen(PORT,()=>{
    console.log("port is listen 8080")
})