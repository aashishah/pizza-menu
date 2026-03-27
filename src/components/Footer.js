export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}{" "}
      {isOpen ? "We're currently open!" : "We're currently closed!"}
    </footer>
  );
}
