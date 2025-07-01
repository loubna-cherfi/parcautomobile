const Encore = require("@symfony/webpack-encore");
const FosRouting = require('fos-router/webpack/FosRouting');


// const FosRouting = require('fos-router/webpack/FosRouting');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "dev");
}

Encore
  .addPlugin(new FosRouting())

  // .addPlugin(new FosRouting())
  // directory where compiled assets will be stored
  .setOutputPath("public/build/")
  // public path used by the web server to access the output path
  .setPublicPath("/build")
  // only needed for CDN's or subdirectory deploy
  //.setManifestKeyPrefix('build/')

  /*
   * ENTRY CONFIG
   *
   * Each entry will result in one JavaScript file (e.g. app.js)
   * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
   */
  .addStyleEntry("login", "./assets/styles/login.scss")
  .addStyleEntry("siteStyle", "./assets/styles/site.scss")
  .addStyleEntry("listModulesStyle", "./assets/styles/listModules.scss")
  .addStyleEntry("choix_site", "./assets/styles/choix_site.scss")


  .addEntry("app", "./assets/app.js")
  .addEntry("setting_user", "./assets/js/settings/user.js")
  .addEntry("setting_module", "./assets/js/settings/module.js")
  .addEntry("setting_sub_module", "./assets/js/settings/subModule.js")
  .addEntry("setting_action", "./assets/js/settings/action.js")
  .addEntry(
    "setting_user_affectation",
    "./assets/js/settings/userAffectation.js"
  )
  .addEntry("setting_profile", "./assets/js/settings/profile.js")
  .addEntry("setting_site", "./assets/js/settings/site.js")
  .addEntry("settings_vehicule", "./assets/js/settings/vehicule.js")
  .addEntry("settings_conducteur", "./assets/js/settings/conducteur.js")
  .addEntry("settings_demande", "./assets/js/settings/demande.js")





  // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
  .enableStimulusBridge("./assets/controllers.json")

  // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
  .splitEntryChunks()

  // will require an extra script tag for runtime.js
  // but, you probably want this, unless you're building a single-page app
  .enableSingleRuntimeChunk()

  /*
   * FEATURE CONFIG
   *
   * Enable & configure other features below. For a full
   * list of features, see:
   * https://symfony.com/doc/current/frontend.html#adding-more-features
   */
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  // enables hashed filenames (e.g. app.abc123.css)
  .enableVersioning(Encore.isProduction())

  // configure Babel
  // .configureBabel((config) => {
  //     config.plugins.push('@babel/a-babel-plugin');
  // })

  // enables and configure @babel/preset-env polyfills
  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = "usage";
    config.corejs = "3.23";
  })

  // enables Sass/SCSS support
  .enableSassLoader()

  // uncomment if you use TypeScript
  //.enableTypeScriptLoader()

  // uncomment if you use React
  .enableReactPreset()

  // uncomment to get integrity="..." attributes on your script & link tags
  // requires WebpackEncoreBundle 1.4 or higher
  //.enableIntegrityHashes(Encore.isProduction())

  // uncomment if you're having problems with a jQuery plugin
  // .autoProvidejQuery()

  .copyFiles({
    from: "./assets/images",

    // optional target path, relative to the output dir
    to: "images/[path][name].[ext]",

    // if versioning is enabled, add the file hash too
    to: "images/[path][name].[hash:8].[ext]",

    // only copy files matching this pattern
    pattern: /\.(png|jpg|jpeg)$/,
  });

module.exports = Encore.getWebpackConfig();
