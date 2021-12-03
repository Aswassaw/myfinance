import React, { useState } from "react";

export default function TransactionForm() {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
  });

  const onChangeHandler = (e) => {
    setFormData((val) => ({
      ...val,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={onSubmitHandler}>
        {/* name */}
        <label>
          <span>Name:</span>
          <input
            type='text'
            name='name'
            onChange={onChangeHandler}
            value={formData.name}
            required
          />
        </label>
        {/* amount */}
        <label>
          <span>Amount (Rp):</span>
          <input
            type='text'
            name='amount'
            onChange={onChangeHandler}
            value={formData.amount}
            required
          />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  );
}
