const { registerBlockType } = wp.blocks;
const { __experimentalUseInnerBlocksProps: useInnerBlocksProps, InnerBlocks, useBlockProps } = wp.blockEditor;
const { select, data } = wp.data;
const ALLOWED_BLOCKS = [ 'core/heading', 'core/paragraph' ];
const TEMPLATE = [
	[ 'core/heading', { textAlign: 'right', level: 2, placeholder: 'Type the small heading text', textColor: 'orange', fontSize: 18 } ],
	[ 'core/heading', { textAlign: 'right', level: 3, fontSize: 34 } ],
	[ 'core/paragraph', { textAlign: 'right' } ],
];
registerBlockType( 'paymob/header-group', {
	//Built in attributes
	title: 'Header Group',
	descrption: 'Block to contain a smol header over a big header',
	icon: 'heading',
	category: 'layout',
	//Custom attributes
	attributes: {
		textAlign: {
			type: 'string',
		},
	},
	//Custom functions

	//Bult-in functions
	edit: function Edit( { attributes, setAttributes } ) {
		const blockProps = useBlockProps();
		const innerBlocksProps = useInnerBlocksProps( blockProps, {
			allowedBlocks: ALLOWED_BLOCKS,
			templateLock: false,
			template: TEMPLATE,
		} );
		return (
			<div { ...innerBlocksProps } />
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
