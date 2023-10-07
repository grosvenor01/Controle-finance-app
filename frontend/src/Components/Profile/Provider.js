export default function Provider({ image, name, isChecked, toggleProvider }) {
  return (
    <div
      onClick={toggleProvider(name)}
      className="relative hover:scale-105 cursor-pointer transition-all"
    >
      <img src={image} className="shadow-md hover:shadow-lg rounded-xl" />
      <input
        type="checkbox"
        checked={isChecked}
        className="checkbox checkbox-primary rounded-full absolute top-2 right-2"
      />
    </div>
  );
}
