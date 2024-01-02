import { Locale } from "../../i18n.config";

export function getLangField<T>(
  item: T | null,
  fieldName: string,
  lang: Locale
): string | undefined {
  const fullKey = (fieldName + lang) as keyof T;
  return item ? (item[fullKey] as string) : "";
}
