# NoSQL fundamentals

## Mongo fundamentals

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

**Q. MongoDB Query API**

The MongoDB Query API is the mechanism that you use to interact with your data.
The Query API comprises two ways to query data in MongoDB:
- CRUD Operations
- Aggregation pipelines

**Q. How to CRUD in mongo db?**

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

**Q. What is Aggregation in mongo?**

Aggregation is used to perform some operation on the query result and then return the results. It is used to write complex queries in which result goes through various stages. syntax is `myDb.books.aggregate( [ { <stage> }, ... ] )`. Few examples are following: 
 - `$addFields` or `$set`: Adds new fields to documents. similar to `$project`.
 - `$out`: To write the result as a new collection in database.
 - `$fill`: Populates null and missing field values within documents.
 - `$count`: Returns a count of the number of documents at this stage of the aggregation pipeline.
 - `$limit`: Limits the number of documents passed to the next stage.
 - `$search`: Performs a full-text search of the field or fields in an Atlas collection. 
 - `$group`: The `$group` stage separates documents into groups according to a "group key". The output is one document for each unique group key.

**Q. What are views?**

- A MongoDB view is a read-only queryable object whose contents are defined by an aggregation pipeline on other collections or views.
- MongoDB does not persist the view contents to disk. A view's content is computed on-demand when a client queries the view.





