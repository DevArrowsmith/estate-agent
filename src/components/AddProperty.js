import { React, useState } from "react";
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = {
    propertyDetails: {
      title: "",
      type: "flat",
      bedrooms: "1",
      bathrooms: "1",
      price: "",
      city: "manchester",
      email: "",
    },
  };

  const [propertyDetails, setPropertyDetails] = useState(
    initialState.propertyDetails
  );

  const handleFieldChange = (event) => {
    setPropertyDetails({
      ...propertyDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddProperty = (event) => {
    event.preventDefault();
  };

  return (
    <div className="AddProperty">
      <h2>add a new property</h2>
      <form onSubmit={handleAddProperty} className="AddProperty-form">
        <label htmlFor="title">
          property title
          <input
            id="title"
            name="title"
            placeholder="central manchester flat"
            value={propertyDetails.title}
            onChange={handleFieldChange}
            required
          />
        </label>

        <label htmlFor="city">
          city
          <select
            id="city"
            name="city"
            value={propertyDetails.city}
            onChange={handleFieldChange}
            required
          >
            <option value="manchester">manchester</option>
            <option value="leeds">leeds</option>
            <option value="sheffield">sheffield</option>
            <option value="liverpool">liverpool</option>
          </select>
        </label>

        <label htmlFor="type">
          property type
          <select
            id="type"
            name="type"
            value={propertyDetails.type}
            onChange={handleFieldChange}
            required
          >
            <option value="flat">flat</option>
            <option value="detatched">detatched</option>
            <option value="semi-detatched">semi-detatched</option>
            <option value="terraced">terraced</option>
            <option value="end of terrace">end of terrace</option>
            <option value="cottage">cottage</option>
            <option value="bungalow">bungalow</option>
          </select>
        </label>

        <label htmlFor="bedrooms">
          bedrooms
          <select
            id="bedrooms"
            name="bedrooms"
            value={propertyDetails.bedrooms}
            onChange={handleFieldChange}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="over 5">over 5</option>
          </select>
        </label>

        <label htmlFor="bathrooms">
          bathrooms
          <select
            id="bathrooms"
            name="bathrooms"
            value={propertyDetails.bathrooms}
            onChange={handleFieldChange}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="over 3">over 3</option>
          </select>
        </label>

        <label htmlFor="price">
          price (£)
          <input
            id="price"
            name="price"
            placeholder="100000"
            value={propertyDetails.price}
            type="number"
            min="0"
            step="0.01"
            onChange={handleFieldChange}
            required
          />
        </label>

        <label htmlFor="email">
          email
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your_email@address.com"
            value={propertyDetails.email}
            onChange={handleFieldChange}
            required
          />
        </label>

        <button type="submit" id="testid" className="AddProperty-submit-button">
          add property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
