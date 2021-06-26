const { registerBlockType } = wp.blocks;
const { __experimentalUseInnerBlocksProps: useInnerBlockProps, TextControl, RichText, InnerBlocks, InspectorControls, Panel, PanelBody, ColorPalette, useBlockProps } = wp.blockEditor;

const ALLOWED_BLOCKS = [ 'paymob/description-list-item' ];
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

		},
	},
	//Custom functions

	//Bult-in functions
	edit: ( { attributes, setAttributes } ) => {
		const { markerColor } = attributes;
		const blockProps = useBlockProps( {
			className: 'list-description row row-cols-1 row-cols-md-2 row-cols-lg-3',
		} );
		const innerBlocksProps = useInnerBlocksProps( blockProps, {
			allowedBlocks: ALLOWED_BLOCKS,
			orientation: 'horizontal',
			templateLock: false,
			renderAppender: InnerBlocks.ButtonBlockAppender,
		} );
		return (
			<ul { ...innerBlocksProps } />
		);
	},
	save( { attributes } ) {
		const blockProps = useBlockProps.save();
		return (
			<ul { ...useBlockProps }>
				<InnerBlocks.Content allowedBlocks={ ALLOWED_BLOCKS } />
			</ul>
		);
	},
} );

registerBlockType( 'paymob/description-list-item', {
	//Built in attributes
	title: 'Description List Item',
	descrption: 'Block to container a smol header over a big header',
	icon: 'heading',
	category: 'layout',
	parent: [ 'paymob/description-list' ],
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
	},
	//Custom functions

	//Bult-in functions
	edit: ( { attributes, setAttributes } ) => {
		function updateTitle( e ) {
			setAttributes( { itemHeading: e } );
		}
		function updateText( e ) {
			setAttributes( { itemText: e } );
		}

		return (
			<li>
				<dl>
					<RichText placeholder="Description List Heading" tagName="dt" value={ attributes.itemHeading } onChange={ updateTitle } />
					<RichText placeholder="Description List Body" tagName="dd" value={ attributes.itemText } onChange={ updateText } />
				</dl>
			</li>
		);
	},
	save( { attributes } ) {
		return (
			<li>
				<dl>
					<RichText.Content tagName="dt" value={ attributes.itemHeading } />
					<RichText.Content tagName="dd" value={ attributes.itemText } />
				</dl>
			</li>
		);
	},
} );
