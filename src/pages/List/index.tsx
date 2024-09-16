import React from "react";
import { ContainerSC, ContentHistorySC, FiltersSC } from "./styles/styled";
import ContentHeader from "../../components/ContentHeader";
import SelectedInput from "../../components/SelectedInput";
import HistoryCard from "../../components/HistoryCard";

const List: React.FC = () => {
  const months = [
    {
      value: 7,
      label: "Julho",
    },
    {
      value: 8,
      label: "Agosto",
    },
    {
      value: 9,
      label: "Setembro",
    },
  ];

  const years = [
    {
      value: 2022,
      label: 2022,
    },
    {
      value: 2023,
      label: 2023,
    },
    {
      value: 2024,
      label: 2024,
    },
  ];
  return (
    <ContainerSC>
      <ContentHeader title="Saídas" lineColor="#FF6961">
        <SelectedInput options={months} />
        <SelectedInput options={years} />
      </ContentHeader>
      <FiltersSC>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </FiltersSC>
      <ContentHistorySC>
        <HistoryCard
          title="Condomínio - Janeiro"
          subtitle="23/01/2024"
          amount="R$ 550,00"
          tagColor="#FF6961"
        />
      </ContentHistorySC>
    </ContainerSC>
  );
};

export default List;
