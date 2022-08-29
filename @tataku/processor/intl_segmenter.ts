import { Denops } from "https://deno.land/x/denops_std@v3.8.1/mod.ts";
import {
  isObject,
  isString,
} from "https://deno.land/x/unknownutil@v2.0.0/mod.ts";

export async function run(
  denops: Denops,
  options: Record<string, unkown>,
  source: string[],
): Promise<string[]> {
  if (!isOption(options)) {
    throw new Error(`Option must have "source" and "target" property.`);
  }

  const segmenter = new Intl.Segmenter(options.locale, {
    granularity: options.granularity ?? "sentence",
  });

  return Array.from(segmenter.segment(source.join(""))).map((s) => s.segment);
}

type Option = {
  granularity?: "grapheme" | "word" | "sentence";
  locale: string;
};

function isOption(x): x is Option {
  return isObject(x, isString) && isString(x.locale);
}
