/**
 * 线性同余生成器
 * xn=(axn−1+b)mod(m)
 * a,b,m都是生成器设定的常数，周期为m。
 */

const Rand = (() => {
	let seed = (new Date()).getTime();
	const r = () => {
		seed = (seed * 9301 + 49297) % 233280;
		return seed / (233280.0);
	};
	
	return (number) => {
		return Math.ceil(r() * number);
	};
})();

export default Rand;

