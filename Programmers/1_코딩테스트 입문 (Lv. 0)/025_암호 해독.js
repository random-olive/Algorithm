function solution(cipher, code) {
  return ['', ...cipher].filter((_, i) => i % code === 0).join('');
}
