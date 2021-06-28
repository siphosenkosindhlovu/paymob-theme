import classnames from 'classnames';
import metadata from './block.json';
const { registerBlockType } = wp.blocks;
const { InnerBlocks, useBlockProps, InspectorControls, RichText } = wp.blockEditor;
const { useSelect, useDispatch } = wp.data;
const { Fragment } = wp.element;
const { PanelBody, PanelRow, ToggleControl, Placeholder } = wp.components;

const { name, ...rest } = metadata;

registerBlockType( name, {
	...rest,
	edit: function Edit( { attributes, setAttributes } ) {
		const { showBackgroundColor, showBorders } = attributes;
		const { paymentPoints, getMedia } = useSelect( ( select ) => {
			const { getMedia } = select( 'core' );
			let payments = select( 'core' ).getEntityRecords( 'postType', 'payment_points' );
			if ( payments ) {
				payments = payments.map( ( p ) => ( { ...p, image: getMedia( p.featured_media ) } ) );
				console.log( payments );
			}
			return {
				paymentPoints: payments,
			};
			// return { pageTitle: currentPost.title, currentPost, featuredImageTitle: featuredImageObj.title.rendered, featuredImageUrl: featuredImageObj };
		} );

		const blockProps = useBlockProps( {
		} );
		return (
			<Fragment>
				<section { ...blockProps } >
					<InspectorControls>
						<PanelBody title="Customise">
							<PanelRow>
								<ToggleControl checked={ showBackgroundColor } label="Show Background Colour" onChange={ ( ( val ) => {
									setAttributes( { showBackgroundColor: val } );
								} ) } />
							</PanelRow>
							<PanelRow>
								<ToggleControl checked={ showBorders } label="Show Border" onChange={ ( ( val ) => {
									setAttributes( { showBorders: val } );
								} ) } />
							</PanelRow>
						</PanelBody>
					</InspectorControls>

					<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
						{
							paymentPoints
								? paymentPoints.map( ( point ) => {
									return (
										<div className="col" key={ point.id }>
											<div className="card rounded-3 p-0 mb-5 shadow-none" data-bs-toggle="modal" data-bs-target={ `#post-${ point.id }` } style={ { border: showBorders ? '4px dashed rgba(255, 255, 255, 0.5)' : 'none' } }>
												{ point.image &&
												<img src={ point.image.source_url } alt="" className="card-img rounded-3" height="160" />
												}
												<div className="d-flex justify-content-center">
													<div className="fs-5">
														{ point.title.rendered }
													</div>
												</div>
											</div>
										</div>
									);
								} )
								: <p>Loading</p>
						}
					</div>
				</section>
			</Fragment>
		);
	},
} );
