const { registerBlockType } = wp.blocks;
const { __experimentalUseInnerBlocksProps: useInnerBlocksProps, InnerBlocks, useBlockProps } = wp.blockEditor;
//const { useSelect } = wp.data;
registerBlockType( 'paymob/trust', {
	//Built in attributes
	title: 'Trust Block',
	descrption: 'Accreditations and memberships to get your users\'s trust',
	icon: 'heading',
	category: 'layout',
	edit: function Edit() {
		const blockProps = useBlockProps( {
			className: 'row row-cols-1 row-cols-md-2 row-cols-lg-4',
		} );
		const ALLOWED_BLOCKS = [ 'paymob/trust-item' ];
		const TEMPLATE = [
			[ 'paymob/trust-item', {} ],
		];
		const innerBlocksProps = useInnerBlocksProps( blockProps, {
			allowedBlocks: ALLOWED_BLOCKS,
			orientation: 'horizontal',
			templateLock: false,
			renderAppender: InnerBlocks.ButtonBlockAppender,
			template: TEMPLATE,
		} );
		return (
			<div { ...innerBlocksProps } />
		);
	},
	save() {
		const blockProps = useBlockProps.save(
			{ className: 'row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5' } );
		return (
			<div { ...blockProps }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
