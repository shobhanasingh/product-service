const mongoose = require("mongoose");

const productDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewurlParser: true,
    });
    console.log("Connected to product DB");
  } catch (e) {
    console.log("error connecting DB", e);
    process.exit(1);
  }
};
module.exports = productDB;
