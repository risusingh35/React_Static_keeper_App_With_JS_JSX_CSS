import "../styles.css";

export default function Footer() {
  const y = new Date().getFullYear();
  return (
    <footer className="keeper-foot">
      <p>Copyright &copy; {y} </p>
    </footer>
  );
}
