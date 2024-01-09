/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by vite-plugin-uni-pages

interface NavigateToOptions {
  url: "pages/index/index" |
       "pages/demo/index" |
       "pages/login/login" |
       "pages/my/index" |
       "pages/throughout/index" |
       "pages/index/demo/component-auto-import" |
       "pages/index/demo/mp-weixin-share" |
       "pages/index/demo/navbar" |
       "pages/index/demo/pages-auto-import" |
       "pages/index/demo/pinia" |
       "pages/index/demo/request" |
       "pages/index/demo/throughout" |
       "pages/index/demo/uni-ui-icons" |
       "pages/index/demo/uni-ui" |
       "pages/index/demo/unocss-icons" |
       "pages/index/demo/unocss";
}
interface RedirectToOptions extends NavigateToOptions {}

interface SwitchTabOptions {
  url: 'pages/index/index' | 'pages/throughout/index'
}

type ReLaunchOptions = NavigateToOptions | SwitchTabOptions

declare interface Uni {
  navigateTo(options: UniNamespace.NavigateToOptions & NavigateToOptions): void
  redirectTo(options: UniNamespace.RedirectToOptions & RedirectToOptions): void
  switchTab(options: UniNamespace.SwitchTabOptions & SwitchTabOptions): void
  reLaunch(options: UniNamespace.ReLaunchOptions & ReLaunchOptions): void
}
