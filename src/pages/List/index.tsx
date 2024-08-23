import React from "react";
import { ContainerSC, ContentHistorySC } from "./styles/styled";
import ContentHeader from "../../components/ContentHeader";
import SelectedInput from "../../components/SelectedInput";
import HistoryCard from "../../components/HistoryCard";

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
      </ContentHeader>
      <ContentHistorySC>
        <HistoryCard
          title="Conta de Luz"
          subtitle="23/08/2024"
          amount="R$ 452,32"
          cardColor="#F4F4F4"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Conta de Luz"
          subtitle="23/08/2024"
          amount="R$ 452,32"
          cardColor="#F4F4F4"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Conta de Luz"
          subtitle="23/08/2024"
          amount="R$ 452,32"
          cardColor="#F4F4F4"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Conta de Luz"
          subtitle="23/08/2024"
          amount="R$ 452,32"
          cardColor="#F4F4F4"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Conta de Luz"
          subtitle="23/08/2024"
          amount="R$ 452,32"
          cardColor="#F4F4F4"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Conta de Luz"
          subtitle="23/08/2024"
          amount="R$ 452,32"
          cardColor="#F4F4F4"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Conta de Luz"
          subtitle="23/08/2024"
          amount="R$ 452,32"
          cardColor="#F4F4F4"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Conta de Luz"
          subtitle="23/08/2024"
          amount="R$ 452,32"
          cardColor="#F4F4F4"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Conta de Luz"
          subtitle="23/08/2024"
          amount="R$ 452,32"
          cardColor="#F4F4F4"
          tagColor="#FF6961"
        />
        <HistoryCard
          title="Conta de Luz"
          subtitle="23/08/2024"
          amount="R$ 452,32"
          cardColor="#F4F4F4"
          tagColor="#FF6961"
        />
      </ContentHistorySC>
    </ContainerSC>
  );
};

export default List;
