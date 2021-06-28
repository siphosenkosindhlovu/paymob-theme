import classnames from 'classnames';
import metadata from './block.json';
const { registerBlockType } = wp.blocks;
const { InnerBlocks, useBlockProps, InspectorControls, RichText } = wp.blockEditor;
const { useSelect, useDispatch } = wp.data;
const { Fragment } = wp.element;
const { PanelBody, PanelRow, ToggleControl, Placeholder } = wp.components;

const TEMPLATE = [
	[ 'core/paragraph', { textColor: 'orange', fontSize: 18, placeholder: 'Write the page subheader' } ],
	[ 'core/paragraph', {} ],
];
const { name, ...rest } = metadata;
registerBlockType( name, {
	...rest,
	edit: function Edit( { attributes, setAttributes } ) {
		const { currentPost, featuredImage } = useSelect( ( select ) => {
			// // eslint-disable-next-line no-shadow
			// const currentPost = select( 'core/editor' ).getCurrentPost();
			// const featuredImageId = select( 'core/editor' ).getEditedPostAttribute( 'featured_media' );
			// // eslint-disable-next-line no-shadow
			// const featuredImageObj = select( 'core' ).getMedia( featuredImageId );
			// //console.log( { props, currentPost, featuredImageObj } );
			return {
				currentPost: select( 'core/editor' ).getCurrentPost(),
				featuredImage: select( 'core' ).getMedia( select( 'core/editor' ).getEditedPostAttribute( 'featured_media' ) ),
			};
			// return { pageTitle: currentPost.title, currentPost, featuredImageTitle: featuredImageObj.title.rendered, featuredImageUrl: featuredImageObj };
		} );

		const { displayFeaturedImage, align } = attributes;
		const { editEntityRecord } = useDispatch( 'core', [ currentPost.title ] );

		const classNames = classnames(
			'page-banner', 'container', 'row', 'flex-column', 'flex-lg-row',
			{ 'justify-content-between': displayFeaturedImage },
			{ [ `text-${ align }` ]: ! displayFeaturedImage },
		);
		const headingClassNames = classnames(
			{
				'col-lg-6': displayFeaturedImage,
				'col-12': ! displayFeaturedImage,
			},
		);

		function onTitleChange( value ) {
			editEntityRecord( 'postType', currentPost.type, currentPost.id, { title: value } );
			setAttributes( {
				pageTitle: value,
			} );
		}

		const blockProps = useBlockProps( {
			className: classNames,
		} );
		return (
			<Fragment>
				<section { ...blockProps } >
					<InspectorControls>
						<PanelBody title="Featured Image">
							<PanelRow>
								<ToggleControl checked={ displayFeaturedImage } label="Show Featured Image" onChange={ ( ( val ) => {
									setAttributes( { displayFeaturedImage: val } );
								} ) } />
							</PanelRow>
						</PanelBody>
					</InspectorControls>
					<div className={ headingClassNames }>
						<RichText tagName="h1" style={ { fontSize: 36 } } value={ currentPost.title } onChange={ onTitleChange } placeholder="Add title" />
						<InnerBlocks template={ TEMPLATE } />
					</div>
					{
						displayFeaturedImage &&
						<div className='col-lg-6'>
							{
								featuredImage
									? <img src={ featuredImage.source_url } alt={ featuredImage.title.rendered } />
									: <Placeholder label="This page does not have a featured image" instructions="To display a featured image, set it from the page meta." />
							}
						</div>
					}
				</section>
			</Fragment>
		);
	},
	save: () => {
		return (
			<InnerBlocks.Content />
		);
	},
} );
