import React, { useState } from "react";
import styled from "styled-components";

const SelectedCompanyPage = () => {
  const [entries, setEntries] = useState([
    {
      LotNo: "123",
      Item: "qwe",
      Size: "666",
      Washing: "abc",
      Rate: "12",
      Quantity: "22",
      Amount: "234",
    },
    {
      LotNo: "123",
      Item: "qwe",
      Size: "666",
      Washing: "abc",
      Rate: "12",
      Quantity: "22",
      Amount: "234",
    },
  ]);

  const [newEntry, setNewEntry] = useState({
    LotNo: "",
    Item: "",
    Size: "",
    Washing: "",
    Rate: "",
    Quantity: "",
    Amount: "",
  });

  const handleInputChange = (event) => {
    setNewEntry((prevEntry) => ({
      ...prevEntry,
      [event.target.name]: event.target.value,
    }));
    console.log(newEntry);
  };

  const handleAddEntry = () => {
    // Add new entry to the entries list
    const entry = newEntry;
    setEntries((prevEntries) => [...prevEntries, entry]);

    // Clear the new entry form
    setNewEntry({
      LotNo: "",
      Item: "",
      Size: "",
      Washing: "",
      Rate: "",
      Quantity: "",
      Amount: "",
    });
  };

  const handleSearchById = (id) => {
    // Perform search by ID logic here
    console.log(`Search by ID: ${id}`);
  };

  //const { LotNo, Item, Size, Washing, Rate, Quantity, Amount } = newEntry;

  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = (entry) => {
    setSelectedEntry(entry);
    setPopupOpen(true);
  };

  const handleUpdateEntry = (id, updatedEntry) => {
    /*
      setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === id ? { ...entry, ...updatedEntry } : entry
      )
    );
    */
  };

  const handleDeleteEntry = (id) => {
    //setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
  };

  return (
    <Container>
      <CompanyDetails>
        <CompanyName>Company XYZ</CompanyName>
        <DetailsRow>
          <DetailsItem>
            <strong>Current Entries:</strong> {entries.length}
          </DetailsItem>
          <DetailsItem>
            <strong>Total Entries:</strong> {entries.length}
          </DetailsItem>
          <DetailsItem>
            <strong>Balance:</strong> $1000
          </DetailsItem>
        </DetailsRow>
      </CompanyDetails>

      <OptionsContainer>
        {/* <AddEntryForm>
          <FormInput
            type="text"
            name="Lot No."
            placeholder="Lot No."
            value={LotNo}
            onChange={handleInputChange}
          />
          <FormInput
            type="text"
            name="Item"
            placeholder="Item"
            value={Item}
            onChange={handleInputChange}
          />
          <FormInput
            type="text"
            name="Size"
            placeholder="Size"
            value={Size}
            onChange={handleInputChange}
          />
          <FormInput
            type="text"
            name="Washing"
            placeholder="Washing"
            value={Washing}
            onChange={handleInputChange}
          />
          <FormInput
            type="text"
            name="Rate"
            placeholder="Rate"
            value={Rate}
            onChange={handleInputChange}
          />
          <FormInput
            type="text"
            name="Quantity"
            placeholder="Quantity"
            value={Quantity}
            onChange={handleInputChange}
          />
          <FormInput
            type="text"
            name="Amount"
            placeholder="Amount"
            value={Amount}
            onChange={handleInputChange}
          />
          <Button onClick={handleAddEntry}>Add Entry</Button>
        </AddEntryForm> */}

        <SearchByIdForm>
          <FormInput
            type="text"
            placeholder="Lot Number"
            onChange={(event) => handleSearchById(event.target.value)}
          />
          <FormInput
            type="text"
            placeholder="Company Name"
            onChange={(event) => handleSearchById(event.target.value)}
          />
          <Button>Search</Button>
        </SearchByIdForm>
      </OptionsContainer>

      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>Lot No.</th>
              <th>Item</th>
              <th>Size</th>
              <th>Washing</th>
              <th>Rate</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.LotNo}>
                <td>{entry.Item}</td>
                <td>{entry.Size}</td>
                <td>{entry.Washing}</td>
                <td>{entry.Rate}</td>
                <td>{entry.Quantity}</td>
                <td>{entry.Amount}</td>
                <td>
                  <UpdateButton onClick={() => handleOpenPopup(entry)}>
                    Update
                  </UpdateButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>

      {isPopupOpen && (
        <PopupWindow
          entry={selectedEntry}
          onClose={() => setPopupOpen(false)}
          onUpdate={handleUpdateEntry}
          onDelete={handleDeleteEntry}
        />
      )}
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

const CompanyDetails = styled.div`
  margin-bottom: 24px;
  width: 90%;
`;

const CompanyName = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
`;

const DetailsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DetailsItem = styled.div`
  flex: 0 0 33.33%;
  margin-bottom: 8px;
  text-align: center;
`;

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;
`;

const AddEntryForm = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
`;

const SearchByIdForm = styled.div`
  display: flex;
  align-items: center;
`;

const UpdateButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 4px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px 8px;
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const FormInput = styled.input`
  padding: 5px;
  margin: 8px;
  flex: 0 1 auto;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 8px;
  margin-bottom: 15px;

  &:last-child {
    margin-right: 0;
  }
`;

const PopupWindow = ({ entry, onClose, onUpdate, onDelete }) => {
  const [updatedEntry, setUpdatedEntry] = useState({
    LotNo: entry.LotNo,
    Item: entry.Item,
    Size: entry.Size,
    Washing: entry.Washing,
    Rate: entry.Rate,
    Quantity: entry.Quantity,
    Amount: entry.Amount,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedEntry((prevEntry) => ({
      ...prevEntry,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    onUpdate(entry.LotNo, updatedEntry);
    onClose();
  };

  const handleDelete = () => {
    onDelete(entry.LotNo);
    onClose();
  };

  return (
    <PopupContainer>
      <PopupContent>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <FormInput
          type="text"
          name="Lot no."
          placeholder="####"
          value={updatedEntry.LotNo}
          onChange={handleInputChange}
        />
        <FormInput
          type="text"
          name="Item"
          placeholder="Item"
          value={updatedEntry.Item}
          onChange={handleInputChange}
        />
        <FormInput
          type="text"
          name="Quantity"
          placeholder="Quantity"
          value={updatedEntry.Quantity}
          onChange={handleInputChange}
        />
        <FormInput
          type="text"
          name="Size"
          placeholder="Size"
          value={updatedEntry.Size}
          onChange={handleInputChange}
        />
        <FormInput
          type="text"
          name="Washing"
          placeholder="Washing"
          value={updatedEntry.Washing}
          onChange={handleInputChange}
        />
        <FormInput
          type="text"
          name="Rate"
          placeholder="Rate"
          value={updatedEntry.Rate}
          onChange={handleInputChange}
        />
        <Button onClick={handleUpdate}>Update</Button>
        <Button onClick={handleDelete} style={{ backgroundColor: "red" }}>
          Delete
        </Button>
      </PopupContent>
    </PopupContainer>
  );
};

export default SelectedCompanyPage;

/*

lot no.     Item    Washing             rate        quantity   amount       size
                    |           |
                    ball Wash
                    spray
                    plain
                    rfd
                    damage spray
                    heavy damage spray
                    heavy damage pasting spray


*/
