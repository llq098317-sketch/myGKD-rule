import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '弹窗广告-关闭',
      desc: '首页弹层广告，点击关闭按钮',
      resetMatch: 'app',
      activityIds: ['com.taobao.tao.welcome.Welcome'],
      rules: [
        {
          matches: '[id="com.taobao.taobao:id/mtbDxRootView"] > [desc="关闭"]',
        },
      ],
    },
    {
      key: 2,
      name: '弹层广告-关闭',
      desc: 'poplayer 弹层广告关闭按钮',
      resetMatch: 'app',
      activityIds: ['com.taobao.tao.welcome.Welcome'],
      rules: [
        {
          matches:
            '[id="com.taobao.taobao:id/poplayer_inner_view"] > [desc="关闭按钮"]',
        },
      ],
    },
    {
      key: 3,
      name: '开屏广告-跳过',
      desc: '首页开屏广告的跳过按钮',
      resetMatch: 'app',
      activityIds: ['com.taobao.tao.welcome.Welcome'],
      rules: [
        {
          matches: '[id="com.taobao.taobao:id/ll_close"]',
        },
      ],
    },
  ],
});
