import classnames from 'classnames';

const { registerBlockType } = wp.blocks;
const { __experimentalUnitControl: UnitControl, __experimentalUseInnerBlocksProps: useInnerBlocksProps, InnerBlocks, useBlockProps, InspectorControls } = wp.blockEditor;
const { RangeControl, Panel, PanelBody, PanelRow } = wp.components;

registerBlockType( 'paymob/card', {
	title: 'Card',
	descrption: 'Card element with rounded corners and a shadow',
	icon: 'ungroup',
	category: 'layout',
	//Custom attributes
	attributes: {
		borderRadius: {
			type: 'string',
			default: '1.25rem',
		},
		boxShadow: {
			type: 'string',
		},
		padding: {
			type: 'object',
		},
	},
	edit: function Edit( { attributes, setAttributes } ) {
		const { borderRadius } = attributes;
		const cardClassNames = classnames( 'card' );
		const cardBodyClassNames = classnames( 'card-body' );
		const blockProps = useBlockProps( {
			className: cardClassNames,
		} );

		return (
			<>
				<InspectorControls>
					<PanelBody title="Card Settings">
						<PanelRow>
							<RangeControl label="Border Radius" min={ 0 } max={ 99 } onChange={ ( val ) => setAttributes( { borderRadius: val } ) } />
							<UnitControl value={ borderRadius } onChange={ ( val ) => console.log( val ) } />
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				<div { ...blockProps } style={ { borderRadius } }>
					<div className={ cardBodyClassNames }>
						<InnerBlocks />
					</div>
				</div>
			</>
		);
	},
	save( { attributes } ) {
		const { borderRadius, padding, boxShadow } = attributes;
		const blockProps = useBlockProps.save( { className: 'card', style: { borderRadius } } );
		return (
			<div { ...blockProps }>
				<div className="card-body">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
} );
