const { registerBlockType } = wp.blocks;
const { InnerBlocks, useBlockProps } = wp.blockEditor;

import Edit from './edit';
registerBlockType( 'paymob/description-list', {
	//Built in attributes
	title: 'Description List',
	descrption: 'Block to container a smol header over a big header',
	icon: 'heading',
	category: 'layout',
	//Custom attributes
	attributes: {
		markerColor: {
			type: 'string',
			default: 'orange',
		},
	},
	providesContext: {
		'paymob/markerColor': 'markerColor',
	},
	//Custom functions

	//Bult-in functions
	edit: Edit,
	save( { } ) {
		const blockProps = useBlockProps.save();
		return (
			<ul { ...blockProps }>
				<InnerBlocks.Content />
			</ul>
		);
	},
} );
