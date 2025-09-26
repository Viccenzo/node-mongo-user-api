db = db.getSiblingDB("mydb");

db.users.insertMany([
  {
    _id: ObjectId("64f1a0b1234567890abc0001"),
    name: "John Doe",
    email: "john@example.com",
    age: 30
  },
  {
    _id: ObjectId("64f1a0b1234567890abc0002"),
    name: "Jane Smith",
    email: "jane@example.com",
    age: 25
  },
  {
    _id: ObjectId("64f1a0b1234567890abc0003"),
    name: "Tommy Junior",
    email: "tommy@example.com",
    age: 18
  }
]);