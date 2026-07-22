import {
  LogoShape,
  PresentationTemplate,
} from "@prisma/client";

import { TemplateId } from "@/components/presentation/templates";
import { LogoShape as UILogoShape } from "@/components/presentation/branding";

export const templateToPrisma: Record<
  TemplateId,
  PresentationTemplate
> = {
  original: PresentationTemplate.ORIGINAL,
  blue: PresentationTemplate.BLUE,
  black: PresentationTemplate.BLACK,
  green: PresentationTemplate.GREEN,
  custom: PresentationTemplate.CUSTOM,
};

export const logoShapeToPrisma: Record<
  UILogoShape,
  LogoShape
> = {
  square: LogoShape.SQUARE,
  rounded: LogoShape.ROUNDED,
  circle: LogoShape.CIRCLE,
};