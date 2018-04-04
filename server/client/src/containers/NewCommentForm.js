import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createComment } from "../actions";

class NewCommentForm extends Component {
	renderField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? "has-danger" : ""}`;

		return (
			<div className={className}>
				<label className="black-text">
					{field.label}
					<span className="red-text">*</span>
				</label>
				<input className="form-control" type="text" {...field.input} />
				<div className="red-text text-darken-4">{touched ? error : ""}</div>
			</div>
		);
	}

	onSubmit(values) {
		this.props.createComment(this.props.match.params.id, values, id => {
			this.props.history.push(`/${id}/comments`);
		});
	}

	render() {
		const { handleSubmit } = this.props;
		const { id } = this.props.match.params;

		return (
			<div className="container" style={{ marginTop: "25px" }}>
				<div className="card panel white">
					<div className="card-content black-text">
						<h1>Please enter your comment.</h1>
						<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
							<Field label="Title" name="title" component={this.renderField} />
							<Field label="Body" name="body" component={this.renderField} />
							<Link
								to={`/${id}/comments`}
								className="red darken-4 btn btn-flat white-text"
								style={{ marginRight: "10px" }}
							>
								<i className=" small material-icons right">cancel</i>
								Cancel
							</Link>

							<button type="submit" className="indigo btn btn-flat white-text">
								<i className=" small material-icons right">create</i>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};
	if (!values.title) {
		errors.title = "Please enter a title.";
	}
	if (!values.body) {
		errors.body = "Please enter your comment.";
	}
	return errors;
}

export default reduxForm({
	validate,
	form: "PostNewComment"
})(connect(null, { createComment })(NewCommentForm));
