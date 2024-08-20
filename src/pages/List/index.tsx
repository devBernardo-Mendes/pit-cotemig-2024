import React from "react";
import { ContainerSC } from "./styles/styled";
import ContentHeader from "../../components/ContentHeader";
import SelectedInput from "../../components/SelectedInput";

const List: React.FC = () => {
  const options = [
    {
      value: "Option 1",
      label: "Opção 1",
    },
    {
      value: "Option 2",
      label: "Opção 2",
    },
    {
      value: "Option 3",
      label: "Opção 3",
    },
  ];
  return (
    <ContainerSC>
      <ContentHeader title="Saídas" lineColor="#FF6961">
        <SelectedInput options={options} />
        <SelectedInput options={options} />
      </ContentHeader>
    </ContainerSC>
  );
};

export default List;
