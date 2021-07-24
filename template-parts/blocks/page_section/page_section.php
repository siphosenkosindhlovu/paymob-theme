<?php

/**
 * Page Section Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

 // Create id attribute allowing for custom "anchor" value.
$id = 'page_section-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'page-section';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

$bg_colour = get_field('background_colour');
 $style = '';
if (!empty($bg_colour)) {
    $style.= 'background-color: ' . $bg_colour . ';';
}

$width = get_field('width');
$innerClassNames = '';
if(!empty($width) && $width === '75') {
    $innerClassNames .= ' w-lg-75';
}

?>
<section  id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>" <?php echo 'style="' . $style . '"';?>>
    <div class="container<?php echo ' ' . esc_attr($innerClassNames);?>">
        <InnerBlocks/>
    </div>
</section>