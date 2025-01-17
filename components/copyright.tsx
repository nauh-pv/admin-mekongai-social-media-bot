import Link from "next/link";

const Copyright = () => {
  return (
    <div className="text-center landing-main-footer py-4 opacity-[0.87]">
      <span className="text-[#8c9097] dark:text-white/50 text-[0.9375rem]">
        Copyright © 2024<span id="year"></span>. Designed with{" "}
        <span className="fa fa-heart text-danger"></span>
        by&nbsp;
        <Link href="#!" className="!text-primary font-semibold">
          <u>MekongAI</u>&nbsp;
        </Link>
        All rights reserved
      </span>
    </div>
  );
};
export default Copyright;
