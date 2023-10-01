// Create a new collection
db.createCollection("admin")
// Removes a collection from database
db.admin.drop()
// Insert a single document into a collection
db.user.insertOne({
    name:"Ashikur Rahman",
    email:'ashik@gmail.com'
})
// Delete a single document from the collection
db.user.deleteOne({
    "name":"Ashikur Rahman"
})
