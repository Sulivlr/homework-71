import Appbar from './pages/AppBar/AppBar';
import {Route, Routes} from 'react-router-dom';
import AdminDishes from './pages/AdminPanel/AdminDishes';

const App = () => {
  return (
    <>
      <header>
        <Appbar/>
      </header>
      <main>
        <Routes>
          <Route path="/admin/dishes" element={<AdminDishes/>} />
        </Routes>
      </main>
    </>
  );
};

export default App;
