import { defineGkdGlobalGroups } from '@gkd-kit/define';

export default defineGkdGlobalGroups([
  {
    key: 1,
    name: '开屏广告-跳过倒计时',
    desc: '匹配各 App 开屏广告的"数字S | 跳过"倒计时按钮，自动点击跳过',
    matchTime: 1000,
    actionMaximum: 1,
    rules: [
      {
        matches:
          '[text~="^\\\\s*\\\\d+\\\\s*[sS秒]?\\\\s*[|｜]\\\\s*跳过\\\\s*$"]',
      },
    ],
  },
]);
