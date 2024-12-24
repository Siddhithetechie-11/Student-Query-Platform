const mongoose = require("mongoose");
const MONGO_URI='mongodb://127.0.0.1/socialQuery'


exports.connectDatabase = () => {
  mongoose
    .connect(MONGO_URI,
      {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
      }
    )
    .then((con) => console.log(`Database Connected`))
    .catch((err) => console.log(err));
};


