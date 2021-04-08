<?php

/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Paymob
 */

get_header();
?>

<main id="primary" class="site-main">

  <?php
  while (have_posts()) :
    the_post();

    get_template_part('template-parts/content', 'page');

  endwhile; // End of the loop.
  wp_reset_query();
  ?>

  <section class="container page-section">
    <h2 class="mb-lg-14 text-start text-lg-center">
      Read our latest news
    </h2>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      <?php
      $args = array(
        'post_type' => 'post',
        'category' => 5,
        'orderby' => 'ID',
        'order' => 'ASC',
        'posts_per_page' => 3,
      );
      $steps = new WP_Query($args);
      if ($steps->have_posts()) :
        while ($steps->have_posts()) :
          $steps->the_post();
      ?>
          <div class="mb-4">
            <article class="card h-100">
              <?php if (get_the_post_thumbnail_url(null, 'full')) : ?>
                <img src="<?php get_the_post_thumbnail_url(); ?>" alt="" class="card-img-top">
              <?php endif; ?>
              <?php the_post_thumbnail(array(380, 246), array('class' => 'card-img-top ratio-16x9')); ?>
              <div class="card-body d-flex flex-column">
                <h3 class="article-title fs-4">
                  <a href="<?php echo get_permalink(); ?>" class="stretched-link">
                    <?php the_title(); ?>
                  </a>
                </h3>
                <div class="card-text mt-auto">
                  <div class="d-flex align-items-center">
                    <?php
                    $author_ID = get_the_author_meta('ID');
                    if (get_avatar_url($author_ID)) :
                    ?>
                      <img src="<?php echo get_avatar_url($author_ID); ?>" class="article-author-thumb-md rounded-circle">
                    <?php
                    endif;
                    ?>
                    <div class="fs-sm ms-4">
                      <div class="fw-bold"><?php the_author(); ?></div>
                      <div class="text-accent">
                        <?php the_date('F j, Y'); ?>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

      <?php
        endwhile;
      else :
        echo 'No posts';
      endif;
      ?>

    </div>
    <div class="pt-5 pt-lg-14 text-center">
      <a href="#" class="btn btn-accent">view blog</a>
    </div>
  </section>
</main><!-- #main -->

<?php
get_sidebar();
get_footer();
