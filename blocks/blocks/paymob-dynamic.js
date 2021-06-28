const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;
const { InnerBlocks, useBlockProps } = wp.blockEditor;

registerBlockType( 'paymob/paymob-dynamic', {
	apiVersion: 2,
	title: 'Dynamic',
	icon: 'megaphone',
	category: 'widgets',

	edit: withSelect( ( select ) => {
		return {
			posts: select( 'core' ).getEntityRecords( 'postType', 'post' ),
		};
	} )( ( { posts } ) => {
		const blockProps = useBlockProps();

		return (
			<div { ...blockProps }>
				{ ! posts && 'Loading' }
				{ posts && posts.length === 0 && 'No Posts' }
				{ posts && posts.length > 0 && (
					<a href={ posts[ 0 ].link }>
						{ posts[ 0 ].title.rendered }
					</a>
				) }
				<InnerBlocks />
			</div>
		);
	} ),
	save: () => {
		return (
			<InnerBlocks.Content />
		);
	},
} );
