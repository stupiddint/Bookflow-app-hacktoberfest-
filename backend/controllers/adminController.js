import pool from "../db.js";

const adminController = {

  addBook: (req, res) => {
    const bookData = req.body;

    pool.query("INSERT INTO library SET ?", bookData, (error, result) => {
      if (error) {
        console.error("Error adding book:", error);
        res.status(500).json({ error: "An error occurred" });
      } else {
        console.log("Book added:", result);
        res.status(200).json({ message: "Book added successfully" });
      }
    });
  },

  getAllBooks: (req, res) => {
    pool.query("SELECT * FROM library limit 50", (error, results) => {
      if (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ error: "An error occurred" });
      } else {
        res.status(200).json(results);
      }
    });
  }

};

export default adminController;
