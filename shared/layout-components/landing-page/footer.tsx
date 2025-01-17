import Image from "next/image";
import Link from "next/link";
const Footer = ({ t }: any) => {
  return (
    <section className="section landing-footer text-white text-[0.813rem] dark:!bg-bgDark">
      <div className="container">
        <div className="separator-animated animated-true mb-5"></div>
        <div className="grid grid-cols-12 gap-6">
          <div className="xl:col-span-4 col-span-12">
            <div className="px-6">
              <p className="font-semibold mb-4">
                <Link aria-label="anchor" href="/components/dashboards/crm/">
                  <Image
                    src="/assets/images/brand-logos/logo.png"
                    alt="logo"
                    width={200}
                    height={200}
                  />
                </Link>
              </p>
              <p className="mb-2 opacity-[0.6] font-normal">
                {t("footer.description1")}
              </p>
              <p className="mb-0 opacity-[0.6] font-normal">
                {t("footer.description2")}
              </p>
            </div>
          </div>
          {t("footer.itemMenu", { returnObjects: true }).map(
            (item: any, index: any) => {
              return (
                <div className="xl:col-span-2 col-span-12" key={index}>
                  <div className="px-6">
                    <h6 className="font-semibold text-[1rem] mb-4">
                      {item.group}
                    </h6>
                    <ul className="list-unstyled opacity-[0.6] font-normal landing-footer-list">
                      {item.childItem &&
                        item.childItem.map((child: any, indexChild: any) => {
                          return (
                            <li key={indexChild}>
                              <Link href="#!" className="text-white">
                                {child.title}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              );
            }
          )}
          {t("footer.itemMenu1", { returnObjects: true }) && (
            <div className="xl:col-span-4 col-span-12">
              <div className="px-6">
                <h6 className="font-semibold text-[1rem] mb-2">
                  {t("footer.itemMenu1.group")}
                </h6>
                <ul className="list-unstyled font-normal landing-footer-list">
                  {t("footer.itemMenu1.childItem", { returnObjects: true }).map(
                    (item: any, index: any) => {
                      return (
                        <li key={index}>
                          <Link
                            href={item.path}
                            className="text-white opacity-[0.6]"
                          >
                            <i
                              className={`${item.cssIcon} me-1 align-middle`}
                            ></i>
                            {item.title}
                          </Link>
                        </li>
                      );
                    }
                  )}
                  <li className="mt-4 !mb-0">
                    <p className="mb-2 font-semibold opacity-[0.8] text-[1rem]">
                      {t("footer.followUs", { returnObjects: true })}
                    </p>
                    <div className="mb-0">
                      <div className="btn-list">
                        {t("footer.itemMenu2", { returnObjects: true }).map(
                          (item: any, index: any) => {
                            return (
                              <button
                                key={index}
                                aria-label="button"
                                type="button"
                                className={`ti-btn ti-btn-sm !mb-0 ${item.cssIcon} me-[0.365rem]`}
                              >
                                <i className={`${item.icon} font-bold`}></i>
                              </button>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Footer;
