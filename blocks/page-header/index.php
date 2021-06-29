<?php
function paymob_page_header_render_callback($block_attributes, $content)
{
  global $post;

  $display_featured_image = $block_attributes['displayFeaturedImage'];
  $has_featured_image = null !== get_the_post_thumbnail_url($post);
  $align = $block_attributes['align'];
  $classnames = array('page-banner', 'container', "text-{$align}");
  $heading_classnames = [];
  $heading_classnames[] = $display_featured_image ? 'col-lg-6' : 'col-lg-12';
  $heading_classnames[] = 'align-self-stretch py-lg-22';
  $heading_classnames[] = 'py-lg-22';
  if (isset($display_featured_image) && true == $display_featured_image && $has_featured_image) {
    $classnames[] = 'justify-content-between';
  }

  $classnames = implode(" ", $classnames);
  $out = '';

  ob_start();
?>
  <div class="<?php echo $classnames ?>">
    <div class="row flex-column flex-lg-row align-items-lg-center">
      <div class="<?php echo implode(' ', $heading_classnames) ?> pt-lg-22">
        <h1>
          <?php echo get_the_title($post) ?>
        </h1>
        <?php echo $content; ?>
      </div>
      <?php if ($display_featured_image) : ?>
        <div class="col-lg-6">
          <?php if ($has_featured_image) : ?>
            <?php paymob_post_thumbnail(); ?>
          <?php endif ?>
        </div>
      <?php endif; ?>
    </div>
  </div>
<?php

  $out .= ob_get_contents();
  ob_end_clean();

  return $out;
}

register_block_type_from_metadata(
  __DIR__,
  array(
    'render_callback' => 'paymob_page_header_render_callback'
  )
);
