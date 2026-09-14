-- The floating call bubble previously shared Contact.phoneHref with every
-- other phone link on the site (Contact page, Footer, CTA buttons) — one
-- number could not serve both "the main published number" and "the number
-- the floating quick-call button dials" independently.
ALTER TABLE "public"."Contact" ADD COLUMN "floatingCallHref" TEXT NOT NULL DEFAULT '';
