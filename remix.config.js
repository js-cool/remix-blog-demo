/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
// For Cloudflare Pages

// module.exports = {
//   appDirectory: 'app',
//   assetsBuildDirectory: 'public/build',
//   publicPath: '/build/',
//   // serverModuleFormat: 'esm',
//   serverPlatform: 'neutral',
//   serverBuildDirectory: 'build',
//   devServerBroadcastDelay: 1000,
//   ignoredRouteFiles: ['.*']
// };
module.exports = {
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildDirectory: 'api/_build',
  ignoredRouteFiles: ['.*']
};
