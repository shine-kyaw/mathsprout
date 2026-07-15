# MathSprout live-game audit

Audit target: `https://team-06-game-ivory.vercel.app/`

## Evidence method

The public HTML and referenced production JavaScript assets were fetched and inspected. Search-engine discovery did not expose an indexed copy, and the available audit environment could not safely complete a visual browser playthrough. Accordingly, this report separates code evidence from live-behavior evidence.

## Found in the deployed build

- A bilingual English and Simplified Chinese interface structure.
- Welcome, child-profile, world-map, level-introduction, activity, completion and Parent Area strings/components.
- Seven named worlds with 35 level identifiers—five per world.
- Early-mathematics content covering counting, quantity matching, number order, shapes, patterns, number lines, addition, number bonds, subtraction, comparison, measurement, sharing, equal groups and mixed problems.
- Browser-local state/progress structures.
- Sound, speech, difficulty and reduced-motion setting structures.
- A non-diagnostic notice in the Parent Area.
- Server-rendered HTML that initially presents a MathSprout loading shell.

## Seven-world structure

1. Seedling Meadow
2. Builders’ Forest
3. River Bridge
4. Harvest Valley
5. Mountain Market
6. Orchard Village
7. Great Garden Festival

## Not independently verified

- A full start-to-finish playthrough.
- Actual unlock behavior.
- Cross-device behavior on desktop, tablet and phone.
- Persistence after closing/reopening the browser.
- Sound, speech, Parent Area gate and difficulty-control behavior.
- Keyboard and assistive-technology behavior inside the game.
- Live screenshots.

The team website therefore uses “Found in current build” and “Live verification pending” as separate public states.

## Not found in the inspected bundle

- Starting-Point Activity / placement behavior.
- Jigsaw, tangram, maze, matching-card or board-game activities.

These are labelled “Planned,” never “Current.”

## Immediate game QA recommendations

1. Verify that the loading shell reliably reaches the welcome screen on current Chrome, Safari and Edge.
2. Complete one level in each world and record the expected unlock/save result.
3. Test English/Chinese switching at every major screen.
4. Verify refresh, browser-close and second-profile behavior for local progress.
5. Test all audio, reduced-motion and Parent Area controls with keyboard and touch.
6. Capture authentic desktop, tablet and phone screenshots only after the above pass.

