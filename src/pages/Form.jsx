
import React from 'react';

const Form = () => {
  return (
    <div>
      <h1>Form Page</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
