export default function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaInfo.photoName} alt={props.pizzaInfo.name} />
      <div>
        <h3>{props.pizzaInfo.name}</h3>
        <p>{props.pizzaInfo.ingredients}</p>
        <span>${props.pizzaInfo.price}</span>
      </div>
    </li>
  );
}
