export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          We're open until {openHour}:00 PM. Come visit or place an order
          online.
          <button className="btn">Order</button>
        </div>
      ) : (
        ` We're closed from ${closeHour}:00 PM. We open at ${openHour}:00 AM.`
      )}
    </footer>
  );
}
