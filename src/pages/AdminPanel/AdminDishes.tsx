import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import React, {useEffect} from 'react';
import {fetchDishes} from '../../store/dishesThunks';
import {selectDeleteDish, selectDishes, selectDishesAreFetching} from '../../store/dishesSlice';
import Spinner from '../../components/Spinner/Spinner';
import Dishes from './Dishes';

const AdminDishes = () => {
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const isFetching = useAppSelector(selectDishesAreFetching);
  const isDeleting = useAppSelector(selectDeleteDish);

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  const navigate = useNavigate();
  const formClick = () => {
    navigate('/new-dish');
  } ;

  return isFetching ?  (
    <div className="d-flex align-items-center justify-content-center"><Spinner /></div>
    ): (
      <div className="container mt-4 mb-4">
        <div className="d-flex justify-content-between">
          <h2>Dishes</h2>
          <button onClick={formClick} style={{fontSize: '25px'}} className="btn text-bg-success">Add new Dish</button>
        </div>
        <div>
          <div className="card-body">
              {dishes.map((dish) => (
                <Dishes id={dish.id}
                        name={dish.name}
                        image={dish.image}
                        price={dish.price}
                        isLoading={dish.id === isDeleting}
                />
              ))}
          </div>
        </div>
      </div>
  );
};

export default AdminDishes;