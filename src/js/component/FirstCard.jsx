import React from "react";

const FirstCard = () => {
	return (
		<div className="container">
			<div className="card p-3 mb-2 bg-light text-dark">
				<div className="card-body">
					<h1 className="card-title">A Warm Welcome!</h1>
					<p className="card-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Suscipit nisi iure dolores corrupti asperiores
						cupiditate ad, architecto incidunt optio distinctio
						blanditiis temporibus sunt quo tenetur quaerat aliquid
						id magnam quidem.
					</p>
					<button type="button" className="btn btn-primary">
						Call to action!
					</button>
				</div>
			</div>
		</div>
	);
};

export default FirstCard;
