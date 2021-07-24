const { registerBlockType } = wp.blocks;
const { InnerBlocks, useBlockProps } = wp.blockEditor;

registerBlockType( 'paymob/trust-item', {
	title: 'Trust Item',
	descrption: '',
	icon: 'heading',
	category: 'layout',
	parent: [ 'paymob/trust' ],
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
