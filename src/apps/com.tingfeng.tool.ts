{
  id: 2154816001,
  name: '本地订阅-囧次元',
  version: 1,
  author: 'ql',
  updateUrl: './gkd.version.json5',
  categories: [],
  globalGroups: [],
  apps: [
    {
      id: 'com.tingfeng.tool',
      name: '囧次元',
      groups: [
        {
          key: 1,
          name: '激励视频广告-关闭',
          desc: '快手广告SDK的激励视频页，点击"残忍离开"关闭广告',
          resetMatch: 'app',
          activityIds: [
            'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
          ],
          rules: [
            {
              key: 11,
              matches: '[text="残忍离开"]',
            },
          ],
        },
      ],
    },
  ],
}
