<?php

function paymob_page_header_render_callback( $block_attributes, $content ) {
  global $post;
  $recent_posts = wp_get_recent_posts( array(
      'numberposts' => 1,
      'post_status' => 'publish',
  ) );
  if ( count( $recent_posts ) === 0 ) {
      return 'No posts';
  }
  // $post = $recent_posts[ 0 ];
  // $post_id = $post['ID'];
  $out = "string <InnerBlocks.Content/>";
  $out .= $content;
  return $out;
}

function paymob_gutenberg_block_patterns()
{

  $heading_group_content = '
    <div class="wp-block-paymob-header-group">
      <!-- wp:heading {"textAlign":"right","placeholder":"Type the small heading text","style":{"typography":{"fontSize":18}},"textColor":"orange"} -->
        <h2 class="has-text-align-right has-orange-color has-text-color" style="font-size:18px">'
    .
    __('Enter heading text', 'paymob')
    .
    '</h2>
      <!-- /wp:heading -->
  
      <!-- wp:heading {"textAlign":"right","level":3,"fontSize":34} -->
        <h3 class="has-text-align-right has-34-font-size">'
    .
    __('Enter sub heading text', 'paymob')
    .
    '</h3>
      <!-- /wp:heading -->
  
      <!-- wp:paragraph {"align":"right"} -->
        <p class="has-text-align-right">'
    .
    __('Enter paragraph text', 'paymob')
    .
    '</p>
      <!-- /wp:paragraph -->
    </div>
  ';

  register_block_pattern(
    'paymob/heading-group',
    array(
      'title' => __('Heading Group', 'paymob'),
      'description' => __('Heading block containing a main header, sub header and a paragraph block'),
      'content' => $heading_group_content,
      'category' => array('header')
    )
  );
}


add_action('init', 'paymob_gutenberg_block_patterns');

function paymob_gutenberg_blocks()
{
  wp_register_script('paymob-blocks-js', get_template_directory_uri() . '/dist/js/blocks.js', array('wp-blocks', 'wp-block-library', 'wp-editor', 'wp-components', 'wp-element', 'wp-hooks', 'wp-server-side-render'));
  wp_register_script('paymob-blocks-css', array(), array('wp-components', 'wp-edit-blocks'));
  wp_enqueue_style('paymob-blocks-css');
  wp_enqueue_script('paymob-blocks-js');

  register_block_type('paymob/cta', array(
    'editor-script' => 'paymob-blocks-js'
  ));
  // register_block_type('paymob/heading-group', array(
  //   'editor-script' => 'paymob-blocks-js'
  // ));
  register_block_type('paymob/description-list', array(
    'editor-script' => 'paymob-blocks-js'
  ));
  register_block_type('paymob/description-list-item', array(
    'editor-script' => 'paymob-blocks-js'
  ));
  register_block_type('paymob/trust', array(
    'editor-script' => 'paymob-blocks-js'
  ));
  register_block_type('paymob/trust-item', array(
    'editor-script' => 'paymob-blocks-js'
  ));
  register_block_type('paymob/page-header', array(
    'editor-script' => 'paymob-blocks-js',
    'attributes' => [
      'displayFeaturedImage' => [
        'type' => 'boolean',
        'default' => 'true',
      ],
      'align' => [
        'type' => 'string',
        'default' => 'left',
      ]
    ],
    'render_callback' => 'paymob_page_header_render_callback',
  ));
}

add_action('init', 'paymob_gutenberg_blocks');

