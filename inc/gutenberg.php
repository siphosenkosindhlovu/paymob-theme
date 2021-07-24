<?php

function paymob_gutenberg_block_patterns()
{

  $heading_group_content = '
      <!-- wp:heading {"textAlign":"right","placeholder":"Type the small heading text","style":{"typography":{"fontSize":18}},"textColor":"orange"} -->
        <h2 class="has-text-align-right has-orange-color has-text-color" style="font-size:18px"></h2>
      <!-- /wp:heading -->
  
      <!-- wp:heading {"textAlign":"right","level":3,"fontSize":34,"placeholder":"Type the heading text"} -->
        <h3 class="has-text-align-right has-34-font-size"></h3>
      <!-- /wp:heading -->
  
      <!-- wp:paragraph {"align":"right","placeholder":"Enter paragraph text"} -->
        <p class="has-text-align-right"></p>
      <!-- /wp:paragraph -->
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
  wp_register_script(
    'paymob-blocks-js', 
    get_template_directory_uri() . '/dist/js/blocks.js', 
    array(
      'wp-blocks', 
      'wp-block-library', 
      'wp-editor', 
      'wp-components', 
      'wp-element', 
      'wp-hooks', 
      'wp-compose',
      'wp-server-side-render', 
      'lodash', 
      'wp-date'));
  wp_register_style('paymob-blocks-css', array(), array('paymob-main','wp-components', 'wp-edit-blocks'));
  wp_enqueue_style('paymob-blocks-css');
  wp_enqueue_script('paymob-blocks-js');

  require get_template_directory() . '/blocks/index.php';
}

add_action('init', 'paymob_gutenberg_blocks');

function array_2d_to_1d($array = null)
{
  $result = array();

  if (!is_array($array)) {
    $array = func_get_args();
  }

  foreach ($array as $key => $value) {
    $result[] = $value;
  }

  return $result;
}

function paymob_register_template()
{
  $postypes_to_exclude = ['acf-field-group', 'acf-field', 'wpcf7_contact_form', 'case_studies', 'steps', 'faqs'];
  $post_types_to_add = 'page';
  $post_types = array_2d_to_1d(array_diff(get_post_types(["_builtin" => false], 'names'), $postypes_to_exclude));
  array_push($post_types, $post_types_to_add);
  foreach ($post_types as $post_type) {
    $post_type_object = get_post_type_object($post_type);
    $post_type_object->template = array(
      array('paymob/page-header'),
    );
  }
}
add_action('init', 'paymob_register_template');
