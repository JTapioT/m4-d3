import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"
import SingleBook from "./components/SingleBook "
import Scifi from "./Data/Scifi.json"
import BookList from "./components/BookList";


function App() {
  return (
    <>
      <WarningSign alertMessage="This is a warning"/>
      <MyBadge Message="This is a badge" color="#FF8000"/>
      <SingleBook book={Scifi[0]} /> 
      <BookList books={Scifi} /> 
    </>
  );
}

export default App;
