import { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "../components/ItemCard";
import ItemModal from "../components/ItemModal";

export default function ViewItems() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/items")
      .then((res) => setItems(res.data))
      .catch(() => alert("Failed to load items"));
  }, []);

  const handleEnquire = async () => {
    const name = prompt("Enter your name");
    const email = prompt("Enter your email");
    if (!name || !email) return;
    try {
      await axios.post("http://localhost:4000/api/enquire", {
        name,
        email,
        itemName: selectedItem.name,
      });
      alert("Enquiry email sent!");
    } catch {
      alert("Failed to send enquiry");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-10">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Available Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <ItemCard key={item._id} item={item} onClick={() => setSelectedItem(item)} />
        ))}
      </div>
      <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} onEnquire={handleEnquire} />
    </div>
  );
}
