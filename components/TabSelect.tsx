import Image from "next/image";
import React from "react";

interface TabSelectProps {
  accountType: string;
  setAccountType: React.Dispatch<React.SetStateAction<string>>;
}
export default function TabSelect({
  accountType,
  setAccountType,
}: TabSelectProps) {
  return (
    <div className="w-full flex justify-center my-3">
      <div className="flex border-gray-200 bg-slate-100 dark:bg-bgDark p-2 rounded-md">
        <button
          type="button"
          className={`px-6 flex justify-center flex-col items-center !my-1 !py-1 border-button ${
            accountType === "user"
              ? "bg-primary text-white !font-medium dark:border-defaultborder/10 "
              : "text-gray-600"
          } focus:outline-none`}
          onClick={() => setAccountType("user")}
        >
          <p>User</p>
          <Image
            src={"/assets/images/apps/user.png"}
            alt="user"
            width={30}
            height={30}
          />
        </button>
        <button
          type="button"
          className={`px-4 flex justify-center flex-col items-center !my-1 !py-1 border-button ${
            accountType === "partner"
              ? "bg-primary text-white !font-medium dark:border-defaultborder/10 "
              : "text-gray-600"
          } focus:outline-none`}
          onClick={() => setAccountType("partner")}
        >
          <p>Partner</p>
          <Image
            src={"/assets/images/apps/partner.png"}
            alt="partner"
            width={30}
            height={30}
          />
        </button>
      </div>
    </div>
  );
}
