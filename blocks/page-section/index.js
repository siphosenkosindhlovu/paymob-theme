import classnames from 'classnames';
const { registerBlockType } = wp.blocks;
const { ColorPalette, PanelBody, PanelRow } = wp.components;
const { InspectorControls, InnerBlocks, useBlockProps } = wp.blockEditor;
const { Fragment } = wp.element;

registerBlockType( 'paymob/page-section', {
	title: 'Page Section',
	descrption: 'A top level container for page sections',
	icon: 'admin-page',
	category: 'layout',
	attributes: {
		backgroundColor: {
			type: 'string',
		},
		align: {
			type: 'string',
			default: 'wide',
		},
	},
	supports: {
		color: {
			background: true,
		},
		align: [ 'wide', 'full' ],
	},
	edit: function Edit( { attributes, setAttributes } ) {
		const { align } = attributes;
		const containerClassnames = classnames(
			{ 'container-fluid': align === 'full',
				container: align !== 'full' },
		);
		return (
			<Fragment>
				<InspectorControls>
				</InspectorControls>
				<div { ...useBlockProps( {
					className: 'page-section',
				} ) }>
					<div className={ containerClassnames }>
						<InnerBlocks />
					</div>
				</div>
			</Fragment>
		);
	},
	save: ( { attributes: { align } } ) => {
		const containerClassnames = classnames(
			{ 'container-fluid': align === 'full',
				container: align !== 'full' },
		);
		return (
			<div { ...useBlockProps.save( {
				className: 'page-section',
			} ) } >
				<div className={ containerClassnames }>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
} );
