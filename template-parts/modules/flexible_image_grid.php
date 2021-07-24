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
$images = get_sub_field('images');
?>

<div class="page-section bg-<?php echo esc_attr($bg_colour) ?>">

    <div class="container">
    <?php if ($heading) : ?>
        <h2 class="text-<?php echo esc_attr($heading_colour); ?>"><?php echo $heading; ?></h2>
    <?php endif; ?>
        <div class="row row-col-2 row-cols-md-4 row-cols-lg-5 justify-content-center">
            <?php foreach ($images as $image) : ?>
                <div>
                    <img class="img-fluid" src="<?php echo $image['image']['image']; ?>" alt="<?php echo $image['image']['alt']; ?>"/>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>