import React from "react";
import { Modal } from "antd";

interface DeleteProps {
  modal: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  listFileChange?: any[];
  handelFunction: any;
  t: any;
}

const ModalConfirm = ({
  modal,
  open,
  setOpen,
  listFileChange,
  handelFunction,
  t,
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
          onOk={handelFunction}
          onCancel={handleCancel}
        >
          {modal === `${t("modal.deleteFile.delete")}` && (
            <p>
              {t("modal.deleteFile.part1")}
              <label className="text-red">
                &nbsp;{t("modal.deleteFile.delete")}&nbsp;
              </label>
              {t("modal.deleteFile.part2")}
              <label>
                {listFileChange &&
                  listFileChange.length > 0 &&
                  listFileChange.map((item, index) => {
                    return (
                      <label key={index} className="text-blue">
                        {item.fileName}
                        {index < listFileChange.length - 1 && ", "}&nbsp;
                      </label>
                    );
                  })}
              </label>
              {t("file")}?
            </p>
          )}
          {modal === `${t("modal.subscribeComment.title")}` && (
            <p>
              {t("modal.subscribeComment.part1")}
              <label className="text-red">
                &nbsp;{t("modal.subscribeComment.comment")}&nbsp;
              </label>
              {t("modal.subscribeComment.part2")}
            </p>
          )}
          {modal === `${t("modal.unsubscribeComment.title")}` && (
            <p>
              {t("modal.unsubscribeComment.part1")}
              <label className="text-red">
                &nbsp;{t("modal.unsubscribeComment.comment")}&nbsp;
              </label>
              {t("modal.unsubscribeComment.part2")}
            </p>
          )}
          {modal === `${t("modal.subscribeMessage.title")}` && (
            <p>
              `${t("modal.subscribeMessage.part1")}`
              <label className="text-red">
                &nbsp;`${t("modal.unsubscribeComment.title")}`&nbsp;
              </label>
              r`${t("modal.unsubscribeComment.part2")}`
            </p>
          )}
          {modal === `${t("modal.unsubscribeMessage.title")}` && (
            <p>
              `${t("modal.unsubscribeMessage.part1")}`
              <label className="text-red">
                &nbsp; `${t("modal.unsubscribeMessage.message")}` &nbsp;
              </label>
              `${t("modal.unsubscribeMessage.part2")}`
            </p>
          )}
        </Modal>
      )}
    </>
  );
};

export default ModalConfirm;
