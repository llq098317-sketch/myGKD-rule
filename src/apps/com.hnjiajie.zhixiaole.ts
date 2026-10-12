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
    {
      key: 2,
      name: '更新弹窗-取消',
      desc: '更新提醒弹窗点「取消」关闭；弹窗内「取消」与「去更新」为相邻兄弟，据此锚定，避免误点其它界面的取消',
      resetMatch: 'app',
      rules: [
        {
          matches: '[text="去更新"] - [text="取消"]',
        },
      ],
    },
  ],
});
