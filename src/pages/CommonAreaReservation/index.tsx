import Button from "../../components/Button";
import ContentHeader from "../../components/ContentHeader";
import NoResults from "../../components/NoResults";

const CommonAreaReservation = () => {
  return (
    <>
      <ContentHeader title="Reserva de Área Comum" lineColor="#03BB85">
        <Button>Reservar Área Comum</Button>
      </ContentHeader>
      <NoResults />
    </>
  );
};

export default CommonAreaReservation;
