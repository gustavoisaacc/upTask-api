import mongoose from "mongoose";

const conectDB = async () => {
  try {
    const connecte = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    const url = `${connecte.connection.host}: ${connecte.connection.port}`
    console.log("🚀 ~ file: db.js ~ line 9 ~ conectDB ~ url", url)
    
  } catch (error) {
    console.log(`error: ${error.message}`)
    process.exit(1)
  }
}

export default conectDB;