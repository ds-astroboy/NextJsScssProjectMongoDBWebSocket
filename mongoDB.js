
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://egor_voronov:28032002Egor!@cluster0.iuozdjg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri ,{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
/*await client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  
  client.close();
});*/

const start=async()=>{
  try{
    await client.connect()
    console.log("connected to mongoDB")
    
     const users=client.db().collection("users")
    //add new user //await users.insertOne({name:'roman',age:29})
     const user =await users.find({}).toArray((err, result) => {
      if (err) throw err;
      console.log(">>>>"+JSON.stringify(result));  
        
  })

  //client.db().close();
  } catch (e){
      console.log("error :"+e)
   }//finally {
  //    //Ensures that the client will close when you finish/error
  //   await client.close();
  // }
}
start()
