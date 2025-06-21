export default function ItemCard({ item, onClick }) {
  return (
    <div className="border rounded shadow cursor-pointer" onClick={onClick}>
      {item.coverImage && <img src={item.coverImage} alt={item.name} className="w-full h-48 object-cover rounded-t" />}
      <div className="p-4">
        <h5 className="font-semibold text-lg">{item.name}</h5>
      </div>
    </div>
  );
}