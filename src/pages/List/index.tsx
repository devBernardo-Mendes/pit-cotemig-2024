import React, { useMemo } from "react";
import { ContainerSC, ContentHistorySC } from "./styles/styled";
import ContentHeader from "../../components/ContentHeader";
import SelectedInput from "../../components/SelectedInput";
import HistoryCard from "../../components/HistoryCard";
import { useLocation } from "react-router-dom";

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
  const paramns = useLocation();

  const handleTitle = useMemo(() => {
    const title =
      paramns.pathname === "/list/entry-balance" ? "Entradas" : "Saídas";
    return title;
  }, [paramns.pathname]);

  const handleLineColor = useMemo(() => {
    const lineColor =
      paramns.pathname === "/list/entry-balance" ? "#FF6961" : "#FFF";
    return lineColor;
  }, [paramns.pathname]);

  return (
    <ContainerSC>
      <ContentHeader title={handleTitle} lineColor={handleLineColor}>
        <SelectedInput options={options} />
      </ContentHeader>
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
