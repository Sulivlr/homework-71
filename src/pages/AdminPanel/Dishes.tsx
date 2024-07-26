import React from 'react';
import {useAppDispatch} from '../../app/hooks';
import {fetchDishes, removeDish} from '../../store/dishesThunks';
import ButtonSpinner from '../../components/ButtonSpinner/ButtonSpinner';

interface Props {
  id: string;
  name: string;
  image: string;
  price: number;
  isLoading: boolean;
}

const Dishes: React.FC<Props> = React.memo(({id, name, image, price, isLoading}) => {
  const dispatch = useAppDispatch();
  const onRemove = async () => {
    if (window.confirm('Are u sure about deleting?')) {
      await dispatch(removeDish(id));
      await dispatch(fetchDishes());
    }
  };

  return (
    <div key={id} className="card d-flex flex-row justify-content-between mt-4">
      <img style={{width: '20%'}}
           src={image}
           alt="img"/>
      <div>
        <p style={{fontSize: '40px'}} className="mt-5">{name}</p>
      </div>
      <p style={{fontSize: '40px'}} className="mt-5">{price} KGS</p>
      <div className="mt-5">
        <button style={{fontSize: '20px'}} disabled={isLoading} className="btn btn-primary me-5">Edit</button>
        <button style={{fontSize: '20px'}} onClick={onRemove} disabled={isLoading} className="btn btn-danger me-5">
          {isLoading && <ButtonSpinner />}
          Delete
        </button>
      </div>
    </div>
  );
});

export default Dishes;