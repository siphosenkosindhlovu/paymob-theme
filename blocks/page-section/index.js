import classnames from 'classnames';
const { registerBlockType } = wp.blocks;
const { __experimentalRadioGroup: RadioGroup, __experimentalRadio: Radio, PanelBody, PanelRow } = wp.components;
const { InspectorControls, InnerBlocks, useBlockProps } = wp.blockEditor;
const { Fragment } = wp.element;

const attributes = {
		backgroundColor: {
			type: 'string',
		},
		width: {
			type: 'string',
			default: 'default',
		},
	},
	supports = {
		color: {
			background: true,
		},
	};
registerBlockType( 'paymob/page-section', {
	title: 'Page Section',
	descrption: 'A top level container for page sections',
	icon: 'admin-page',
	category: 'layout',
	attributes,
	supports,
	edit: function Edit( { attributes, setAttributes } ) {
		const { align, width } = attributes;
		const containerClassnames = classnames(
			{
				'container-fluid': width === 'fluid',
				container: width === 'default',
				[ `container-${ width }` ]: width !== 'fluid' || width !== 'default',
			},
		);
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title="Container Settings">
						<PanelRow>
							<div>
								<p id="containerControlLabel">Container Width</p>
								<RadioGroup aria-labeled-by="containerControlLabel" checked={ width } label="Container Width" onChange={ ( val ) => setAttributes( { width: val } ) }>
									<Radio value="fluid">Fluid</Radio>
									<Radio value="default">Default</Radio>
									<Radio value="narrow">Narrow</Radio>
									<Radio value="narrower">Narrower</Radio>
								</RadioGroup>
							</div>

						</PanelRow>
					</PanelBody>
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
	save: ( { attributes: { width } } ) => {
		const containerClassnames = classnames(
			{
				'container-fluid': width === 'fluid',
				container: width !== 'fluid',
			},
			[ `container-${ width }` ],
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
	deprecated: [
		{
			attributes:
			{
				align: {
					type: 'string',
					default: 'wide',
				},
			},
			migrate( { align } ) {
				return { width: align };
			},
			save( { attributes: { align } } ) {
				const containerClassnames = classnames(
					{
						'container-fluid': align === 'full',
						container: align !== 'full',
					},
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
		},
	],
} );
