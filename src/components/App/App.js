import './App.css';
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import "@fontsource/roboto/300-italic.css";

import AppRoutes from '../Routes/Routes';
import Footer from '../commonComponents/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
