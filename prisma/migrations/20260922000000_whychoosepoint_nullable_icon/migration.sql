-- WhyChoosePoint.iconName was required, but some points (e.g. "Post-Procedure
-- Follow-Up") should be rendered without an icon at all. Make the column
-- nullable so the icon can be removed via the CMS instead of forcing every
-- point to carry one.
ALTER TABLE "public"."WhyChoosePoint" ALTER COLUMN "iconName" DROP NOT NULL;
