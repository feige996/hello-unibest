/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by vite-plugin-uni-pages

interface NavigateToOptions {
  url: "/pages/index/index" |
       "/pages/demo/index" |
       "/pages/index/request" |
       "/pages/login/index" |
       "/pages/my/index" |
       "/pages/demo/base/auto-import" |
       "/pages/demo/base/css" |
       "/pages/demo/base/enum" |
       "/pages/demo/base/env" |
       "/pages/demo/base/iconfont" |
       "/pages/demo/base/mock" |
       "/pages/demo/base/mp-weixin-share" |
       "/pages/demo/base/navbar" |
       "/pages/demo/base/no-navbar" |
       "/pages/demo/base/pinia" |
       "/pages/demo/base/request" |
       "/pages/demo/base/route-interceptor" |
       "/pages/demo/base/svg" |
       "/pages/demo/base/throughout" |
       "/pages/demo/base/uni-ui-icons" |
       "/pages/demo/base/uni-ui" |
       "/pages/demo/base/unocss-icons" |
       "/pages/demo/base/unocss" |
       "/pages/demo/base/upload" |
       "/pages/demo/base/upload2" |
       "/pages/demo/base/uv-ui" |
       "/pages/demo/base/vconsole" |
       "/pages/demo/base/wot" |
       "/pages/demo/page/clock" |
       "/pages/demo/page/clock2" |
       "/pages/demo/page/floating-bubble" |
       "/pages/demo/page/i18n" |
       "/pages/demo/page/sign" |
       "/pages/demo/page/waterfall" |
       "/pages/demo/route-interceptor/index" |
       "/pages/demo/route-interceptor/login-auto" |
       "/pages/demo/route-interceptor/login-model" |
       "/pages/demo/route-interceptor/login-page" |
       "/pages/demo/page/img-min/index" |
       "/pages/demo/page/lottery/big-wheel" |
       "/pages/demo/page/lottery/nine-grid" |
       "/pages/demo/page/z-paging/index" |
       "/pages-sub/demo/index";
}
interface RedirectToOptions extends NavigateToOptions {}

interface SwitchTabOptions {
  url: "/pages/index/index" | "/pages/demo/index"
}

type ReLaunchOptions = NavigateToOptions | SwitchTabOptions;

declare interface Uni {
  navigateTo(options: UniNamespace.NavigateToOptions & NavigateToOptions): void;
  redirectTo(options: UniNamespace.RedirectToOptions & RedirectToOptions): void;
  switchTab(options: UniNamespace.SwitchTabOptions & SwitchTabOptions): void;
  reLaunch(options: UniNamespace.ReLaunchOptions & ReLaunchOptions): void;
}