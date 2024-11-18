import Button from "../../components/Button";
import ContentHeader from "../../components/ContentHeader";
import NoResults from "../../components/NoResults";

const NoticeBoard = () => {
  return (
    <>
      <ContentHeader title="Mural de Aviso" lineColor="#FF6961">
        <Button>Criar Aviso</Button>
      </ContentHeader>

      <NoResults />
    </>
  );
};

export default NoticeBoard;
