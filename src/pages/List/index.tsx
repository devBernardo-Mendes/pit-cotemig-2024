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
        <HistoryCard
          title="Água - Fevereiro"
          subtitle="15/02/2024"
          amount="R$ 120,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Internet - Março"
          subtitle="10/03/2024"
          amount="R$ 200,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Energia Elétrica - Abril"
          subtitle="20/04/2024"
          amount="R$ 450,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Telefone - Maio"
          subtitle="05/05/2024"
          amount="R$ 100,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Gás - Junho"
          subtitle="30/06/2024"
          amount="R$ 80,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Manutenção - Julho"
          subtitle="25/07/2024"
          amount="R$ 300,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Segurança - Agosto"
          subtitle="12/08/2024"
          amount="R$ 150,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Imposto Predial - Setembro"
          subtitle="01/09/2024"
          amount="R$ 800,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Seguro Residencial - Outubro"
          subtitle="18/10/2024"
          amount="R$ 250,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Seguro Residencial - Outubro"
          subtitle="18/10/2024"
          amount="R$ 250,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Seguro Residencial - Outubro"
          subtitle="18/10/2024"
          amount="R$ 250,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Seguro Residencial - Outubro"
          subtitle="18/10/2024"
          amount="R$ 250,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Seguro Residencial - Outubro"
          subtitle="18/10/2024"
          amount="R$ 250,00"
          tagColor="#FF6961"
        />{" "}
        <HistoryCard
          title="Seguro Residencial - Outubro"
          subtitle="18/10/2024"
          amount="R$ 250,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Seguro Residencial - Outubro"
          subtitle="18/10/2024"
          amount="R$ 250,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Seguro Residencial - Outubro"
          subtitle="18/10/2024"
          amount="R$ 250,00"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Seguro Residencial - Outubro"
          subtitle="18/10/2024"
          amount="R$ 250,00"
          tagColor="#FF6961"
        />
      </ContentHistorySC>
    </ContainerSC>
  );
};

export default List;
