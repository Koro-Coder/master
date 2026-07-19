import React, { useState } from "react";
import styled from "styled-components";

const GenerateReport = () => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [records, setRecords] = useState([]);

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform data fetching or filtering based on selectedCompany, fromDate, and toDate
    // Update the 'records' state with the fetched or filtered data

    // Mock data for example purposes
    const mockRecords = [
      { id: 1, name: "Record 1", type: "Type A", price: 10, quantity: 5 },
      { id: 2, name: "Record 2", type: "Type B", price: 15, quantity: 3 },
      { id: 3, name: "Record 3", type: "Type A", price: 20, quantity: 2 },
    ];

    setRecords(mockRecords);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="company">Company Name:</Label>
        <Select
          id="company"
          value={selectedCompany}
          onChange={handleCompanyChange}
        >
          <option value="">Select a company</option>
          <option value="Company A">Company A</option>
          <option value="Company B">Company B</option>
          <option value="Company C">Company C</option>
        </Select>

        <Label htmlFor="fromDate">From:</Label>
        <Input
          type="date"
          id="fromDate"
          value={fromDate}
          onChange={handleFromDateChange}
        />

        <Label htmlFor="toDate">To:</Label>
        <Input
          type="date"
          id="toDate"
          value={toDate}
          onChange={handleToDateChange}
        />

        <Button type="submit">Submit</Button>
      </Form>

      {records.length > 0 && (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.type}</td>
                <td>{record.price}</td>
                <td>{record.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-bottom: 24px;
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
`;

export default GenerateReport;
