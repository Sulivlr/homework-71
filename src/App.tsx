import Appbar from './components/AppBar/AppBar';
import {Route, Routes} from 'react-router-dom';
import AdminDishes from './pages/AdminPanel/AdminDishes';
import AdminOrders from './pages/AdminPanel/AdminOrders';
import ClientPage from './pages/ClientPanel/ClientPage';
import CheckOut from './pages/ClientPanel/CheckOut';
import DishForm from './components/DishForm/DishForm';

const App = () => {
  return (
    <>
      <header>
        <Appbar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ClientPage/>} />
          <Route path="/admin/dishes" element={<AdminDishes/>} />
          <Route path="/admin/orders" element={<AdminOrders/>} />
          <Route path="/checkout" element={<CheckOut/>} />
          <Route path="/new-dish" element={<DishForm/>} />
        </Routes>
      </main>
    </>
  );
};

export default App;
