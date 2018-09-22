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

		this.draw(this.ctx)
		// ctx.fillStyle = "green"
		// ctx.fillRect(10, 10, 100, 100)
	}

	draw(ctx, yPos = 0) {
		ctx.clearRect(0, 0, 500, 500)

		ctx.save();
		ctx.translate(0, -yPos);

		ctx.font = '20px Courier';
		[...Array(100)].map((v, i) => {
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
							<canvas className={classes.canvas} ref={ref => this.canvas = ref}></canvas>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default injectStyles(styles)(ListComponent);