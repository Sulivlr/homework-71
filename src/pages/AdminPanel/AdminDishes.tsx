import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {useEffect} from 'react';
import {fetchDishes} from '../../store/dishesThunks';
import {selectDishes, selectDishesAreFetching} from '../../store/dishesSlice';
import Spinner from '../../components/Spinner/Spinner';

const AdminDishes = () => {
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const isFetching = useAppSelector(selectDishesAreFetching);

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
                <div key={dish.id} className="card d-flex flex-row justify-content-between mt-4">
                  <img style={{width: '20%'}}
                       src={dish.image}
                       alt="img"/>
                  <div>
                    <p style={{fontSize: '40px'}} className="mt-5">{dish.name}</p>
                  </div>
                  <p style={{fontSize: '40px'}} className="mt-5">{dish.price} KGS</p>
                  <div className="mt-5">
                    <button style={{fontSize: '20px'}} className="btn btn-primary me-5">Edit</button>
                    <button style={{fontSize: '20px'}} className="btn btn-danger me-5">Delete</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
  );
};

export default AdminDishes;