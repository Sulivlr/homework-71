import Appbar from './pages/AppBar/AppBar';
import {Route, Routes} from 'react-router-dom';
import AdminDishes from './pages/AdminPanel/AdminDishes';
import AdminOrders from './pages/AdminPanel/AdminOrders';

const App = () => {
  return (
    <>
      <header>
        <Appbar/>
      </header>
      <main>
        <Routes>
          <Route path="/admin/dishes" element={<AdminDishes/>} />
          <Route path="/admin/orders" element={<AdminOrders/>} />
        </Routes>
      </main>
    </>
  );
};

export default App;
