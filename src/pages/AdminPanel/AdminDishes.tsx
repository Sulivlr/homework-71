const AdminDishes = () => {
  return (
    <div className="container-fluid mt-2">
      <div className="d-flex justify-content-between">
        <h2>Dishes</h2>
        <button style={{fontSize: '25px'}} className="btn text-bg-success">Add new Dish</button>
      </div>
      <div>
        <div className="card-body">
          <div className="card d-flex flex-row justify-content-between mt-4">
            <img style={{width: '20%'}}
                 src="https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg"
                 alt="img"/>
            <div>
              <p style={{fontSize: '40px'}} className="mt-5">Pepperoni</p>
            </div>
            <p style={{fontSize: '40px'}} className="mt-5">450 KGS</p>
            <div className="mt-5">
              <button style={{fontSize: '20px'}} className="btn btn-primary me-5">Edit</button>
              <button style={{fontSize: '20px'}} className="btn btn-danger me-5">Delete</button>
            </div>
          </div>
          <div className="card d-flex flex-row justify-content-between mt-4">
            <img style={{width: '20%'}}
                 src="https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg"
                 alt="img"/>
            <div>
              <p style={{fontSize: '40px'}} className="mt-5">Pepperoni</p>
            </div>
            <p style={{fontSize: '40px'}} className="mt-5">450 KGS</p>
            <div className="mt-5">
              <button style={{fontSize: '20px'}} className="btn btn-primary me-5">Edit</button>
              <button style={{fontSize: '20px'}} className="btn btn-danger me-5">Delete</button>
            </div>
          </div>
          <div className="card d-flex flex-row justify-content-between mt-4">
            <img style={{width: '20%'}}
                 src="https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg"
                 alt="img"/>
            <div>
              <p style={{fontSize: '40px'}} className="mt-5">Pepperoni</p>
            </div>
            <p style={{fontSize: '40px'}} className="mt-5">450 KGS</p>
            <div className="mt-5">
              <button style={{fontSize: '20px'}} className="btn btn-primary me-5">Edit</button>
              <button style={{fontSize: '20px'}} className="btn btn-danger me-5">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDishes;