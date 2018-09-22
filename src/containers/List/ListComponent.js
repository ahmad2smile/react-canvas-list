import React, { Component } from 'react';
import injectStyles from "react-jss"

import styles from "./styles/"

class ListComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.scrollHandler = this.scrollHandler.bind(this)
	}

	componentDidMount() {
		this.ctx = this.canvas.getContext("2d")

		this.makeHighRes(this.canvas)

		this.draw(this.ctx)
	}

	makeHighRes(c) {
		var ctx = c.getContext('2d');
		// finally query the various pixel ratios
		// var devicePixelRatio = window.devicePixelRatio || 1; // Replaced with custom ratio
		var devicePixelRatio = 5;
		var backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
			ctx.mozBackingStorePixelRatio ||
			ctx.msBackingStorePixelRatio ||
			ctx.oBackingStorePixelRatio ||
			ctx.backingStorePixelRatio || 1;
		var ratio = devicePixelRatio / backingStoreRatio;
		// upscale canvas if the two ratios don't match
		if (devicePixelRatio !== backingStoreRatio) {

			var oldWidth = c.width;
			var oldHeight = c.height;
			c.width = Math.round(oldWidth * ratio);
			c.height = Math.round(oldHeight * ratio);
			c.style.width = oldWidth + 'px';
			c.style.height = oldHeight + 'px';
			// now scale the context to counter
			// the fact that we've manually scaled
			// our canvas element
			ctx.scale(ratio, ratio);
		}
	}

	draw(ctx, yPos = 0) {
		ctx.clearRect(0, 0, 600, 700)

		ctx.save();
		ctx.translate(0, -yPos);

		ctx.font = '25px Courier';
		[...Array(150)].map((v, i) => {
			ctx.fillText(`List item ${i}`, 6, 20 * i)
		})

		ctx.restore();
	}

	scrollHandler(e) {
		const scrollTop = e.target.scrollTop

		const transformY = scrollTop > 2600 ? 2600 : scrollTop
		this.scroller.style.transform = `translate(0px, ${transformY}px)`

		this.draw(this.ctx, transformY)
	}

	render() {
		const { classes } = this.props
		const { stageY } = this.props

		return (
			<div onScroll={this.scrollHandler} className={classes.listContainer}>
				<div className={classes.largeContainer}>
					<div ref={ref => this.scroller = ref} className={classes.transformContainer}>
						<div className={classes.canvasContainer}>
							<canvas height={600} width={500} className={classes.canvas} ref={ref => this.canvas = ref}></canvas>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default injectStyles(styles)(ListComponent);