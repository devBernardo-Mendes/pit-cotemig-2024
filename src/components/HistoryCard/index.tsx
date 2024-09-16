import { ContainerSC, TagSC } from "./styles/styled";

interface IProps {
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

const HistoryCard = ({ tagColor, amount, subtitle, title }: IProps) => {
  return (
    <ContainerSC>
      <TagSC color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <h3>{amount}</h3>
    </ContainerSC>
  );
};

export default HistoryCard;
