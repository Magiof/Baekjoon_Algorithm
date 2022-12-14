const fs = require('fs');
const [N,M] = fs.readFileSync('1929.txt').toString().trim().split(' ').map(Number);
let prime = Array(M + 1).fill(true);
prime[0] = prime[1] = false;

// 에라토스테네스의 체
function solution(N,M) {
  for (let i = 2; i <= Math.ceil(Math.sqrt(M)); i++) {
    if(prime[i]) {
      let j = 2; 
      while(i * j <= M) { 
        prime[i * j] = false; 
        j++;  
      }
    }
  }
  
  let result = []; 
  for(let i = N; i <= M; i++) { 
    if(prime[i]) { 
		result.push(i);
    }
  }
  return result.join('\n')
}

console.log(solution(N,M))