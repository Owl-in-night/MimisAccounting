import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import IconLight from "../../../public/icons/IconLight";


export default function Footer() {
  const { t } = useTranslation("global");
  const { pathname } = useLocation();


  // Oculta el footer en las rutas de Registrese y Acceder
  if ([`/Registrese`, `/Acceder`].includes(pathname)) return null;

 

  // Enlaces reutilizables
  const links = [
    { href: "https://flowbite.com/", text: t("footer.resources.links.0.name") },
    { href: "https://tailwindcss.com/", text: t("footer.resources.links.1.name") },
    { href: "https://github.com/Owl-in-night?tab=repositories", text: t("footer.followUs.links.0.name") },
    { href: "https://discord.gg/RY7N6wgH", text: t("footer.followUs.links.1.name") },
    { href: "/privacy-policy", text: t("footer.legal.links.0.name") },
    { href: "/terms&conditions", text: t("footer.legal.links.1.name") },
  ];

  return (
    <footer className="w-full">
      <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6">
            <a href="/" className="flex items-center">
              <IconLight className="h-16 w-16" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
                {t("footer.resources.title")}
              </h2>
              <ul>
                {links.slice(0, 2).map((link) => (
                  <li key={link.href} className="mb-4">
                    <a href={link.href} className="hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
                {t("footer.followUs.title")}
              </h2>
              <ul>
                {links.slice(2, 4).map((link) => (
                  <li key={link.href} className="mb-4">
                    <a href={link.href} className="hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
                {t("footer.legal.title")}
              </h2>
              <ul>
                {links.slice(4).map((link) => (
                  <li key={link.href} className="mb-4">
                    <a href={link.href} className="hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400 dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {t("footer.footerText")}
          </span>
        </div>
      </div>
    </footer>
  );
}
