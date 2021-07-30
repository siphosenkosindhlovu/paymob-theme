import classnames from 'classnames';
import metadata from './block.json';
const { registerBlockType } = wp.blocks;
const {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
	BlockControls,
} = wp.blockEditor;
const { useSelect } = wp.data;
// const { Fragment } = wp.element;
const {
	PanelBody,
	PanelRow,
	ToggleControl,
	ToolbarButton,
	ToolbarGroup,
} = wp.components;
const { date } = wp.date;
const { get } = lodash;
const { name, ...rest } = metadata;
registerBlockType( name, {
	...rest,
	edit: function Edit( { attributes, setAttributes } ) {
		const { postsToShow, displayFeaturedImage, showAsList } = attributes;
		const { latestPosts } = useSelect( ( select ) => {
			const { getEntityRecords, getEntityRecord, getMedia } = select(
				'core',
			);
			const postsQuery = {
				per_page: postsToShow,
			};
			const posts = getEntityRecords( 'postType', 'post', postsQuery );
			return {
				latestPosts: ! Array.isArray( posts )
					? posts
					: posts.map( ( post ) => {
						const cats = post.categories.map( ( category ) => {
							const categoryObj = getEntityRecord(
								'taxonomy',
								'category',
								category,
							);
							const catName = get(
								categoryObj,
								[ 'name' ],
								null,
							);
							return catName;
						} );
						return {
							...post,
							featured_image: getMedia( post.featured_media ),
							categories: cats,
						};
					} ),
			};
			// return { pageTitle: currentPost.title, currentPost, featuredImageTitle: featuredImageObj.title.rendered, featuredImageUrl: featuredImageObj };
		} );

		const containerClasses = classnames(
			{ 'row row-cols-md-2 row-cols-lg-3': ! showAsList },
			{ 'd-flex flex-column': showAsList },
		);

		const latestPostsGrid = latestPosts.map( ( post ) => (
			<div className="mb-4" key={ post.id }>
				<article className="card h-100">
					{ displayFeaturedImage && (
						<div className="ratio ratio-16x9">
							<img
								className="card-img-top ratio ratio-16x9"
								src={ post.featured_image?.source_url }
							/>
						</div>
					) }
					<div className="card-body d-flex flex-column">
						<h3 className="article-title fs-4">
							<span className="stretched-link fw-normal text-blue">
								{ post.title.raw }
							</span>
						</h3>
						<div className="card-text mt-auto">
							<div className="fs-sm">
								<div>
									{ Array.isArray( post.categories )
										? post.categories.join( ', ' )
										: post.categories }
								</div>
								<div className="text-accent">
									{ date( 'F j, Y', post.date ) }
								</div>
							</div>
						</div>
					</div>
				</article>
			</div>
		) );

		const blockProps = useBlockProps( {} );
		return (
			<div { ...blockProps }>
				<InspectorControls>
					<PanelBody title="Featured Image">
						<PanelRow>
							<ToggleControl
								checked={ displayFeaturedImage }
								label="Show Featured Image"
								onChange={ ( val ) => {
									setAttributes( {
										displayFeaturedImage: val,
									} );
								} }
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				<BlockControls>
					<ToolbarGroup>
						<ToolbarButton
							icon="list-view"
							isActive={ showAsList }
							title={ 'List View' }
							onClick={ () => {
								setAttributes( { showAsList: true } );
							} }
						/>
						<ToolbarButton
							icon="grid-view"
							isActive={ ! showAsList }
							title={ 'Grid View' }
							onClick={ () => {
								setAttributes( { showAsList: false } );
							} }
						/>
					</ToolbarGroup>
				</BlockControls>
				<div className={ containerClasses }>
					{ ! latestPosts ? <p>Loading</p> : latestPostsGrid }
				</div>
			</div>
		);
	},
	save: () => {
		return <InnerBlocks.Content />;
	},
} );
