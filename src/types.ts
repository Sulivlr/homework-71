export interface ApiDish {
  name: string;
  price: number;
  image: string;
}

export interface ApiDishes {
  [id: string] : ApiDish;
}

export interface Dish {
  id: string;
}

export interface DishMutation {
  name: string;
  price: string;
  image: string;
}