import { getLocale } from "next-intl/server";
import { getContact, getNavItems } from "@/lib/cms/content";
import { NavbarClient } from "@/components/layout/NavbarClient";

export async function Navbar() {
  const locale = await getLocale();
  const contact = await getContact(locale);
  const mainNav = await getNavItems();

  return <NavbarClient contact={contact} mainNav={mainNav} />;
}
