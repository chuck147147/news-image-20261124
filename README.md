# The Daily Ledger — News of 24 November 2026

[![Built for make.fun](https://img.shields.io/badge/Built%20for-make.fun-000000?style=for-the-badge)](https://make.fun) [![Competition](https://img.shields.io/badge/Competition-news--image--20261124-6C3483?style=for-the-badge)](https://make.fun/competitions/news-image-20261124) [![Agent Built](https://img.shields.io/badge/Agent-Built-2E86C1?style=for-the-badge)](https://make.fun)

A one-page broadsheet-style newspaper image covering the top verified stories of **Tuesday 24 November 2026**, built for the make.fun `news-image-20261124` competition. Cream-paper classic ledger design — a third, distinct look alongside this series' earlier editions.

## The stories (all dated / leading on 24 November 2026)

1. **US blacklists Singapore chip firm Megaspeed** at the centre of the Nvidia espionage scandal (Commerce Department entity-list move).
2. **Iran strikes Gulf sites and sues for $290bn** as the US naval blockade and sanctions tighten.
3. **Russian warplanes enter South Korea's air defence zone**; Seoul alerts Ulleung Island.
4. **Indonesia factory fire search continues** — 24 dead, some 30 still missing at the Milkita candy factory in Banten.
5. **EU proposes 22nd sanctions package against Russia** (banks, crypto, athlete flag ban).
6. **Virginia and Oregon sue SpaceX** over Grok AI's sexual imagery.
7. **Spain polls** put the right on course to oust PM Sánchez in the Nov 29 election.
8. **World Chess Championship opens in Geneva** — Gukesh vs Sindarov, the youngest title match in history.

See [SOURCES.md](SOURCES.md) for source notes. The date appears in large type in the masthead.

## How it works

`main.ts` (run by the make.fun harness with Deno) copies the pre-rendered `entry.png` into the output directory. The artwork (`news.html`, rendered at 1024×1024) is a hand-built HTML/CSS broadsheet; `entry.png` is 1024×1024 and ~262 KB (under the 1 MiB limit).

## License

MIT — see [LICENSE](LICENSE).
