import ButtonGradient from "@/components/ButtonGradient";
import { getSetCostToken } from "@/services/apiServices";
import Seo from "@/shared/layout-components/seo/seo";
import { Input, message } from "antd";
import { Fragment, useState } from "react";

const PaymentManager = () => {
  const [balanceMoney, setBalanceMoney] = useState<number>(10000);
  const [costToken, setCostToken] = useState<number>(3);

  const handleChangeCostToken = async () => {
    try {
      const res = await getSetCostToken(costToken);
      console.log(res);
      if (res.status === 200) {
        message.success("Cập nhật thành công.");
        setCostToken(res.data.new_value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Fragment>
      <Seo title={"Crm"} />
      <div className="w-[100%] flex justify-center items-center mt-10 h-[calc(100vh-11.9rem)]">
        <div className="flex flex-col min-w-[300px] w-[40%] gap-3 p-4 rounded-md bg-white">
          <div className="flex justify-between">
            <p className="text-[14px] text-black h-[100%] mb-3">Quy đổi</p>
          </div>
          <div className="flex flex-col justify-between -mt-3">
            <div className="flex gap-2">
              <div className="w-[47%]">
                <p className="text-[28px] font-extrabold flex gap-2 items-center">
                  <Input
                    className="custom-input !text-[28px]"
                    placeholder="Enter cost token..."
                    value={balanceMoney}
                    onChange={(e) => setBalanceMoney(+e.target.value)}
                  />
                  <label className="text-sky-600 text-sm">&nbsp;VNĐ</label>
                </p>
              </div>
              <p className="flex items-center">-</p>
              <div className="w-[47%]">
                <p className="text-[28px] font-black flex gap-2 items-center">
                  {(balanceMoney * costToken).toLocaleString("vi-VN")}
                  <label className="text-green text-sm">&nbsp;Token</label>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label>Tỉ lệ quy đổi</label>
              <Input
                className="custom-input"
                placeholder="Enter cost token..."
                value={costToken}
                onChange={(e) => setCostToken(+e.target.value)}
              />
            </div>
            <div className="px-4 pt-6 flex justify-center items-center">
              <ButtonGradient
                {...{
                  buttonName: "Cập nhật",
                  handleButton: handleChangeCostToken,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
PaymentManager.layout = "Contentlayout";
export default PaymentManager;
