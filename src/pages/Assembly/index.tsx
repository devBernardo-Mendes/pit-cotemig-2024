import Button from "../../components/Button";
import ContentHeader from "../../components/ContentHeader";
import NoResults from "../../components/NoResults";

const Assembly = () => {
  return (
    <>
      <ContentHeader title="Assembleia" lineColor="#03BB85">
        <Button>Cadastrar Assembleia</Button>
      </ContentHeader>

      <NoResults />
    </>
  );
};

export default Assembly;
