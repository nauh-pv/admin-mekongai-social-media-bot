import { useAppContext } from "@/shared/context/ContextApp";
import { RootState } from "@/shared/redux/store";
import { Spin, TreeSelect } from "antd";
import { useSelector } from "react-redux";

const { SHOW_PARENT } = TreeSelect;
const TreeSelectPage = ({
  listPagesId,
  setListPagesId,
  setAccessTokenPageSelect,
  onChangeFunction,
}: any) => {
  const loadingListPage = useSelector(
    (state: RootState) => state.loading.listPage
  );

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Spin
        spinning={loadingListPage}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />
    </div>
  );
};
export default TreeSelectPage;
