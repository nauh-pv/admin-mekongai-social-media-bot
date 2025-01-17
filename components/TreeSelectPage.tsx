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
  const context = useAppContext();
  const listAccountFB = context.listAccountFB;
  const loadingListPage = useSelector(
    (state: RootState) => state.loading.listPage
  );

  const onChange = (newValue: string[]) => {
    let allSelectedValues = [...newValue];
    listAccountFB.forEach((item) => {
      if (newValue.includes(item.value)) {
        const childValues =
          item.children?.map((child: any) => child.value) || [];

        const valueSelect = allSelectedValues.filter(
          (itemSelect) => itemSelect !== item.value
        );
        allSelectedValues = [...valueSelect, ...childValues];
      }
      if (item.children && item.children.length > 0) {
        item.children.forEach((itemChild: any) => {
          if (itemChild.value.includes(allSelectedValues[0])) {
            setAccessTokenPageSelect &&
              setAccessTokenPageSelect(itemChild.accessToken);
          }
        });
      }
    });
    setListPagesId(allSelectedValues);
  };

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
      <TreeSelect
        {...{
          treeData: listAccountFB,
          value: listPagesId,
          onChange: onChangeFunction ? onChangeFunction : onChange,
          treeCheckable: true,
          showCheckedStrategy: SHOW_PARENT,
          placeholder: loadingListPage ? "Loading..." : "Select group/clan",
          style: {
            width: "100%",
          },
          disabled: loadingListPage,
        }}
      />
    </div>
  );
};
export default TreeSelectPage;
