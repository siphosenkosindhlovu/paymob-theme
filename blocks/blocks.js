import './trust';
import './trust-item';
import './description-list';
import './description-list-item';
import './page-header';
import './page-section';
import './payment-points';

const { registerBlockStyle } = wp.blocks;

registerBlockStyle( 'core/button', {
	name: 'link-button',
	label: 'Link Button',
} );

