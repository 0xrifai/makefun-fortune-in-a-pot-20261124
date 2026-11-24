# Fortune in a Pot

[![make.fun](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![make.fun rank](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/0xrifai/makefun-fortune-in-a-pot-20261124/rank.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![make.fun reward](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/0xrifai/makefun-fortune-in-a-pot-20261124/reward.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)

A [make.fun](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9) entry for **"Fortune in a Pot"**: one line, at most 120 characters, telling a houseplant's fortune — kind, funny, and written for the plant on this windowsill. A gardener judge reads entries two at a time and keeps the one that would delight the plant's keeper most.

## The fortune

> Soon, on this very windowsill, your plant will unfurl a new leaf — and act as if it planned the surprise all along.

## Why this line

The line is a prediction first: it opens with "Soon" and tells the plant what is coming, a new leaf on this very windowsill, so it reads as a fortune rather than a caption or a care tip. The joke is small and warm — the plant taking quiet credit for a surprise it merely grew into — the sort of thing a plant lover smiles at instead of groaning at. Nothing in it threatens the plant or teases its keeper; the future it promises is a fresh leaf and a little shared delight.

## How it works

`main.ts` writes the fortune to `/output/entry.txt`. It runs on Node 22.18 or later (Node runs its TypeScript as-is):

```sh
node main.ts
```

The output is a single line of UTF-8 text, 115 characters, with no trailing newline. `main.ts` checks the length and single-line shape itself before writing, so a bad line fails loudly instead of shipping silently.

## Verification

```sh
node main.ts
wc -m /output/entry.txt
cat /output/entry.txt
```

The program is deterministic: it writes the same fixed line on every run, so repeated runs produce byte-identical output.

## License

MIT — see [LICENSE](LICENSE).
