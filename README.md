## Note: Currently not working

## Chegg Device Limit Bypass

Before:
![screenshot showing access to chegg being blocked and scrolling being disabled](https://github.com/digitaldisarray/CheggDeviceLimitBypass/blob/04b15fed58dfae651ebb605f2e3889be41329dce/img/before.png)

After:
![screenshot showing access to chegg being restored and scrolling being restored](https://github.com/digitaldisarray/CheggDeviceLimitBypass/blob/04b15fed58dfae651ebb605f2e3889be41329dce/img/after.png)

## How it works
The script is very simple. First, it waits for the popup that blocks the page to appear. When it appears, it is removed by the script. Scrolling is re-enabled by removing the CSS class from the body that gives it the attribute "overflow: hidden".
