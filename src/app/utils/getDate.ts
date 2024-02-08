import dayjs from 'dayjs/esm';

const LOCALE = 'ko';
const DATE_FORMAT = 'YYYY-MM-DD';

export function getDate() {
  return dayjs(new Date())
    .locale(LOCALE)
    .subtract(1, 'day') // 현재 날짜 -1일, 금일 기준으로 요청시 에러 발생함
    .format(DATE_FORMAT);
}
