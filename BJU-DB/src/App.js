import React from "react";
import SignInPage from "./SignInPage";
import "./App.css";
import HomePage from "./HomePage";
import SelectedCompanyPage from "./SelectedCompanyPage";
import DataEntryPage from "./DataEntryPage";
import GenerateReport from "./GenerateReport";

function App() {
  return (
    <>
      <SignInPage />
      <HomePage />
      <SelectedCompanyPage />
      <DataEntryPage />
      <GenerateReport />
    </>
  );
}

export default App;
