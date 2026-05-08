import { z } from "zod";
import { sanitizeText } from "@/lib/utils";

const cleanString = z.string().min(1).max(120).transform(sanitizeText);
const optionalClean = z
  .string()
  .max(2000)
  .optional()
  .default("")
  .transform(sanitizeText);

export const leadSchema = z.object({
  name: cleanString,
  email: z.string().email().max(160).transform(sanitizeText),
  phone: z.string().min(7).max(32).transform(sanitizeText),
  businessType: cleanString,
  serviceInterest: cleanString,
  budgetRange: cleanString,
  timeline: cleanString,
  projectDetails: optionalClean,
  preferredContactMethod: cleanString,
  source: z.string().max(80).optional().default("website").transform(sanitizeText),
});

export type LeadPayload = z.infer<typeof leadSchema>;

export const chatbotIntakeSchema = leadSchema.extend({
  projectGoals: optionalClean,
});
