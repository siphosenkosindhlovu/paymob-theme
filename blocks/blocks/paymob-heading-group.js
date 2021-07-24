const { registerBlockType } = wp.blocks;
const { TextControl } = wp.editor;
registerBlockType( 'paymob/heading-group', {
	//Built in attributes
	title: 'Heading Group',
	descrption: 'Block to container a smol header over a big header',
	icon: 'heading',
	category: 'layout',
	//Custom attributes
	attributes: {
		author: {
			type: 'string',
		},
	},
	//Custom functions

	//Bult-in functions
	edit: ( { attributes, setAttributes } ) => {
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
