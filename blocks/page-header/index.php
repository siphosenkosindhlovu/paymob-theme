<?php
function paymob_page_header_render_callback($block_attributes, $content)
{
  global $post;

  $display_featured_image = $block_attributes['displayFeaturedImage'];
  $has_featured_image = null !== get_the_post_thumbnail_url($post);
  $align = $block_attributes['align'];
  $text_align = $align ? ( $align === 'right' ? 'end' : $align ) : 'start';
  $image_align_full = $block_attributes['imageAlignFull'];
  $classnames = array('page-banner', "text-{$align}");
  $classnames[] = $image_align_full ? 'container-fluid' : 'container';
  $heading_classnames = [];
  $heading_classnames[] = $display_featured_image ? 'col-lg-6' : 'col-lg-12';
  $heading_classnames[] = 'align-self-stretch py-lg-22';
  $heading_classnames[] = 'py-lg-22';
  $heading_classnames[] = $text_align;
  $heading_classnames[] = $image_align_full ? 'container-lg-6' : 'col-lg-6';
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
        <h1 class="has-<?php echo $block_attributes['titleColor'] ?>-color" style="font-size: <?php echo $block_attributes['titleFontSize'] . 'px' ?>">
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
