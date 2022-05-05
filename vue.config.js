module.exports = {
    publicPath: "./",
    css: {
        loaderOptions: {
            scss: {
                // sass-loader v8- key 是data
                // sass-loader v8中 key 是prependData
                // sass-loader v1o+ key 是additionalData
                prependData: `@use "~/src/styles/element/index.scss" as *;`
            },
        },
    }
};
