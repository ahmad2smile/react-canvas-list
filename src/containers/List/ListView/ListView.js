
import React from 'react';
import { Text, ListView, View, Image, StyleSheet } from 'react-ape';

import styles from "./styles/"

const posters = [
	{ name: 'Narcos', src: require("../../../assets/images/narcos.jpg") },
	{ name: 'Daredevil', src: require("../../../assets/images/daredevil.jpg") },
	{ name: 'Stranger Things', src: require("../../../assets/images/stranger-things.jpg") },
	{ name: 'Narcos', src: require("../../../assets/images/narcos.jpg") },
	{ name: 'Daredevil', src: require("../../../assets/images/daredevil.jpg") },
	{ name: 'Stranger Things', src: require("../../../assets/images/stranger-things.jpg") },
	{ name: 'Narcos', src: require("../../../assets/images/narcos.jpg") },
	{ name: 'Daredevil', src: require("../../../assets/images/daredevil.jpg") },
	{ name: 'Stranger Things', src: require("../../../assets/images/stranger-things.jpg") },
];

export default () => (<ListView
	dataSource={posters}
	renderRow={(data, idx) => (
		<View
			height={200}
			width={200}
			key={'poster-list-' + idx}
			onClick={() => {
				console.log(data);
			}}>
			<Image
				style={{ x: 220 * idx + 30, y: 140, width: 200, height: 300 }}
				src={data.src}
			/>
			<Text style={{ x: 220 * idx + 30, y: 460, color: '#FFF' }}>
				{data.name}
			</Text>
		</View>
	)}
	style={styles.list}
/>)