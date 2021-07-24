const { registerBlockType } = wp.blocks;
const { TextControl } = wp.editor;
registerBlockType( 'paymob/cta', {
	//Built in attributes
	title: 'Call To Action',
	descrption: 'Block to generate custom icon',
	icon: 'format-image',
	category: 'layout',
	//Custom attributes
	attributes: {
		author: {
			type: 'string',

		},
	},
	//Custom functions

	//Bult-in functions
	edit( { attributes, setAttributes } ) {
		function updateAuthor( e ) {
			setAttributes( { author: e.target.value } );
		}

		return (
			<TextControl value={ attributes.author } type="text" onChange={ updateAuthor } />
		);
	},
	save( { attributes } ) {
		return (
			<div>{ attributes.author }</div>
		);
	},
} );
