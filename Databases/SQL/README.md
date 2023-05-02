# SQL fundamentals

**Q. What is DBMS?**

Databse Management System is software used to define, create, maintain the database and provides controlled access to the data.

**What is RDBMS?**

**R** stands for Relational. RDBMS is used to only store or manage the data that are stored in form of tables.

**Q. What is postgreSQL?**

PostgreSQL is an object-relational database management system (ORDBMS). PostgreSQL is an open-source descendant of this original Berkeley code. It supports a large part of the SQL standard and offers many modern features:
- complex queries
- foreign keys
- triggers
- updatable views
- transactional integrity
- multiversion concurrency control

**What is Primary Key?**

Database should have a column or group of columns which uniquely identify the row of a table.
PK = Unique + Not Null

**What is Foreign Key?**

`Forign Key` is column or group of columns in a table (child), which refers to the `Primary Key` of other table (parent).
When we want to create a relation between two or more tables, we use foreign key. 
It maintance referntial integrity in database. i.e, if primary key row gets deleted in parent table than child table rows which uses the primary key should also gets deleted. 

**Q. What are constrains & their types?**

While creating a table there are rules to be defined for each columns to specify types of data supported for the perticular column.
- NOT NULL: Column can not have null value.
- UNIQUE: All the values in a column are different.
- PRIMARY KEY: Combination of NOT NULL & UNIQUE.
- FOREIGN KEY: Prevents actions that would destroy the links between tables.
- CHECK: Ensures that the column value will satisfy the condition.
- DEFAULT: Sets the default value in column is no value provided.

**Different types of SQL commands**

There are 5 types of commands:
- Data Defination Language (**DDL**): Create, Alter, Drop, Truncate, Rename (Table level cmds)
- Data Manupulation Language (**DML**): Select, Insert, Update, Delete (Row level cmds)
- Data Control Language(**DCL**): Grant, Revoke (Access Control on database for a user)
- Transaction Control Language (**TCL**): Commit, Rollback, Savepoint (Query control as a transation)
- **Constants**: PK, FK, Check, Not Null, Unique, Default (data types cmds)

**Q. Difference between Delete vs Drop vs Truncate**

- **DELETE**: Deletes one or all rows from a table. Can be rolled back (DML).
- **TRUNCATE**: Deletes all rows from a table. Can **not** be rolled back (DDL) 
- **DROP**: Deletes a databse or a table and it's rows. Can **not** be rolled back (DDL).

**Q. Differentiate Group By & Order By**

- Group By: This clause is used to use aggregation functions on more than one set of rows.
- Order By: This used for sorting the rows based on a column value.

**Q. Types of Joins supported in SQL**

```
Orders (OrderID, CustomerID, OrderDate);
Customers (CustomerID, CustomerName, ContactName, Country);
```
- **Cross Join**: Return all the possible combinations of rows from two tables. Also called the cartesion product.
- **Inner Join**: Only returns the matching rows from two tables. Also called a simple join.
- **Left Outer Join / Left Join**: Returns the matching rows from two tables and rows from the left table.
- **Right Outer Join / Right Join**: Returns the matching rows from two tables and rows from the right table.
- **Full Outer Join**: Returns all the rows from two tables.

Eg., Find details of customers who have ordered.
```
SELECT * from Customers JOIN Orders 
ON Orders.CustomerID=Customers.CustomerID;
```

**Q. Nested Subquery vs Correlated Subquery**

```
Orders (OrderID, CustomerID, OrderDate);
Customers (CustomerID, CustomerName, ContactName, Country);
```
They are used to do what joins do in a query. but in a different way. They gets executed in a different way.
- **Nested SubQuery**: (Bottom up approach) It's written in nested way. First the child query gets executed and they the results are used to compare for each row of parent query. eg., Find details of customers who have ordered.
    ```
    SELECT * FROM Customers WHERE 
    CustomerID IN (SELECT CustomerID FROM Orders);
    ```  
- **Correlated Subquery**: (Top down approach) It's works by each row of parent query is selected and then compared with the result rows return by the child query. eg., Find details of customers who have ordered.
    ```
    SELECT * FROM Customers where 
    EXISTS (SELECT CustomerID FROM Orders 
    WHERE Orders.CustomerID=Customers.CustomerID);
    ```

**Q. Difference between Joins & Subqueries**

