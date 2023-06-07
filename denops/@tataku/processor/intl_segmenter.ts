import { Denops } from "https://deno.land/x/denops_std@v5.0.0/mod.ts";
import {
  isObject,
  isString,
} from "https://deno.land/x/unknownutil@v2.1.1/mod.ts";
import { Processor } from "https://raw.githubusercontent.com/Omochice/tataku.vim/master/denops/tataku/interface.ts";

export default class implements Processor {
  constructor(private readonly option: Record<string, undefined>) {
    if (!isOption(option)) {
      throw new Error(
        `Option must have "locale" as string: ${JSON.stringify(option)}`,
      );
    }
  }

  async run(
    _denops: Denops,
    source: string[],
  ): Promise<string[]> {
    const segmenter = new Intl.Segmenter(this.option.locale, {
      granularity: this.option.granularity ?? "sentence",
    });

    return Array.from(segmenter.segment(source.join(""))).map((s) => s.segment);
  }
}

type Option = {
  granularity?: "grapheme" | "word" | "sentence";
  locale: string;
};

function isOption(x): x is Option {
  return isObject(x, isString) && isString(x.locale);
}
