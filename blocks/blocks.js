import './trust';
import './trust-item';
import './description-list';
import './description-list-item';
import './page-header';
import './page-section';
import './payment-points';
import './recent-posts';
import './card';
import './bio-card';
import classnames from 'classnames';

const { useSelect } = wp.data;
const { registerBlockStyle } = wp.blocks;
const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;
const {
	InspectorAdvancedControls,
	ColorPalette,
	getColorObjectByColorValue,
} = wp.blockEditor;
const { PanelRow, ToggleControl } = wp.components;
const lodash = lodash;

registerBlockStyle( 'core/button', {
	name: 'link-button',
	label: 'Link Button',
} );

registerBlockStyle( 'core/button', {
	name: 'primary-button',
	label: 'Primary Button',
} );

registerBlockStyle( 'core/button', {
	name: 'fat-button',
	label: 'Card Button',
	attributes: {
		textColor: '#222222',
	},
} );

function addDescriptionListAttributes( settings, name ) {
	if ( name === 'core/list' ) {
		const { attributes } = settings;
		const descriptionListAttributes = {
			hasDescriptionListMarker: {
				type: 'boolean',
				default: false,
			},
			markerColor: {
				type: 'string',
				default: 'orange',
			},
			isGrid: {
				type: 'boolean',
				default: false,
			},
		};
		return {
			...settings,
			attributes: {
				...attributes,
				...descriptionListAttributes,
			},
		};
	}
	return settings;
}

addFilter( 'blocks.registerBlockType', 'paymob/add-description-list-atttributes', addDescriptionListAttributes );

const listWithDescriptionListControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const {
			colorPalette,
		} = useSelect( ( select ) => {
			const editorSettings = select( 'core/block-editor' ).getSettings();
			return {
				colorPalette: editorSettings.colors,
			};
		} );
		const { hasDescriptionListMarker, isGrid } = props.attributes;
		const { setAttributes } = props;
		return (
			<>
				<BlockEdit { ...props } />
				{ props.name === 'core/list' &&
					<InspectorAdvancedControls>
						<PanelRow>
							<div>
								<ToggleControl label="Display as grid" checked={ isGrid } onChange={ ( val ) => setAttributes( { isGrid: val } ) } />
							</div>
						</PanelRow>
						<PanelRow>
							<div>
								<ToggleControl label="Use description list markers" checked={ hasDescriptionListMarker } onChange={ ( val ) => setAttributes( { hasDescriptionListMarker: val } ) } />
							</div>
						</PanelRow>
						{
							hasDescriptionListMarker &&
							<PanelRow>
								<div>
									<p>Marker Color</p>
									<ColorPalette disableCustomColors={ true } colors={ colorPalette } onChange={ ( val ) => setAttributes( { markerColor: getColorObjectByColorValue( colorPalette, val ).slug } ) } />
								</div>
							</PanelRow>
						}
					</InspectorAdvancedControls>
				}
			</>
		);
	};
} );

addFilter(
	'editor.BlockEdit',
	'paymob/list-with-description-list-controls',
	listWithDescriptionListControls,
);

const addListDescriptionListAttributes = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		const { attributes } = props;
		const { hasDescriptionListMarker, markerColor, isGrid } = attributes;

		const listClasses = classnames( {
			'description-list': hasDescriptionListMarker,
			[ `${ markerColor }-markers` ]: hasDescriptionListMarker,
			'row row-cols-md-3 g-3': isGrid,
		} );

		return <BlockListBlock { ...props } className={ listClasses } />;
	};
} );

addFilter(
	'editor.BlockListBlock',
	'paymob/add-description-list-attributes',
	addListDescriptionListAttributes,
);

function addListClasses( props, blockType, attributes ) {
	if ( blockType.name === 'core/list' ) {
		const { hasDescriptionListMarker, markerColor, isGrid } = attributes;
		const { className } = props;
		const listClasses = classnames( {
			'description-list': hasDescriptionListMarker,
			[ `${ markerColor }-markers` ]: hasDescriptionListMarker,
			'row row-cols-md-3': isGrid,
		}, className );

		return Object.assign( {}, props, { className: listClasses } );
	}
	return props;
}

wp.hooks.addFilter(
	'blocks.getSaveContent.extraProps',
	'paymob/add-list-classes',
	addListClasses,
);
