import Button from "../../components/Button";
import ContentHeader from "../../components/ContentHeader";
import NoResults from "../../components/NoResults";

const Complaints = () => {
  return (
    <>
      <ContentHeader title="Painel de Reclamações" lineColor="#FF6961">
        <Button>Abrir Reclamação</Button>
      </ContentHeader>

      <NoResults />
    </>
  );
};

export default Complaints;
