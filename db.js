const mongoose = require("mongoose");
require('dotenv').config();

const mongoURI = process.env.mongoURI;

const mongoConnection = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Database connected successfully");

        try {
            const fetched_data = mongoose.connection.db.collection("food_lists");

            try {
                const data = await fetched_data.find({}).toArray();

                const food_category = mongoose.connection.db.collection("food_category");
                const catData = await food_category.find({}).toArray();

                global.food_lists = data;
                global.food_category = catData;

                // console.log("Global food lists:", global.food_lists);
                // console.log("Global food categories:", global.food_categories);

            } catch (err) {
                console.error("Error fetching data:", err.message);
            }



        } catch (err) {
            console.error("Error fetching data:", err.message);
        }
    } catch (err) {
        console.log("Database connection error:", err.message);
    }
};

module.exports = mongoConnection;
