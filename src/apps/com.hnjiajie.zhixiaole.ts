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
      desc: '更新提醒弹窗点「取消」关闭。该弹窗文案在 contentDescription 里（text 为空），故用 desc 匹配；用「去更新」按钮或标题做锚点，避免误点其它界面的取消',
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '[desc="去更新"] - [desc="取消"]',
            '[desc="更新提醒"] < [childCount=4] > [desc="取消"]',
          ],
        },
      ],
    },
  ],
});
