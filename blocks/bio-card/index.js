const { registerBlockType } = wp.blocks;
const { __experimentalUseInnerBlocksProps: useInnerBlocksProps, MediaPlaceholder, InnerBlocks, BlockControls, InspectorControls, RichText, useBlockProps, MediaUpload } = wp.blockEditor;
const { PanelBody, PanelRow, ToggleControl, Placeholder, FontSizePicker, Button } = wp.components;
const { useSelect, useDispatch } = wp.data;

const attributes = {
	name: {
		type: 'string',
		source: 'text',
		selector: '.wp-block-profile-box__name',
	},
	title: {
		type: 'string',
		source: 'text',
		selector: '.wp-block-profile-box__title',
	},
	fontSize: {
		type: 'number',
	},
};

registerBlockType( 'paymob/profile-box', {
	title: 'Profile Box',
	description: 'A block that showcases a team member',
	icon: 'admin-users',
	category: 'layout',
	attributes,
	edit: function Edit( { attributes, setAttributes } ) {
		const { name, title, fontSize } = attributes;
		const blockProps = useBlockProps( { className: 'd-flex flex-wrap flex-column' } );
		return (
			<>
				<InspectorControls>
					<PanelBody title="Card Settings">
					</PanelBody>
				</InspectorControls>
				<div { ...blockProps }>
					<div className="wp-block-profile-box__image-wrapper">
						<InnerBlocks allowedBlocks={ [ 'core/image' ] } template={ [ [ 'core/image', { align: 'center' } ] ] } templateLock={ true } />
					</div>
					<div className="text-center">
						<RichText placeholder={ 'Name' } className="mb-0 fw-bold wp-block-profile-box__name" tagName="p" value={ name } onChange={ ( val ) => setAttributes( { name: val } ) } />
						<RichText placeholder={ 'Title' } className="mb-1 wp-block-profile-box__title" tagName="p" value={ title } onChange={ ( val ) => setAttributes( { title: val } ) } />
					</div>
				</div>
			</>
		);
	},
	save( { attributes } ) {
		const { name, title } = attributes;
		const blockProps = useBlockProps.save( { className: 'd-flex flex-wrap flex-column' } );
		return (
			<div { ...blockProps }>
				<div className="wp-block-profile-box__image-wrapper">
					<InnerBlocks.Content />
				</div>
				<div className="text-center">
					<RichText.Content placeholder={ 'Name' } style={ { letterSpacing: '0.03em' } } className="mb-0 fw-bold wp-block-profile-box__name" tagName="p" value={ name } />
					<RichText.Content placeholder={ 'Title' } className="mb-1 wp-block-profile-box__title" tagName="p" value={ title } />
				</div>
			</div>
		);
	},
	deprecated: [
		{
			attributes,
			save( props ) {
				const { name, title } = props.attributes;
				const blockProps = useBlockProps.save( { className: 'd-flex flex-wrap flex-column' } );
				return (
					<div { ...blockProps }>
						<div className="wp-block-profile-box__image-wrapper">
							<InnerBlocks.Content />
						</div>
						<div className="m-1 text-center">
							<RichText.Content placeholder={ 'Name' } className="mb-0 fw-bold" tagName="p" value={ name } />
							<RichText.Content placeholder={ 'Title' } className="mb-1" tagName="p" value={ title } />
						</div>
					</div>
				);
			},
		},
		{
			attributes,
			save( { attributes } ) {
				const { name, title } = attributes;
				const blockProps = useBlockProps.save( { className: 'd-flex flex-wrap flex-column' } );
				return (
					<div { ...blockProps }>
						<div className="wp-block-profile-box__image-wrapper">
							<InnerBlocks.Content />
						</div>
						<div className="m-1 text-center">
							<RichText.Content placeholder={ 'Name' } className="mb-0 fw-bold" tagName="p" value={ name } />
							<RichText.Content placeholder={ 'Title' } className="mb-1" tagName="p" value={ title } />
						</div>
					</div>
				);
			},
		},
	],
} );
