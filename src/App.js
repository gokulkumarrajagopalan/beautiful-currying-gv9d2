import "./styles.css";
import Header from "./Header";
import Namepage from "./Namepage";
import Skills from "./Skills";
import Experience from "./Experience";
import ContactComponent from "./ContactComponent";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Namepage />
      <Skills />
      <Experience />
      <ContactComponent />
    </div>
  );
}
