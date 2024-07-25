import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectDishIsCreating} from '../../store/dishesSlice';
import {createDish} from '../../store/dishesThunks';
import {DishMutation} from '../../types';
import {useNavigate} from 'react-router-dom';
import ButtonSpinner from '../ButtonSpinner/ButtonSpinner';

const DishForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isCreating = useAppSelector(selectDishIsCreating);
  const [dish, setDish] = useState<DishMutation>({
    name: '',
    image: '',
    price: '',
  });

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setDish((prevState) => ({...prevState, [name]: value}));
  };
  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await dispatch(createDish(dish));
      navigate('/admin/dishes');
    } catch (error) {
      console.error('coudnt create');
    }
  };


  return (
    <form className="container mb-4 mt-3" onSubmit={onSubmit}>
      <h4>Add new Dish</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          required
          onChange={onFieldChange}
          value={dish.name}
          type="text"
          name="name"
          id="name"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          required
          onChange={onFieldChange}
          value={dish.image}
          type="url"
          name="image"
          id="image"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          required
          onChange={onFieldChange}
          value={dish.price}
          type="number"
          name="price"
          id="price"
          className="form-control"
        />
      </div>

      <button type="submit" disabled={isCreating} className="btn btn-primary mt-3">
        Create
        {isCreating && <ButtonSpinner />}
      </button>
    </form>
  );
};

export default DishForm;