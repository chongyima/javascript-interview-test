// minusminusplusplus -> "--++"
const str = 'minusminusplusplus';
console.log(str.replace(new RegExp('minus', 'g'), '-').replace(new RegExp('plus', 'g'), '+'));
console.log(str.replaceAll(/minus/g, '-').replaceAll(/plus/g, '+'));