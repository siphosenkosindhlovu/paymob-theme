const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { RichText, useBlockProps } = wp.blockEditor;

registerBlockType( 'paymob/description-list-item', {
	//Built in attributes
	title: 'Description List Item',
	descrption: 'Block to container a smol header over a big header',
	icon: 'heading',
	category: 'layout',
	parent: [ 'paymob/description-list' ],
	usesContext: [ 'paymob/markerColor' ],
	//Custom attributes
	attributes: {
		itemHeading: {
			type: 'string',
			selector: 'dt',
			source: 'html',
		},
		itemText: {
			type: 'string',
			selector: 'dd',
			source: 'html',
		},
		markerColor: {
			type: 'string',
		},
	},
	//Custom functions

	//Bult-in functions
	edit: function Edit( { context, attributes, setAttributes } ) {
		function updateTitle( e ) {
			setAttributes( { itemHeading: e } );
		}

		function updateText( e ) {
			setAttributes( { itemText: e } );
		}

		if ( ! attributes.markerColor ) {
			setAttributes( {
				markerColor: context[ 'paymob/markerColor' ],
			} );
		}

		const blockProps = useBlockProps( {
			className: `wp-block-paymob-description-list-item has-marker-${ context[ 'paymob/markerColor' ] }`,
		} );
		return (
			<Fragment>
				<li { ...blockProps }>
					<dl>
						<RichText placeholder="Description List Heading" tagName="dt" value={ attributes.itemHeading } onChange={ updateTitle } />
						<RichText placeholder="Description List Body" tagName="dd" value={ attributes.itemText } onChange={ updateText } />
					</dl>
				</li>
			</Fragment>
		);
	},
	save( { attributes } ) {
		return (
			<li { ...useBlockProps.save( {
				className: `has-marker-${ attributes.markerColor }`,
			} ) } >
				<dl>
					<RichText.Content tagName="dt" value={ attributes.itemHeading } />
					<RichText.Content tagName="dd" value={ attributes.itemText } />
				</dl>
			</li>
		);
	},
} );
