<?php

/**
 * Paymob functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Paymob
 */

if (!defined('PAYMOB_VERSION')) {
	// Replace the version number of the theme on each release.
	define('PAYMOB_VERSION', '1.0.0');
}

if (!function_exists('paymob_setup')) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function paymob_setup()
	{
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Paymob, use a find and replace
		 * to change 'paymob' to the name of your theme in all the template files.
		 */
		load_theme_textdomain('paymob', get_template_directory() . '/languages');

		// Add default posts and comments RSS feed links to head.
		add_theme_support('automatic-feed-links');

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support('title-tag');

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support('post-thumbnails');
		add_image_size('post-thumb-small', 380, 246, true);
		register_nav_menus(
			array(
				'top-menu' => esc_html__('Top Menu', 'paymob'),
				'mid-menu' => esc_html__('Mid Menu', 'paymob'),
				'sub-menu' => esc_html__('Sub Menu', 'paymob'),
				'social' => esc_html__('Social Menu', 'paymob'),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'paymob_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support('customize-selective-refresh-widgets');

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 44,
				'width'       => 133,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);

		/**
		 * Register Custom Navigation Walker
		 */

		require_once get_template_directory() . '/inc/class-wp-bootstrap-navwalker.php';
	}
endif;


add_action('after_setup_theme', 'paymob_setup');

function payment_steps_register_post_type()
{
	// $args = [
	// 	'label'  => esc_html__( 'Payment Steps', 'text-domain' ),
	// 	'labels' => [
	// 		'menu_name'          => esc_html__( 'Payment Steps', 'paymob' ),
	// 		'name_admin_bar'     => esc_html__( 'Payment Step', 'paymob' ),
	// 		'add_new'            => esc_html__( 'Add Payment Step', 'paymob' ),
	// 		'add_new_item'       => esc_html__( 'Add new Payment Step', 'paymob' ),
	// 		'new_item'           => esc_html__( 'New Payment Step', 'paymob' ),
	// 		'edit_item'          => esc_html__( 'Edit Payment Step', 'paymob' ),
	// 		'view_item'          => esc_html__( 'View Payment Step', 'paymob' ),
	// 		'update_item'        => esc_html__( 'View Payment Step', 'paymob' ),
	// 		'all_items'          => esc_html__( 'All Payment Steps', 'paymob' ),
	// 		'search_items'       => esc_html__( 'Search Payment Steps', 'paymob' ),
	// 		'parent_item_colon'  => esc_html__( 'Parent Payment Step', 'paymob' ),
	// 		'not_found'          => esc_html__( 'No Payment Steps found', 'paymob' ),
	// 		'not_found_in_trash' => esc_html__( 'No Payment Steps found in Trash', 'paymob' ),
	// 		'name'               => esc_html__( 'Payment Steps', 'paymob' ),
	// 		'singular_name'      => esc_html__( 'Payment Step', 'paymob' ),
	// 	],
	// 	'public'              => false,
	// 	'exclude_from_search' => true,
	// 	'publicly_queryable'  => false,
	// 	'show_ui'             => true,
	// 	'show_in_nav_menus'   => false,
	// 	'show_in_admin_bar'   => true,
	// 	'show_in_rest'        => true,
	// 	'capability_type'     => 'custom',
	// 	'hierarchical'        => false,
	// 	'has_archive'         => true,
	// 	'query_var'           => false,
	// 	'can_export'          => false,
	// 	'rewrite_no_front'    => false,
	// 	'supports' => [
	// 		'title',
	// 		'editor',
	// 		'thumbnail',
	// 	],

	// 	'rewrite' => true
	// ];

	// register_post_type( 'payment-step', $args );

	$labels = array(
		'name'               => _x('Payment Steps', 'post type general name'),
		'singular_name'      => _x('Payment Step', 'post type singular name'),
		'add_new'            => _x('Add New', 'book'),
		'add_new_item'       => __('Add New Step'),
		'edit_item'          => __('Edit Step'),
		'new_item'           => __('New Step'),
		'all_items'          => __('All Steps'),
		'view_item'          => __('View Step'),
		'search_items'       => __('Search Steps'),
		'not_found'          => __('No Steps found'),
		'not_found_in_trash' => __('No Steps found in the Trash'),
		'menu_name'          => 'Steps'
	);
	$args = array(
		'labels'        => $labels,
		'description'   => 'Holds our products and product specific data',
		'public'        => true,
		'menu_position' => 5,
		'supports'      => array('title', 'editor', 'thumbnail'),
		'has_archive'   => false,
		'publicly_queryable'  => false,
		'show_in_menu' => 'edit.php?post_type=page'
	);
	register_post_type('steps', $args);

	register_post_type('payment_points', array(
		'labels' => array(
			'name'               => _x('Payment Points', 'post type general name'),
			'singular_name'      => _x('Payment Point', 'post type singular name'),
			'add_new'            => _x('Add New', 'book'),
			'add_new_item'       => __('Add New Points'),
			'edit_item'          => __('Edit Points'),
			'new_item'           => __('New Points'),
			'all_items'          => __('All Points'),
			'view_item'          => __('View Points'),
			'search_items'       => __('Search Points'),
			'not_found'          => __('No Steps found'),
			'not_found_in_trash' => __('No Steps found in the Trash'),
			'menu_name'          => 'Payment Points'
		),
		'public' => true,
		'has_archive'   => false,
		'publicly_queryable'  => false,
		'exclude_from_search' => true,
		'supports'      => array('title', 'editor', 'thumbnail'),
		'show_in_menu' => 'edit.php?post_type=page'
	));

	register_post_type('faqs', array(
		'labels' => array(
			'name'               => _x('FAQs', 'post type general name'),
			'singular_name'      => _x('FAQ', 'post type singular name'),
			'add_new'            => _x('Add New', 'book'),
			'add_new_item'       => __('Add New FAQ'),
			'edit_item'          => __('Edit FAQ'),
			'new_item'           => __('New FAQ'),
			'all_items'          => __('All FAQs'),
			'view_item'          => __('View FAQ'),
			'search_items'       => __('Search FAQs'),
			'not_found'          => __('No FAQs found'),
			'not_found_in_trash' => __('No FAQs found in the Trash'),
			'menu_name'          => 'FAQs'
		),
		'public' => true,
		'supports'      => array('title', 'editor'),
		'has_archive'   => false,
		'publicly_queryable'  => false,
		'exclude_from_search' => true,
		'show_in_menu' => 'edit.php?post_type=page'
	));

	register_post_type('industry_sectors', array(
		'labels' => array(
			'name'               => _x('Industry Sectors', 'post type general name'),
			'singular_name'      => _x('Industry Sector', 'post type singular name'),
			'add_new'            => _x('Add New', 'book'),
			'add_new_item'       => __('Add New Industry Sector'),
			'edit_item'          => __('Edit Industry Sector'),
			'new_item'           => __('New Industry Sector'),
			'all_items'          => __('All Industry Sectors'),
			'view_item'          => __('View Industry Sector'),
			'search_items'       => __('Search Industry Sectors'),
			'not_found'          => __('No Industry Sectors found'),
			'not_found_in_trash' => __('No Industry Sectors found in the Trash'),
			'menu_name'          => 'Industry Sectors'
		),
		'public' => true,
		'supports'      => array('title', 'editor', 'thumbnail'),
		'has_archive'   => false,
		'publicly_queryable'  => true,
		'show_in_menu' => 'edit.php?post_type=page',
		'show_in_rest' => true,
		'rewrite' => array(
			'slug' => 'business',
			'with_front' => 'true'
		)
	));
	// register_post_type('case_studies', array(
	// 	'labels' => array(
	// 		'name'               => _x('Paymob Case Studies', 'post type general name'),
	// 		'singular_name'      => _x('Case Study', 'post type singular name'),
	// 		'add_new'            => _x('Add New', 'book'),
	// 		'add_new_item'       => __('Add Case Study'),
	// 		'edit_item'          => __('Edit Case Study'),
	// 		'new_item'           => __('New Case Study'),
	// 		'all_items'          => __('All Case Studies'),
	// 		'view_item'          => __('View Case Study'),
	// 		'search_items'       => __('Search Case Studies'),
	// 		'not_found'          => __('No Case Studies found'),
	// 		'not_found_in_trash' => __('No Case Studies found in the Trash'),
	// 		'menu_name'          => 'Case Studies'
	// 	),
	// 	'public' => true,
	// 	'supports'      => array('title', 'editor'),
	// 	'has_archive'   => true,
	// 	'publicly_queryable'  => true,
	// 	'show_in_menu' => 'edit.php?post_type=page',
	// 	'show_in_nav_menus' => true
	// ));

}

add_action('init', 'payment_steps_register_post_type');

function paymob_register_block_patterns()
{

	if (class_exists('WP_Block_Patterns_Registry')) {

		register_block_pattern(
			'paymob/text-aside-image-right',
			array(
				'title'       => __('Image with text', 'textdomain'),
				'description' => _x('A two column layout of image next to text.', 'Block pattern description', 'textdomain'),
				'content'     => "<!-- wp:wp-bootstrap-blocks/row -->\n<!-- wp:wp-bootstrap-blocks/column {\"sizeMd\":6} -->\n<!-- wp:heading -->\n<h2></h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"className\":\"text-accent fs-md\"} -->\n<p class=\"text-accent fs-md\"></p>\n<!-- /wp:paragraph -->\n<!-- /wp:wp-bootstrap-blocks/column -->\n\n<!-- wp:wp-bootstrap-blocks/column {\"sizeMd\":6} -->\n<!-- wp:image -->\n<figure class=\"wp-block-image\"><img alt=\"\"/></figure>\n<!-- /wp:image -->\n<!-- /wp:wp-bootstrap-blocks/column -->\n<!-- /wp:wp-bootstrap-blocks/row -->",
				'categories'  => array('hero'),
			)
		);
		register_block_pattern(
			'paymob/text-aside-image-left-navy',
			array(
				'title'       => __('Image with text Left', 'textdomain'),
				'description' => _x('A two column layout of image next to text.', 'Block pattern description', 'textdomain'),
				'content'     => "<!-- wp:wp-bootstrap-blocks/container {\"isFluid\":true,\"marginAfter\":\"mb-0\",\"className\":\"bg-navy page-section\"} -->\n<!-- wp:wp-bootstrap-blocks/container -->\n<!-- wp:wp-bootstrap-blocks/row -->\n<!-- wp:wp-bootstrap-blocks/column {\"sizeMd\":6} -->\n\n<!-- /wp:wp-bootstrap-blocks/column -->\n\n<!-- wp:wp-bootstrap-blocks/column {\"sizeMd\":6} -->\n<!-- wp:heading {\"className\":\"text-accent\"} -->\n<h2 class=\"text-accent\"></h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"className\":\"text-white\"} -->\n<p class=\"text-white\">\n<!-- /wp:paragraph -->\n\n<!-- wp:wp-bootstrap-blocks/button {\"text\":\"Get started now\",\"className\":\"btn-accent\"} /-->\n<!-- /wp:wp-bootstrap-blocks/column -->\n<!-- /wp:wp-bootstrap-blocks/row -->\n<!-- /wp:wp-bootstrap-blocks/container -->\n<!-- /wp:wp-bootstrap-blocks/container -->",
				'categories'  => array('hero'),
			)
		);
		register_block_pattern(
			'paymob/media',
			array(
				'title'       => __('Media', 'textdomain'),
				'description' => _x('A two column layout of image next to text.', 'Block pattern description', 'textdomain'),
				'content'     => "<!-- wp:wp-bootstrap-blocks/container {\"isFluid\":true,\"marginAfter\":\"mb-0\",\"className\":\"bg-navy page-section\"} -->\n<!-- wp:wp-bootstrap-blocks/container -->\n<!-- wp:wp-bootstrap-blocks/row -->\n<!-- wp:wp-bootstrap-blocks/column {\"sizeMd\":6} -->\n\n<!-- /wp:wp-bootstrap-blocks/column -->\n\n<!-- wp:wp-bootstrap-blocks/column {\"sizeMd\":6} -->\n<!-- wp:heading {\"className\":\"text-accent\"} -->\n<h2 class=\"text-accent\"></h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"className\":\"text-white\"} -->\n<p class=\"text-white\">\n<!-- /wp:paragraph -->\n\n<!-- wp:wp-bootstrap-blocks/button {\"text\":\"Get started now\",\"className\":\"btn-accent\"} /-->\n<!-- /wp:wp-bootstrap-blocks/column -->\n<!-- /wp:wp-bootstrap-blocks/row -->\n<!-- /wp:wp-bootstrap-blocks/container -->\n<!-- /wp:wp-bootstrap-blocks/container -->",
				'categories'  => array('hero'),
			)
		);
	}
}
add_action('init', 'paymob_register_block_patterns');


/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function paymob_content_width()
{
	$GLOBALS['content_width'] = apply_filters('paymob_content_width', 640);
}
add_action('after_setup_theme', 'paymob_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function paymob_widgets_init()
{
	register_sidebar(
		array(
			'name'          => esc_html__('Footer', 'paymob'),
			'id'            => 'footer',
			'description'   => esc_html__('Add widgets here.', 'paymob'),
			'before_widget' => '<section id="%1$s" class="footer-widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="footer-widget-header">',
			'after_title'   => '</h2>',
		)
	);
}
add_action('widgets_init', 'paymob_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function paymob_scripts()
{
	wp_enqueue_style('paymob-style', get_stylesheet_uri(), array(), PAYMOB_VERSION);
	wp_enqueue_style('paymob-main', get_template_directory_uri() . '/dist/css/style.css', array(), PAYMOB_VERSION);
	wp_style_add_data('paymob-style', 'rtl', 'replace');

	wp_enqueue_script('paymob-navigation', get_template_directory_uri() . '/js/navigation.js', array(), PAYMOB_VERSION, true);
	wp_enqueue_script('paymob-main', get_template_directory_uri() . '/dist/js/bundle.js', array(), PAYMOB_VERSION, true);

	if (is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}
}
add_action('wp_enqueue_scripts', 'paymob_scripts');

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Load WooCommerce compatibility file.
 */
if (class_exists('WooCommerce')) {
	require get_template_directory() . '/inc/woocommerce.php';
}

// add_filter( 'pre_wp_nav_menu', 'smyles_dump_nav_menu_args', 9999, 2 );

// function smyles_dump_nav_menu_args( $null, $args ){
//     ob_start();

//     echo '<pre>';
//     var_dump($args);
//     echo '</pre>';

//     $content = ob_get_contents();
//     ob_end_clean();
//     return $content;
// }

/**
 * Add classnames to link items
 */
add_filter('nav_menu_link_attributes', 'paymob_navlink_add_classnames', 10, 3);

function paymob_navlink_add_classnames($atts, $item, $args)
{
	if (isset($args->add_link_class)) {
		$atts['class'] = $args->add_link_class;
	}
	return $atts;
}


/**
 * Font Awesome CDN Setup Webfont
 * 
 * This will load Font Awesome from the Font Awesome Free or Pro CDN.
 */
if (!function_exists('fa_custom_setup_cdn_webfont')) {
	function fa_custom_setup_cdn_webfont($cdn_url = '', $integrity = null)
	{
		$matches = [];
		$match_result = preg_match('|/([^/]+?)\.css$|', $cdn_url, $matches);
		$resource_handle_uniqueness = ($match_result === 1) ? $matches[1] : md5($cdn_url);
		$resource_handle = "font-awesome-cdn-webfont-$resource_handle_uniqueness";

		foreach (['wp_enqueue_scripts', 'admin_enqueue_scripts', 'login_enqueue_scripts'] as $action) {
			add_action(
				$action,
				function () use ($cdn_url, $resource_handle) {
					wp_enqueue_style($resource_handle, $cdn_url, [], null);
				}
			);
		}

		if ($integrity) {
			add_filter(
				'style_loader_tag',
				function ($html, $handle) use ($resource_handle, $integrity) {
					if (in_array($handle, [$resource_handle], true)) {
						return preg_replace(
							'/\/>$/',
							'integrity="' . $integrity .
								'" crossorigin="anonymous" />',
							$html,
							1
						);
					} else {
						return $html;
					}
				},
				10,
				2
			);
		}
	}
}

fa_custom_setup_cdn_webfont(
	'https://use.fontawesome.com/releases/v5.15.3/css/all.css',
	'sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk'
);

add_action('acf/init', 'paymob_acf_blocks_init');
function paymob_acf_blocks_init()
{

	// Check function exists.
	if (function_exists('acf_register_block_type')) {

		// Register a testimonial block.
		acf_register_block_type(array(
			'name'              => 'page_section',
			'title'             => __('Page Section'),
			'description'       => __('A custom page section block.'),
			'render_template'   => 'template-parts/blocks/page_section/page_section.php',
			'category'          => 'layout',
			'supports'					=> array(
				'jsx' => true
			)
		));
		acf_register_block_type(array(
			'name'              => 'media',
			'title'             => __('Media Component'),
			'description'       => __('A flexbox media element with text and an image'),
			'render_template'   => 'template-parts/blocks/media/media.php',
			'category'          => 'layout',
			'supports'					=> array(
				'jsx' => true
			)
		));
	}
}


function add_current_nav_class($classes, $item) {

	// Getting the current post details
	global $post;

	// Get post ID, if nothing found set to NULL
	$id = ( isset( $post->ID ) ? get_the_ID() : NULL );

	// Checking if post ID exist...
	if (isset( $id )){

			// Getting the post type of the current post
			$current_post_type = get_post_type_object(get_post_type($post->ID));

			// Getting the rewrite slug containing the post type's ancestors
			$ancestor_slug = $current_post_type->rewrite ? $current_post_type->rewrite['slug'] : '';

			// Split the slug into an array of ancestors and then slice off the direct parent.
			$ancestors = explode('/',$ancestor_slug);
			$parent = array_pop($ancestors);

			// Getting the URL of the menu item
			$menu_slug = strtolower(trim($item->url));

			// Remove domain from menu slug
			$menu_slug = str_replace($_SERVER['SERVER_NAME'], "", $menu_slug);

			// If the menu item URL contains the post type's parent
			if (!empty($menu_slug) && !empty($parent) && strpos($menu_slug,$parent) !== false) {
					$classes[] = 'current-menu-item';
			}

			// If the menu item URL contains any of the post type's ancestors
			foreach ( $ancestors as $ancestor ) {
					if (!empty($menu_slug) && !empty($ancestor) && strpos($menu_slug,$ancestor) !== false) {
							$classes[] = 'current-page-ancestor';
					}
			}
	}
	// Return the corrected set of classes to be added to the menu item
	return $classes;

}
add_action('nav_menu_css_class', 'add_current_nav_class', 10, 2 );