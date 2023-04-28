# Mongo fundamentals

**Q. What is mongo db?**
Mongo is a NoSQL key-value json like document database. Few good features are Horizontal Scalibility, High Availability, Flexible Schema, High Performance.

**Q. How does mongo db work?**
A record in MongoDB is a document, which is a data structure composed of field and value pairs. MongoDB documents are similar to JSON objects. The values of fields may include other documents, arrays, and arrays of documents.
To compare with SQL database its like following: 
- The `db` is `db`, eg. `use myDb` 
- The `table` is `collection`, eg. `db.createCollection(books)`
- The `row` is `record`, eg. `{name: 'book1', author: 'john', price: 150}`

**Q. What are the advantages of using documents?**

- Documents correspond to native data types in many programming languages.
- Embedded documents and arrays reduce need for expensive joins.
- Dynamic schema supports fluent polymorphism

**Q. How to read or write in mongo db?**
- To read: `myDb.books.find({name: 'book1'})`.
- To insert: `myDb.books.insertOne({name: 'book1', author: 'john', price: 150})`
- To update: 
```
myDb.books.updateOne(
    {'name': 'book1'}, // find criteria
    {$set: { 'price': 120 }} // update fields
)
```
- To delete:
```
myDb.books.deleteOne(
       { "_id" : ObjectId("563237a41a4d68582c2509da") }, // filter
       { w : "majority", wtimeout : 100 } // optional: w -> priority, wtimeout -> wait for operation.
   );
```

**Q. What are views?**
- A MongoDB view is a read-only queryable object whose contents are defined by an aggregation pipeline on other collections or views.
- MongoDB does not persist the view contents to disk. A view's content is computed on-demand when a client queries the view.

