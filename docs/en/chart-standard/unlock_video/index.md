# Unlock animation

**Please note the difference between unlock animation and video background**

The unlock animation allows a video to be played before the player’s initial playthrough of the chart.

## Usage

The UI is currently not ready and is slightly cumbersome. The following steps are recommended for Windows.

If your chart already has `info.yml`, please skip to step three.

1.  Import your chart in Phira.
2.  Search for your chart ID in `data/charts/custom` (e.g. `9067228`), locate the corresponding folder, find `info.yml` in the folder, and copy it to your chart folder (Note that the folder mentioned here is not the folder that you get after importing into Phira, it’s the folder that you extracted from pez).
3.  Add the unlock animation to your chart folder (Note that the folder mentioned here is not the folder that you get after importing into Phira, it’s the folder that you extracted from pez), assuming the file name is `unlock.mp4`.
4.  Find the line `unlockVideo: null` in `info.yml` and replace it with `unlockVideo: unlock.mp4` (or add that line if it’s not there).
5.  Re-import your chart.
