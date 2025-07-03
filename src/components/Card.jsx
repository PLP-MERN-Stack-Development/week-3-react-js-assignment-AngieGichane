function Card({ title, children }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 dark:bg-gray-800 dark:text-white">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}

export default Card;
