import { ContainerSC, TagSC } from "../styles/styled";

interface IMoradorProps {
  tagColor: string;
  name: string;
  apartment: string;
  phone: string;
}

const ResidentCard = ({ tagColor, name, apartment, phone }: IMoradorProps) => {
  return (
    <ContainerSC>
      <TagSC color={tagColor} />
      <div>
        <span>{name}</span>
        <small>Apartamento: {apartment}</small>
      </div>
      <h3>{phone}</h3>
    </ContainerSC>
  );
};

export default ResidentCard;
