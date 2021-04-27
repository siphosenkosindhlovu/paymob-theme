<?php

/**
 * Layout: Media Showcase
 * 
 * @property string $heading
 * @property string $image
 * @property mixed $content
 * @property array $call_to_action
 * @property mixed $name
 * 
 * 
 */

$heading = get_sub_field('heading');
$columns = get_sub_field('columns');
$colours = get_sub_field('colours');
$bg_colour = $colours['bg-colour'];
$heading_colour = $colours['heading_colour'];
$text_colour = $colours['text_colour'];
?>
<div class="page-section bg-<?php echo esc_attr($bg_colour) ?>">
    <?php if ($heading) : ?>
        <h2 class="text-<?php echo esc_attr($heading_colour); ?>"><?php echo $heading; ?></h2>
    <?php endif; ?>

    <div class="container">
        <div class="row">
            <?php foreach ($columns as $column) : ?>
                <div class="col-md">
                    <?php echo $col; ?>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>