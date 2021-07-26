const { registerBlockType } = wp.blocks;
const { __experimentalUseInnerBlocksProps: useInnerBlocksProps, InnerBlocks, BlockControls, InspectorControls, RichText, useBlockProps } = wp.blockEditor;
const { PanelBody, PanelRow, ToggleControl, Placeholder, FontSizePicker } = wp.components;
const { useSelect, useDispatch } = wp.data;

registerBlockType( 'paymob/scaffold', {
	title: 'Trust Item',
	descrption: '',
	icon: 'heading',
	category: 'layout',
	parent: [ 'paymob/trust' ],
	edit: function Edit( { attributes, setAttributes } ) {
		const blockProps = useBlockProps( {
			className: classNames,
		} );
		return (
			<>
				<InspectorControls>
					<PanelBody title="Featured Image">
						<PanelRow>
						</PanelRow>
						<PanelRow>
						</PanelRow>
					</PanelBody>
					<PanelBody title="Title Color Settings">
						<PanelRow>
						</PanelRow>
						<PanelRow>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				<BlockControls>
				</BlockControls>
				<section { ...blockProps } >
				</section>
			</>
		);
	},
	save: () => {
		return (
			<InnerBlocks.Content />
		);
	},
} );
