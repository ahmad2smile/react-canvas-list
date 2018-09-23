import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-ape';
import injectStyles from "react-jss"

import ListView from "./ListView/ListView"

import styles from "./styles/"

class ListComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { transformY: 0 };

		this.scrollHandler = this.scrollHandler.bind(this)
	}

	componentDidMount() {
		const canvas = ReactDOM.findDOMNode(this.canvas)
		render(<ListView />, canvas)
	}

	scrollHandler(e) {
		const scrollTop = e.target.scrollTop

		const transformY = scrollTop > 2600 ? 2600 : scrollTop

		this.setState({ transformY })
	}

	render() {
		const { classes } = this.props
		const { transformY } = this.props

		return (
			<div onScroll={this.scrollHandler} className={classes.listContainer}>
				<div className={classes.largeContainer}>
					<div ref={ref => this.scroller = ref} style={{ transform: `translate(0, ${transformY}px)` }} className={classes.transformContainer}>
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