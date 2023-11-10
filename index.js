const  mongoose  = require("mongoose");
const uri=  "mongodb://127.0.0.1/shop";

mongoose.connect(uri);

const productSchema = new mongoose.Schema({
    name: String,
    shortDescription: String,
    bestSellingRank: Number,
    thumbnailImage: String,
    salePrice: Number,
    manufacturer:String, 
    url: String,
    type: String,
    image: String,
    customerReviewCount: Number,
    shipping: String,
    salePrice_range: String,
    objectID: String,
    categories: [String]
})
const Product = new mongoose.model("Product" , productSchema);


const main = async ()  => {


    try{
          
        const data = await Product.find().count();
        const price= await Product.find({salePrice: {$gt: 28.99}}).count();
        
        console.log(data);
        console.log(price);
    }
    catch(error){
        console.log(error);
    }
    finally{
        mongoose.connection.close();
    }
};



main()


