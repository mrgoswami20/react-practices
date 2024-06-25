import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Skillbar extends Component {
	render() {
		const container = {
			width: "100%",
			backgroundColor: "#eee"
		}
		const skillLevel = {
			textAlign: "right",
			padding: "10px 0px",
			color: this.props.color || "white",
			backgroundColor: this.props.bgColor,
			width: this.props.width + "%"
		}
		return (
			<div className="container">
				<div>{this.props.text}</div>
				<div className="container" style={container}>
					<div className="skill--level" style={skillLevel}>{this.props.width + "%"}</div>
				</div>
			</div>
		)
	}
}

Skillbar.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string.isRequired,
	bgColor: PropTypes.string.isRequired,
	width: PropTypes.string.isRequired,
}
