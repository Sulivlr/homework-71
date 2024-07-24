
const DishForm = () => {

  return (
    <form className="container">
      <h4></h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="url"
          name="image"
          id="image"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary mt-3">
        Create
      </button>
    </form>
  );
};

export default DishForm;