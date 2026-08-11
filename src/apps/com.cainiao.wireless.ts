import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
  groups: [
    {
      key: 1,
      name: '开屏广告-跳过',
      desc: '开屏广告右上角的"跳过 N"倒计时按钮',
      resetMatch: 'app',
      activityIds: ['com.cainiao.wireless.homepage.view.activity.AdsActivity'],
      rules: [
        {
          matches: '[id="com.cainiao.wireless:id/homesplash_close_fullscreen"]',
        },
      ],
    },
  ],
});
