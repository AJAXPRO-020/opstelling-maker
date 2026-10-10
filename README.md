# AjaxPro Opstellingmaker

Statische HTML/CSS/JavaScript-tool voor een Ajax-opstelling en posterexport. `index.html`, `script.js` en `styles.css` bevatten de app; `assets/players/` bevat lokale spelerfoto's en memes, `Favicon/` de iconen. De centrale spelerslijst komt uit `https://ajaxpro.fans/api/players` met lokale fallback. Bewaar beide bronnen; eigen spelerassets horen in Git.

## Lokaal

Start `python3 -m http.server 8000 --bind 127.0.0.1` vanuit de projectroot en open http://localhost:8000. Geen dependencies vereist. `sh scripts/build-public.sh` maakt de beperkte publicatiemap `dist`; dit wist alleen de bestaande gegenereerde `dist`. Voor gewone bronreview is bouwen niet nodig.

## Hosting en Git

Productie: https://opstelling.ajaxpro.fans. Vercel `opstelling-maker`, ID `prj_EFXWwcGjfTLe8WJLbSuqsrbF9IKA`, team `ajaxpro` / `team_zAAokeaxc6bbpUXAoHfJlWcl`. `.vercel/project.json` blijft lokaal. Build `sh scripts/build-public.sh`, output `dist`, vastgelegd in `vercel.json`.

GitHub `ajaxpro020/opstelling-maker`, productiebranch `main`; Git-deploys staan ingeschakeld. **Niet naar main pushen zonder akkoord: dit kan productie bijwerken.** De actieve productie-deployment `dpl_6Uds4fiHjsRKbmJeFWRyZDmdfVo4` kwam via CLI op commit `71d5c14a` met dirty bron. Een gelijk commitnummer bewijst dus geen identieke bron.

De oudere Netlify-site `ajaxpro-lineup-maker` (`77789535-14c6-40ba-a65d-646b51ef1e37`) en `netlify.toml` blijven behouden als historische omgeving. Het primaire domein wordt nu door Vercel bediend. Geen nieuwe providerlink of domein nodig.

## Open werk

Voor de migratie stonden wijzigingen in spelerslijst/posterexport/publicatieconfig en 35 nieuwe spelerassets lokaal. Deze worden bewaard in een lokale commit; er wordt niets gepubliceerd. Controleer opstelling, centrale fallback en posterdownload vóór een latere deploy. Voor exacte productieverschillen is een afzonderlijke review nodig.
