export default function Pizza({ pizzaInfo }) {
  return (
    <li className={`pizza ${pizzaInfo.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaInfo.photoName} alt={pizzaInfo.name} />
      <div>
        <h3>{pizzaInfo.name}</h3>
        <p>{pizzaInfo.ingredients}</p>
        <span>{pizzaInfo.soldOut ? "SOLD OUT" : `$${pizzaInfo.price}`}</span>
      </div>
    </li>
  );
}
