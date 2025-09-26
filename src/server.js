import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const app = express();
const PORT = 3000;

const client = new MongoClient("mongodb://mongo:27017");
await client.connect();
const db = client.db("mydb");
const users = db.collection("users");

// Route to get a user by ID
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate ObjectId format
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ObjectId format" });
    }

    // Find user by ID and age > 21
    const user = await users.findOne({
      _id: new ObjectId(id),
      age: { $gt: 21 },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found or under 21" });
    }

    // Return user if valid
    res.json(user);
  }catch (error) {
    // Handle unexpected errors
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
