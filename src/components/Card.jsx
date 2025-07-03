function Card({ title, children }) {
  return (
    <div className="border rounded-lg shadow p-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default Card;