- Joins are more optimized by the server so queries are faster. They needs to be carefully written, ineffecient joins can degrade the performace.
- Subqueries are more logical representation so they are easy to read and write. 
- 

**Q. Pattern Matching in query**

- `WHERE name LIKE '%a'`: last letter `a`.
- `WHERE name LIKE 'a%'`: 1st letter `a`.
- `WHERE name LIKE '%a%'`: word should contain `a`.
- `WHERE name LIKE '_a%'`: 2nd letter `a`.
- `WHERE name LIKE 'a_%'`: 1st letter `a` and 2nd should be there.
- `WHERE name LIKE 'a%y'`: 1st letter `a` and last letter `y`.

**Important!:** `%ok` is considered a bad query and should be avoided because it ignores the indexes as database does not know starting letter. i.e., it's a full db scan, which is bad if you have millions of rows. There is a work around for this though. i.e., you can add one more column to table which has reverse string as the value and you can do match like `ko%`. Notice that we also reversed the query string.
e.g., if name column value is 'ashok' then name_reverse column value would be 'kohsa'. So for the query `WHERE name_reverse LIKE '%ok'` to match any word ending with 'ok' we can use `WHERE name_reverse LIKE 'ko%'` which will use index on reverse_name to perform faster.

**Q. Output of the query `select * from Employee ORDER BY 'sal' DESC limit 5,1;`**

It will return 6th highest.
With mysql, the LIMIT parameters are `offset, row_count`, but the first parameter is optional. So when you have two parameters, the first is the starting row, the second is the number of rows. You asked for LIMIT 5, 1 which means 1 rows, starting from row 5.

**Q. How to select 2nd Highest salary using MAX aggregation function in salary column?**

```
SELECT MAX(salary) AS salary FROM employee 
    WHERE salary <> (SELECT MAX(salary) FROM employee)
```

**Q. Difference between VARCHAR vs VAR**

The VAR stands for variable length in VARCHAR. To give you an example, CHAR(10) is a fixed-length non-Unicode string of length 10, while VARCHAR(10) is a variable-length non-Unicode string with a maximum length of 10. This means the actual length will depend upon the data.
- **TRADEOFF #1** Obviously, VARCHAR holds the advantage since variable-length data would produce smaller rows and, thus, smaller physical files.
- **TRADEOFF #2** Since CHAR fields require less string manipulation because of fixed field widths, index lookups against CHAR field are on average 20% faster than that of VARCHAR fields. This is not any conjecture on my part. The book MySQL Database Design and Tuning performed something marvelous on a MyISAM table to prove this. The example in the book did something like the following:

**Q. What is Trigger?** 

A trigger is a stored procedure in database which automatically invokes whenever a special event in the database occurs. For example, a trigger can be invoked when a row is inserted into a specified table or when certain table columns are being updated.
e.g., trigger will compute those two values and insert with the entered values. i.e.,
```
create trigger stud_marks 
before INSERT 
on 
Student 
for each row 
set Student.total = Student.subj1 + Student.subj2 + Student.subj3, Student.per = Student.total * 60 / 100;
``` 

**What are ACID Proprties?**

ACID properties are the four key characteristics that define the reliability and consistency of a transaction in a Database Management System (DBMS). The acronym ACID stands for Atomicity, Consistency, Isolation, and Durability. Here is a brief description of each of these properties:
- **Atomicity**: Atomicity ensures that a transaction is treated as a single, indivisible unit of work. Either all the operations within the transaction are completed successfully, or none of them are. If any part of the transaction fails, the entire transaction is rolled back to its original state, ensuring data consistency and integrity.
- **Consistency**: Consistency ensures that a transaction takes the database from one consistent state to another consistent state. The database is in a consistent state both before and after the transaction is executed. Constraints, such as unique keys and foreign keys, must be maintained to ensure data consistency.
- **Isolation**: Isolation ensures that multiple transactions can execute concurrently without interfering with each other. Each transaction must be isolated from other transactions until it is completed. This isolation prevents dirty reads, non-repeatable reads, and phantom reads.
- **Durability**: Durability ensures that once a transaction is committed, its changes are permanent and will survive any subsequent system failures. The transaction’s changes are saved to the database permanently, and even if the system crashes, the changes remain intact and can be recovered.

**Comparison of PostgreSQL vs MySQL:**

Here is a comparison table to help you understand the different characteristics of PostgreSQL vs MySQL:

![The difference](../../public/PostgreSQL_vs_MySQL.jpg.png)