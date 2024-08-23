import { ContainerSC, TagSC } from "./styles/styled";

interface IProps {
  cardColor: string;
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

const HistoryCard = ({
  cardColor,
  tagColor,
  amount,
  subtitle,
  title,
}: IProps) => {
  return (
    <ContainerSC color={cardColor}>
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
