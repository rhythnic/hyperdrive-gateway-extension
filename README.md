# hypercore-gateway-extension
A browser extension for interacting with hypercore gateways

## Build

```
npm install
npm run build
```

## Install

1. Go to `chome://extensions/` in a Chromium-based browser
2. Enable developer mode (toggle in top right corner)
3. Click "Load unpacked" and select this extension folder
4. Pin extension to toolbar

## Use
Click on the extension in the toolbar and enter a `hyper` uri for a website distributed as a hyperdrive.
Websites are able to use `hyper://` links for external pages and ECMAScript modules from other hyperdrives.

![Hypercore gateway extension](/images/extension.png)