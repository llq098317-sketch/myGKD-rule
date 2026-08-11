import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youdao.dict',
  name: '网易有道词典',
  groups: [
    {
      key: 1,
      name: '开屏广告-跳过',
      desc: '开屏广告右下角跳过按钮',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: ['com.youdao.dict.activity.DictSplashActivity'],
      rules: [
        {
          matches: '[id="com.youdao.dict:id/skin_text"]',
          snapshotUrls: ['https://i.gkd.li/i/30920354'],
        },
      ],
    },
  ],
});
