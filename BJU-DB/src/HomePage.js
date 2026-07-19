import React from "react";
import styled from "styled-components";

const HomePage = () => {
  const companies = [
    { id: 1, name: "Company A" },
    { id: 2, name: "Company B" },
    { id: 3, name: "Company C" },
  ];

  const handleCompanySelect = (companyId) => {
    // Handle company selection logic here
    console.log(`Selected Company ID: ${companyId}`);
  };

  const handleAddCompany = () => {
    // Handle adding a new company logic here
    console.log("Add a new company");
  };

  return (
    <Container>
      <Greeting>Hello User</Greeting>
      <Title> Data Management System</Title>
      <Subtitle>Select a Company</Subtitle>
      <CompanyList>
        {companies.map((company) => (
          <CompanyItem
            key={company.id}
            onClick={() => handleCompanySelect(company.id)}
          >
            {company.name}
          </CompanyItem>
        ))}
        <AddCompanyButton onClick={handleAddCompany}>
          + Add New Company
        </AddCompanyButton>
      </CompanyList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Greeting = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;
`;

const Subtitle = styled.h3`
  font-size: 20px;
  margin-bottom: 24px;
`;

const CompanyList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CompanyItem = styled.div`
  font-size: 18px;
  margin-bottom: 8px;
  cursor: pointer;
`;

const AddCompanyButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 16px;
`;

export default HomePage;
