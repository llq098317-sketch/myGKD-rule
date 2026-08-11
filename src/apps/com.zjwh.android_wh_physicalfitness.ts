import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zjwh.android_wh_physicalfitness',
  name: '运动世界',
  groups: [
    {
      key: 1,
      name: '广告-关闭按钮',
      desc: '首页中下方广告与登录页广告右上角/左上角的关闭按钮',
      resetMatch: 'app',
      activityIds: [
        'com.zjwh.android_wh_physicalfitness.mvi.home.HomeActivity',
        'com.zjwh.android_wh_physicalfitness.mvi.login.LoginActivity',
      ],
      rules: [
        {
          matches: '[id="com.zjwh.android_wh_physicalfitness:id/ad_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/30921758', // HomeActivity
            'https://i.gkd.li/i/30921773', // LoginActivity
          ],
        },
      ],
    },
  ],
});
