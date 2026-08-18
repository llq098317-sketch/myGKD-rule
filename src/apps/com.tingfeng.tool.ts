import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tingfeng.tool',
  name: '囧次元',
  groups: [
    {
      key: 1,
      name: '激励视频广告-关闭',
      desc: '快手广告SDK的激励视频，点击"残忍离开"关闭广告',
      resetMatch: 'app',
      activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
      rules: [
        {
          matches: '[text="残忍离开"]',
        },
      ],
    },
  ],
});
