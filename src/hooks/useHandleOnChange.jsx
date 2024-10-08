import { useState } from "react";
const useHandleOnChange = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return {
    inputs,
    handleChange
  };
};

export default useHandleOnChange;