import './trust';
import './trust-item';
import './description-list';
import './description-list-item';
import './page-header';
import './page-section';
import './payment-points';
import './recent-posts';

const { registerBlockStyle } = wp.blocks;

registerBlockStyle( 'core/button', {
	name: 'link-button',
	label: 'Link Button',
} );

registerBlockStyle( 'core/button', {
	name: 'primary-button',
	label: 'Primary Button',
} );

