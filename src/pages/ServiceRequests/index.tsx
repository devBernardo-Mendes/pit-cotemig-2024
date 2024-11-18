import Button from "../../components/Button";
import ContentHeader from "../../components/ContentHeader";
import NoResults from "../../components/NoResults";

const ServiceRequests = () => {
  return (
    <>
      <ContentHeader
        title="Solicitações de Ordem de Serviço"
        lineColor="#FF6961"
      >
        <Button>Cadastrar Solicitação de Ordem de Serviço</Button>
      </ContentHeader>
      <NoResults />
    </>
  );
};

export default ServiceRequests;
