import React from "react";
import { Modal } from "antd";
import TreeSelectPage from "@/components/TreeSelectPage";

interface DeleteProps {
  modal: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  listFileChange?: any[];
  handelFunction: any;
  setListPagesId?: React.Dispatch<React.SetStateAction<string[]>>;
}

const ModalConfirmUsedForPage = ({
  modal,
  open,
  setOpen,
  listFileChange,
  handelFunction,
  setListPagesId,
}: DeleteProps) => {
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <Modal
          title={modal}
          open={open}
          onOk={() => handelFunction(listFileChange)}
          onCancel={handleCancel}
        >
          <div>
            <p className="mb-2">
              You want to register file&nbsp;
              <label className="text-red">
                {listFileChange &&
                  listFileChange.length > 0 &&
                  listFileChange.map((item, index) => (
                    <span key={index}>
                      {item.fileName}
                      {index < listFileChange.length - 1 && ","}&nbsp;
                    </span>
                  ))}
              </label>
              to use for pages:
            </p>
            <TreeSelectPage {...{ setListPagesId }} />
          </div>
        </Modal>
      )}
    </>
  );
};

export default ModalConfirmUsedForPage;
