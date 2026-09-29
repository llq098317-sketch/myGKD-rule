import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hnjiajie.zhixiaole',
  name: '智校乐',
  groups: [
    {
      key: 1,
      name: '开屏广告-跳过',
      desc: '开屏广告右上角的跳过按钮',
      resetMatch: 'app',
      activityIds: ['com.hnjiajie.zhixiaole.MainActivity'],
      rules: [
        {
          matches: '[id="com.hnjiajie.zhixiaole:id/layout_skip"]',
        },
      ],
    },
  ],
});
