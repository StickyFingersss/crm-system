import React, { useState } from 'react';

export const ApiComponent = () => {
  const [formData, setFormData] = useState({
    currentApi: '',
    teamId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log('Отправка данных:', formData);
  };

  return (
    <>
      <span>You can change AD api here</span>
      <br />
      <label htmlFor="currentApi">Your current Api:</label>
      <input
        type="text"
        id="currentApi"
        name="currentApi"
        value={formData.currentApi}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="newApi">Input new Api:</label>
      <input
        type="text"
        id="newApi"
        name="newApi"
        value={formData.newApi}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="teamId">Input Team Id:</label>
      <input
        type="text"
        id="teamId"
        name="teamId"
        value={formData.teamId}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};
