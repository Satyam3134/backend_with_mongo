export const InsertBlog = async (req, res) => {
  try {
    const { title, description, tags } = req.body;

    // Validate required fields
    if (!title || !description || !tags) {
      return res.status(200).json({ message: "All fields are required" });
    }

    // Create and save the new blog
    const newBlog = new Blog({ title, description, tags });
    const savedBlog = await newBlog.save();

    res
      .status(200)
      .json({ message: "Blog inserted successfully", blog: savedBlog });
  } catch (error) {
    res
      .status(200)
      .json({ message: "Error inserting blog", error: error.message });
  }
};
