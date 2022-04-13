// 비동기 테스트 mock api
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) => {
    setTimeout(() => resolve({ data: amount }), 500);
  });
}
