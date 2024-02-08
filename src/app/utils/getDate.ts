import dayjs from 'dayjs/esm';

const LOCALE = 'ko';
const DATE_FORMAT = 'YYYY-MM-DD';

export function getDate() {
  return dayjs(new Date())
    .locale(LOCALE)
    .subtract(30, 'hour') // 금일 또는 랭킹 집계 전 날짜로 조회하면 에러 발생
    .format(DATE_FORMAT);
}
