import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tingfeng.tool',
  name: '囧次元',
  groups: [
    {
      key: 1,
      name: '激励视频广告-关闭',
      desc: '快手广告SDK的激励视频，点击跳过后确认退出关闭广告',
      resetMatch: 'app',
      activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
      rules: [
        {
          key: 0,
          name: '点击跳过',
          matches: '[text="跳过"]',
        },
        {
          key: 1,
          name: '确认退出',
          preKeys: [0],
          anyMatches: ['[text="坚持退出"]', '[text="残忍离开"]'],
        },
      ],
    },
  ],
});
