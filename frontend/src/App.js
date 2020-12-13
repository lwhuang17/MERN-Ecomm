import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Container className="py-3">
          <HomeScreen />
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
