import React, { useState } from "react";
import styled from "styled-components";
import Multiselect from "multiselect-react-dropdown";

const DataEntryPage = () => {
  //   const [selectedCompany, setSelectedCompany] = useState("");
  //   const [selectedWashing, setSelectedWashing] = useState([]);
  //   const [lotNo, setLotNo] = useState("");
  //   const [item, setItem] = useState("");
  //   const [rate, setRate] = useState("");
  //   const [quantity, setQuantity] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [size, setSize] = useState("");
  const [washingOptions, setWashingOptions] = useState(["A", "B", "C"]);

  //   const handleCompanyChange = (event) => {
  //     setSelectedCompany(event.target.value);
  //   };

  //   const handleWashingChange = (event) => {
  //     const selectedOptions = Array.from(event.target.options)
  //       .filter((option) => option.selected)
  //       .map((option) => option.value);
  //     setSelectedWashing(selectedOptions);
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();

  //     // Perform data submission or further processing here
  //     // You can access the entered values using the state variables

  //     // Reset the form after submission
  //     setSelectedCompany("");
  //     setSelectedWashing([]);
  //     setLotNo("");
  //     setItem("");
  //     setRate("");
  //     setQuantity("");
  //     setAmount("");
  //     setSize("");
  //   };

  const [entry, setEntry] = useState({
    lotNo: "",
    company: "",
    item: "",
    size: "",
    washing: "",
    rate: "",
    quantity: "",
    amount: "",
  });

  const handleChange = (event) => {
    setEntry((prevEntry) => ({
      ...prevEntry,
      [event.target.name]: event.target.value,
    }));
  };

  //const { lotNo, item, size, washing, rate, quantity, amount } = entry;

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const handleSubmit = (event) => {
    if (entry.lotNo == 0) {
      event.preventDefault();
      console.log("INVALID");
      setEntry({
        lotNo: "",
        company: "",
        item: "",
        size: "",
        washing: [],
        rate: "",
        quantity: "",
        amount: "",
      });
    } else console.log("VALID");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="company">Company:</Label>
        <Select name="company" value={entry.company} onChange={handleChange}>
          <option value="">Select a company</option>
          <option value="Company A">Company A</option>
          <option value="Company B">Company B</option>
          <option value="Company C">Company C</option>
        </Select>

        <Label htmlFor="lotNo">Lot No:</Label>
        <Input
          type="text"
          name="lotNo"
          value={entry.lotNo}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />

        <Label htmlFor="item">Item:</Label>
        <Input
          type="text"
          name="item"
          value={entry.item}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />

        <Label htmlFor="washing">Washing:</Label>
        <div onKeyPress={handleKeyPress}>
          <Multiselect
            isObject={false}
            onRemove={(event) => {
              handleChange({ target: { name: "washing", value: event } });
            }}
            onSelect={(event) => {
              handleChange({ target: { name: "washing", value: event } });
            }}
            disablePreSelectedValues={true}
            options={washingOptions}
            showCheckbox
          />
        </div>

        <Label htmlFor="rate">Rate:</Label>
        <Input
          type="text"
          name="rate"
          value={entry.rate}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />

        <Label htmlFor="quantity">Quantity:</Label>
        <Input
          type="text"
          name="quantity"
          value={entry.quantity}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />

        <Label htmlFor="amount">Amount:</Label>
        <Input
          type="text"
          name="amount"
          value={entry.amount}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />

        <Label htmlFor="size">Size:</Label>
        <Input
          type="text"
          name="size"
          value={entry.size}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />

        <Button
          type="submit"
          onClick={() => {
            console.log(entry);
          }}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: #f2f2f2;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  
  width: 400px;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Select = styled.select`
  padding: 8px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default DataEntryPage;
