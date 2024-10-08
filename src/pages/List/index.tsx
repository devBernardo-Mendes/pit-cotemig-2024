import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ContainerSC, ContentHistorySC, FiltersSC } from "./styles/styled";
import ContentHeader from "../../components/ContentHeader";
import SelectedInput from "../../components/SelectedInput";
import HistoryCard from "../../components/HistoryCard";
import { useLocation } from "react-router-dom";
import expenses from "../../utils/mocks/expenses";
import gains from "../../utils/mocks/gains";
import listOfMonths from "../../utils/months";
import formatCurrency from "../../utils/formarCurrency";
import formatDate from "../../utils/formateDate";
import { v4 as uuidv4 } from "uuid";

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );
  const [data, setData] = useState<IData[]>([]);
  const [frequencyFilterSelected, setFrequencyFilterSelected] = useState([
    "recorrente",
    "eventual",
  ]);

  const paramns = useLocation();

  const pageData = useMemo(() => {
    return paramns.pathname === "/list/entry-balance"
      ? { title: "Entradas", lineColor: "#03BB85", data: gains }
      : { title: "Saídas", lineColor: "#FF6961", data: expenses };
  }, [paramns.pathname]);

  const years = useMemo(() => {
    const uniqueYears: number[] = [];
    [...expenses, ...gains].forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      if (!uniqueYears.includes(year)) uniqueYears.push(year);
    });
    return uniqueYears.map((year) => ({ value: year, label: year }));
  }, []);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => ({
      value: index + 1,
      label: month,
    }));
  }, []);

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = frequencyFilterSelected.includes(frequency);
    setFrequencyFilterSelected((prev) =>
      alreadySelected
        ? prev.filter((item) => item !== frequency)
        : [...prev, frequency]
    );
  };

  const handleMonthSelected = useCallback((month: string) => {
    setMonthSelected(Number(month));
  }, []);

  const handleYearSelected = useCallback((year: string) => {
    setYearSelected(Number(year));
  }, []);

  useEffect(() => {
    const { data } = pageData;
    if (!data || data.length === 0) return;

    const filteredData = data.filter((item) => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return (
        month === monthSelected &&
        year === yearSelected &&
        frequencyFilterSelected.includes(item.frequency)
      );
    });

    const formattedData = filteredData.map((item) => ({
      id: uuidv4(), // Generate ID here directly
      description: item.description,
      amountFormatted: formatCurrency(Number(item.amount)),
      frequency: item.frequency,
      dateFormatted: formatDate(item.date),
      tagColor: item.frequency === "recorrente" ? "#03BB85" : "#FF6961",
    }));

    setData(formattedData);
  }, [pageData, monthSelected, yearSelected, frequencyFilterSelected]);

  return (
    <ContainerSC>
      <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
        <SelectedInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectedInput
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>
      <FiltersSC>
        <button
          type="button"
          className={`tag-filter tag-filter-recurrent ${
            frequencyFilterSelected.includes("recorrente") ? "tag-actived" : ""
          }`}
          onClick={() => handleFrequencyClick("recorrente")}
        >
          Recorrentes
        </button>
        <button
          type="button"
          className={`tag-filter tag-filter-eventual ${
            frequencyFilterSelected.includes("eventual") ? "tag-actived" : ""
          }`}
          onClick={() => handleFrequencyClick("eventual")}
        >
          Eventuais
        </button>
      </FiltersSC>
      <ContentHistorySC>
        {data.map((item) => (
          <HistoryCard
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dateFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </ContentHistorySC>
    </ContainerSC>
  );
};

export default List;
