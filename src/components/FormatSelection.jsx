import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function FormatSelection() {
    const { t } = useTranslation();
    const formatSelectionData = [
        {
            title: t("formatSelection.items.0.title"),
            subtitle: t("formatSelection.items.0.subtitle"),
            text: t("formatSelection.items.0.text")
        },
        {
            title: t("formatSelection.items.1.title"),
            subtitle: t("formatSelection.items.1.subtitle"),
            text: t("formatSelection.items.1.text")
        },
        {
            title: t("formatSelection.items.2.title"),
            subtitle: t("formatSelection.items.2.subtitle"),
            text: t("formatSelection.items.2.text")
        },
        {
            title: t("formatSelection.items.3.title"),
            subtitle: t("formatSelection.items.3.subtitle"),
            text: t("formatSelection.items.3.text")
        },
    ]
    return(
        <section className="typography py-12 text-white lg:py-24">
            <div className="max-w-5xl mx-auto">
                <h2 className="uppercase text-4xl font-bold mb-4 text-center md:text-5xl">
                    {t("formatSelection.title")}
                </h2>
                <p className="uppercase text-dark text-center mb-6 lg:mb-12">{t("formatSelection.subtitle")}</p>
                <div className="flex flex-col gap-4 mb-6 lg:gap-4 lg:mb-12 lg:flex-row">
                    {formatSelectionData.map((format, index) => (
                        <div key={index} className="bg-back rounded-md px-8 py-8 mx-16 lg:py-12 lg:mx-0">
                            <h3 className="text-2xl uppercase pb-2 lg:text-3xl"> {format.title} </h3>
                            <h4 className="uppercase text-accent text-xs pb-4"> {format.subtitle} </h4>
                            <p className="text-dark"> {format.text} </p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <Link
                      to="/movies"
                      className="button flex items-center gap-2  bg-white text-back"
                    >
                      {t("formatSelection.ctaParticipate")}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default FormatSelection;