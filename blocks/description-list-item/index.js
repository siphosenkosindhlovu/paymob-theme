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
		headingFontSize: {
			type: 'string',
			default: '21',
		},
		descriptionFontSize: {
			type: 'string',
			default: '16',
		},
	},
	//Custom functions

	//Bult-in functions
	edit: function Edit( { context, attributes, setAttributes } ) {
		const {
			itemHeading,
			itemText,
			headingFontSize,
			descriptionFontSize,
		} = attributes;

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
						<RichText placeholder="Description List Heading" style={ { fontSize: headingFontSize } } tagName="dt" value={ itemHeading } onChange={ updateTitle } />
						<RichText placeholder="Description List Body" style={ { fontSize: descriptionFontSize } } tagName="dd" value={ itemText } onChange={ updateText } />
					</dl>
				</li>
			</Fragment>
		);
	},
	save( { attributes } ) {
		const {
			itemHeading,
			itemText,
			markerColor,
			headingFontSize,
			descriptionFontSize,
		} = attributes;
		return (
			<li { ...useBlockProps.save( {
				className: `has-marker-${ markerColor }`,
			} ) } >
				<dl>
					<RichText.Content style={ { fontSize: headingFontSize } } tagName="dt" value={ itemHeading } />
					<RichText.Content style={ { fontSize: descriptionFontSize } } tagName="dd" value={ itemText } />
				</dl>
			</li>
		);
	},
} );
