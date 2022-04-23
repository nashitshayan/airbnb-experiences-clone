function importAll(r) {
	let imgs = {};
	r.keys().map((item, index) => {
		imgs[item.replace('./', '')] = r(item);
	});
	return imgs;
}
const images = importAll(
	require.context('./images', false, /\.(png|jpe?g|svg)$/),
);
export default images;
