import React, { useEffect, useState } from "react";
import useFirestore from "../../hooks/useFirestore";

export default function TransactionForm({ uid }) {
  const { response, addDocument } = useFirestore("transactions");
  const [formData, setFormData] = useState({ name: "", amount: "" });

  useEffect(() => {
    // reset formData when crud success
    if (response.success) {
      setFormData({ name: "", amount: "" });
    }
  }, [response.success]);

  const onChangeHandler = (e) => {
    setFormData((val) => ({
      ...val,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addDocument({ uid, ...formData });
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
            type='number'
            name='amount'
            onChange={onChangeHandler}
            value={formData.amount}
            required
          />
        </label>
        {!response.isPending ? (
          <button>Add Transaction</button>
        ) : (
          <button disabled>Loading...</button>
        )}
      </form>
    </>
  );
}
