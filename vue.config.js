module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            exclude:[/.*\.mp3$/,/.*\.wav$/]
            // ...other Workbox options...
        }
    }
}
