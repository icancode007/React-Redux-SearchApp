import React from 'react';

const AddressFinder = ({onChange,query,results}) => (
		<div className='container'>
			<div>
				<h1>Search Till Your Heart is Content</h1>
				<hr />
			</div>
			<div className='row'>
				<div className='col-xs-8'>
					<input
						className='form-control'
						onChange={onChange}
						/>
					<hr />
					<div>
						{
						results.map((result,index) =>
							<div key={index}>
								{result.formatted_address}
							</div>
						)}
					</div>
					<hr className='coloredhr' />
				</div>
				<h4>Geo Aproximation</h4>
				<div className='col-xs-4'>
					{results[0] ? <img id='mapDim' src={`https://maps.googleapis.com/maps/api/staticmap?center='${results[0].formatted_address}'&zoom=16&size=300x600&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyCgO60baHVwaAELQ84L0vBbC3t8S9rOWr0
`} /> : null}
				</div>
			</div>
		</div>

);


export default AddressFinder;
