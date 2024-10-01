import React, { useMemo } from "react";
import { ContainerSC, ContentHistorySC, FiltersSC } from "./styles/styled";
import ContentHeader from "../../components/ContentHeader";
import SelectedInput from "../../components/SelectedInput";
import HistoryCard from "../../components/HistoryCard";
import { useLocation } from "react-router-dom";

const List: React.FC = () => {
  const months = [
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
  const paramns = useLocation();

  const handleTitle = useMemo(() => {
    const title =
      paramns.pathname === "/list/entry-balance" ? "Entradas" : "Saídas";
    return title;
  }, [paramns.pathname]);

  const handleLineColor = useMemo(() => {
    const lineColor =
      paramns.pathname === "/list/entry-balance" ? "#03BB85" : "#FF6961";
    return lineColor;
  }, [paramns.pathname]);

  return (
    <ContainerSC>
      <ContentHeader title={handleTitle} lineColor={handleLineColor}>
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
        <HistoryCard
          title="Condomínio - Janeiro"
          subtitle="23/01/2024"
          amount="R$ 550,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Condomínio - Janeiro"
          subtitle="23/01/2024"
          amount="R$ 550,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Condomínio - Janeiro"
          subtitle="23/01/2024"
          amount="R$ 550,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Condomínio - Janeiro"
          subtitle="23/01/2024"
          amount="R$ 550,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Condomínio - Janeiro"
          subtitle="23/01/2024"
          amount="R$ 550,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Condomínio - Janeiro"
          subtitle="23/01/2024"
          amount="R$ 550,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Condomínio - Janeiro"
          subtitle="23/01/2024"
          amount="R$ 550,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Condomínio - Janeiro"
          subtitle="23/01/2024"
          amount="R$ 550,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Condomínio - Janeiro"
          subtitle="23/01/2024"
          amount="R$ 550,00"
          tagColor="#FF6961"
        />
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
