import { Denops } from "https://deno.land/x/denops_std@v5.1.0/mod.ts";
import {
  $const,
  $object,
  $opt,
  $string,
  $union,
  access,
} from "https://esm.sh/lizod@0.2.7/";

const isOption = $object({
  granularity: $opt(
    $union([$const("grapheme"), $const("word"), $const("sentence")]),
  ),
  locale: $string,
});

const processor = (_: Denops, option: unknown) => {
  const ctx = { errors: [] };
  if (!isOption(option, ctx)) {
    throw new Error(
      ctx.errors
        .map((e) => `error at ${e} ${access(option, e)}`)
        .join("\n"),
    );
  }
  const segmenter = new Intl.Segmenter(option.locale, {
    granularity: option.granularity ?? "sentence",
  });

  return new TransformStream<string[]>({
    transform: (chunk: string[], controller) => {
      controller.enqueue(
        Array.from(
          segmenter.segment(chunk.join("")),
        ).map((s: Intl.SegmentData) => s.segment),
      );
    },
  });
};

export default processor;
