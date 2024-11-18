import { useEffect, useState } from "react";
import Button from "../../components/Button";
import ContentHeader from "../../components/ContentHeader";
import ResidentCard from "./parts/residentsCard";
import NoResults from "../../components/NoResults";
import { data } from "./utils/mock";
import { FiltersSC } from "../List/styles/styled";

const ResidentRegistration = () => {
  const [frequencyFilterSelected, setFrequencyFilterSelected] = useState([
    "active",
    "inactive",
  ]);

  console.log(frequencyFilterSelected);

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = frequencyFilterSelected.includes(frequency);
    setFrequencyFilterSelected((prev) =>
      alreadySelected
        ? prev.filter((item) => item !== frequency)
        : [...prev, frequency]
    );
  };
  return (
    <>
      <ContentHeader title="Cadastro de Moradores" lineColor="#03BB85">
        <Button>Cadastrar Moradores</Button>
      </ContentHeader>

      <FiltersSC>
        <button
          type="button"
          className={`tag-filter tag-filter-recurrent ${
            frequencyFilterSelected.includes("active") ? "tag-actived" : ""
          }`}
          onClick={() => handleFrequencyClick("active")}
        >
          Moradores Ativos
        </button>
        <button
          type="button"
          className={`tag-filter tag-filter-eventual ${
            frequencyFilterSelected.includes("inactive") ? "tag-actived" : ""
          }`}
          onClick={() => handleFrequencyClick("inactive")}
        >
          Moradores Inativos
        </button>
      </FiltersSC>

      {data.length > 0 ? (
        data.map((item) => (
          <ResidentCard
            key={item.id}
            apartment={item.apartment}
            name={item.name}
            tagColor={item.status === "active" ? "#03BB85" : "#FF6961"}
            phone={item.phone}
          />
        ))
      ) : (
        <NoResults />
      )}
    </>
  );
};

export default ResidentRegistration;
