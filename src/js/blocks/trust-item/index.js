const { registerBlockType } = wp.blocks;
const { __experimentalUseInnerBlocksProps: useInnerBlocksProps, TextControl, RichText, InnerBlocks, InspectorControls, Panel, PanelBody, ColorPalette, useBlockProps } = wp.blockEditor;

registerBlockType( 'paymob/trust-item', {
	//Built in attributes
	title: 'Trust Item',
	descrption: '',
	icon: 'heading',
	category: 'layout',
	parent: [ 'paymob/trust' ],
	//Custom attributes
	//Custom functions

	//Bult-in functions
	edit: function Edit( ) {
		const blockProps = useBlockProps( {
			className: 'd-flex flex-direction-column',
		} );
		const TEMPLATE = [
			[ 'core/paragraph', { fontSize: 18 } ],
			[ 'core/image', { height: 60 } ],
		];
		return (
			<div { ...blockProps } >
				<InnerBlocks template={ TEMPLATE } templateLock={ true } />
			</div>
		);
	},
	save() {
		const blockProps = useBlockProps.save();
		return (
			<div { ...blockProps }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
