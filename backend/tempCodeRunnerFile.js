app.delete("/see/:id",(req,res)=>{
  let {id}=req.body
 console.log( ThoughtSchemaModel.findByIdAndDelete(id))

})