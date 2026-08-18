import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tingfeng.tool',
  name: '囧次元',
  groups: [
    {
      key: 1,
      name: '激励视频广告-跳过',
      desc: '快手广告SDK的激励视频，点击右上角跳过按钮',
      resetMatch: 'app',
      activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
      rules: [
        {
          matches: '[desc="skip_button"] > [text="跳过"]',
        },
      ],
    },
  ],
});
