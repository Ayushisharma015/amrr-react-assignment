import { useState } from "react";
import axios from "axios";

export default function AddItem() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    coverImage: null,
    additionalImages: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "coverImage") {
      setFormData({ ...formData, coverImage: files[0] });
    } else if (name === "additionalImages") {
      setFormData({ ...formData, additionalImages: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (let key in formData) {
      if (key === "additionalImages") {
        Array.from(formData[key]).forEach((file) => form.append("additionalImages", file));
      } else {
        form.append(key, formData[key]);
      }
    }

    try {
      await axios.post("http://localhost:4000/api/items", form);
      alert("Item added successfully!");
      setFormData({
        name: "",
        type: "",
        description: "",
        coverImage: null,
        additionalImages: [],
      });
    } catch (err) {
      alert("Failed to add item");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 flex justify-center items-center py-10">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Add New Item</h2>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Item Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Item Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select Type</option>
            <option value="Shoes">Shoes</option>
            <option value="Dress">Dress</option>
            <option value="Gadget">Gadget</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Cover Image</label>
          <input
            type="file"
            name="coverImage"
            onChange={handleChange}
            accept="image/*"
            required
            className="w-full border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Additional Images</label>
          <input
            type="file"
            name="additionalImages"
            onChange={handleChange}
            accept="image/*"
            multiple
            className="w-full border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-semibold"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
