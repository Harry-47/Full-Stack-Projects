const deleteProduct = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/admin/products/delete/${id}`, {
      method: "DELETE",
      credentials: "include"
    });

    if (!res.ok) {
      throw new Error("Failed to delete product");
    }
    window.location.reload();
  } catch (err) {
    console.error("Error deleting product:", err);
    alert("❌ Failed to delete product");
  }
};

export default deleteProduct;
