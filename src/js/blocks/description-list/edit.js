const { __experimentalUseInnerBlocksProps: useInnerBlocksProps, InnerBlocks, InspectorControls, ColorPalette, useBlockProps, getColorObjectByColorValue } = wp.blockEditor;
const { Fragment } = wp.element;
const { select, dispatch } = wp.data;
const { PanelBody, PanelRow } = wp.components;
const ALLOWED_BLOCKS = [ 'paymob/description-list-item' ];
const TEMPLATE = [
	[ 'paymob/description-list-item', {} ],
	[ 'paymob/description-list-item', {} ],
];
export default function Edit( { setAttributes, clientId } ) {
	const blockProps = useBlockProps( {
		className: 'list-description row row-cols-1 row-cols-md-2 row-cols-lg-3',
	} );
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		orientation: 'horizontal',
		templateLock: false,
		renderAppender: InnerBlocks.ButtonBlockAppender,
		template: TEMPLATE,
	} );

	function onChangeColor( color ) {
		if ( color ) {
			const settings = select( 'core/block-editor' ).getSettings();
			const colorObject = getColorObjectByColorValue( settings.colors, color );
			setAttributes( {
				markerColor: colorObject.slug,
			} );
			const children = select( 'core/block-editor' ).getBlocksByClientId( clientId )[ 0 ].innerBlocks;
			children.forEach( function( child ) {
				dispatch( 'core/block-editor' ).updateBlockAttributes( child.clientId, { markerColor: colorObject.slug } );
			} );
		}
	}

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Colour Settings">
					<PanelRow>
						<ColorPalette onChange={ onChangeColor } />
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<ul { ...innerBlocksProps } />
		</Fragment>
	);
}
